const express = require('express');
const cors = require('cors');
const { Connection, PublicKey } = require('@solana/web3.js');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
    origin: [
        'https://img-protocol-backend.onrender.com',
        'https://imgdashboardwallet.onrender.com',
        'http://localhost:3000',
        'http://localhost:5173',
        'http://127.0.0.1:3000',
        'http://127.0.0.1:5173'
    ],
    credentials: true
}));
app.use(express.json());

// Solana connection (using public RPC endpoint)
const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');

// IMG token mint address
const IMG_TOKEN_MINT = 'znv3FZt2HFAvzYf5LxzVyryh3mBXWuTRRng25gEZAjh';
const REQUIRED_IMG_AMOUNT = 47500; // 47.5k IMG required

// Database initialization
const dbPath = path.join(__dirname, 'voting.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('❌ Error opening database:', err.message);
    } else {
        console.log('✅ Connected to SQLite database');
        initializeDatabase();
    }
});

// Initialize database tables
function initializeDatabase() {
    // Create polls table
    db.run(`
        CREATE TABLE IF NOT EXISTS polls (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            category TEXT DEFAULT 'Governance',
            status TEXT DEFAULT 'draft',
            start_date DATETIME,
            end_date DATETIME,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            options TEXT DEFAULT '{"yes": 0, "no": 0, "abstain": 0, "total": 0}'
        )
    `, (err) => {
        if (err) {
            console.error('❌ Error creating polls table:', err.message);
        } else {
            console.log('✅ Polls table ready');
        }
    });

    // Create votes table
    db.run(`
        CREATE TABLE IF NOT EXISTS votes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            poll_id INTEGER,
            wallet_address TEXT,
            vote_option TEXT,
            voted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (poll_id) REFERENCES polls (id),
            UNIQUE(poll_id, wallet_address)
        )
    `, (err) => {
        if (err) {
            console.error('❌ Error creating votes table:', err.message);
        } else {
            console.log('✅ Votes table ready');
        }
    });

    // Insert sample polls if they don't exist
    insertSamplePolls();
}

// Insert sample polls for testing
function insertSamplePolls() {
    const samplePolls = [
        {
            title: "Reduce Transaction Fees",
            description: "Proposal to reduce transaction fees from 2.5% to 2.0% to make our platform more competitive in the DeFi space.",
            category: "Governance",
            status: "active",
            start_date: new Date().toISOString(),
            end_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days from now
        },
        {
            title: "Launch New Staking Pool",
            description: "Proposal to launch a new 12-month staking pool with 12% APY for long-term IMG holders.",
            category: "Treasury",
            status: "active",
            start_date: new Date().toISOString(),
            end_date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString() // 5 days from now
        },
        {
            title: "Cross-Chain Integration",
            description: "Proposal to integrate with additional blockchains to enable seamless asset movement across multiple ecosystems.",
            category: "Protocol Changes",
            status: "active",
            start_date: new Date().toISOString(),
            end_date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString() // 10 days from now
        }
    ];

    // Check if polls already exist
    db.get("SELECT COUNT(*) as count FROM polls", (err, row) => {
        if (err) {
            console.error('❌ Error checking polls:', err.message);
            return;
        }

        if (row.count === 0) {
            console.log('📝 Inserting sample polls...');
            samplePolls.forEach(poll => {
                db.run(`
                    INSERT INTO polls (title, description, category, status, start_date, end_date)
                    VALUES (?, ?, ?, ?, ?, ?)
                `, [poll.title, poll.description, poll.category, poll.status, poll.start_date, poll.end_date], (err) => {
                    if (err) {
                        console.error('❌ Error inserting sample poll:', err.message);
                    }
                });
            });
            console.log('✅ Sample polls inserted');
        }
    });
}

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'IMG Protocol Backend is running' });
});

// Check IMG tokens endpoint
app.post('/api/check-img-tokens', async (req, res) => {
    try {
        const { walletAddress } = req.body;
        
        if (!walletAddress) {
            return res.status(400).json({ 
                error: 'Wallet address is required' 
            });
        }

        console.log(`🔍 Checking IMG tokens for wallet: ${walletAddress}`);

        // Validate wallet address format
        let publicKey;
        try {
            publicKey = new PublicKey(walletAddress);
        } catch (error) {
            return res.status(400).json({ 
                error: 'Invalid wallet address format' 
            });
        }

        // Get token accounts for the wallet
        const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
            publicKey,
            { mint: new PublicKey(IMG_TOKEN_MINT) }
        );

        // Calculate total IMG token balance
        let totalBalance = 0;
        let tokenAccountsFound = [];

        tokenAccounts.value.forEach(account => {
            const accountInfo = account.account.data.parsed.info;
            const balance = accountInfo.tokenAmount.uiAmount;
            totalBalance += balance;
            
            if (balance > 0) {
                tokenAccountsFound.push({
                    account: account.pubkey.toString(),
                    balance: balance
                });
            }
        });

        // Check if wallet has sufficient IMG tokens
        const hasEnoughTokens = totalBalance >= REQUIRED_IMG_AMOUNT;
        const isPremium = hasEnoughTokens;

        console.log(`💰 Wallet ${walletAddress}: ${totalBalance.toLocaleString()} IMG tokens`);
        console.log(`🔒 Premium access: ${isPremium ? 'GRANTED' : 'DENIED'}`);

        // Return result
        res.json({
            success: true,
            walletAddress: walletAddress,
            imgTokenBalance: totalBalance,
            hasEnoughTokens: hasEnoughTokens,
            isPremium: isPremium,
            requiredAmount: REQUIRED_IMG_AMOUNT,
            tokenAccounts: tokenAccountsFound,
            message: hasEnoughTokens 
                ? `Premium access granted! You have ${totalBalance.toLocaleString()} IMG tokens`
                : `Premium access denied. You need ${REQUIRED_IMG_AMOUNT.toLocaleString()} IMG tokens, but have ${totalBalance.toLocaleString()}`
        });

    } catch (error) {
        console.error('❌ Error checking IMG tokens:', error);
        res.status(500).json({ 
            error: 'Failed to check IMG tokens',
            message: error.message 
        });
    }
});

// Get IMG token info endpoint
app.get('/api/img-token-info', (req, res) => {
    res.json({
        tokenMint: IMG_TOKEN_MINT,
        requiredAmount: REQUIRED_IMG_AMOUNT,
        description: 'IMG Protocol Token',
        network: 'Solana Mainnet'
    });
});

// ========================================
// VOTING SYSTEM API ENDPOINTS
// ========================================

// Get all polls
app.get('/api/polls', (req, res) => {
    const { status } = req.query;
    let query = 'SELECT * FROM polls';
    let params = [];

    if (status) {
        query += ' WHERE status = ?';
        params.push(status);
    }

    query += ' ORDER BY created_at DESC';

    db.all(query, params, (err, rows) => {
        if (err) {
            console.error('❌ Error fetching polls:', err.message);
            return res.status(500).json({ error: 'Failed to fetch polls' });
        }

        // Parse options JSON for each poll
        const polls = rows.map(poll => ({
            ...poll,
            options: JSON.parse(poll.options)
        }));

        res.json({ success: true, polls });
    });
});

// Get active polls only
app.get('/api/polls/active', (req, res) => {
    const now = new Date().toISOString();
    
    db.all(`
        SELECT * FROM polls 
        WHERE status = 'active' 
        AND start_date <= ? 
        AND end_date > ?
        ORDER BY created_at DESC
    `, [now, now], (err, rows) => {
        if (err) {
            console.error('❌ Error fetching active polls:', err.message);
            return res.status(500).json({ error: 'Failed to fetch active polls' });
        }

        const polls = rows.map(poll => ({
            ...poll,
            options: JSON.parse(poll.options)
        }));

        res.json({ success: true, polls });
    });
});

// Get specific poll
app.get('/api/polls/:id', (req, res) => {
    const { id } = req.params;

    db.get('SELECT * FROM polls WHERE id = ?', [id], (err, row) => {
        if (err) {
            console.error('❌ Error fetching poll:', err.message);
            return res.status(500).json({ error: 'Failed to fetch poll' });
        }

        if (!row) {
            return res.status(404).json({ error: 'Poll not found' });
        }

        const poll = {
            ...row,
            options: JSON.parse(row.options)
        };

        res.json({ success: true, poll });
    });
});

// Create new poll (Admin only - for now, no auth)
app.post('/api/polls', (req, res) => {
    const { title, description, category, start_date, end_date } = req.body;

    if (!title || !end_date) {
        return res.status(400).json({ error: 'Title and end_date are required' });
    }

    const poll = {
        title,
        description: description || '',
        category: category || 'Governance',
        status: 'draft',
        start_date: start_date || new Date().toISOString(),
        end_date,
        options: JSON.stringify({ yes: 0, no: 0, abstain: 0, total: 0 })
    };

    db.run(`
        INSERT INTO polls (title, description, category, status, start_date, end_date, options)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `, [poll.title, poll.description, poll.category, poll.status, poll.start_date, poll.end_date, poll.options], function(err) {
        if (err) {
            console.error('❌ Error creating poll:', err.message);
            return res.status(500).json({ error: 'Failed to create poll' });
        }

        res.json({ 
            success: true, 
            poll: { 
                id: this.lastID, 
                ...poll,
                options: JSON.parse(poll.options)
            } 
        });
    });
});

// Update poll status (Admin only)
app.put('/api/polls/:id/status', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!['draft', 'active', 'ended'].includes(status)) {
        return res.status(400).json({ error: 'Invalid status. Must be draft, active, or ended' });
    }

    db.run('UPDATE polls SET status = ? WHERE id = ?', [status, id], function(err) {
        if (err) {
            console.error('❌ Error updating poll status:', err.message);
            return res.status(500).json({ error: 'Failed to update poll status' });
        }

        if (this.changes === 0) {
            return res.status(404).json({ error: 'Poll not found' });
        }

        res.json({ success: true, message: 'Poll status updated' });
    });
});

// Submit vote
app.post('/api/polls/:id/vote', async (req, res) => {
    const { id } = req.params;
    const { walletAddress, voteOption } = req.body;

    if (!walletAddress || !voteOption) {
        return res.status(400).json({ error: 'Wallet address and vote option are required' });
    }

    if (!['yes', 'no', 'abstain'].includes(voteOption)) {
        return res.status(400).json({ error: 'Invalid vote option. Must be yes, no, or abstain' });
    }

    try {
        // First verify the wallet has enough IMG tokens
        const publicKey = new PublicKey(walletAddress);
        const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
            publicKey,
            { mint: new PublicKey(IMG_TOKEN_MINT) }
        );

        let totalBalance = 0;
        tokenAccounts.value.forEach(account => {
            const accountInfo = account.account.data.parsed.info;
            const balance = accountInfo.tokenAmount.uiAmount;
            totalBalance += balance;
        });

        if (totalBalance < REQUIRED_IMG_AMOUNT) {
            return res.status(403).json({ 
                error: 'Insufficient IMG tokens',
                message: `You need ${REQUIRED_IMG_AMOUNT.toLocaleString()} IMG tokens to vote, but have ${totalBalance.toLocaleString()}`
            });
        }

        // Check if poll exists and is active
        db.get('SELECT * FROM polls WHERE id = ? AND status = "active"', [id], (err, poll) => {
            if (err) {
                console.error('❌ Error checking poll:', err.message);
                return res.status(500).json({ error: 'Failed to check poll status' });
            }

            if (!poll) {
                return res.status(404).json({ error: 'Poll not found or not active' });
            }

            // Check if poll has ended
            const now = new Date();
            const endDate = new Date(poll.end_date);
            if (now > endDate) {
                return res.status(400).json({ error: 'Poll has ended' });
            }

            // Insert vote (will fail if wallet already voted due to UNIQUE constraint)
            db.run(`
                INSERT INTO votes (poll_id, wallet_address, vote_option)
                VALUES (?, ?, ?)
            `, [id, walletAddress, voteOption], function(err) {
                if (err) {
                    if (err.message.includes('UNIQUE constraint failed')) {
                        return res.status(400).json({ error: 'You have already voted on this poll' });
                    }
                    console.error('❌ Error submitting vote:', err.message);
                    return res.status(500).json({ error: 'Failed to submit vote' });
                }

                // Update poll results
                const options = JSON.parse(poll.options);
                options[voteOption]++;
                options.total++;

                db.run('UPDATE polls SET options = ? WHERE id = ?', [JSON.stringify(options), id], (err) => {
                    if (err) {
                        console.error('❌ Error updating poll results:', err.message);
                    }

                    res.json({ 
                        success: true, 
                        message: 'Vote submitted successfully',
                        vote: {
                            pollId: id,
                            walletAddress,
                            voteOption,
                            votedAt: new Date().toISOString()
                        }
                    });
                });
            });
        });

    } catch (error) {
        console.error('❌ Error verifying wallet:', error);
        res.status(500).json({ error: 'Failed to verify wallet' });
    }
});

// Get poll results
app.get('/api/polls/:id/results', (req, res) => {
    const { id } = req.params;

    db.get('SELECT * FROM polls WHERE id = ?', [id], (err, poll) => {
        if (err) {
            console.error('❌ Error fetching poll results:', err.message);
            return res.status(500).json({ error: 'Failed to fetch poll results' });
        }

        if (!poll) {
            return res.status(404).json({ error: 'Poll not found' });
        }

        const results = JSON.parse(poll.options);
        
        // Calculate percentages
        const total = results.total;
        const percentages = {
            yes: total > 0 ? ((results.yes / total) * 100).toFixed(1) : 0,
            no: total > 0 ? ((results.no / total) * 100).toFixed(1) : 0,
            abstain: total > 0 ? ((results.abstain / total) * 100).toFixed(1) : 0
        };

        res.json({ 
            success: true, 
            results: {
                ...results,
                percentages,
                poll: {
                    id: poll.id,
                    title: poll.title,
                    status: poll.status,
                    end_date: poll.end_date
                }
            }
        });
    });
});

// Get votes for a specific poll (for detailed results)
app.get('/api/polls/:id/votes', (req, res) => {
    const { id } = req.params;

    db.all(`
        SELECT wallet_address, vote_option, voted_at 
        FROM votes 
        WHERE poll_id = ? 
        ORDER BY voted_at DESC
    `, [id], (err, rows) => {
        if (err) {
            console.error('❌ Error fetching votes:', err.message);
            return res.status(500).json({ error: 'Failed to fetch votes' });
        }

        res.json({ success: true, votes: rows });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 IMG Protocol Backend running on port ${PORT}`);
    console.log(`🔗 Health check: http://localhost:${PORT}/health`);
    console.log(`🔍 IMG Token check: POST http://localhost:${PORT}/api/check-img-tokens`);
    console.log(`💡 IMG Token info: http://localhost:${PORT}/api/img-token-info`);
    console.log(`🗳️  Voting System API:`);
    console.log(`   GET  /api/polls - Get all polls`);
    console.log(`   GET  /api/polls/active - Get active polls`);
    console.log(`   POST /api/polls/:id/vote - Submit vote`);
    console.log(`   GET  /api/polls/:id/results - Get poll results`);
    console.log(`   GET  /api/polls/:id/votes - Get detailed votes`);
});
