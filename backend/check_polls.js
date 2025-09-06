const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Database path
const dbPath = path.join(__dirname, 'voting.db');

// Create database connection
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('❌ Error opening database:', err.message);
        process.exit(1);
    }
    console.log('✅ Connected to SQLite database');
});

// Check current polls and their options
db.all('SELECT id, title, options FROM polls', (err, rows) => {
    if (err) {
        console.error('❌ Error fetching polls:', err.message);
    } else {
        console.log('📊 Current polls:');
        rows.forEach(poll => {
            console.log(`  Poll ${poll.id}: ${poll.title}`);
            console.log(`  Options: ${poll.options}`);
        });
    }
    
    // Close database
    db.close((err) => {
        if (err) {
            console.error('❌ Error closing database:', err.message);
        } else {
            console.log('✅ Database closed');
        }
    });
});
