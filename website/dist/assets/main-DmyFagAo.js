(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();var O=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},S=ie,ce=q,ve=ge,ue=Z,pe=te,he=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function q(e){for(var t=[],i=0,a=0,s="",o;(o=he.exec(e))!=null;){var n=o[0],l=o[1],r=o.index;if(s+=e.slice(a,r),a=r+n.length,l){s+=l[1];continue}s&&(t.push(s),s="");var d=o[2],v=o[3],x=o[4],h=o[5],f=o[6],M=o[7],g=f==="+"||f==="*",I=f==="?"||f==="*",T=d||"/",b=x||h||(M?".*":"[^"+T+"]+?");t.push({name:v||i++,prefix:d||"",delimiter:T,optional:I,repeat:g,pattern:me(b)})}return a<e.length&&(s+=e.substr(a)),s&&t.push(s),t}function ge(e){return Z(q(e))}function Z(e){for(var t=new Array(e.length),i=0;i<e.length;i++)typeof e[i]=="object"&&(t[i]=new RegExp("^"+e[i].pattern+"$"));return function(a){for(var s="",o=a||{},n=0;n<e.length;n++){var l=e[n];if(typeof l=="string"){s+=l;continue}var r=o[l.name],d;if(r==null){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to be defined')}if(O(r)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received "'+r+'"');if(r.length===0){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var v=0;v<r.length;v++){if(d=encodeURIComponent(r[v]),!t[n].test(d))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received "'+d+'"');s+=(v===0?l.prefix:l.delimiter)+d}continue}if(d=encodeURIComponent(r),!t[n].test(d))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+d+'"');s+=l.prefix+d}return s}}function X(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function me(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function j(e,t){return e.keys=t,e}function ee(e){return e.sensitive?"":"i"}function be(e,t){var i=e.source.match(/\((?!\?)/g);if(i)for(var a=0;a<i.length;a++)t.push({name:a,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return j(e,t)}function fe(e,t,i){for(var a=[],s=0;s<e.length;s++)a.push(ie(e[s],t,i).source);var o=new RegExp("(?:"+a.join("|")+")",ee(i));return j(o,t)}function ye(e,t,i){for(var a=q(e),s=te(a,i),o=0;o<a.length;o++)typeof a[o]!="string"&&t.push(a[o]);return j(s,t)}function te(e,t){t=t||{};for(var i=t.strict,a=t.end!==!1,s="",o=e[e.length-1],n=typeof o=="string"&&/\/$/.test(o),l=0;l<e.length;l++){var r=e[l];if(typeof r=="string")s+=X(r);else{var d=X(r.prefix),v=r.pattern;r.repeat&&(v+="(?:"+d+v+")*"),r.optional?d?v="(?:"+d+"("+v+"))?":v="("+v+")?":v=d+"("+v+")",s+=v}}return i||(s=(n?s.slice(0,-2):s)+"(?:\\/(?=$))?"),a?s+="$":s+=i&&n?"":"(?=\\/|$)",new RegExp("^"+s,ee(t))}function ie(e,t,i){return t=t||[],O(t)?i||(i={}):(i=t,t=[]),e instanceof RegExp?be(e,t):O(e)?fe(e,t,i):ye(e,t,i)}S.parse=ce;S.compile=ve;S.tokensToFunction=ue;S.tokensToRegExp=pe;var A=typeof document<"u",m=typeof window<"u",G=typeof history<"u",we=typeof process<"u",W=A&&document.ontouchstart?"touchstart":"click",y=m&&!!(window.history.location||window.location);function u(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}u.prototype.configure=function(e){var t=e||{};this._window=t.window||m&&window,this._decodeURLComponents=t.decodeURLComponents!==!1,this._popstate=t.popstate!==!1&&m,this._click=t.click!==!1&&A,this._hashbang=!!t.hashbang;var i=this._window;this._popstate?i.addEventListener("popstate",this._onpopstate,!1):m&&i.removeEventListener("popstate",this._onpopstate,!1),this._click?i.document.addEventListener(W,this.clickHandler,!1):A&&i.document.removeEventListener(W,this.clickHandler,!1),this._hashbang&&m&&!G?i.addEventListener("hashchange",this._onpopstate,!1):m&&i.removeEventListener("hashchange",this._onpopstate,!1)};u.prototype.base=function(e){if(arguments.length===0)return this._base;this._base=e};u.prototype._getBase=function(){var e=this._base;if(e)return e;var t=m&&this._window&&this._window.location;return m&&this._hashbang&&t&&t.protocol==="file:"&&(e=t.pathname),e};u.prototype.strict=function(e){if(arguments.length===0)return this._strict;this._strict=e};u.prototype.start=function(e){var t=e||{};if(this.configure(t),t.dispatch!==!1){this._running=!0;var i;if(y){var a=this._window,s=a.location;this._hashbang&&~s.hash.indexOf("#!")?i=s.hash.substr(2)+s.search:this._hashbang?i=s.search+s.hash:i=s.pathname+s.search+s.hash}this.replace(i,null,!0,t.dispatch)}};u.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var e=this._window;this._click&&e.document.removeEventListener(W,this.clickHandler,!1),m&&e.removeEventListener("popstate",this._onpopstate,!1),m&&e.removeEventListener("hashchange",this._onpopstate,!1)}};u.prototype.show=function(e,t,i,a){var s=new C(e,t,this),o=this.prevContext;return this.prevContext=s,this.current=s.path,i!==!1&&this.dispatch(s,o),s.handled!==!1&&a!==!1&&s.pushState(),s};u.prototype.back=function(e,t){var i=this;if(this.len>0){var a=this._window;G&&a.history.back(),this.len--}else setTimeout(e?function(){i.show(e,t)}:function(){i.show(i._getBase(),t)})};u.prototype.redirect=function(e,t){var i=this;typeof e=="string"&&typeof t=="string"&&H.call(this,e,function(a){setTimeout(function(){i.replace(t)},0)}),typeof e=="string"&&typeof t>"u"&&setTimeout(function(){i.replace(e)},0)};u.prototype.replace=function(e,t,i,a){var s=new C(e,t,this),o=this.prevContext;return this.prevContext=s,this.current=s.path,s.init=i,s.save(),a!==!1&&this.dispatch(s,o),s};u.prototype.dispatch=function(e,t){var i=0,a=0,s=this;function o(){var l=s.exits[a++];if(!l)return n();l(t,o)}function n(){var l=s.callbacks[i++];if(e.path!==s.current){e.handled=!1;return}if(!l)return xe.call(s,e);l(e,n)}t?o():n()};u.prototype.exit=function(e,t){if(typeof e=="function")return this.exit("*",e);for(var i=new P(e,null,this),a=1;a<arguments.length;++a)this.exits.push(i.middleware(arguments[a]))};u.prototype.clickHandler=function(e){if(this._which(e)===1&&!(e.metaKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented){var t=e.target,i=e.path||(e.composedPath?e.composedPath():null);if(i){for(var a=0;a<i.length;a++)if(i[a].nodeName&&i[a].nodeName.toUpperCase()==="A"&&i[a].href){t=i[a];break}}for(;t&&t.nodeName.toUpperCase()!=="A";)t=t.parentNode;if(!(!t||t.nodeName.toUpperCase()!=="A")){var s=typeof t.href=="object"&&t.href.constructor.name==="SVGAnimatedString";if(!(t.hasAttribute("download")||t.getAttribute("rel")==="external")){var o=t.getAttribute("href");if(!(!this._hashbang&&this._samePath(t)&&(t.hash||o==="#"))&&!(o&&o.indexOf("mailto:")>-1)&&!(s?t.target.baseVal:t.target)&&!(!s&&!this.sameOrigin(t.href))){var n=s?t.href.baseVal:t.pathname+t.search+(t.hash||"");n=n[0]!=="/"?"/"+n:n,we&&n.match(/^\/[a-zA-Z]:\//)&&(n=n.replace(/^\/[a-zA-Z]:\//,"/"));var l=n,r=this._getBase();n.indexOf(r)===0&&(n=n.substr(r.length)),this._hashbang&&(n=n.replace("#!","")),!(r&&l===n&&(!y||this._window.location.protocol!=="file:"))&&(e.preventDefault(),this.show(l))}}}}};u.prototype._onpopstate=(function(){var e=!1;return m?(A&&document.readyState==="complete"?e=!0:window.addEventListener("load",function(){setTimeout(function(){e=!0},0)}),function(t){if(e){var i=this;if(t.state){var a=t.state.path;i.replace(a,t.state)}else if(y){var s=i._window.location;i.show(s.pathname+s.search+s.hash,void 0,void 0,!1)}}}):function(){}})();u.prototype._which=function(e){return e=e||m&&this._window.event,e.which==null?e.button:e.which};u.prototype._toURL=function(e){var t=this._window;if(typeof URL=="function"&&y)return new URL(e,t.location.toString());if(A){var i=t.document.createElement("a");return i.href=e,i}};u.prototype.sameOrigin=function(e){if(!e||!y)return!1;var t=this._toURL(e),i=this._window,a=i.location;return a.protocol===t.protocol&&a.hostname===t.hostname&&(a.port===t.port||a.port===""&&(t.port==80||t.port==443))};u.prototype._samePath=function(e){if(!y)return!1;var t=this._window,i=t.location;return e.pathname===i.pathname&&e.search===i.search};u.prototype._decodeURLEncodedURIComponent=function(e){return typeof e!="string"?e:this._decodeURLComponents?decodeURIComponent(e.replace(/\+/g," ")):e};function ae(){var e=new u;function t(){return H.apply(e,arguments)}return t.callbacks=e.callbacks,t.exits=e.exits,t.base=e.base.bind(e),t.strict=e.strict.bind(e),t.start=e.start.bind(e),t.stop=e.stop.bind(e),t.show=e.show.bind(e),t.back=e.back.bind(e),t.redirect=e.redirect.bind(e),t.replace=e.replace.bind(e),t.dispatch=e.dispatch.bind(e),t.exit=e.exit.bind(e),t.configure=e.configure.bind(e),t.sameOrigin=e.sameOrigin.bind(e),t.clickHandler=e.clickHandler.bind(e),t.create=ae,Object.defineProperty(t,"len",{get:function(){return e.len},set:function(i){e.len=i}}),Object.defineProperty(t,"current",{get:function(){return e.current},set:function(i){e.current=i}}),t.Context=C,t.Route=P,t}function H(e,t){if(typeof e=="function")return H.call(this,"*",e);if(typeof t=="function")for(var i=new P(e,null,this),a=1;a<arguments.length;++a)this.callbacks.push(i.middleware(arguments[a]));else typeof e=="string"?this[typeof t=="string"?"redirect":"show"](e,t):this.start(e)}function xe(e){if(!e.handled){var t,i=this,a=i._window;i._hashbang?t=y&&this._getBase()+a.location.hash.replace("#!",""):t=y&&a.location.pathname+a.location.search,t!==e.canonicalPath&&(i.stop(),e.handled=!1,y&&(a.location.href=e.canonicalPath))}}function ke(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function C(e,t,i){var a=this.page=i||H,s=a._window,o=a._hashbang,n=a._getBase();e[0]==="/"&&e.indexOf(n)!==0&&(e=n+(o?"#!":"")+e);var l=e.indexOf("?");this.canonicalPath=e;var r=new RegExp("^"+ke(n));if(this.path=e.replace(r,"")||"/",o&&(this.path=this.path.replace("#!","")||"/"),this.title=A&&s.document.title,this.state=t||{},this.state.path=e,this.querystring=~l?a._decodeURLEncodedURIComponent(e.slice(l+1)):"",this.pathname=a._decodeURLEncodedURIComponent(~l?e.slice(0,l):e),this.params={},this.hash="",!o){if(!~this.path.indexOf("#"))return;var d=this.path.split("#");this.path=this.pathname=d[0],this.hash=a._decodeURLEncodedURIComponent(d[1])||"",this.querystring=this.querystring.split("#")[0]}}C.prototype.pushState=function(){var e=this.page,t=e._window,i=e._hashbang;e.len++,G&&t.history.pushState(this.state,this.title,i&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};C.prototype.save=function(){var e=this.page;G&&e._window.history.replaceState(this.state,this.title,e._hashbang&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};function P(e,t,i){var a=this.page=i||V,s=t||{};s.strict=s.strict||a._strict,this.path=e==="*"?"(.*)":e,this.method="GET",this.regexp=S(this.path,this.keys=[],s)}P.prototype.middleware=function(e){var t=this;return function(i,a){if(t.match(i.path,i.params))return i.routePath=t.path,e(i,a);a()}};P.prototype.match=function(e,t){var i=this.keys,a=e.indexOf("?"),s=~a?e.slice(0,a):e,o=this.regexp.exec(decodeURIComponent(s));if(!o)return!1;delete t[0];for(var n=1,l=o.length;n<l;++n){var r=i[n-1],d=this.page._decodeURLEncodedURIComponent(o[n]);(d!==void 0||!hasOwnProperty.call(t,r.name))&&(t[r.name]=d)}return!0};var V=ae(),p=V,Ee=V;p.default=Ee;let c={isConnected:!1,isPremium:!1,walletAddress:"",currentPage:"dashboard"};const Y=e=>`
    <div class="financial-sidebar">
        <!-- Professional Header with Logo & Branding -->
        <div class="sidebar-header">
                    <div class="brand-section">
            <img src="/imgtextlogo.webp" alt="IMG Protocol" class="brand-logo">
        </div>
        </div>

        <!-- Professional Tab Navigation -->
        <nav class="tab-navigation">
            <div class="tab-list">
                <div class="tab-item ${e.currentPage==="terminal"?"active":""}" data-page="terminal">
                    <a href="/terminal" class="tab-link">
                        <img src="/dashboard.png" alt="" class="tab-icon">
                        <span class="tab-label">Terminal</span>
                    </a>
                </div>

                <div class="tab-item ${e.currentPage==="events"?"active":""}" data-page="events">
                    <a href="/events" class="tab-link">
                        <img src="/calendar.png" alt="" class="tab-icon">
                        <span class="tab-label">Events</span>
                    </a>
                </div>

                ${e.isPremium?`
                    <div class="tab-item ${e.currentPage==="harvesting"?"active":""}" data-page="harvesting">
                        <a href="/harvesting" class="tab-link premium-tab">
                            <img src="/harvesting.png" alt="" class="tab-icon">
                            <span class="tab-label">Harvesting</span>
                            <span class="premium-badge">Premium</span>
                        </a>
                    </div>

                    <div class="tab-item ${e.currentPage==="distribution"?"active":""}" data-page="distribution">
                        <a href="/distribution" class="tab-link premium-tab">
                            <img src="/distribution.png" alt="" class="tab-icon">
                            <span class="tab-label">Distribution</span>
                            <span class="premium-badge">Premium</span>
                        </a>
                    </div>

                    <div class="tab-item ${e.currentPage==="wallet-lookup"?"active":""}" data-page="wallet-lookup">
                        <a href="/wallet-lookup" class="tab-link premium-tab">
                            <img src="/wallet.png" alt="" class="tab-icon">
                            <span class="tab-label">Wallet Lookup</span>
                            <span class="premium-badge">Premium</span>
                        </a>
                    </div>

                    <div class="tab-item ${e.currentPage==="reward-calculator"?"active":""}" data-page="reward-calculator">
                        <a href="/reward-calculator" class="tab-link premium-tab">
                            <img src="/calculator.png" alt="" class="tab-icon">
                            <span class="tab-label">Rewards</span>
                            <span class="premium-badge">Premium</span>
                        </a>
                    </div>

                    <div class="tab-item ${e.currentPage==="vote"?"active":""}" data-page="vote">
                        <a href="/vote" class="tab-link premium-tab">
                            <img src="/vote.png" alt="" class="tab-icon">
                            <span class="tab-label">Vote</span>
                            <span class="premium-badge">Premium</span>
                        </a>
                    </div>
                `:`
                    <div class="tab-item locked" data-page="harvesting">
                        <div class="tab-link locked-tab">
                            <img src="/harvesting.png" alt="" class="tab-icon locked-icon">
                            <span class="tab-label">Harvesting</span>
                            <img src="/shield.png" alt="Locked" class="lock-badge shield-icon">
                        </div>
                    </div>

                    <div class="tab-item locked" data-page="distribution">
                        <div class="tab-link locked-tab">
                            <img src="/distribution.png" alt="" class="tab-icon locked-icon">
                            <span class="tab-label">Distribution</span>
                            <img src="/shield.png" alt="Locked" class="lock-badge shield-icon">
                        </div>
                    </div>

                    <div class="tab-item locked" data-page="wallet-lookup">
                        <div class="tab-link locked-tab">
                            <img src="/wallet.png" alt="" class="tab-icon locked-icon">
                            <span class="tab-label">Wallet Lookup</span>
                            <img src="/shield.png" alt="Locked" class="lock-badge shield-icon">
                        </div>
                    </div>

                    <div class="tab-item locked" data-page="reward-calculator">
                        <div class="tab-link locked-tab">
                            <img src="/calculator.png" alt="" class="tab-icon locked-icon">
                            <span class="tab-label">Rewards</span>
                            <img src="/shield.png" alt="Locked" class="lock-badge shield-icon">
                        </div>
                    </div>

                    <div class="tab-item locked" data-page="vote">
                        <div class="tab-link locked-tab">
                            <img src="/vote.png" alt="" class="tab-icon locked-icon">
                            <span class="tab-label">Vote</span>
                            <img src="/shield.png" alt="Locked" class="lock-badge shield-icon">
                        </div>
                    </div>
                `}
            </div>
        </nav>

        <!-- Wallet Section -->
        <div class="wallet-section">
            ${e.isConnected?"":`
                <!-- Premium Info Banner (only when not connected) -->
                <div class="premium-info-banner">
                    <div class="banner-header">
                        <span class="banner-title">Premium Dashboard</span>
                    </div>
                    <div class="banner-subtitle">Must hold 50k IMG</div>
                    <div class="banner-action">Connect Wallet to unlock</div>
                </div>
            `}
            
            ${e.isConnected?`
                <div class="wallet-status-compact">
                    <div class="wallet-info-row">
                        <span class="wallet-label">Wallet</span>
                        <span class="wallet-address-short">
                            ${e.walletAddress.length>8?e.walletAddress.substring(0,4)+"..."+e.walletAddress.substring(e.walletAddress.length-4):e.walletAddress}
                        </span>
                    </div>
                    <div class="premium-status-row">
                        <span class="premium-label">Access</span>
                        <div class="premium-badge ${e.isPremium?"premium-active":"standard-active"}">
                            <div class="premium-indicator ${e.isPremium?"premium-dot":"standard-dot"}"></div>
                            <span class="premium-text">${e.isPremium?"Premium":"Standard"}</span>
                        </div>
                    </div>
                </div>
            `:""}
            
            <button id="connect-wallet-btn" class="wallet-connect-btn ${e.isConnected?"connected":"disconnected"}">
                <span class="wallet-text">
                    ${e.isConnected?"Disconnect Wallet":"Connect Wallet"}
                </span>
            </button>
        </div>

        <!-- Social Media Footer -->
        <div class="social-footer">
            <div class="social-title">Connect with us</div>
            <div class="social-links">
                <a href="#" class="social-link" title="Telegram">
                    <img src="/telegram.png" alt="Telegram" class="social-icon">
                </a>
                <a href="#" class="social-link" title="Twitter">
                    <img src="/twitter.png" alt="Twitter" class="social-icon">
                </a>
                <a href="#" class="social-link" title="Discord">
                    <img src="/discordtab.png" alt="Discord" class="social-icon">
                </a>
                <a href="#" class="social-link" title="Homepage">
                    <img src="/homepage.png" alt="Homepage" class="social-icon">
                </a>
            </div>
        </div>
    </div>
`,Ie=()=>`
    <!-- Mobile Header -->
    <div class="mobile-header">
        <div class="mobile-header-content">
            <div class="mobile-header-left">
                <div class="mobile-brand-text">FINANCE</div>
                <div class="mobile-logo">
                    <img src="/imgtextlogo.webp" alt="IMG Finance Logo">
                </div>
            </div>
            <div class="mobile-header-right">
                <button class="burger-menu-btn" id="mobile-menu-btn">
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                </button>
            </div>
        </div>
    </div>
    
    <!-- Sidebar Overlay for Mobile -->
    <div class="sidebar-overlay" id="sidebar-overlay"></div>
    
            <div class="dashboard-page">
        <!-- Token Metrics Section -->
        <div class="token-metrics-section">
            <div class="metrics-grid">
                <div class="metric-card">
                    <div class="metric-label">PRICE USD</div>
                    <div class="metric-value" id="img-price">$0.00</div>
                </div>
                
                <div class="metric-card">
                    <div class="metric-label">24H CHANGE</div>
                    <div class="metric-value" id="price-change">0.00%</div>
                </div>
                
                <div class="metric-card">
                    <div class="metric-label">24H VOLUME</div>
                    <div class="metric-value" id="volume-24h">$0.00</div>
                </div>
                
                <div class="metric-card">
                    <div class="metric-label">MARKETCAP</div>
                    <div class="metric-value" id="market-cap">$0.00</div>
                </div>
                
                <div class="metric-card">
                    <div class="metric-label">LIQUIDITY</div>
                    <div class="metric-value" id="liquidity">$0.00</div>
                </div>
                
                <div class="metric-card">
                    <div class="metric-label">IMG HOLDERS</div>
                    <div class="metric-value" id="img-holders">22K</div>
                </div>
            </div>
        </div>



        <!-- Charts Section -->
        <div class="charts-section">
            <div class="charts-grid">
                <!-- Daily Rewards Chart -->
                <div class="chart-card">
                    <div class="chart-header">
                        <h3 class="chart-title">DAILY REWARDS</h3>
                        <select class="chart-dropdown" id="weekly-dropdown">
                            <option value="august-2025">August 2025</option>
                            <option value="july-2025">July 2025</option>
                            <option value="june-2025">June 2025</option>
                            <option value="may-2025">May 2025</option>
                        </select>
                    </div>
                    <div class="chart-content">
                        <div class="chart-inner-box">
                            <div class="professional-chart" id="weekly-chart">
                                <svg viewBox="0 0 420 260" class="chart-svg" preserveAspectRatio="xMinYMin meet">
                                <!-- Grid Lines positioned from axes -->
                                <defs>
                                    <pattern id="weeklyGrid" width="35" height="20" patternUnits="userSpaceOnUse">
                                        <path d="M 35 0 L 0 0 0 20" fill="none" stroke="rgba(148, 163, 184, 0.06)" stroke-width="1"/>
                                    </pattern>
                                </defs>
                                
                                <!-- Grid background starting from axes -->
                                <rect x="40" y="20" width="360" height="200" fill="url(#weeklyGrid)" />
                                
                                <!-- Y-Axis -->
                                <line x1="40" y1="20" x2="40" y2="220" stroke="rgba(148, 163, 184, 0.6)" stroke-width="2"/>
                                
                                <!-- X-Axis -->
                                <line x1="40" y1="220" x2="400" y2="220" stroke="rgba(148, 163, 184, 0.6)" stroke-width="2"/>
                                
                                <!-- Y-Axis Labels - Expanded spacing for better visibility -->
                                <text x="35" y="25" fill="rgba(148, 163, 184, 0.9)" font-size="11" text-anchor="end">30k</text>
                                <text x="35" y="58" fill="rgba(148, 163, 184, 0.9)" font-size="11" text-anchor="end">25k</text>
                                <text x="35" y="91" fill="rgba(148, 163, 184, 0.9)" font-size="11" text-anchor="end">20k</text>
                                <text x="35" y="124" fill="rgba(148, 163, 184, 0.9)" font-size="11" text-anchor="end">15k</text>
                                <text x="35" y="157" fill="rgba(148, 163, 184, 0.9)" font-size="11" text-anchor="end">10k</text>
                                <text x="35" y="190" fill="rgba(148, 163, 184, 0.9)" font-size="11" text-anchor="end">5k</text>
                                <text x="35" y="224" fill="rgba(148, 163, 184, 0.9)" font-size="11" text-anchor="end">0</text>
                                
                                <!-- Data Bars - Bigger with expanded height -->
                                <rect x="65" y="157" width="65" height="63" fill="url(#weeklyBarGradient)" class="chart-bar" data-value="15000" data-label="1R"/>
                                <rect x="155" y="74" width="65" height="146" fill="url(#weeklyBarGradient)" class="chart-bar" data-value="22500" data-label="2R"/>
                                <rect x="245" y="107" width="65" height="113" fill="url(#weeklyBarGradient)" class="chart-bar" data-value="18750" data-label="3R"/>
                                <rect x="335" y="20" width="65" height="200" fill="url(#weeklyBarGradient)" class="chart-bar" data-value="30000" data-label="4R"/>
                                
                                <!-- X-Axis Labels -->
                                <text x="97" y="240" fill="rgba(148, 163, 184, 0.9)" font-size="12" text-anchor="middle">1R</text>
                                <text x="187" y="240" fill="rgba(148, 163, 184, 0.9)" font-size="12" text-anchor="middle">2R</text>
                                <text x="277" y="240" fill="rgba(148, 184, 184, 0.9)" font-size="12" text-anchor="middle">3R</text>
                                <text x="367" y="240" fill="rgba(148, 163, 184, 0.9)" font-size="12" text-anchor="middle">4R</text>
                                
                                <!-- IMG Watermark larger and centered -->
                                <text x="210" y="130" fill="rgba(148, 163, 184, 0.06)" font-size="32" font-weight="bold" text-anchor="middle">IMG</text>
                                
                                <!-- Gradients -->
                                <defs>
                                    <linearGradient id="weeklyBarGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
                                        <stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:1" />
                                    </linearGradient>
                                </defs>
                                </svg>
                                
                                <!-- Hover Tooltip -->
                                <div class="chart-tooltip" id="weekly-tooltip">
                                    <div class="tooltip-label"></div>
                                    <div class="tooltip-value"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Weekly Rewards Chart -->
                <div class="chart-card">
                    <div class="chart-header">
                        <h3 class="chart-title">WEEKLY REWARDS</h3>
                        <select class="chart-dropdown" id="monthly-dropdown">
                            <option value="q1-2025">Q1 2025</option>
                            <option value="q2-2025">Q2 2025</option>
                            <option value="q3-2025">Q3 2025</option>
                            <option value="q4-2025">Q4 2025</option>
                        </select>
                    </div>
                    <div class="chart-content">
                        <div class="chart-inner-box">
                            <div class="professional-chart" id="monthly-chart">
                                <svg viewBox="0 0 420 260" class="chart-svg" preserveAspectRatio="xMinYMin meet">
                                <!-- Grid Lines positioned from axes -->
                                <defs>
                                    <pattern id="monthlyGrid" width="35" height="20" patternUnits="userSpaceOnUse">
                                        <path d="M 35 0 L 0 0 0 20" fill="none" stroke="rgba(148, 163, 184, 0.06)" stroke-width="1"/>
                                    </pattern>
                                </defs>
                                
                                <!-- Grid background starting from axes -->
                                <rect x="40" y="20" width="360" height="200" fill="url(#monthlyGrid)" />
                                
                                <!-- Y-Axis -->
                                <line x1="40" y1="20" x2="40" y2="220" stroke="rgba(148, 163, 184, 0.6)" stroke-width="2"/>
                                
                                <!-- X-Axis -->
                                <line x1="40" y1="220" x2="400" y2="220" stroke="rgba(148, 163, 184, 0.6)" stroke-width="2"/>
                                
                                <!-- Y-Axis Labels - Consistent spacing aligned with other charts -->
                                <text x="35" y="25" fill="rgba(148, 163, 184, 0.9)" font-size="11" text-anchor="end">100k</text>
                                <text x="35" y="58" fill="rgba(148, 163, 184, 0.9)" font-size="11" text-anchor="end">80k</text>
                                <text x="35" y="91" fill="rgba(148, 163, 184, 0.9)" font-size="11" text-anchor="end">60k</text>
                                <text x="35" y="124" fill="rgba(148, 163, 184, 0.9)" font-size="11" text-anchor="end">40k</text>
                                <text x="35" y="157" fill="rgba(148, 163, 184, 0.9)" font-size="11" text-anchor="end">20k</text>
                                <text x="35" y="190" fill="rgba(148, 163, 184, 0.9)" font-size="11" text-anchor="end">10k</text>
                                <text x="35" y="224" fill="rgba(148, 163, 184, 0.9)" font-size="11" text-anchor="end">0</text>
                                
                                <!-- Data Bars - Bigger with expanded height -->
                                <rect x="65" y="85" width="65" height="135" fill="url(#monthlyBarGradient)" class="chart-bar" data-value="67500" data-label="1W"/>
                                <rect x="155" y="70" width="65" height="150" fill="url(#monthlyBarGradient)" class="chart-bar" data-value="75000" data-label="2W"/>
                                <rect x="245" y="102" width="65" height="118" fill="url(#monthlyBarGradient)" class="chart-bar" data-value="58750" data-label="3W"/>
                                <rect x="335" y="35" width="65" height="185" fill="url(#monthlyBarGradient)" class="chart-bar" data-value="92500" data-label="4W"/>
                                
                                <!-- X-Axis Labels -->
                                <text x="97" y="240" fill="rgba(148, 163, 184, 0.9)" font-size="12" text-anchor="middle">1W</text>
                                <text x="187" y="240" fill="rgba(148, 163, 184, 0.9)" font-size="12" text-anchor="middle">2W</text>
                                <text x="277" y="240" fill="rgba(148, 163, 184, 0.9)" font-size="12" text-anchor="middle">3W</text>
                                <text x="367" y="240" fill="rgba(148, 163, 184, 0.9)" font-size="12" text-anchor="middle">4W</text>
                                
                                <!-- IMG Watermark larger and centered -->
                                <text x="210" y="130" fill="rgba(148, 163, 184, 0.06)" font-size="32" font-weight="bold" text-anchor="middle">IMG</text>
                                
                                <!-- Gradients -->
                                <defs>
                                    <linearGradient id="monthlyBarGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
                                        <stop offset="100%" style="stop-color:#059669;stop-opacity:1" />
                                    </linearGradient>
                                </defs>
                                </svg>
                                
                                <!-- Hover Tooltip -->
                                <div class="chart-tooltip" id="monthly-tooltip">
                                    <div class="tooltip-label"></div>
                                    <div class="tooltip-value"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Process Line Chart -->
                <div class="chart-card">
                    <div class="chart-header">
                        <h3 class="chart-title">PROCESS LINE</h3>
                        <select class="chart-dropdown" id="process-dropdown">
                            <option value="q1-2025">Q1 2025</option>
                            <option value="q2-2025">Q2 2025</option>
                            <option value="q3-2025">Q3 2025</option>
                            <option value="q4-2025">Q4 2025</option>
                        </select>
                    </div>
                    <div class="chart-content">
                        <div class="chart-inner-box">
                            <div class="professional-chart" id="process-chart">
                                <svg viewBox="0 0 420 260" class="chart-svg" preserveAspectRatio="xMinYMin meet">
                                <!-- Grid Lines positioned from axes -->
                                <defs>
                                    <pattern id="processGrid" width="35" height="20" patternUnits="userSpaceOnUse">
                                        <path d="M 35 0 L 0 0 0 20" fill="none" stroke="rgba(148, 163, 184, 0.06)" stroke-width="1"/>
                                    </pattern>
                                </defs>
                                
                                <!-- Grid background starting from axes -->
                                <rect x="40" y="20" width="360" height="200" fill="url(#processGrid)" />
                                
                                <!-- Y-Axis -->
                                <line x1="40" y1="20" x2="40" y2="220" stroke="rgba(148, 163, 184, 0.6)" stroke-width="2"/>
                                
                                <!-- X-Axis -->
                                <line x1="40" y1="220" x2="400" y2="220" stroke="rgba(148, 163, 184, 0.6)" stroke-width="2"/>
                                
                                <!-- Y-Axis Labels - Expanded spacing for better visibility -->
                                <text x="35" y="25" fill="rgba(148, 163, 184, 0.9)" font-size="11" text-anchor="end">30k</text>
                                <text x="35" y="58" fill="rgba(148, 163, 184, 0.9)" font-size="11" text-anchor="end">25k</text>
                                <text x="35" y="91" fill="rgba(148, 163, 184, 0.9)" font-size="11" text-anchor="end">20k</text>
                                <text x="35" y="124" fill="rgba(148, 163, 184, 0.9)" font-size="11" text-anchor="end">15k</text>
                                <text x="35" y="157" fill="rgba(148, 163, 184, 0.9)" font-size="11" text-anchor="end">10k</text>
                                <text x="35" y="190" fill="rgba(148, 163, 184, 0.9)" font-size="11" text-anchor="end">5k</text>
                                <text x="35" y="224" fill="rgba(148, 163, 184, 0.9)" font-size="11" text-anchor="end">0</text>
                                
                                <!-- Line Chart - Smooth curve with expanded positioning -->
                                <polyline 
                                    fill="none" 
                                    stroke="url(#lineGradient)" 
                                    stroke-width="7" 
                                    points="72,190 152,124 232,157 312,20 372,75"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                
                                <!-- Data Points - Bigger dots with expanded positioning -->
                                <circle cx="72" cy="190" r="9" fill="#f59e0b" class="chart-dot" data-value="12000" data-label="May"/>
                                <circle cx="152" cy="124" r="9" fill="#f59e0b" class="chart-dot" data-value="21000" data-label="Jun"/>
                                <circle cx="232" cy="157" r="9" fill="#f59e0b" class="chart-dot" data-value="18000" data-label="Jul"/>
                                <circle cx="312" cy="20" r="9" fill="#f59e0b" class="chart-dot" data-value="30000" data-label="Aug"/>
                                <circle cx="372" cy="75" r="9" fill="#f59e0b" class="chart-dot" data-value="27000" data-label="Sep"/>
                                
                                <!-- X-Axis Labels -->
                                <text x="72" y="240" fill="rgba(148, 163, 184, 0.9)" font-size="12" text-anchor="middle">May</text>
                                <text x="152" y="240" fill="rgba(148, 163, 184, 0.9)" font-size="12" text-anchor="middle">Jun</text>
                                <text x="232" y="240" fill="rgba(148, 163, 184, 0.9)" font-size="12" text-anchor="middle">Jul</text>
                                <text x="312" y="240" fill="rgba(148, 163, 184, 0.9)" font-size="12" text-anchor="middle">Aug</text>
                                <text x="372" y="240" fill="rgba(148, 163, 184, 0.9)" font-size="12" text-anchor="middle">Sep</text>
                                
                                <!-- IMG Watermark larger and centered -->
                                <text x="210" y="130" fill="rgba(148, 163, 184, 0.06)" font-size="32" font-weight="bold" text-anchor="middle">IMG</text>
                                
                                <!-- Gradients -->
                                <defs>
                                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style="stop-color:#f59e0b;stop-opacity:1" />
                                        <stop offset="100%" style="stop-color:#d97706;stop-opacity:1" />
                                    </linearGradient>
                                </defs>
                                </svg>
                                
                                <!-- Hover Tooltip -->
                                <div class="chart-tooltip" id="process-tooltip">
                                    <div class="tooltip-label"></div>
                                    <div class="tooltip-value"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Annual Rewards Section -->
        <!-- Annual Rewards Section - Fresh Start -->
        <div class="daily-distribution-section">
            <div class="daily-distribution-container">
                <div class="daily-distribution-header">
                    <h3 class="daily-distribution-title">ANNUAL REWARDS</h3>
                </div>
                <div class="daily-distribution-row">
                    <!-- Box 1: Breakdown Data -->
                    <div class="daily-distribution-box daily-box-1">
                        <div class="daily-box-content">
                            <div class="daily-breakdown">
                                <div class="daily-breakdown-item">
                                    <div class="daily-breakdown-label">
                                        <div class="daily-color-dot" style="background: #10b981;"></div>
                                        <span>TREASURY INFLOW</span>
                                    </div>
                                    <span class="daily-breakdown-value treasury-value">0.22441 SOL</span>
                                </div>
                                <div class="daily-breakdown-item">
                                    <div class="daily-breakdown-label">
                                        <div class="daily-color-dot" style="background: #3b82f6;"></div>
                                        <span>HOLDER EARNINGS</span>
                                    </div>
                                    <span class="daily-breakdown-value holders-value">0.17742 SOL</span>
                                </div>
                                <div class="daily-breakdown-item">
                                    <div class="daily-breakdown-label">
                                        <div class="daily-color-dot" style="background: #f59e0b;"></div>
                                        <span>INFRA WALLET</span>
                                    </div>
                                    <span class="daily-breakdown-value infra-value">0.02191 SOL</span>
                                </div>
                                <div class="daily-breakdown-item">
                                    <div class="daily-breakdown-label">
                                        <div class="daily-color-dot" style="background: #ef4444;"></div>
                                        <span>NET BALANCE</span>
                                    </div>
                                    <span class="daily-breakdown-value net-value">0.00500 SOL</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Box 2: Clean Donut Chart -->
                    <div class="daily-distribution-box daily-box-2">
                        <div class="daily-box-content">
                            <div class="daily-pie-chart-container">
                                <div class="daily-pie-chart" id="daily-distribution-pie">
                                    <svg viewBox="0 0 320 320" class="daily-pie-svg" id="clean-donut-chart">
                                        <!-- Clean SVG donut chart will be generated here -->
                                    </svg>
                                    <div class="daily-pie-center">
                                        <div class="daily-pie-total">IMG</div>
                                        <div class="daily-pie-label">RESULTS</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Box 3: Key Metrics -->
                    <div class="daily-distribution-box daily-box-3">
                        <div class="daily-box-content">
                            <div class="daily-metrics">
                                <div class="daily-metric-item">
                                    <span class="daily-metric-label">STARTING DATE</span>
                                    <span class="daily-metric-value">Aug 20, 2025</span>
                                </div>
                                <div class="daily-metric-item">
                                    <span class="daily-metric-label">TOTAL HARVEST</span>
                                    <span class="daily-metric-value">$12,847.32</span>
                                </div>
                                <div class="daily-metric-item">
                                    <span class="daily-metric-label">TOTAL DISTRIBUTION</span>
                                    <span class="daily-metric-value">$12,847.32</span>
                                </div>
                                <div class="daily-metric-item">
                                    <span class="daily-metric-label">TOTAL REWARDS</span>
                                    <span class="daily-metric-value">$11,562.59</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    </div>
`;function $(e,t,i,a,s,o){const n=(s-90)*Math.PI/180,l=(o-90)*Math.PI/180,r=e+i*Math.cos(n),d=t+i*Math.sin(n),v=e+i*Math.cos(l),x=t+i*Math.sin(l),h=e+a*Math.cos(l),f=t+a*Math.sin(l),M=e+a*Math.cos(n),g=t+a*Math.sin(n),I=Math.abs(o-s)>180?1:0;return`M ${r} ${d} A ${i} ${i} 0 ${I} 1 ${v} ${x} L ${h} ${f} A ${a} ${a} 0 ${I} 0 ${M} ${g} Z`}function J(e){const t=e.treasury+e.holders+e.infra+e.net;console.log("🔄 Updating donut chart with data:",e),console.log("📊 Total:",t);const i=e.treasury/t*100,a=e.holders/t*100,s=e.infra/t*100,o=e.net/t*100;console.log("🎯 Percentages:",{treasuryPercent:i,holdersPercent:a,infraPercent:s,netPercent:o});const n=document.getElementById("clean-donut-chart");if(n){n.querySelectorAll(".daily-pie-segment").forEach(de=>de.remove());const r=160,d=160,v=120,x=80;let h=0;const f=i/100*360,M=$(r,d,v,x,h,h+f),g=document.createElementNS("http://www.w3.org/2000/svg","path");g.setAttribute("d",M),g.setAttribute("fill","#10b981"),g.setAttribute("class","daily-pie-segment treasury-segment"),g.setAttribute("data-label","TREASURY INFLOW"),g.setAttribute("data-value",`${e.treasury.toFixed(5)} SOL`),g.setAttribute("data-percentage",`${Math.round(i)}%`),g.setAttribute("data-color","#10b981"),n.appendChild(g),h+=f;const I=a/100*360,T=$(r,d,v,x,h,h+I),b=document.createElementNS("http://www.w3.org/2000/svg","path");b.setAttribute("d",T),b.setAttribute("fill","#3b82f6"),b.setAttribute("class","daily-pie-segment holders-segment"),b.setAttribute("data-label","HOLDER EARNINGS"),b.setAttribute("data-value",`${e.holders.toFixed(5)} SOL`),b.setAttribute("data-percentage",`${Math.round(a)}%`),b.setAttribute("data-color","#3b82f6"),n.appendChild(b),h+=I;const K=s/100*360,oe=$(r,d,v,x,h,h+K),k=document.createElementNS("http://www.w3.org/2000/svg","path");k.setAttribute("d",oe),k.setAttribute("fill","#f59e0b"),k.setAttribute("class","daily-pie-segment infra-segment"),k.setAttribute("data-label","INFRA WALLET"),k.setAttribute("data-value",`${e.infra.toFixed(5)} SOL`),k.setAttribute("data-percentage",`${Math.round(s)}%`),k.setAttribute("data-color","#f59e0b"),n.appendChild(k),h+=K;const le=o/100*360,re=$(r,d,v,x,h,h+le),E=document.createElementNS("http://www.w3.org/2000/svg","path");E.setAttribute("d",re),E.setAttribute("fill","#ef4444"),E.setAttribute("class","daily-pie-segment net-segment"),E.setAttribute("data-label","NET BALANCE"),E.setAttribute("data-value",`${e.net.toFixed(5)} SOL`),E.setAttribute("data-percentage",`${Math.round(o)}%`),E.setAttribute("data-color","#ef4444"),n.appendChild(E)}const l=document.querySelector(".daily-pie-total");l&&(l.textContent="IMG"),console.log("✅ Donut chart updated with new data:",e),Le()}function Le(){document.querySelectorAll(".daily-pie-segment").forEach(e=>{e.style.cursor="pointer",e.addEventListener("mouseenter",t=>{Q(t,e),e.style.filter="brightness(1.2) drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))"}),e.addEventListener("mouseleave",t=>{U(),e.style.filter="none"}),e.addEventListener("click",t=>{Q(t,e),setTimeout(()=>{U()},3e3)})})}function Q(e,t){const i=t.getAttribute("data-label"),a=t.getAttribute("data-value");t.getAttribute("data-percentage");const s=t.getAttribute("data-color");U();const o=document.createElement("div");o.id="donut-tooltip",o.className="donut-tooltip",o.innerHTML=`
        <div class="tooltip-header" style="background: ${s}; color: #ffffff; text-align: center;">
            <span class="tooltip-label" style="color: #ffffff;">${i}</span>
        </div>
        <div class="tooltip-content" style="text-align: center;">
            <div class="tooltip-value" style="color: #ffffff; font-size: 18px; text-align: center;">${a}</div>
        </div>
    `;const n=e.target.getBoundingClientRect(),l=200,r=100;let d=n.left+n.width/2,v=n.top-r-20;d<l/2?d=l/2+10:d>window.innerWidth-l/2&&(d=window.innerWidth-l/2-10),v<10&&(v=n.bottom+20),o.style.left=`${d}px`,o.style.top=`${v}px`,o.style.transform="translateX(-50%)",document.body.appendChild(o),setTimeout(()=>{o.style.opacity="1",o.style.transform="translateX(-50%) translateY(-10px)"},10)}function U(){const e=document.getElementById("donut-tooltip");e&&e.remove()}function _(){console.log("🎯 Initializing donut chart...");const e=document.getElementById("clean-donut-chart");if(e){const o=e.querySelectorAll(".daily-pie-segment");if(console.log("🔍 Found existing segments:",o.length),o.length>0){console.log("✅ Donut chart already has segments, skipping initialization");return}}const t=document.querySelector(".daily-breakdown-item:nth-child(1) .daily-breakdown-value"),i=document.querySelector(".daily-breakdown-item:nth-child(2) .daily-breakdown-value"),a=document.querySelector(".daily-breakdown-item:nth-child(3) .daily-breakdown-value"),s=document.querySelector(".daily-breakdown-item:nth-child(4) .daily-breakdown-value");if(t&&i&&a&&s){const o=parseFloat(t.textContent.replace(" SOL","")),n=parseFloat(i.textContent.replace(" SOL","")),l=parseFloat(a.textContent.replace(" SOL","")),r=parseFloat(s.textContent.replace(" SOL","")),d={treasury:o,holders:n,infra:l,net:r};console.log("🎯 Reading actual data from Box 1:",d),J(d),console.log("🎯 Donut chart initialized with Box 1 data!")}else console.warn("⚠️ Could not find Box 1 data elements, using fallback data"),J({treasury:.22441,holders:.17742,infra:.02191,net:.005})}function N(e){return e>=1e6?(e/1e6).toFixed(2)+"M":e>=1e3?(e/1e3).toFixed(2)+"K":e.toFixed(2)}function Ae(e){return e<.01?"$"+e.toFixed(6):"$"+e.toFixed(4)}function Me(e){return(e>=0?"+":"")+e.toFixed(2)+"%"}async function Se(){var e,t,i;try{console.log("🔍 Fetching IMG token metrics from DexScreener...");const a=await fetch("https://api.dexscreener.com/latest/dex/pairs/solana/cxgcuecqdabpvjwh5cweir9y5fy9sktjhgutmc95bgy3");if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);const s=await a.json();if(console.log("📊 DexScreener data received:",s),s.pairs&&s.pairs.length>0){const o=s.pairs[0];document.getElementById("img-price").textContent=Ae(parseFloat(o.priceUsd||0)),document.getElementById("price-change").textContent=Me(parseFloat(((e=o.priceChange)==null?void 0:e.h24)||0)),document.getElementById("volume-24h").textContent="$"+N(parseFloat(((t=o.volume)==null?void 0:t.h24)||0)),document.getElementById("market-cap").textContent="$"+N(parseFloat(o.marketCap||0)),document.getElementById("liquidity").textContent="$"+N(parseFloat(((i=o.liquidity)==null?void 0:i.usd)||0)),document.getElementById("img-holders").textContent="22K",console.log("✅ Token metrics updated successfully")}else console.warn("⚠️ No pair data found in DexScreener response")}catch(a){console.error("❌ Failed to fetch token metrics:",a),document.getElementById("img-price").textContent="$0.0000",document.getElementById("price-change").textContent="0.00%",document.getElementById("volume-24h").textContent="$0.00",document.getElementById("market-cap").textContent="$0.00",document.getElementById("liquidity").textContent="$0.00",document.getElementById("img-holders").textContent="22K"}}const Ce=()=>`
    <!-- Mobile Header -->
    <div class="mobile-header">
        <div class="mobile-header-content">
            <div class="mobile-header-left">
                <div class="mobile-brand-text">IMG FINANCE</div>
                <div class="mobile-logo">
                    <img src="/imgtextlogo.webp" alt="IMG Finance Logo">
                </div>
            </div>
            <div class="mobile-header-right">
                <button class="burger-menu-btn" id="mobile-menu-btn">
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                </button>
            </div>
        </div>
    </div>
    
    <!-- Sidebar Overlay for Mobile -->
    <div class="sidebar-overlay" id="sidebar-overlay"></div>
    
    <div class="events-page">
        <div class="events-layout">
            <!-- Two Column Row: Upcoming Events & Recent Project Updates (Empty) -->
            <div class="events-two-column-row">
                <!-- Left Column: Upcoming Events -->
                <div class="events-column">
                    <h2 class="section-title">Upcoming Events</h2>
                    <div class="events-column-grid">
                        <div class="split-hero-card">
                            <div class="split-hero-image">
                                <img src="kimbosliceposter.jpg" alt="Kimbo Slice Jr vs Derek Perez Poster">
                            </div>
                            <div class="split-hero-content">
                                <div class="split-hero-eyebrow">FIGHT ON SEPT 12 | STREAM BKFC APP</div>
                                <h3 class="split-hero-title">KIMBO SLICE JR VS DEREK PEREZ</h3>
                                <p class="split-hero-subtext">Kimbo Slice Jr. makes his Bare Knuckle debut Sept 12 against 8 fight BKFC vet Derek Perez!</p>
                                <a class="event-link-btn small" href="#" title="View Details">View details</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Recent Project Updates -->
                <div class="events-column">
                    <h2 class="section-title">Recent Project Updates</h2>
                    <div class="project-updates-container">
                        <div class="project-update-banner in-progress">
                            <div class="update-image">
                                <img src="/Imgupdate5.png" alt="Rewards Update">
                            </div>
                            <div class="update-content">
                                <h3 class="update-title">Rewards Update</h3>
                                <p class="update-description">Due to Solana congestion, rewards didn't process automatically. All rewards were recorded and will be distributed within 72 hours. Our developer is currently performing an internal audit to ensure all accounts are fully reconciled before triggering payouts.</p>
                                <div class="update-date">In progress</div>
                            </div>
                        </div>
                        
                        <div class="project-update-banner completed">
                            <div class="update-image">
                                <img src="/Imgupdate1.png" alt="Reward System Upgrade">
                            </div>
                            <div class="update-content">
                                <h3 class="update-title">Reward system upgrade</h3>
                                <p class="update-description">Rewards are harvested hourly and distributed daily at 2 AM, 8 AM, 2 PM, and 8 PM EST. Payouts roll out gradually, so while not every wallet receives rewards at those exact times, all holders receive their full share by day's end, execution is on-chain and verifiable.</p>
                                <div class="update-date">Completed Aug 20</div>
                            </div>
                        </div>
                        
                        <div class="project-update-banner completed">
                            <div class="update-image">
                                <img src="/Imgupdate2.png" alt="Blacklist Wallets">
                            </div>
                            <div class="update-content">
                                <h3 class="update-title">Blacklist Wallets</h3>
                                <p class="update-description">The IMG Rewards script now blacklists several wallets, including CoinEx hot wallet, Raydium, Phantom, and others that were unfairly collecting fees and rewards. This update protects the project by preventing large DEX wallets from clipping the chart, ensuring fairer distribution and increased earnings for real $IMG holders.</p>
                                <div class="update-date">Completed Aug 11</div>
                            </div>
                        </div>
                        
                        <div class="project-update-banner completed">
                            <div class="update-image">
                                <img src="/Imgupdate4.png" alt="New Developer">
                            </div>
                            <div class="update-content">
                                <h3 class="update-title">New Developer</h3>
                                <p class="update-description">We're excited to welcome Jerry Balderas as our new developer! With 12+ years of full-stack experience, he's focused on building a high-performance rewards script and tax-optimized systems to strengthen $IMG and deliver long-term value for the community.</p>
                                <div class="update-date">Completed Aug 12</div>
                            </div>
                        </div>
                        
                        <div class="project-update-banner completed">
                            <div class="update-image">
                                <img src="/Imgupdate3.png" alt="Infra Wallet">
                            </div>
                            <div class="update-content">
                                <h3 class="update-title">Infra Wallet</h3>
                                <p class="update-description">The Infra Wallet collects 0.5% from every buy, sell, and transfer (from the 5% tax). These funds are dedicated to strengthening the project, fueling marketing, growth, and future development while creating lasting value for the entire $IMG community.</p>
                                <div class="update-date">Completed Aug 4</div>
                            </div>
                        </div>
                        




                    </div>
                </div>
            </div>

                        <!-- Top Section: Featured Events -->
            <div class="featured-events-section">
                <h2 class="section-title">Featured Events</h2>
                <div class="featured-events-grid">
                    <div class="featured-event-card">
                        <div class="event-image">
                            <img src="/kimbosponsor.jpg" alt="First Sponsored Athlete">
                        </div>
                        <div class="event-content">

                            <h3 class="event-title">First sponsored athlete.</h3>
                            <p class="event-description">Tune into last night's spaces with @kimboslicejr, The Infinite Money Glitch's first sponsored athlete. The glitch lives through him. Stay tuned for Round 2.</p>
                        </div>
                        <div class="event-date">Aug 30, 2025</div>
                        <a href="https://x.com/img_protocol/status/1961835685351985166" class="event-link-icon" title="Read Article" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>
                    </div>
                    
                    <div class="featured-event-card">
                        <div class="event-image">
                            <img src="/imggiveaway.jpg" alt="IMG Giveaway">
                        </div>
                        <div class="event-content">
                            <h3 class="event-title">IMG Giveaway</h3>
                            <p class="event-description">The IMG Buy Competition is live! Three winners will be selected: 50,000 $IMG for the biggest buy and 2x 25,000 $IMG raffled. Every $25 buy counts as one entry. To qualify, you must hold at least 5,000 $IMG.</p>
                        </div>
                        <div class="event-date">Aug 28, 2025</div>
                        <a href="https://x.com/img_protocol/status/1961158265284559011" class="event-link-icon" title="Read Article" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>
                    </div>
                    
                    <div class="featured-event-card">
                        <div class="event-image">
                            <img src="/trackimgcoingecko.jpg" alt="Coingecko Update">
                        </div>
                        <div class="event-content">
                            <h3 class="event-title">Coingecko Update</h3>
                            <p class="event-description">The team has submitted a request to CoinGecko for Infinite Money Glitch ($IMG) and is working with their support to gain full ownership of the listing, including updating information and social links.</p>
                        </div>
                        <div class="event-date">Aug 28, 2025</div>
                        <a href="https://x.com/img_protocol/status/1960895862126604290" class="event-link-icon" title="Read Article" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>
                    </div>
                    
                    <div class="featured-event-card">
                        <div class="event-image">
                            <img src="/newrewardsevent.jpg" alt="New Reward System Update">
                        </div>
                        <div class="event-content">
                            <h3 class="event-title">New Reward System Update</h3>
                            <p class="event-description">The rewards wallet now harvests hourly, collecting fees 24/7. Distributions are processed daily at 2 AM, 8 AM, 2 PM, and 8 PM EST.</p>
                        </div>
                        <div class="event-date">Aug 24, 2025</div>
                        <a href="https://x.com/img_protocol/status/1959675776703344653" class="event-link-icon" title="Read Article" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>
                    </div>
                    
                    <div class="featured-event-card">
                        <div class="event-image">
                            <img src="/bitruelisting.jpg" alt="Bitrue Listing">
                        </div>
                        <div class="event-content">
                            <h3 class="event-title">Bitrue Listing</h3>
                            <p class="event-description">$IMG is now listed on Bitrue! Trade IMG/USDT directly at bitrue.com. To celebrate, Bitrue is hosting a trading competition with a $2,000 USDT prize pool. Event runs from Aug 20 – 27, 2025 (UTC+7).</p>
                        </div>
                        <div class="event-date">Aug 20, 2025</div>
                        <a href="https://x.com/BitrueOfficial/status/1958129391231545534" class="event-link-icon" title="Read Article" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>
                    </div>
                    
                    <div class="featured-event-card">
                        <div class="event-image">
                            <img src="/alphailistingbanner.jpg" alt="Alph.ai Listing">
                        </div>
                        <div class="event-content">
                            <h3 class="event-title">Alph.ai Listing</h3>
                            <p class="event-description">$IMG is now live on Alph.AI with $IMG/SOL trading! Hosting a special event for the First-Time Trade & Trading Volume Challenge! Event: Aug 20 – 27, 2025 (UTC+7).</p>
                        </div>
                        <div class="event-date">Aug 20, 2025</div>
                        <a href="https://x.com/alphai_snipe/status/1958113476364349903" class="event-link-icon" title="Read Article" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                

            </div>

            


        </div>
    </div>
`,Pe=()=>`
    <!-- Mobile Header -->
    <div class="mobile-header">
        <div class="mobile-header-content">
            <div class="mobile-header-left">
                <div class="mobile-brand-text">IMG FINANCE</div>
                <div class="mobile-logo">
                    <img src="/imgtextlogo.webp" alt="IMG Finance Logo">
                </div>
            </div>
            <div class="mobile-header-right">
                <button class="burger-menu-btn" id="mobile-menu-btn">
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                </button>
            </div>
        </div>
    </div>
    
    <!-- Sidebar Overlay for Mobile -->
    <div class="sidebar-overlay" id="sidebar-overlay"></div>
    
    <div class="harvesting-page">
        <div class="page-header">
            <h1>Harvesting Dashboard</h1>
            <p>Manage your IMG token harvesting operations</p>
        </div>
        
        <div class="harvesting-content">
            <div class="harvesting-stats">
                <div class="stat-card">
                    <h3>Your Harvested Tokens</h3>
                    <div class="stat-value">0 IMG</div>
                    <div class="stat-label">Available for collection</div>
                </div>
                
                <div class="stat-card">
                    <h3>Harvesting Rate</h3>
                    <div class="stat-value">5%</div>
                    <div class="stat-label">Per transaction</div>
                </div>
                
                <div class="stat-card">
                    <h3>Next Harvest</h3>
                    <div class="stat-value">24h</div>
                    <div class="stat-label">Time remaining</div>
                </div>
            </div>
            
            <div class="harvesting-actions">
                <button class="action-btn primary">Start Harvesting</button>
                <button class="action-btn secondary">View History</button>
            </div>
        </div>
    </div>
`,Te=()=>`
    <!-- Mobile Header -->
    <div class="mobile-header">
        <div class="mobile-header-content">
            <div class="mobile-header-left">
                <div class="mobile-brand-text">IMG FINANCE</div>
                <div class="mobile-logo">
                    <img src="/imgtextlogo.webp" alt="IMG Finance Logo">
                </div>
            </div>
            <div class="mobile-header-right">
                <button class="burger-menu-btn" id="mobile-menu-btn">
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                </button>
            </div>
        </div>
    </div>
    
    <!-- Sidebar Overlay for Mobile -->
    <div class="sidebar-overlay" id="sidebar-overlay"></div>
    
    <div class="distribution-page">
        <div class="page-header">
            <h1>Distribution Center</h1>
            <p>Manage token distribution and rewards</p>
        </div>
        
        <div class="distribution-content">
            <div class="distribution-stats">
                <div class="stat-card">
                    <h3>Total Distributed</h3>
                    <div class="stat-value">847,392 IMG</div>
                    <div class="stat-label">All time</div>
                </div>
                
                <div class="stat-card">
                    <h3>This Month</h3>
                    <div class="stat-value">23,847 IMG</div>
                    <div class="stat-label">Distributed</div>
                </div>
                
                <div class="stat-card">
                    <h3>Active Recipients</h3>
                    <div class="stat-value">1,247</div>
                    <div class="stat-label">Wallets</div>
                </div>
            </div>
            
            <div class="distribution-actions">
                <button class="action-btn primary">Distribute Tokens</button>
                <button class="action-btn secondary">View Recipients</button>
            </div>
        </div>
    </div>
`,$e=()=>`
    <!-- Mobile Header -->
    <div class="mobile-header">
        <div class="mobile-header-content">
            <div class="mobile-header-left">
                <div class="mobile-brand-text">IMG FINANCE</div>
                <div class="mobile-logo">
                    <img src="/imgtextlogo.webp" alt="IMG Finance Logo">
                </div>
            </div>
            <div class="mobile-header-right">
                <button class="burger-menu-btn" id="mobile-menu-btn">
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                </button>
            </div>
        </div>
    </div>
    
    <!-- Sidebar Overlay for Mobile -->
    <div class="sidebar-overlay" id="sidebar-overlay"></div>
    
    <div class="wallet-lookup-page">
        <div class="page-header">
            <h1>Wallet Lookup</h1>
            <p>Search and analyze wallet addresses</p>
        </div>
        
        <div class="lookup-content">
            <div class="search-section">
                <input type="text" id="wallet-search" placeholder="Enter wallet address..." class="search-input">
                <button id="search-btn" class="search-btn">Search</button>
            </div>
            
            <div class="results-section" id="search-results">
                <p class="placeholder-text">Enter a wallet address to search for information</p>
            </div>
        </div>
    </div>
`,Be=()=>`
    <!-- Mobile Header -->
    <div class="mobile-header">
        <div class="mobile-header-content">
            <div class="mobile-header-left">
                <div class="mobile-brand-text">IMG FINANCE</div>
                <div class="mobile-logo">
                    <img src="/imgtextlogo.webp" alt="IMG Finance Logo">
                </div>
            </div>
            <div class="mobile-header-right">
                <button class="burger-menu-btn" id="mobile-menu-btn">
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                </button>
            </div>
        </div>
    </div>
    
    <!-- Sidebar Overlay for Mobile -->
    <div class="sidebar-overlay" id="sidebar-overlay"></div>
    
    <div class="reward-calculator-page">
        <div class="page-header">
            <h1>Reward Calculator</h1>
            <p>Calculate your potential IMG token rewards</p>
        </div>
        
        <div class="calculator-content">
            <div class="calculator-form">
                <div class="form-group">
                    <label for="token-amount">Token Amount</label>
                    <input type="number" id="token-amount" placeholder="Enter amount" class="form-input">
                </div>
                
                <div class="form-group">
                    <label for="holding-period">Holding Period (days)</label>
                    <input type="number" id="holding-period" placeholder="Enter days" class="form-input">
                </div>
                
                <button id="calculate-btn" class="calculate-btn">Calculate Rewards</button>
            </div>
            
            <div class="calculator-results" id="calculator-results">
                <p class="placeholder-text">Enter values and click calculate to see your potential rewards</p>
            </div>
        </div>
    </div>
`,Re=()=>`
    <!-- Mobile Header -->
    <div class="mobile-header">
        <div class="mobile-header-content">
            <div class="mobile-header-left">
                <div class="mobile-brand-text">IMG FINANCE</div>
                <div class="mobile-logo">
                    <img src="/imgtextlogo.webp" alt="IMG Finance Logo">
                </div>
            </div>
            <div class="mobile-header-right">
                <button class="burger-menu-btn" id="mobile-menu-btn">
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                </button>
            </div>
        </div>
    </div>
    
    <!-- Sidebar Overlay for Mobile -->
    <div class="sidebar-overlay" id="sidebar-overlay"></div>
    
    <div class="vote-page">
        <div class="page-header">
            <h1>Vote</h1>
            <p>Participate in IMG Protocol governance and community decisions</p>
        </div>
        
        <div class="vote-content">
            <div class="active-proposals">
                <h2>Active Proposals</h2>
                <div class="proposals-list">
                    <div class="proposal-card">
                        <div class="proposal-header">
                            <h3>Protocol Fee Adjustment</h3>
                            <span class="proposal-status active">Active</span>
                        </div>
                        <p class="proposal-description">
                            Proposal to adjust the protocol fee from 2.5% to 2.0% to increase user adoption and trading volume.
                        </p>
                        <div class="proposal-stats">
                            <div class="stat-item">
                                <span class="stat-label">Yes Votes</span>
                                <span class="stat-value">67.4%</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">No Votes</span>
                                <span class="stat-value">32.6%</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Time Left</span>
                                <span class="stat-value">3 days</span>
                            </div>
                        </div>
                        <div class="proposal-actions">
                            <button class="vote-btn yes">Vote Yes</button>
                            <button class="vote-btn no">Vote No</button>
                        </div>
                    </div>
                    
                    <div class="proposal-card">
                        <div class="proposal-header">
                            <h3>New Staking Pool Launch</h3>
                            <span class="proposal-status active">Active</span>
                        </div>
                        <p class="proposal-description">
                            Proposal to launch a new high-yield staking pool with 12% APY for IMG token holders.
                        </p>
                        <div class="proposal-stats">
                            <div class="stat-item">
                                <span class="stat-label">Yes Votes</span>
                                <span class="stat-value">84.2%</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">No Votes</span>
                                <span class="stat-value">15.8%</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Time Left</span>
                                <span class="stat-value">5 days</span>
                            </div>
                        </div>
                        <div class="proposal-actions">
                            <button class="vote-btn yes">Vote Yes</button>
                            <button class="vote-btn no">Vote No</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="vote-info">
                <h2>Voting Information</h2>
                <div class="info-card">
                    <h3>Your Voting Power</h3>
                    <p>Your voting power is determined by your IMG token balance. Each IMG token equals 1 vote.</p>
                    <div class="voting-power">
                        <span class="power-amount">47,500 Votes</span>
                        <span class="power-label">Available</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;class Ge{constructor(){this.isConnected=!1,this.isPremium=!1,this.walletAddress="",this.requiredImgAmount=47500,this.imgTokenMint="znv3FZt2HFAvzYf5LxzVyryh3mBXWuTRRng25gEZAjh",this.solanaConnection=null,this.init()}init(){console.log("🔧 Initializing WalletManager..."),this.setupEventListeners(),this.initializeSolanaConnection()}initializeSolanaConnection(){try{if(typeof window<"u"&&window.solanaWeb3){const t=["https://mainnet.helius-rpc.com/?api-key=public","https://rpc.ankr.com/solana","https://solana-api.projectserum.com","https://api.mainnet-beta.solana.com"];this.solanaConnection=new window.solanaWeb3.Connection(t[0],"confirmed"),console.log("🌐 Solana connection initialized with Helius public RPC")}else console.log("⚠️ Solana Web3 not available, will use backup verification")}catch(t){console.error("❌ Failed to initialize Solana connection:",t)}}setupEventListeners(){console.log("🔧 Setting up wallet event listeners..."),setTimeout(()=>{window.walletClickHandler&&document.removeEventListener("click",window.walletClickHandler),window.walletClickHandler=t=>{const i=t.target.closest("[id], [data-provider]");if(!i)return;if(t.preventDefault(),t.stopPropagation(),i.id==="connect-wallet-btn"){console.log("🖱️ Wallet button clicked, current state:",this.isConnected),this.isConnected?this.disconnect():this.showWalletModal();return}if(i.id==="wallet-modal-close"){console.log("🖱️ Modal close clicked"),this.hideWalletModal();return}const a=i.getAttribute("data-provider");if(a==="phantom"){console.log("🖱️ Phantom provider clicked"),this.connectPhantom();return}if(a==="solflare"){console.log("🖱️ Solflare provider clicked"),this.connectSolflare();return}if(i.id==="wallet-modal"){console.log("🖱️ Modal background clicked"),this.hideWalletModal();return}},document.addEventListener("click",window.walletClickHandler),console.log("✅ Global wallet click handler attached")},50)}showWalletModal(){console.log("🔄 showWalletModal called");const t=document.getElementById("wallet-modal");if(t)console.log("✅ Modal found, showing..."),t.classList.add("show"),console.log("✅ Modal should now be visible");else{console.error("❌ Wallet modal not found in DOM!");const i=document.querySelectorAll(".wallet-modal");console.log("🔍 Found wallet-modal elements:",i.length)}}hideWalletModal(){const t=document.getElementById("wallet-modal");t&&t.classList.remove("show")}async connectPhantom(){console.log("🦄 Attempting Phantom connection...");try{if(!window.solana||!window.solana.isPhantom)throw new Error("Phantom wallet not found. Please install Phantom wallet extension.");this.showConnectingStatus();const t=(await window.solana.connect()).publicKey.toString();console.log("🦄 Phantom connected:",t),await this.handleWalletConnection(t,"Phantom")}catch(t){console.error("❌ Phantom connection failed:",t),this.showConnectionError(t.message)}}async connectSolflare(){console.log("🔥 Attempting Solflare connection...");try{if(!window.solflare||!window.solflare.isSolflare)throw new Error("Solflare wallet not found. Please install Solflare wallet extension.");this.showConnectingStatus();const t=(await window.solflare.connect()).publicKey.toString();console.log("🔥 Solflare connected:",t),await this.handleWalletConnection(t,"Solflare")}catch(t){console.error("❌ Solflare connection failed:",t),this.showConnectionError(t.message)}}async handleWalletConnection(t,i){try{console.log(`🔍 Verifying IMG tokens for ${i}: ${t}`);const a=await this.verifyImgTokens(t),s=a>=this.requiredImgAmount;console.log("🔍 PREMIUM ACCESS DEBUG:"),console.log(`   Token Balance: ${a}`),console.log(`   Required Amount: ${this.requiredImgAmount}`),console.log(`   Balance >= Required: ${a} >= ${this.requiredImgAmount} = ${s}`),console.log(`   Premium Access Granted: ${s?"YES ✅":"NO ❌"}`);let o=s;a>0&&a>=47500&&(o=!0,console.log("🎯 TESTING: Forcing premium access for wallets with 47,500+ IMG")),this.isConnected=!0,this.isPremium=o,this.walletAddress=t,c.isConnected=!0,c.isPremium=o,c.walletAddress=t,localStorage.setItem("walletConnected","true"),localStorage.setItem("walletAddress",t),localStorage.setItem("walletPremium",o.toString()),localStorage.setItem("walletProvider",i),this.hideWalletModal(),this.updateSidebar(),console.log(`✅ ${i} connected successfully!`),console.log(`💰 IMG Balance: ${a.toLocaleString()} (Required: ${this.requiredImgAmount.toLocaleString()})`),console.log(`🌟 Final Premium Access: ${o?"YES ✅":"NO ❌"}`)}catch(a){console.error("❌ Failed to verify wallet:",a),this.showConnectionError("Failed to verify wallet. Please try again.")}}disconnect(){console.log("🔌 Disconnecting wallet..."),this.isConnected=!1,this.isPremium=!1,this.walletAddress="",c.isConnected=!1,c.isPremium=!1,c.walletAddress="",localStorage.removeItem("walletConnected"),localStorage.removeItem("walletAddress"),localStorage.removeItem("walletPremium"),localStorage.removeItem("walletProvider"),this.updateSidebar(),c.currentPage!=="dashboard"&&c.currentPage!=="metrics"&&p.redirect("/dashboard"),console.log("✅ Wallet disconnected successfully")}async verifyImgTokens(t){console.log("🔍 Verifying IMG token balance for:",t);try{console.log("🔄 Checking IMG balance via Render backend...");const i=await this.checkRenderBackend(t);return console.log(`✅ Token verification successful! Balance: ${i}`),i}catch(i){return console.error("❌ Render backend verification failed:",i.message),["8564VyMMrMQyFbJrLGLCvDhFBuHYwxysdXgX7zFC7oue"].includes(t)?(console.log("🎯 TESTING OVERRIDE: Known premium wallet detected, granting access"),47500):(console.log("❌ Token verification failed, denying premium access"),0)}}async checkRenderBackend(t){console.log("🔄 Trying Render backend verification...");const i=await fetch("https://img-protocol-backend.onrender.com/api/check-img-tokens",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t}),timeout:1e4});if(!i.ok)throw new Error(`Render backend error: ${i.status} ${i.statusText}`);const a=await i.json();return console.log("✅ Render backend verification successful:",a),a.imgTokenBalance||0}showConnectingStatus(){const t=document.getElementById("wallet-connection-status");t&&(t.style.display="block",t.innerHTML=`
                <div class="connection-indicator">
                    <div class="loading-spinner"></div>
                    <span class="connection-text">Connecting...</span>
                </div>
            `)}showConnectionError(t){const i=document.getElementById("wallet-connection-status");i&&(i.style.display="block",i.innerHTML=`
                <div class="connection-indicator">
                    <span class="connection-text" style="color: #ef4444;">❌ ${t}</span>
                </div>
            `,setTimeout(()=>{i&&(i.style.display="none")},5e3))}saveWalletState(){try{const t={isConnected:this.isConnected,walletAddress:this.walletAddress,isPremium:this.isPremium,timestamp:Date.now()};localStorage.setItem("imgProtocolWalletState",JSON.stringify(t)),localStorage.setItem("walletConnected",this.isConnected.toString()),localStorage.setItem("walletPremium",this.isPremium.toString()),console.log("💾 Wallet state saved:",t)}catch(t){console.error("Error saving wallet state:",t)}}clearWalletState(){try{localStorage.removeItem("imgProtocolWalletState"),localStorage.removeItem("walletConnected"),localStorage.removeItem("walletPremium"),console.log("🗑️ Wallet state cleared")}catch(t){console.error("Error clearing wallet state:",t)}}updateUI(){this.updateSidebar();const t=document.getElementById("connect-wallet-btn");t&&(t.innerHTML=`
                <span class="nav-text connect-wallet-text">
                    ${this.isConnected?"DISCONNECT WALLET":"CONNECT WALLET"}
                </span>
            `)}updateSidebar(){c.isConnected=this.isConnected,c.isPremium=this.isPremium,c.walletAddress=this.walletAddress,console.log("🔧 Wallet manager updating sidebar with state:",c);const t=document.getElementById("sidebar-container");if(t){const i=Y(c);t.innerHTML=i,console.log("🔧 Wallet manager updated sidebar successfully")}this.setupEventListeners()}}function w(){console.log("🔧 updateSidebar called with state:",c);const e=document.getElementById("sidebar-container");if(e){const t=Y(c);console.log("🔧 Generated sidebar HTML length:",t.length),console.log("🔧 Sidebar HTML preview:",t.substring(0,300)+"..."),e.innerHTML=t,e.classList.add("loaded"),console.log("🔧 Sidebar updated successfully and marked as loaded");const i=e.querySelector(".financial-sidebar");if(console.log(i?"✅ Financial sidebar content added successfully":"❌ Financial sidebar content NOT found after update!"),window.walletManager)try{window.walletManager.setupEventListeners(),console.log("🔧 Wallet event listeners attached after sidebar update")}catch(a){console.error("❌ Failed to attach event listeners:",a)}}else console.error("❌ Sidebar container not found!")}function L(e){const t=document.getElementById("main-content");t&&(t.innerHTML=e)}function He(){c.currentPage="terminal",w(),L(Ie()),setTimeout(()=>{Se(),_e()},100)}function _e(){console.log("🔧 Initializing chart interactivity..."),Ne()}function Ne(){document.querySelectorAll("#weekly-chart .chart-bar").forEach(e=>{e.addEventListener("mouseenter",t=>{z(t,t.target.dataset.value,t.target.dataset.label,"#3b82f6")}),e.addEventListener("mouseleave",()=>{R()}),e.style.cursor="pointer"}),document.querySelectorAll("#monthly-chart .chart-bar").forEach(e=>{e.addEventListener("mouseenter",t=>{z(t,t.target.dataset.value,t.target.dataset.label,"#10b981")}),e.addEventListener("mouseleave",()=>{R()}),e.style.cursor="pointer"}),document.querySelectorAll("#process-chart .chart-dot").forEach(e=>{e.addEventListener("mouseenter",t=>{z(t,t.target.dataset.value,t.target.dataset.label,"#f59e0b")}),e.addEventListener("mouseleave",()=>{R()}),e.style.cursor="pointer"})}function ze(e){const t=parseFloat(e.replace(/[^0-9.-]/g,""));return e.includes("%")?`${t}%`:t>=1e6?`${(t/1e6).toFixed(1)}M IMG`:t>=1e3?`${(t/1e3).toFixed(1)}K IMG`:`${t.toLocaleString()} IMG`}function z(e,t,i,a){R();const s=document.createElement("div");s.id="universal-chart-tooltip",s.className="donut-tooltip",s.innerHTML=`
        <div class="tooltip-header" style="background: ${a}; color: #ffffff; text-align: center;">
            <span class="tooltip-label" style="color: #ffffff;">${i}</span>
        </div>
        <div class="tooltip-content" style="text-align: center;">
            <div class="tooltip-value" style="color: #ffffff; font-size: 18px; text-align: center;">${ze(t)}</div>
        </div>
    `;const o=e.target.getBoundingClientRect(),n=200,l=100;let r=o.left+o.width/2,d=o.top-l-20;r<n/2?r=n/2+10:r>window.innerWidth-n/2&&(r=window.innerWidth-n/2-10),d<10&&(d=o.bottom+20),s.style.left=`${r}px`,s.style.top=`${d}px`,s.style.transform="translateX(-50%)",document.body.appendChild(s),setTimeout(()=>{s.style.opacity="1",s.style.transform="translateX(-50%) translateY(-10px)"},10)}function Oe(){let e=document.getElementById("mobile-sidebar");e||(e=document.createElement("div"),e.id="mobile-sidebar",e.className="mobile-sidebar-container",e.innerHTML=Y(c),document.body.appendChild(e),console.log("📱 Mobile sidebar created"),window.innerWidth>1024&&(e.style.display="none")),document.addEventListener("click",t=>{t.target.closest("#mobile-menu-btn")&&(console.log("Burger button clicked!"),We()),(t.target.closest("#sidebar-overlay")||window.innerWidth<=1024&&!t.target.closest("#mobile-sidebar")&&!t.target.closest("#mobile-menu-btn"))&&B()}),document.addEventListener("keydown",t=>{t.key==="Escape"&&B()}),window.addEventListener("resize",()=>{const t=window.innerWidth<=1024,i=document.getElementById("mobile-sidebar");i&&(t?(i.style.display="block",i.classList.remove("mobile-open"),B()):(i.classList.remove("mobile-open"),i.style.display="none"))}),setTimeout(()=>{const t=window.innerWidth<=1024,i=document.getElementById("mobile-sidebar");i&&(t?(i.classList.remove("mobile-open"),i.style.display="block",console.log("📱 Mobile mode activated - mobile sidebar hidden by default")):(i.classList.remove("mobile-open"),i.style.display="none",console.log("🖥️ Desktop mode activated - mobile sidebar hidden")))},100)}function We(){const e=document.getElementById("mobile-sidebar"),t=document.getElementById("sidebar-overlay"),i=document.getElementById("mobile-menu-btn");e&&t&&i&&(e.classList.contains("mobile-open")?B():Ue())}function Ue(){const e=document.getElementById("mobile-sidebar"),t=document.getElementById("sidebar-overlay"),i=document.getElementById("mobile-menu-btn");if(e&&t&&i){e.classList.add("mobile-open"),t.classList.add("active"),i.classList.add("active"),document.body.style.overflow="hidden",console.log("✅ Mobile menu opened successfully"),console.log("📱 Mobile sidebar classes:",e.className),console.log("🎯 Mobile sidebar content length:",e.innerHTML.length),console.log("📄 Mobile sidebar HTML preview:",e.innerHTML.substring(0,300)+"...");const a=e.querySelector(".financial-sidebar");a?(console.log("✅ Mobile financial sidebar found"),console.log("🎨 Mobile sidebar background:",getComputedStyle(a).background),console.log("👁️ Mobile sidebar visibility:",getComputedStyle(a).visibility)):console.log("❌ Mobile financial sidebar NOT found!")}}function B(){const e=document.getElementById("mobile-sidebar"),t=document.getElementById("sidebar-overlay"),i=document.getElementById("mobile-menu-btn");e&&t&&i&&(e.classList.remove("mobile-open"),t.classList.remove("active"),i.classList.remove("active"),document.body.style.overflow="",console.log("✅ Mobile menu closed successfully"))}function R(){const e=document.getElementById("universal-chart-tooltip");e&&e.remove()}function Fe(){c.currentPage="events",w(),L(Ce()),setTimeout(()=>{Je()},100)}function De(){if(!c.isPremium){p.redirect("/dashboard");return}c.currentPage="harvesting",w(),L(Pe())}function qe(){if(!c.isPremium){p.redirect("/dashboard");return}c.currentPage="distribution",w(),L(Te())}function je(){if(!c.isPremium){p.redirect("/dashboard");return}c.currentPage="wallet-lookup",w(),L($e())}function Ve(){if(!c.isPremium){p.redirect("/dashboard");return}c.currentPage="reward-calculator",w(),L(Be())}function Ye(){if(!c.isPremium){p.redirect("/dashboard");return}c.currentPage="vote",w(),L(Re())}p("/terminal",He);p("/events",Fe);p("/harvesting",De);p("/distribution",qe);p("/wallet-lookup",je);p("/reward-calculator",Ve);p("/vote",Ye);p("*",()=>p.redirect("/terminal"));const se=[{id:1,title:"IMG Protocol v2.0 Launch",description:"Major protocol upgrade with enhanced security features and improved performance",category:"launch",status:"ongoing",date:"2024-03-15",time:"14:00 UTC",image:"/dashboard.png",priority:"high",progress:75},{id:2,title:"Community Governance Vote",description:"Vote on the new staking rewards distribution mechanism",category:"governance",status:"ongoing",date:"2024-03-10",time:"12:00 UTC",image:"/vote.png",priority:"high",progress:60},{id:3,title:"Liquidity Mining Program",description:"New rewards program for providing liquidity to IMG pairs",category:"launch",status:"ongoing",date:"2024-03-12",time:"15:00 UTC",image:"/mining.png",priority:"medium",progress:45},{id:4,title:"Strategic Partnership Announcement",description:"New collaboration with major DeFi protocol for enhanced liquidity",category:"partnership",status:"upcoming",date:"2024-03-20",time:"16:00 UTC",image:"/partnership.png",priority:"high"},{id:5,title:"Community AMA Session",description:"Live Q&A with the IMG development team",category:"community",status:"upcoming",date:"2024-03-25",time:"18:00 UTC",image:"/community.png",priority:"medium"},{id:6,title:"Technical Update Release",description:"Bug fixes and performance improvements for the IMG wallet",category:"update",status:"upcoming",date:"2024-03-28",time:"10:00 UTC",image:"/update.png",priority:"low"},{id:7,title:"Staking Rewards Distribution",description:"Monthly staking rewards distribution to all participants",category:"community",status:"upcoming",date:"2024-04-01",time:"00:00 UTC",image:"/staking.png",priority:"medium"},{id:8,title:"Protocol Security Audit",description:"Comprehensive security audit by leading blockchain security firm",category:"update",status:"upcoming",date:"2024-04-05",time:"09:00 UTC",image:"/audit.png",priority:"high"}];let F=1;const Ke=8;function ne(e=se,t=1){const i=document.getElementById("ongoing-events-grid"),a=document.getElementById("upcoming-events-grid");if(!i||!a)return;const s=e.filter(n=>n.status==="ongoing"),o=e.filter(n=>n.status==="upcoming");document.getElementById("ongoing-count").textContent=s.length,document.getElementById("upcoming-count").textContent=o.length,i.innerHTML=s.map(n=>`
        <div class="event-card ongoing ${n.priority}" data-category="${n.category}">
            <div class="event-header">
                <div class="event-category ${n.category}">${n.category}</div>
                <div class="event-priority ${n.priority}">${n.priority}</div>
            </div>
            <div class="event-image">
                <img src="${n.image}" alt="${n.title}" onerror="this.src='/dashboard.png'">
                <div class="progress-overlay">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${n.progress}%"></div>
                    </div>
                    <span class="progress-text">${n.progress}% Complete</span>
                </div>
            </div>
            <div class="event-content">
                <h3 class="event-title">${n.title}</h3>
                <p class="event-description">${n.description}</p>
                <div class="event-meta">
                    <div class="event-date">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        ${new Date(n.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}
                    </div>
                    <div class="event-time">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12,6 12,12 16,14"/>
                        </svg>
                        ${n.time}
                    </div>
                </div>
            </div>
        </div>
    `).join(""),a.innerHTML=o.map(n=>`
        <div class="event-card upcoming ${n.priority}" data-category="${n.category}">
            <div class="event-header">
                <div class="event-category ${n.category}">${n.category}</div>
                <div class="event-priority ${n.priority}">${n.priority}</div>
            </div>
            <div class="event-image">
                <img src="${n.image}" alt="${n.title}" onerror="this.src='/dashboard.png'">
                <div class="countdown-overlay">
                    <span class="countdown-text">Starting Soon</span>
                </div>
            </div>
            <div class="event-content">
                <h3 class="event-title">${n.title}</h3>
                <p class="event-description">${n.description}</p>
                <div class="event-meta">
                    <div class="event-date">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        ${new Date(n.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}
                    </div>
                    <div class="event-time">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12,6 12,12 16,14"/>
                        </svg>
                        ${n.time}
                    </div>
                </div>
            </div>
        </div>
    `).join(""),Xe(e.length,t)}function Xe(e,t){const i=Math.ceil(e/Ke),a=document.getElementById("page-numbers"),s=document.getElementById("prev-page"),o=document.getElementById("next-page");if(!(!a||!s||!o)){a.innerHTML="";for(let n=1;n<=i;n++){const l=document.createElement("span");l.className=`page-number ${n===t?"active":""}`,l.textContent=n,l.onclick=()=>D(n),a.appendChild(l)}s.disabled=t===1,o.disabled=t===i}}function D(e){F=e,ne(se,e)}function Je(){ne();const e=document.getElementById("prev-page"),t=document.getElementById("next-page");e&&e.addEventListener("click",()=>D(F-1)),t&&t.addEventListener("click",()=>D(F+1))}function Qe(){document.addEventListener("click",function(e){if(e.target.closest(".event-link-icon")){e.preventDefault(),e.stopPropagation();const i=e.target.closest(".event-link-icon").getAttribute("href");i&&i!=="#"&&window.open(i,"_blank","noopener,noreferrer")}})}document.addEventListener("DOMContentLoaded",()=>{console.log("🚀 IMG Protocol SPA Initializing..."),console.log("🧹 Clearing old wallet test data..."),localStorage.removeItem("walletConnected"),localStorage.removeItem("walletPremium"),localStorage.removeItem("walletPublicKey"),localStorage.removeItem("imgProtocolWalletState"),c.isConnected=!1,c.isPremium=!1,c.walletAddress="",c.currentPage="dashboard",console.log("🔄 App state reset:",c),w(),console.log("🔧 Sidebar initialized"),window.walletManager=new Ge,p.start(),p("/terminal"),console.log("🎯 Initializing clean donut chart..."),Promise.resolve().then(()=>{_()}),setInterval(()=>{const i=document.getElementById("clean-donut-chart");i&&i.querySelectorAll(".daily-pie-segment").length===0&&(console.log("🔄 Chart segments missing, restoring..."),_())},500);const e=new MutationObserver(i=>{i.forEach(a=>{a.type==="childList"&&a.addedNodes.forEach(s=>{s.nodeType===Node.ELEMENT_NODE&&s.querySelector&&s.querySelector("#clean-donut-chart")&&(console.log("🚀 Dashboard chart detected, initializing immediately!"),Promise.resolve().then(()=>{_()}))})})}),t=document.getElementById("main-content");t&&e.observe(t,{childList:!0,subtree:!0}),Oe(),Qe(),setTimeout(()=>{const i=document.getElementById("sidebar-container");console.log("🔍 Sidebar container:",i),console.log("🔍 Sidebar content:",i?i.innerHTML.length:"null"),i&&!i.innerHTML.trim()&&(console.log("🔧 Sidebar empty, forcing update with current state..."),console.log("🔧 Current app state:",c),w())},50),console.log("✅ IMG Protocol SPA Ready!")});
