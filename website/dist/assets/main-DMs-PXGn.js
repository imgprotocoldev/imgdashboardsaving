(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();var W=Array.isArray||function(t){return Object.prototype.toString.call(t)=="[object Array]"},$=dt,xt=Y,St=Pt,Et=lt,kt=rt,Lt=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function Y(t){for(var e=[],s=0,i=0,o="",a;(a=Lt.exec(t))!=null;){var l=a[0],n=a[1],r=a.index;if(o+=t.slice(i,r),i=r+l.length,n){o+=n[1];continue}o&&(e.push(o),o="");var d=a[2],u=a[3],f=a[4],g=a[5],w=a[6],C=a[7],m=w==="+"||w==="*",T=w==="?"||w==="*",B=d||"/",y=f||g||(C?".*":"[^"+B+"]+?");e.push({name:u||s++,prefix:d||"",delimiter:B,optional:T,repeat:m,pattern:Tt(y)})}return i<t.length&&(o+=t.substr(i)),o&&e.push(o),e}function Pt(t){return lt(Y(t))}function lt(t){for(var e=new Array(t.length),s=0;s<t.length;s++)typeof t[s]=="object"&&(e[s]=new RegExp("^"+t[s].pattern+"$"));return function(i){for(var o="",a=i||{},l=0;l<t.length;l++){var n=t[l];if(typeof n=="string"){o+=n;continue}var r=a[n.name],d;if(r==null){if(n.optional)continue;throw new TypeError('Expected "'+n.name+'" to be defined')}if(W(r)){if(!n.repeat)throw new TypeError('Expected "'+n.name+'" to not repeat, but received "'+r+'"');if(r.length===0){if(n.optional)continue;throw new TypeError('Expected "'+n.name+'" to not be empty')}for(var u=0;u<r.length;u++){if(d=encodeURIComponent(r[u]),!e[l].test(d))throw new TypeError('Expected all "'+n.name+'" to match "'+n.pattern+'", but received "'+d+'"');o+=(u===0?n.prefix:n.delimiter)+d}continue}if(d=encodeURIComponent(r),!e[l].test(d))throw new TypeError('Expected "'+n.name+'" to match "'+n.pattern+'", but received "'+d+'"');o+=n.prefix+d}return o}}function et(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function Tt(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function J(t,e){return t.keys=e,t}function nt(t){return t.sensitive?"":"i"}function Mt(t,e){var s=t.source.match(/\((?!\?)/g);if(s)for(var i=0;i<s.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return J(t,e)}function At(t,e,s){for(var i=[],o=0;o<t.length;o++)i.push(dt(t[o],e,s).source);var a=new RegExp("(?:"+i.join("|")+")",nt(s));return J(a,e)}function Ct(t,e,s){for(var i=Y(t),o=rt(i,s),a=0;a<i.length;a++)typeof i[a]!="string"&&e.push(i[a]);return J(o,e)}function rt(t,e){e=e||{};for(var s=e.strict,i=e.end!==!1,o="",a=t[t.length-1],l=typeof a=="string"&&/\/$/.test(a),n=0;n<t.length;n++){var r=t[n];if(typeof r=="string")o+=et(r);else{var d=et(r.prefix),u=r.pattern;r.repeat&&(u+="(?:"+d+u+")*"),r.optional?d?u="(?:"+d+"("+u+"))?":u="("+u+")?":u=d+"("+u+")",o+=u}}return s||(o=(l?o.slice(0,-2):o)+"(?:\\/(?=$))?"),i?o+="$":o+=s&&l?"":"(?=\\/|$)",new RegExp("^"+o,nt(e))}function dt(t,e,s){return e=e||[],W(e)?s||(s={}):(s=e,e=[]),t instanceof RegExp?Mt(t,e):W(t)?At(t,e,s):Ct(t,e,s)}$.parse=xt;$.compile=St;$.tokensToFunction=Et;$.tokensToRegExp=kt;var A=typeof document<"u",b=typeof window<"u",q=typeof history<"u",$t=typeof process<"u",_=A&&document.ontouchstart?"touchstart":"click",S=b&&!!(window.history.location||window.location);function p(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}p.prototype.configure=function(t){var e=t||{};this._window=e.window||b&&window,this._decodeURLComponents=e.decodeURLComponents!==!1,this._popstate=e.popstate!==!1&&b,this._click=e.click!==!1&&A,this._hashbang=!!e.hashbang;var s=this._window;this._popstate?s.addEventListener("popstate",this._onpopstate,!1):b&&s.removeEventListener("popstate",this._onpopstate,!1),this._click?s.document.addEventListener(_,this.clickHandler,!1):A&&s.document.removeEventListener(_,this.clickHandler,!1),this._hashbang&&b&&!q?s.addEventListener("hashchange",this._onpopstate,!1):b&&s.removeEventListener("hashchange",this._onpopstate,!1)};p.prototype.base=function(t){if(arguments.length===0)return this._base;this._base=t};p.prototype._getBase=function(){var t=this._base;if(t)return t;var e=b&&this._window&&this._window.location;return b&&this._hashbang&&e&&e.protocol==="file:"&&(t=e.pathname),t};p.prototype.strict=function(t){if(arguments.length===0)return this._strict;this._strict=t};p.prototype.start=function(t){var e=t||{};if(this.configure(e),e.dispatch!==!1){this._running=!0;var s;if(S){var i=this._window,o=i.location;this._hashbang&&~o.hash.indexOf("#!")?s=o.hash.substr(2)+o.search:this._hashbang?s=o.search+o.hash:s=o.pathname+o.search+o.hash}this.replace(s,null,!0,e.dispatch)}};p.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(_,this.clickHandler,!1),b&&t.removeEventListener("popstate",this._onpopstate,!1),b&&t.removeEventListener("hashchange",this._onpopstate,!1)}};p.prototype.show=function(t,e,s,i){var o=new I(t,e,this),a=this.prevContext;return this.prevContext=o,this.current=o.path,s!==!1&&this.dispatch(o,a),o.handled!==!1&&i!==!1&&o.pushState(),o};p.prototype.back=function(t,e){var s=this;if(this.len>0){var i=this._window;q&&i.history.back(),this.len--}else setTimeout(t?function(){s.show(t,e)}:function(){s.show(s._getBase(),e)})};p.prototype.redirect=function(t,e){var s=this;typeof t=="string"&&typeof e=="string"&&G.call(this,t,function(i){setTimeout(function(){s.replace(e)},0)}),typeof t=="string"&&typeof e>"u"&&setTimeout(function(){s.replace(t)},0)};p.prototype.replace=function(t,e,s,i){var o=new I(t,e,this),a=this.prevContext;return this.prevContext=o,this.current=o.path,o.init=s,o.save(),i!==!1&&this.dispatch(o,a),o};p.prototype.dispatch=function(t,e){var s=0,i=0,o=this;function a(){var n=o.exits[i++];if(!n)return l();n(e,a)}function l(){var n=o.callbacks[s++];if(t.path!==o.current){t.handled=!1;return}if(!n)return It.call(o,t);n(t,l)}e?a():l()};p.prototype.exit=function(t,e){if(typeof t=="function")return this.exit("*",t);for(var s=new R(t,null,this),i=1;i<arguments.length;++i)this.exits.push(s.middleware(arguments[i]))};p.prototype.clickHandler=function(t){if(this._which(t)===1&&!(t.metaKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented){var e=t.target,s=t.path||(t.composedPath?t.composedPath():null);if(s){for(var i=0;i<s.length;i++)if(s[i].nodeName&&s[i].nodeName.toUpperCase()==="A"&&s[i].href){e=s[i];break}}for(;e&&e.nodeName.toUpperCase()!=="A";)e=e.parentNode;if(!(!e||e.nodeName.toUpperCase()!=="A")){var o=typeof e.href=="object"&&e.href.constructor.name==="SVGAnimatedString";if(!(e.hasAttribute("download")||e.getAttribute("rel")==="external")){var a=e.getAttribute("href");if(!(!this._hashbang&&this._samePath(e)&&(e.hash||a==="#"))&&!(a&&a.indexOf("mailto:")>-1)&&!(o?e.target.baseVal:e.target)&&!(!o&&!this.sameOrigin(e.href))){var l=o?e.href.baseVal:e.pathname+e.search+(e.hash||"");l=l[0]!=="/"?"/"+l:l,$t&&l.match(/^\/[a-zA-Z]:\//)&&(l=l.replace(/^\/[a-zA-Z]:\//,"/"));var n=l,r=this._getBase();l.indexOf(r)===0&&(l=l.substr(r.length)),this._hashbang&&(l=l.replace("#!","")),!(r&&n===l&&(!S||this._window.location.protocol!=="file:"))&&(t.preventDefault(),this.show(n))}}}}};p.prototype._onpopstate=(function(){var t=!1;return b?(A&&document.readyState==="complete"?t=!0:window.addEventListener("load",function(){setTimeout(function(){t=!0},0)}),function(e){if(t){var s=this;if(e.state){var i=e.state.path;s.replace(i,e.state)}else if(S){var o=s._window.location;s.show(o.pathname+o.search+o.hash,void 0,void 0,!1)}}}):function(){}})();p.prototype._which=function(t){return t=t||b&&this._window.event,t.which==null?t.button:t.which};p.prototype._toURL=function(t){var e=this._window;if(typeof URL=="function"&&S)return new URL(t,e.location.toString());if(A){var s=e.document.createElement("a");return s.href=t,s}};p.prototype.sameOrigin=function(t){if(!t||!S)return!1;var e=this._toURL(t),s=this._window,i=s.location;return i.protocol===e.protocol&&i.hostname===e.hostname&&(i.port===e.port||i.port===""&&(e.port==80||e.port==443))};p.prototype._samePath=function(t){if(!S)return!1;var e=this._window,s=e.location;return t.pathname===s.pathname&&t.search===s.search};p.prototype._decodeURLEncodedURIComponent=function(t){return typeof t!="string"?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t};function ct(){var t=new p;function e(){return G.apply(t,arguments)}return e.callbacks=t.callbacks,e.exits=t.exits,e.base=t.base.bind(t),e.strict=t.strict.bind(t),e.start=t.start.bind(t),e.stop=t.stop.bind(t),e.show=t.show.bind(t),e.back=t.back.bind(t),e.redirect=t.redirect.bind(t),e.replace=t.replace.bind(t),e.dispatch=t.dispatch.bind(t),e.exit=t.exit.bind(t),e.configure=t.configure.bind(t),e.sameOrigin=t.sameOrigin.bind(t),e.clickHandler=t.clickHandler.bind(t),e.create=ct,Object.defineProperty(e,"len",{get:function(){return t.len},set:function(s){t.len=s}}),Object.defineProperty(e,"current",{get:function(){return t.current},set:function(s){t.current=s}}),e.Context=I,e.Route=R,e}function G(t,e){if(typeof t=="function")return G.call(this,"*",t);if(typeof e=="function")for(var s=new R(t,null,this),i=1;i<arguments.length;++i)this.callbacks.push(s.middleware(arguments[i]));else typeof t=="string"?this[typeof e=="string"?"redirect":"show"](t,e):this.start(t)}function It(t){if(!t.handled){var e,s=this,i=s._window;s._hashbang?e=S&&this._getBase()+i.location.hash.replace("#!",""):e=S&&i.location.pathname+i.location.search,e!==t.canonicalPath&&(s.stop(),t.handled=!1,S&&(i.location.href=t.canonicalPath))}}function Rt(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function I(t,e,s){var i=this.page=s||G,o=i._window,a=i._hashbang,l=i._getBase();t[0]==="/"&&t.indexOf(l)!==0&&(t=l+(a?"#!":"")+t);var n=t.indexOf("?");this.canonicalPath=t;var r=new RegExp("^"+Rt(l));if(this.path=t.replace(r,"")||"/",a&&(this.path=this.path.replace("#!","")||"/"),this.title=A&&o.document.title,this.state=e||{},this.state.path=t,this.querystring=~n?i._decodeURLEncodedURIComponent(t.slice(n+1)):"",this.pathname=i._decodeURLEncodedURIComponent(~n?t.slice(0,n):t),this.params={},this.hash="",!a){if(!~this.path.indexOf("#"))return;var d=this.path.split("#");this.path=this.pathname=d[0],this.hash=i._decodeURLEncodedURIComponent(d[1])||"",this.querystring=this.querystring.split("#")[0]}}I.prototype.pushState=function(){var t=this.page,e=t._window,s=t._hashbang;t.len++,q&&e.history.pushState(this.state,this.title,s&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};I.prototype.save=function(){var t=this.page;q&&t._window.history.replaceState(this.state,this.title,t._hashbang&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};function R(t,e,s){var i=this.page=s||Q,o=e||{};o.strict=o.strict||i._strict,this.path=t==="*"?"(.*)":t,this.method="GET",this.regexp=$(this.path,this.keys=[],o)}R.prototype.middleware=function(t){var e=this;return function(s,i){if(e.match(s.path,s.params))return s.routePath=e.path,t(s,i);i()}};R.prototype.match=function(t,e){var s=this.keys,i=t.indexOf("?"),o=~i?t.slice(0,i):t,a=this.regexp.exec(decodeURIComponent(o));if(!a)return!1;delete e[0];for(var l=1,n=a.length;l<n;++l){var r=s[l-1],d=this.page._decodeURLEncodedURIComponent(a[l]);(d!==void 0||!hasOwnProperty.call(e,r.name))&&(e[r.name]=d)}return!0};var Q=ct(),h=Q,Dt=Q;h.default=Dt;let c={isConnected:!1,isPremium:!1,walletAddress:"",currentPage:"dashboard"};const X=t=>`
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
                <div class="tab-item ${t.currentPage==="terminal"?"active":""}" data-page="terminal">
                    <a href="/terminal" class="tab-link">
                        <img src="/dashboard.png" alt="" class="tab-icon">
                        <span class="tab-label">Terminal</span>
                    </a>
                </div>

                <div class="tab-item ${t.currentPage==="events"?"active":""}" data-page="events">
                    <a href="/events" class="tab-link">
                        <img src="/calendar.png" alt="" class="tab-icon">
                        <span class="tab-label">Events</span>
                    </a>
                </div>

                ${t.isPremium?`
                    <div class="tab-item ${t.currentPage==="harvesting"?"active":""}" data-page="harvesting">
                        <a href="/harvesting" class="tab-link premium-tab">
                            <img src="/harvesting.png" alt="" class="tab-icon">
                            <span class="tab-label">Harvesting</span>
                            <span class="premium-badge">Premium</span>
                        </a>
                    </div>

                    <div class="tab-item ${t.currentPage==="distribution"?"active":""}" data-page="distribution">
                        <a href="/distribution" class="tab-link premium-tab">
                            <img src="/distribution.png" alt="" class="tab-icon">
                            <span class="tab-label">Distribution</span>
                            <span class="premium-badge">Premium</span>
                        </a>
                    </div>

                    <div class="tab-item ${t.currentPage==="wallet-lookup"?"active":""}" data-page="wallet-lookup">
                        <a href="/wallet-lookup" class="tab-link premium-tab">
                            <img src="/wallet.png" alt="" class="tab-icon">
                            <span class="tab-label">Wallet Lookup</span>
                            <span class="premium-badge">Premium</span>
                        </a>
                    </div>

                    <div class="tab-item ${t.currentPage==="reward-calculator"?"active":""}" data-page="reward-calculator">
                        <a href="/reward-calculator" class="tab-link premium-tab">
                            <img src="/calculator.png" alt="" class="tab-icon">
                            <span class="tab-label">Rewards</span>
                            <span class="premium-badge">Premium</span>
                        </a>
                    </div>

                    <div class="tab-item ${t.currentPage==="vote"?"active":""}" data-page="vote">
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
            ${t.isConnected?"":`
                <!-- Premium Info Banner (only when not connected) -->
                <div class="premium-info-banner">
                    <div class="banner-header">
                        <span class="banner-title">Premium Dashboard</span>
                    </div>
                    <div class="banner-subtitle">Must hold 50k</div>
                    <div class="banner-action">Connect Wallet to unlock</div>
                </div>
            `}
            
            ${t.isConnected?`
                <div class="wallet-status-compact">
                    <div class="wallet-info-row">
                        <span class="wallet-label">Wallet</span>
                        <span class="wallet-address-short">
                            ${t.walletAddress.length>8?t.walletAddress.substring(0,4)+"..."+t.walletAddress.substring(t.walletAddress.length-4):t.walletAddress}
                        </span>
                    </div>
                    <div class="premium-status-row">
                        <span class="premium-label">Access</span>
                        <div class="premium-badge ${t.isPremium?"premium-active":"standard-active"}">
                            <div class="premium-indicator ${t.isPremium?"premium-dot":"standard-dot"}"></div>
                            <span class="premium-text">${t.isPremium?"Premium":"Standard"}</span>
                        </div>
                    </div>
                </div>
            `:""}
            
            <button id="connect-wallet-btn" class="wallet-connect-btn ${t.isConnected?"connected":"disconnected"}">
                <span class="wallet-text">
                    ${t.isConnected?"Disconnect Wallet":"Connect Wallet"}
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
`,Bt=()=>`
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
                                
                                <!-- Watermark larger and centered -->
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
                                
                                <!-- Watermark larger and centered -->
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
                                
                                <!-- Watermark larger and centered -->
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
                                    <span class="daily-breakdown-value treasury-value">0.22441</span>
                                </div>
                                <div class="daily-breakdown-item">
                                    <div class="daily-breakdown-label">
                                        <div class="daily-color-dot" style="background: #3b82f6;"></div>
                                        <span>HOLDER EARNINGS</span>
                                    </div>
                                    <span class="daily-breakdown-value holders-value">0.17742</span>
                                </div>
                                <div class="daily-breakdown-item">
                                    <div class="daily-breakdown-label">
                                        <div class="daily-color-dot" style="background: #f59e0b;"></div>
                                        <span>INFRA WALLET</span>
                                    </div>
                                    <span class="daily-breakdown-value infra-value">0.02191</span>
                                </div>
                                <div class="daily-breakdown-item">
                                    <div class="daily-breakdown-label">
                                        <div class="daily-color-dot" style="background: #ef4444;"></div>
                                        <span>NET BALANCE</span>
                                    </div>
                                    <span class="daily-breakdown-value net-value">0.00500</span>
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
`;function N(t,e,s,i,o,a){const l=(o-90)*Math.PI/180,n=(a-90)*Math.PI/180,r=t+s*Math.cos(l),d=e+s*Math.sin(l),u=t+s*Math.cos(n),f=e+s*Math.sin(n),g=t+i*Math.cos(n),w=e+i*Math.sin(n),C=t+i*Math.cos(l),m=e+i*Math.sin(l),T=Math.abs(a-o)>180?1:0;return`M ${r} ${d} A ${s} ${s} 0 ${T} 1 ${u} ${f} L ${g} ${w} A ${i} ${i} 0 ${T} 0 ${C} ${m} Z`}function st(t){const e=t.treasury+t.holders+t.infra+t.net;console.log("🔄 Updating donut chart with data:",t),console.log("📊 Total:",e);const s=t.treasury/e*100,i=t.holders/e*100,o=t.infra/e*100,a=t.net/e*100;console.log("🎯 Percentages:",{treasuryPercent:s,holdersPercent:i,infraPercent:o,netPercent:a});const l=document.getElementById("clean-donut-chart");if(l){l.querySelectorAll(".daily-pie-segment").forEach(wt=>wt.remove());const r=160,d=160,u=120,f=80;let g=0;const w=s/100*360,C=N(r,d,u,f,g,g+w),m=document.createElementNS("http://www.w3.org/2000/svg","path");m.setAttribute("d",C),m.setAttribute("fill","#10b981"),m.setAttribute("class","daily-pie-segment treasury-segment"),m.setAttribute("data-label","TREASURY INFLOW"),m.setAttribute("data-value",`${t.treasury.toFixed(5)}`),m.setAttribute("data-percentage",`${Math.round(s)}%`),m.setAttribute("data-color","#10b981"),l.appendChild(m),g+=w;const T=i/100*360,B=N(r,d,u,f,g,g+T),y=document.createElementNS("http://www.w3.org/2000/svg","path");y.setAttribute("d",B),y.setAttribute("fill","#3b82f6"),y.setAttribute("class","daily-pie-segment holders-segment"),y.setAttribute("data-label","HOLDER EARNINGS"),y.setAttribute("data-value",`${t.holders.toFixed(5)}`),y.setAttribute("data-percentage",`${Math.round(i)}%`),y.setAttribute("data-color","#3b82f6"),l.appendChild(y),g+=T;const tt=o/100*360,bt=N(r,d,u,f,g,g+tt),k=document.createElementNS("http://www.w3.org/2000/svg","path");k.setAttribute("d",bt),k.setAttribute("fill","#f59e0b"),k.setAttribute("class","daily-pie-segment infra-segment"),k.setAttribute("data-label","INFRA WALLET"),k.setAttribute("data-value",`${t.infra.toFixed(5)}`),k.setAttribute("data-percentage",`${Math.round(o)}%`),k.setAttribute("data-color","#f59e0b"),l.appendChild(k),g+=tt;const ft=a/100*360,yt=N(r,d,u,f,g,g+ft),L=document.createElementNS("http://www.w3.org/2000/svg","path");L.setAttribute("d",yt),L.setAttribute("fill","#ef4444"),L.setAttribute("class","daily-pie-segment net-segment"),L.setAttribute("data-label","NET BALANCE"),L.setAttribute("data-value",`${t.net.toFixed(5)}`),L.setAttribute("data-percentage",`${Math.round(a)}%`),L.setAttribute("data-color","#ef4444"),l.appendChild(L)}const n=document.querySelector(".daily-pie-total");n&&(n.textContent="IMG"),console.log("✅ Donut chart updated with new data:",t),Nt()}function Nt(){document.querySelectorAll(".daily-pie-segment").forEach(t=>{t.style.cursor="pointer",t.addEventListener("mouseenter",e=>{it(e,t),t.style.filter="brightness(1.2) drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))"}),t.addEventListener("mouseleave",e=>{V(),t.style.filter="none"}),t.addEventListener("click",e=>{it(e,t),setTimeout(()=>{V()},3e3)})})}function it(t,e){const s=e.getAttribute("data-label"),i=e.getAttribute("data-value");e.getAttribute("data-percentage");const o=e.getAttribute("data-color");V();const a=document.createElement("div");a.id="donut-tooltip",a.className="donut-tooltip",a.innerHTML=`
        <div class="tooltip-header" style="background: ${o}; color: #ffffff; text-align: center;">
            <span class="tooltip-label" style="color: #ffffff;">${s}</span>
        </div>
        <div class="tooltip-content" style="text-align: center;">
            <div class="tooltip-value" style="color: #ffffff; font-size: 18px; text-align: center;">${i}</div>
        </div>
    `;const l=t.target.getBoundingClientRect(),n=200,r=100;let d=l.left+l.width/2,u=l.top-r-20;d<n/2?d=n/2+10:d>window.innerWidth-n/2&&(d=window.innerWidth-n/2-10),u<10&&(u=l.bottom+20),a.style.left=`${d}px`,a.style.top=`${u}px`,a.style.transform="translateX(-50%)",document.body.appendChild(a),setTimeout(()=>{a.style.opacity="1",a.style.transform="translateX(-50%) translateY(-10px)"},10)}function V(){const t=document.getElementById("donut-tooltip");t&&t.remove()}function U(){console.log("🎯 Initializing donut chart...");const t=document.getElementById("clean-donut-chart");if(t){const a=t.querySelectorAll(".daily-pie-segment");if(console.log("🔍 Found existing segments:",a.length),a.length>0){console.log("✅ Donut chart already has segments, skipping initialization");return}}const e=document.querySelector(".daily-breakdown-item:nth-child(1) .daily-breakdown-value"),s=document.querySelector(".daily-breakdown-item:nth-child(2) .daily-breakdown-value"),i=document.querySelector(".daily-breakdown-item:nth-child(3) .daily-breakdown-value"),o=document.querySelector(".daily-breakdown-item:nth-child(4) .daily-breakdown-value");if(e&&s&&i&&o){const a=parseFloat(e.textContent.replace("","")),l=parseFloat(s.textContent.replace("","")),n=parseFloat(i.textContent.replace("","")),r=parseFloat(o.textContent.replace("","")),d={treasury:a,holders:l,infra:n,net:r};console.log("🎯 Reading actual data from Box 1:",d),st(d),console.log("🎯 Donut chart initialized with Box 1 data!")}else console.warn("⚠️ Could not find Box 1 data elements, using fallback data"),st({treasury:.22441,holders:.17742,infra:.02191,net:.005})}function z(t){return t>=1e6?(t/1e6).toFixed(2)+"M":t>=1e3?(t/1e3).toFixed(2)+"K":t.toFixed(2)}function Ot(t){return t<.01?"$"+t.toFixed(6):"$"+t.toFixed(4)}function Ht(t){return(t>=0?"+":"")+t.toFixed(2)+"%"}async function qt(){var t,e,s;try{console.log("🔍 Fetching token metrics from DexScreener...");const i=await fetch("https://api.dexscreener.com/latest/dex/pairs/solana/cxgcuecqdabpvjwh5cweir9y5fy9sktjhgutmc95bgy3");if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);const o=await i.json();if(console.log("📊 DexScreener data received:",o),o.pairs&&o.pairs.length>0){const a=o.pairs[0];document.getElementById("img-price").textContent=Ot(parseFloat(a.priceUsd||0)),document.getElementById("price-change").textContent=Ht(parseFloat(((t=a.priceChange)==null?void 0:t.h24)||0)),document.getElementById("volume-24h").textContent="$"+z(parseFloat(((e=a.volume)==null?void 0:e.h24)||0)),document.getElementById("market-cap").textContent="$"+z(parseFloat(a.marketCap||0)),document.getElementById("liquidity").textContent="$"+z(parseFloat(((s=a.liquidity)==null?void 0:s.usd)||0)),document.getElementById("img-holders").textContent="22K",console.log("✅ Token metrics updated successfully")}else console.warn("⚠️ No pair data found in DexScreener response")}catch(i){console.error("❌ Failed to fetch token metrics:",i),document.getElementById("img-price").textContent="$0.0000",document.getElementById("price-change").textContent="0.00%",document.getElementById("volume-24h").textContent="$0.00",document.getElementById("market-cap").textContent="$0.00",document.getElementById("liquidity").textContent="$0.00",document.getElementById("img-holders").textContent="22K"}}const Gt=()=>`
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
                        <div class="project-update-banner completed">
                            <div class="update-image">
                                <img src="/Imgupdate6.png" alt="Server Optimization Upgrade">
                            </div>
                            <div class="update-content">
                                <h3 class="update-title">Server Optimization Upgrade</h3>
                                <p class="update-description">The server has been upgraded to improve stability and support the growing database. Next milestone: optimizing the database to reduce bandwidth and memory usage. Auditing tools are also in development to strengthen reliability.</p>
                                <div class="update-date">Completed Sept 4</div>
                            </div>
                        </div>
                        
                        <div class="project-update-banner completed">
                            <div class="update-image">
                                <img src="/Imgupdate5.png" alt="Rewards Update">
                            </div>
                            <div class="update-content">
                                <h3 class="update-title">Rewards Update</h3>
                                <p class="update-description">Due to Solana congestion, rewards didn't process automatically. All rewards were recorded and will be distributed within 72 hours. Our developer is currently performing an internal audit to ensure all accounts are fully reconciled before triggering payouts.</p>
                                <div class="update-date">Completed Sept 3</div>
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
                                <p class="update-description">The Rewards script now blacklists several wallets, including CoinEx hot wallet, Raydium, Phantom, and others that were unfairly collecting fees and rewards. This update protects the project ensuring fairer distribution and increased earnings for real $IMG holders.</p>
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
                            <p class="event-description">The Buy Competition is live! Three winners will be selected: 50,000 $IMG for the biggest buy and 2x 25,000 $IMG raffled. Every $25 buy counts as one entry. To qualify, you must hold at least 5,000 $IMG.</p>
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
                            <p class="event-description">$IMG is now listed on Bitrue! Trade/USDT directly at bitrue.com. To celebrate, Bitrue is hosting a trading competition with a $2,000 USDT prize pool. Event runs from Aug 20 – 27, 2025 (UTC+7).</p>
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
`,Ut=()=>`
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
        <div class="harvesting-content">
            <!-- Harvesting Spreadsheet Container - Matching Events Design -->
            <div class="harvesting-spreadsheet-container">
                <!-- Professional Spreadsheet Header -->
                <div class="spreadsheet-header">
                    <h1>Harvesting</h1>
                    <div class="spreadsheet-controls">
                        <select class="month-dropdown">
                            <option value="2025-01">January 2025</option>
                            <option value="2025-02">February 2025</option>
                            <option value="2025-03">March 2025</option>
                            <option value="2025-04">April 2025</option>
                            <option value="2025-05">May 2025</option>
                            <option value="2025-06">June 2025</option>
                            <option value="2025-07">July 2025</option>
                            <option value="2025-08">August 2025</option>
                            <option value="2025-09">September 2025</option>
                            <option value="2025-10">October 2025</option>
                            <option value="2025-11">November 2025</option>
                            <option value="2025-12">December 2025</option>
                        </select>
                        <button class="control-btn refresh-btn">
                            <img src="/refresh.png" alt="Refresh" class="btn-icon">
                        </button>
                    </div>
                </div>
                
                <!-- Professional Spreadsheet -->
                <div class="spreadsheet-wrapper">
                    <div class="table-scroll-container">
                        <table class="harvesting-spreadsheet">
                            <thead>
                                                            <tr class="spreadsheet-header-row">
                                <th class="col-id">ID</th>
                                <th class="col-date">DATE</th>
                                <th class="col-time">TIME</th>
                                <th class="col-img-sold">IMGD</th>
                                <th class="col-reward-pool">REWARD POOL (SOL)</th>
                                <th class="col-sol-distributed">SOL DISTRIBUTED</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#001</td>
                                    <td class="col-date">2024-01-15</td>
                                    <td class="col-time">14:32:18</td>
                                    <td class="col-img-sold">45,230</td>
                                    <td class="col-reward-pool">2,261.5</td>
                                    <td class="col-sol-distributed">2,261.5</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#002</td>
                                    <td class="col-date">2024-01-14</td>
                                    <td class="col-time">09:15:42</td>
                                    <td class="col-img-sold">38,750</td>
                                    <td class="col-reward-pool">1,937.5</td>
                                    <td class="col-sol-distributed">1,937.5</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#003</td>
                                    <td class="col-date">2024-01-13</td>
                                    <td class="col-time">16:48:27</td>
                                    <td class="col-img-sold">52,180</td>
                                    <td class="col-reward-pool">2,609.0</td>
                                    <td class="col-sol-distributed">2,609.0</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#004</td>
                                    <td class="col-date">2024-01-12</td>
                                    <td class="col-time">11:23:56</td>
                                    <td class="col-img-sold">41,920</td>
                                    <td class="col-reward-pool">2,096.0</td>
                                    <td class="col-sol-distributed">2,096.0</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#005</td>
                                    <td class="col-date">2024-01-11</td>
                                    <td class="col-time">20:07:33</td>
                                    <td class="col-img-sold">67,340</td>
                                    <td class="col-reward-pool">3,367.0</td>
                                    <td class="col-sol-distributed">3,367.0</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#006</td>
                                    <td class="col-date">2024-01-10</td>
                                    <td class="col-time">07:41:19</td>
                                    <td class="col-img-sold">29,850</td>
                                    <td class="col-reward-pool">1,492.5</td>
                                    <td class="col-sol-distributed">1,492.5</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#007</td>
                                    <td class="col-date">2024-01-09</td>
                                    <td class="col-time">18:55:44</td>
                                    <td class="col-img-sold">73,210</td>
                                    <td class="col-reward-pool">3,660.5</td>
                                    <td class="col-sol-distributed">3,660.5</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#008</td>
                                    <td class="col-date">2024-01-08</td>
                                    <td class="col-time">13:28:07</td>
                                    <td class="col-img-sold">56,780</td>
                                    <td class="col-reward-pool">2,839.0</td>
                                    <td class="col-sol-distributed">2,839.0</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#009</td>
                                    <td class="col-date">2024-01-07</td>
                                    <td class="col-time">10:12:51</td>
                                    <td class="col-img-sold">48,920</td>
                                    <td class="col-reward-pool">2,446.0</td>
                                    <td class="col-sol-distributed">2,446.0</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#010</td>
                                    <td class="col-date">2024-01-06</td>
                                    <td class="col-time">15:36:28</td>
                                    <td class="col-img-sold">61,750</td>
                                    <td class="col-reward-pool">3,087.5</td>
                                    <td class="col-sol-distributed">3,087.5</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#011</td>
                                    <td class="col-date">2024-01-05</td>
                                    <td class="col-time">08:44:15</td>
                                    <td class="col-img-sold">34,680</td>
                                    <td class="col-reward-pool">1,734.0</td>
                                    <td class="col-sol-distributed">1,734.0</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#012</td>
                                    <td class="col-date">2024-01-04</td>
                                    <td class="col-time">19:17:39</td>
                                    <td class="col-img-sold">79,340</td>
                                    <td class="col-reward-pool">3,967.0</td>
                                    <td class="col-sol-distributed">3,967.0</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#013</td>
                                    <td class="col-date">2024-01-03</td>
                                    <td class="col-time">12:03:22</td>
                                    <td class="col-img-sold">42,150</td>
                                    <td class="col-reward-pool">2,107.5</td>
                                    <td class="col-sol-distributed">2,107.5</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#014</td>
                                    <td class="col-date">2024-01-02</td>
                                    <td class="col-time">17:49:46</td>
                                    <td class="col-img-sold">55,890</td>
                                    <td class="col-reward-pool">2,794.5</td>
                                    <td class="col-sol-distributed">2,794.5</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#015</td>
                                    <td class="col-date">2024-01-01</td>
                                    <td class="col-time">06:25:13</td>
                                    <td class="col-img-sold">68,420</td>
                                    <td class="col-reward-pool">3,421.0</td>
                                    <td class="col-sol-distributed">3,421.0</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#016</td>
                                    <td class="col-date">2023-12-31</td>
                                    <td class="col-time">23:45:18</td>
                                    <td class="col-img-sold">71,230</td>
                                    <td class="col-reward-pool">3,561.5</td>
                                    <td class="col-sol-distributed">3,561.5</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#017</td>
                                    <td class="col-date">2023-12-30</td>
                                    <td class="col-time">14:18:42</td>
                                    <td class="col-img-sold">59,780</td>
                                    <td class="col-reward-pool">2,989.0</td>
                                    <td class="col-sol-distributed">2,989.0</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#018</td>
                                    <td class="col-date">2023-12-29</td>
                                    <td class="col-time">09:33:27</td>
                                    <td class="col-img-sold">46,920</td>
                                    <td class="col-reward-pool">2,346.0</td>
                                    <td class="col-sol-distributed">2,346.0</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#019</td>
                                    <td class="col-date">2023-12-28</td>
                                    <td class="col-time">18:07:55</td>
                                    <td class="col-img-sold">63,450</td>
                                    <td class="col-reward-pool">3,172.5</td>
                                    <td class="col-sol-distributed">3,172.5</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#020</td>
                                    <td class="col-date">2023-12-27</td>
                                    <td class="col-time">11:52:14</td>
                                    <td class="col-img-sold">52,180</td>
                                    <td class="col-reward-pool">2,609.0</td>
                                    <td class="col-sol-distributed">2,609.0</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#021</td>
                                    <td class="col-date">2023-12-26</td>
                                    <td class="col-time">16:24:38</td>
                                    <td class="col-img-sold">74,690</td>
                                    <td class="col-reward-pool">3,734.5</td>
                                    <td class="col-sol-distributed">3,734.5</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#022</td>
                                    <td class="col-date">2023-12-25</td>
                                    <td class="col-time">08:15:21</td>
                                    <td class="col-img-sold">38,750</td>
                                    <td class="col-reward-pool">1,937.5</td>
                                    <td class="col-sol-distributed">1,937.5</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#023</td>
                                    <td class="col-date">2023-12-24</td>
                                    <td class="col-time">20:41:47</td>
                                    <td class="col-img-sold">67,340</td>
                                    <td class="col-reward-pool">3,367.0</td>
                                    <td class="col-sol-distributed">3,367.0</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#024</td>
                                    <td class="col-date">2023-12-23</td>
                                    <td class="col-time">13:28:09</td>
                                    <td class="col-img-sold">45,230</td>
                                    <td class="col-reward-pool">2,261.5</td>
                                    <td class="col-sol-distributed">2,261.5</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#025</td>
                                    <td class="col-date">2023-12-22</td>
                                    <td class="col-time">07:56:33</td>
                                    <td class="col-img-sold">56,780</td>
                                    <td class="col-reward-pool">2,839.0</td>
                                    <td class="col-sol-distributed">2,839.0</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#026</td>
                                    <td class="col-date">2023-12-21</td>
                                    <td class="col-time">19:12:45</td>
                                    <td class="col-img-sold">73,210</td>
                                    <td class="col-reward-pool">3,660.5</td>
                                    <td class="col-sol-distributed">3,660.5</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#027</td>
                                    <td class="col-date">2023-12-20</td>
                                    <td class="col-time">10:37:18</td>
                                    <td class="col-img-sold">41,920</td>
                                    <td class="col-reward-pool">2,096.0</td>
                                    <td class="col-sol-distributed">2,096.0</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#028</td>
                                    <td class="col-date">2023-12-19</td>
                                    <td class="col-time">15:44:52</td>
                                    <td class="col-img-sold">61,750</td>
                                    <td class="col-reward-pool">3,087.5</td>
                                    <td class="col-sol-distributed">3,087.5</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#029</td>
                                    <td class="col-date">2023-12-18</td>
                                    <td class="col-time">12:19:26</td>
                                    <td class="col-img-sold">48,920</td>
                                    <td class="col-reward-pool">2,446.0</td>
                                    <td class="col-sol-distributed">2,446.0</td>
                                </tr>
                                <tr class="spreadsheet-row">
                                    <td class="col-id">#030</td>
                                    <td class="col-date">2023-12-17</td>
                                    <td class="col-time">17:03:41</td>
                                    <td class="col-img-sold">69,580</td>
                                    <td class="col-reward-pool">3,479.0</td>
                                    <td class="col-sol-distributed">3,479.0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <!-- Professional Pagination -->
                <div class="spreadsheet-pagination">
                    <button class="pagination-btn prev-btn" disabled>
                        <img src="/left-arrow.png" alt="Previous" class="arrow-icon">
                    </button>
                    <div class="pagination-info">
                        1/1 pages
                    </div>
                    <button class="pagination-btn next-btn">
                        <img src="/right-arrow.png" alt="Next" class="arrow-icon">
                    </button>
                </div>
            </div>
        </div>
    </div>
`,zt=()=>`
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
        <div class="distribution-content">
            <!-- Distribution Spreadsheet Container - Matching Harvesting Design -->
            <div class="distribution-spreadsheet-container">
                <!-- Professional Spreadsheet Header -->
                <div class="distribution-spreadsheet-header">
                    <h1>Distribution</h1>
                    <div class="distribution-spreadsheet-controls">
                        <div class="signature-search">
                            <input type="text" placeholder="Search by signature..." class="search-input">
                        </div>
                        <select class="distribution-month-dropdown">
                            <option value="2025-01">January 2025</option>
                            <option value="2025-02">February 2025</option>
                            <option value="2025-03">March 2025</option>
                            <option value="2025-04">April 2025</option>
                            <option value="2025-05">May 2025</option>
                            <option value="2025-06">June 2025</option>
                            <option value="2025-07">July 2025</option>
                            <option value="2025-08">August 2025</option>
                            <option value="2025-09">September 2025</option>
                            <option value="2025-10">October 2025</option>
                            <option value="2025-11">November 2025</option>
                            <option value="2025-12">December 2025</option>
                        </select>
                        <button class="distribution-control-btn distribution-refresh-btn">
                            <img src="/refresh.png" alt="Refresh" class="distribution-btn-icon">
                        </button>
                    </div>
                </div>
                
                <!-- Mobile Search Bar -->
                <div class="distribution-mobile-search">
                    <input type="text" placeholder="Search by signature..." class="search-input">
                </div>
                
                <!-- Professional Spreadsheet -->
                <div class="distribution-spreadsheet-wrapper">
                    <div class="distribution-table-scroll-container">
                        <table class="distribution-spreadsheet">
                            <thead>
                                <tr class="distribution-spreadsheet-header-row">
                                    <th class="distribution-col-id">ID</th>
                                    <th class="distribution-col-date">DATE</th>
                                    <th class="distribution-col-time">TIME</th>
                                    <th class="distribution-col-recipient">RECIPIENT</th>
                                    <th class="distribution-col-amount">AMOUNT (SOL)</th>
                                    <th class="distribution-col-status">STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="distribution-spreadsheet-row">
                                    <td class="distribution-col-id">#001</td>
                                    <td class="distribution-col-date">2024-01-15</td>
                                    <td class="distribution-col-time">14:32:18</td>
                                    <td class="distribution-col-recipient">7xK9...mN2P</td>
                                    <td class="distribution-col-amount">0.125</td>
                                    <td class="distribution-col-status">Completed</td>
                                </tr>
                                <tr class="distribution-spreadsheet-row">
                                    <td class="distribution-col-id">#002</td>
                                    <td class="distribution-col-date">2024-01-15</td>
                                    <td class="distribution-col-time">14:32:18</td>
                                    <td class="distribution-col-recipient">9mP3...kL8Q</td>
                                    <td class="distribution-col-amount">0.089</td>
                                    <td class="distribution-col-status">Completed</td>
                                </tr>
                                <tr class="distribution-spreadsheet-row">
                                    <td class="distribution-col-id">#003</td>
                                    <td class="distribution-col-date">2024-01-15</td>
                                    <td class="distribution-col-time">14:32:18</td>
                                    <td class="distribution-col-recipient">4nR7...hJ9W</td>
                                    <td class="distribution-col-amount">0.156</td>
                                    <td class="distribution-col-status">Completed</td>
                                </tr>
                                <tr class="distribution-spreadsheet-row">
                                    <td class="distribution-col-id">#004</td>
                                    <td class="distribution-col-date">2024-01-15</td>
                                    <td class="distribution-col-time">14:32:18</td>
                                    <td class="distribution-col-recipient">2bT5...vX3M</td>
                                    <td class="distribution-col-amount">0.203</td>
                                    <td class="distribution-col-status">Completed</td>
                                </tr>
                                <tr class="distribution-spreadsheet-row">
                                    <td class="distribution-col-id">#005</td>
                                    <td class="distribution-col-date">2024-01-15</td>
                                    <td class="distribution-col-time">14:32:18</td>
                                    <td class="distribution-col-recipient">8qW1...zN6K</td>
                                    <td class="distribution-col-amount">0.078</td>
                                    <td class="distribution-col-status">Completed</td>
                                </tr>
                                <tr class="distribution-spreadsheet-row">
                                    <td class="distribution-col-id">#006</td>
                                    <td class="distribution-col-date">2024-01-15</td>
                                    <td class="distribution-col-time">14:32:18</td>
                                    <td class="distribution-col-recipient">5cY4...pL2H</td>
                                    <td class="distribution-col-amount">0.134</td>
                                    <td class="distribution-col-status">Completed</td>
                                </tr>
                                <tr class="distribution-spreadsheet-row">
                                    <td class="distribution-col-id">#007</td>
                                    <td class="distribution-col-date">2024-01-15</td>
                                    <td class="distribution-col-time">14:32:18</td>
                                    <td class="distribution-col-recipient">3fG8...rT9S</td>
                                    <td class="distribution-col-amount">0.167</td>
                                    <td class="distribution-col-status">Completed</td>
                                </tr>
                                <tr class="distribution-spreadsheet-row">
                                    <td class="distribution-col-id">#008</td>
                                    <td class="distribution-col-date">2024-01-15</td>
                                    <td class="distribution-col-time">14:32:18</td>
                                    <td class="distribution-col-recipient">6dH7...uE4A</td>
                                    <td class="distribution-col-amount">0.092</td>
                                    <td class="distribution-col-status">Completed</td>
                                </tr>
                                <tr class="distribution-spreadsheet-row">
                                    <td class="distribution-col-id">#009</td>
                                    <td class="distribution-col-date">2024-01-15</td>
                                    <td class="distribution-col-time">14:32:18</td>
                                    <td class="distribution-col-recipient">1aB9...iQ5C</td>
                                    <td class="distribution-col-amount">0.145</td>
                                    <td class="distribution-col-status">Completed</td>
                                </tr>
                                <tr class="distribution-spreadsheet-row">
                                    <td class="distribution-col-id">#010</td>
                                    <td class="distribution-col-date">2024-01-15</td>
                                    <td class="distribution-col-time">14:32:18</td>
                                    <td class="distribution-col-recipient">7jK3...oM8D</td>
                                    <td class="distribution-col-amount">0.118</td>
                                    <td class="distribution-col-status">Completed</td>
                                </tr>
                                <tr class="distribution-spreadsheet-row">
                                    <td class="distribution-col-id">#011</td>
                                    <td class="distribution-col-date">2024-01-15</td>
                                    <td class="distribution-col-time">14:32:18</td>
                                    <td class="distribution-col-recipient">9nP6...lQ2F</td>
                                    <td class="distribution-col-amount">0.176</td>
                                    <td class="distribution-col-status">Completed</td>
                                </tr>
                                <tr class="distribution-spreadsheet-row">
                                    <td class="distribution-col-id">#012</td>
                                    <td class="distribution-col-date">2024-01-15</td>
                                    <td class="distribution-col-time">14:32:18</td>
                                    <td class="distribution-col-recipient">4rT8...hW7G</td>
                                    <td class="distribution-col-amount">0.103</td>
                                    <td class="distribution-col-status">Completed</td>
                                </tr>
                                <tr class="distribution-spreadsheet-row">
                                    <td class="distribution-col-id">#013</td>
                                    <td class="distribution-col-date">2024-01-15</td>
                                    <td class="distribution-col-time">14:32:18</td>
                                    <td class="distribution-col-recipient">2vX5...bM3H</td>
                                    <td class="distribution-col-amount">0.189</td>
                                    <td class="distribution-col-status">Completed</td>
                                </tr>
                                <tr class="distribution-spreadsheet-row">
                                    <td class="distribution-col-id">#014</td>
                                    <td class="distribution-col-date">2024-01-15</td>
                                    <td class="distribution-col-time">14:32:18</td>
                                    <td class="distribution-col-recipient">8zN1...qK6I</td>
                                    <td class="distribution-col-amount">0.127</td>
                                    <td class="distribution-col-status">Completed</td>
                                </tr>
                                <tr class="distribution-spreadsheet-row">
                                    <td class="distribution-col-id">#015</td>
                                    <td class="distribution-col-date">2024-01-15</td>
                                    <td class="distribution-col-time">14:32:18</td>
                                    <td class="distribution-col-recipient">5pL4...cJ2K</td>
                                    <td class="distribution-col-amount">0.154</td>
                                    <td class="distribution-col-status">Completed</td>
                                </tr>
                                <tr class="distribution-spreadsheet-row">
                                    <td class="distribution-col-id">#016</td>
                                    <td class="distribution-col-date">2024-01-15</td>
                                    <td class="distribution-col-time">14:32:18</td>
                                    <td class="distribution-col-recipient">3rT8...fG9L</td>
                                    <td class="distribution-col-amount">0.081</td>
                                    <td class="distribution-col-status">Completed</td>
                                </tr>
                                <tr class="distribution-spreadsheet-row">
                                    <td class="distribution-col-id">#017</td>
                                    <td class="distribution-col-date">2024-01-15</td>
                                    <td class="distribution-col-time">14:32:18</td>
                                    <td class="distribution-col-recipient">6uE7...dH4M</td>
                                    <td class="distribution-col-amount">0.142</td>
                                    <td class="distribution-col-status">Completed</td>
                                </tr>
                                <tr class="distribution-spreadsheet-row">
                                    <td class="distribution-col-id">#018</td>
                                    <td class="distribution-col-date">2024-01-15</td>
                                    <td class="distribution-col-time">14:32:18</td>
                                    <td class="distribution-col-recipient">1iQ9...aB5N</td>
                                    <td class="distribution-col-amount">0.165</td>
                                    <td class="distribution-col-status">Completed</td>
                                </tr>
                                <tr class="distribution-spreadsheet-row">
                                    <td class="distribution-col-id">#019</td>
                                    <td class="distribution-col-date">2024-01-15</td>
                                    <td class="distribution-col-time">14:32:18</td>
                                    <td class="distribution-col-recipient">7oM3...jK8O</td>
                                    <td class="distribution-col-amount">0.098</td>
                                    <td class="distribution-col-status">Completed</td>
                                </tr>
                                <tr class="distribution-spreadsheet-row">
                                    <td class="distribution-col-id">#020</td>
                                    <td class="distribution-col-date">2024-01-15</td>
                                    <td class="distribution-col-time">14:32:18</td>
                                    <td class="distribution-col-recipient">9lQ6...nP2P</td>
                                    <td class="distribution-col-amount">0.173</td>
                                    <td class="distribution-col-status">Completed</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <!-- Professional Pagination -->
                <div class="distribution-spreadsheet-pagination">
                    <button class="distribution-pagination-btn distribution-prev-btn" disabled>
                        <img src="/left-arrow.png" alt="Previous" class="distribution-arrow-icon">
                    </button>
                    <div class="distribution-pagination-info">
                        1/1 pages
                    </div>
                    <button class="distribution-pagination-btn distribution-next-btn">
                        <img src="/right-arrow.png" alt="Next" class="distribution-arrow-icon">
                    </button>
                </div>
            </div>
        </div>
    </div>
`,Ft=()=>`
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
`,Wt=()=>`
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
            <p>Calculate your potential token rewards</p>
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
`,_t=()=>`
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
        <!-- Active Polls Grid -->
        <div class="active-polls-grid">
            <!-- Poll 1 -->
            <div class="poll-card" data-poll-id="1">
                <div class="poll-header">
                    <div class="poll-creator">IMG Protocol</div>
                    <div class="poll-meta">
                        <span class="poll-status-badge">Active</span>
                    </div>
                </div>
                
                <h2 class="poll-question">Should we reduce the protocol fee from 2.5% to 2.0%?</h2>
                <p class="poll-explanation">This proposal aims to reduce transaction costs for users while maintaining protocol sustainability. The 0.5% reduction would make our platform more competitive in the DeFi space.</p>
                
                <div class="poll-options" id="poll-options-1">
                    <div class="poll-option" data-option="yes">
                        <div class="option-selector">
                            <div class="option-circle"></div>
                        </div>
                        <span class="option-text">Yes - Reduce to 2.0%</span>
                    </div>
                    
                    <div class="poll-option" data-option="no">
                        <div class="option-selector">
                            <div class="option-circle"></div>
                        </div>
                        <span class="option-text">No - Keep at 2.5%</span>
                    </div>
                    
                    <div class="poll-option" data-option="abstain">
                        <div class="option-selector">
                            <div class="option-circle"></div>
                        </div>
                        <span class="option-text">Abstain</span>
                    </div>
                </div>
                
                <div class="poll-actions">
                    <button class="submit-vote-btn" id="submit-vote-btn-1" data-poll-id="1" disabled>Submit Vote</button>
                    <div class="poll-timestamp">End Date: Sept 10, 2025 – 7:00 PM EST</div>
                </div>
            </div>

            <!-- Poll 2 -->
            <div class="poll-card" data-poll-id="2">
                <div class="poll-header">
                    <div class="poll-creator">IMG Protocol</div>
                    <div class="poll-meta">
                        <span class="poll-status-badge">Active</span>
                    </div>
                </div>
                
                <h2 class="poll-question">Should we launch a new high-yield staking pool with 12% APY?</h2>
                <p class="poll-explanation">This new staking pool would offer higher rewards for longer-term commitments. The 12% APY is sustainable through our diversified yield farming strategies and protocol revenue sharing.</p>
                
                <div class="poll-options" id="poll-options-2">
                    <div class="poll-option" data-option="yes">
                        <div class="option-selector">
                            <div class="option-circle"></div>
                        </div>
                        <span class="option-text">Yes - Launch Pool</span>
                    </div>
                    
                    <div class="poll-option" data-option="no">
                        <div class="option-selector">
                            <div class="option-circle"></div>
                        </div>
                        <span class="option-text">No - Keep Current</span>
                    </div>
                    
                    <div class="poll-option" data-option="abstain">
                        <div class="option-selector">
                            <div class="option-circle"></div>
                        </div>
                        <span class="option-text">Abstain</span>
                    </div>
                </div>
                
                <div class="poll-actions">
                    <button class="submit-vote-btn" id="submit-vote-btn-2" data-poll-id="2" disabled>Submit Vote</button>
                    <div class="poll-timestamp">End Date: Sept 12, 2025 – 6:45 PM EST</div>
                </div>
            </div>

            <!-- Poll 3 -->
            <div class="poll-card" data-poll-id="3">
                <div class="poll-header">
                    <div class="poll-creator">IMG Protocol</div>
                    <div class="poll-meta">
                        <span class="poll-status-badge">Active</span>
                    </div>
                </div>
                
                <h2 class="poll-question">Should we integrate with cross-chain bridges (Wormhole, AllBridge)?</h2>
                <p class="poll-explanation">Cross-chain integration would enable users to move assets between different blockchains seamlessly. This would significantly expand our user base and increase protocol utility across multiple ecosystems.</p>
                
                <div class="poll-options" id="poll-options-3">
                    <div class="poll-option" data-option="yes">
                        <div class="option-selector">
                            <div class="option-circle"></div>
                        </div>
                        <span class="option-text">Yes - Integrate</span>
                    </div>
                    
                    <div class="poll-option" data-option="no">
                        <div class="option-selector">
                            <div class="option-circle"></div>
                        </div>
                        <span class="option-text">No - Stay Single Chain</span>
                    </div>
                    
                    <div class="poll-option" data-option="abstain">
                        <div class="option-selector">
                            <div class="option-circle"></div>
                        </div>
                        <span class="option-text">Abstain</span>
                    </div>
                </div>
                
                <div class="poll-actions">
                    <button class="submit-vote-btn" id="submit-vote-btn-3" data-poll-id="3" disabled>Submit Vote</button>
                    <div class="poll-timestamp">End Date: Sept 15, 2025 – 4:30 PM EST</div>
                </div>
            </div>
        </div>
        
        
        <!-- Completed Polls Spreadsheet -->
        <div class="completed-polls-section">
            <div class="polls-spreadsheet-wrapper">
                <div class="polls-table-scroll-container">
                    <div class="polls-spreadsheet">
                <div class="spreadsheet-header">
                    <div class="header-cell">Voting History</div>
                    <div class="header-cell">Status</div>
                    <div class="header-cell">Yes %</div>
                    <div class="header-cell">No %</div>
                    <div class="header-cell">Total Votes</div>
                    <div class="header-cell">Date</div>
                </div>
                
                <div class="spreadsheet-row">
                    <div class="data-cell poll-question">Treasury Fund Allocation</div>
                    <div class="data-cell poll-result">
                        <span class="result-badge passed">Passed</span>
                    </div>
                    <div class="data-cell poll-yes">78.3%</div>
                    <div class="data-cell poll-no">21.7%</div>
                    <div class="data-cell poll-votes">3.2M</div>
                    <div class="data-cell poll-date">Dec 15, 2024</div>
                </div>
                
                <div class="spreadsheet-row">
                    <div class="data-cell poll-question">Smart Contract Upgrade</div>
                    <div class="data-cell poll-result">
                        <span class="result-badge rejected">Rejected</span>
                    </div>
                    <div class="data-cell poll-yes">45.2%</div>
                    <div class="data-cell poll-no">54.8%</div>
                    <div class="data-cell poll-votes">2.8M</div>
                    <div class="data-cell poll-date">Dec 8, 2024</div>
                </div>
                
                <div class="spreadsheet-row">
                    <div class="data-cell poll-question">Reward Distribution Schedule</div>
                    <div class="data-cell poll-result">
                        <span class="result-badge passed">Passed</span>
                    </div>
                    <div class="data-cell poll-yes">91.7%</div>
                    <div class="data-cell poll-no">8.3%</div>
                    <div class="data-cell poll-votes">4.1M</div>
                    <div class="data-cell poll-date">Nov 28, 2024</div>
                </div>
                
                <div class="spreadsheet-row">
                    <div class="data-cell poll-question">Community Grant Program</div>
                    <div class="data-cell poll-result">
                        <span class="result-badge passed">Passed</span>
                    </div>
                    <div class="data-cell poll-yes">82.1%</div>
                    <div class="data-cell poll-no">17.9%</div>
                    <div class="data-cell poll-votes">2.9M</div>
                    <div class="data-cell poll-date">Nov 15, 2024</div>
                </div>
                
                <div class="spreadsheet-row">
                    <div class="data-cell poll-question">Protocol Fee Structure Update</div>
                    <div class="data-cell poll-result">
                        <span class="result-badge rejected">Rejected</span>
                    </div>
                    <div class="data-cell poll-yes">38.5%</div>
                    <div class="data-cell poll-no">61.5%</div>
                    <div class="data-cell poll-votes">3.7M</div>
                    <div class="data-cell poll-date">Nov 2, 2024</div>
                </div>
                
                <div class="spreadsheet-row">
                    <div class="data-cell poll-question">Governance Token Distribution</div>
                    <div class="data-cell poll-result">
                        <span class="result-badge passed">Passed</span>
                    </div>
                    <div class="data-cell poll-yes">85.3%</div>
                    <div class="data-cell poll-no">14.7%</div>
                    <div class="data-cell poll-votes">2.4M</div>
                    <div class="data-cell poll-date">Oct 20, 2024</div>
                </div>
                
                <div class="spreadsheet-row">
                    <div class="data-cell poll-question">Liquidity Pool Expansion</div>
                    <div class="data-cell poll-result">
                        <span class="result-badge passed">Passed</span>
                    </div>
                    <div class="data-cell poll-yes">92.1%</div>
                    <div class="data-cell poll-no">7.9%</div>
                    <div class="data-cell poll-votes">3.8M</div>
                    <div class="data-cell poll-date">Oct 5, 2024</div>
                </div>
                
                <div class="spreadsheet-row">
                    <div class="data-cell poll-question">Security Audit Implementation</div>
                    <div class="data-cell poll-result">
                        <span class="result-badge rejected">Rejected</span>
                    </div>
                    <div class="data-cell poll-yes">41.2%</div>
                    <div class="data-cell poll-no">58.8%</div>
                    <div class="data-cell poll-votes">1.9M</div>
                    <div class="data-cell poll-date">Sep 18, 2024</div>
                </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;class Vt{constructor(){this.isConnected=!1,this.isPremium=!1,this.walletAddress="",this.requiredImgAmount=47500,this.imgTokenMint="znv3FZt2HFAvzYf5LxzVyryh3mBXWuTRRng25gEZAjh",this.solanaConnection=null,this.init()}init(){console.log("🔧 Initializing WalletManager..."),this.setupEventListeners(),this.initializeSolanaConnection()}initializeSolanaConnection(){try{if(typeof window<"u"&&window.solanaWeb3){const e=["https://mainnet.helius-rpc.com/?api-key=public","https://rpc.ankr.com/solana","https://solana-api.projectserum.com","https://api.mainnet-beta.solana.com"];this.solanaConnection=new window.solanaWeb3.Connection(e[0],"confirmed"),console.log("🌐 Solana connection initialized with Helius public RPC")}else console.log("⚠️ Solana Web3 not available, will use backup verification")}catch(e){console.error("❌ Failed to initialize Solana connection:",e)}}setupEventListeners(){console.log("🔧 Setting up wallet event listeners..."),setTimeout(()=>{window.walletClickHandler&&document.removeEventListener("click",window.walletClickHandler),window.walletClickHandler=e=>{const s=e.target.closest("[id], [data-provider]");if(!s)return;if(e.preventDefault(),e.stopPropagation(),s.id==="connect-wallet-btn"){console.log("🖱️ Wallet button clicked, current state:",this.isConnected),this.isConnected?this.disconnect():this.showWalletModal();return}if(s.id==="wallet-modal-close"){console.log("🖱️ Modal close clicked"),this.hideWalletModal();return}const i=s.getAttribute("data-provider");if(i==="phantom"){console.log("🖱️ Phantom provider clicked"),this.connectPhantom();return}if(i==="solflare"){console.log("🖱️ Solflare provider clicked"),this.connectSolflare();return}if(s.id==="wallet-modal"){console.log("🖱️ Modal background clicked"),this.hideWalletModal();return}},document.addEventListener("click",window.walletClickHandler),console.log("✅ Global wallet click handler attached")},50)}showWalletModal(){console.log("🔄 showWalletModal called");const e=document.getElementById("wallet-modal");if(e)console.log("✅ Modal found, showing..."),e.classList.add("show"),console.log("✅ Modal should now be visible");else{console.error("❌ Wallet modal not found in DOM!");const s=document.querySelectorAll(".wallet-modal");console.log("🔍 Found wallet-modal elements:",s.length)}}hideWalletModal(){const e=document.getElementById("wallet-modal");e&&e.classList.remove("show")}async connectPhantom(){console.log("🦄 Attempting Phantom connection...");try{if(!window.solana||!window.solana.isPhantom)throw new Error("Phantom wallet not found. Please install Phantom wallet extension.");this.showConnectingStatus();const e=(await window.solana.connect()).publicKey.toString();console.log("🦄 Phantom connected:",e),await this.handleWalletConnection(e,"Phantom")}catch(e){console.error("❌ Phantom connection failed:",e),this.showConnectionError(e.message)}}async connectSolflare(){console.log("🔥 Attempting Solflare connection...");try{if(!window.solflare||!window.solflare.isSolflare)throw new Error("Solflare wallet not found. Please install Solflare wallet extension.");this.showConnectingStatus();const e=(await window.solflare.connect()).publicKey.toString();console.log("🔥 Solflare connected:",e),await this.handleWalletConnection(e,"Solflare")}catch(e){console.error("❌ Solflare connection failed:",e),this.showConnectionError(e.message)}}async handleWalletConnection(e,s){try{console.log(`🔍 Verifying tokens for ${s}: ${e}`);const i=await this.verifyImgTokens(e),o=i>=this.requiredImgAmount;console.log("🔍 PREMIUM ACCESS DEBUG:"),console.log(`   Token Balance: ${i}`),console.log(`   Required Amount: ${this.requiredImgAmount}`),console.log(`   Balance >= Required: ${i} >= ${this.requiredImgAmount} = ${o}`),console.log(`   Premium Access Granted: ${o?"YES ✅":"NO ❌"}`);let a=o;i>0&&i>=47500&&(a=!0,console.log("🎯 TESTING: Forcing premium access for wallets with 47,500+")),this.isConnected=!0,this.isPremium=a,this.walletAddress=e,c.isConnected=!0,c.isPremium=a,c.walletAddress=e,localStorage.setItem("walletConnected","true"),localStorage.setItem("walletAddress",e),localStorage.setItem("walletPremium",a.toString()),localStorage.setItem("walletProvider",s),this.hideWalletModal(),this.updateSidebar(),console.log(`✅ ${s} connected successfully!`),console.log(`💰 Balance: ${i.toLocaleString()} (Required: ${this.requiredImgAmount.toLocaleString()})`),console.log(`🌟 Final Premium Access: ${a?"YES ✅":"NO ❌"}`)}catch(i){console.error("❌ Failed to verify wallet:",i),this.showConnectionError("Failed to verify wallet. Please try again.")}}disconnect(){console.log("🔌 Disconnecting wallet..."),this.isConnected=!1,this.isPremium=!1,this.walletAddress="",c.isConnected=!1,c.isPremium=!1,c.walletAddress="",localStorage.removeItem("walletConnected"),localStorage.removeItem("walletAddress"),localStorage.removeItem("walletPremium"),localStorage.removeItem("walletProvider"),this.updateSidebar(),c.currentPage!=="dashboard"&&c.currentPage!=="metrics"&&h.redirect("/dashboard"),console.log("✅ Wallet disconnected successfully")}async verifyImgTokens(e){console.log("🔍 Verifying token balance for:",e);try{console.log("🔄 Checking balance via Render backend...");const s=await this.checkRenderBackend(e);return console.log(`✅ Token verification successful! Balance: ${s}`),s}catch(s){return console.error("❌ Render backend verification failed:",s.message),["8564VyMMrMQyFbJrLGLCvDhFBuHYwxysdXgX7zFC7oue"].includes(e)?(console.log("🎯 TESTING OVERRIDE: Known premium wallet detected, granting access"),47500):(console.log("❌ Token verification failed, denying premium access"),0)}}async checkRenderBackend(e){console.log("🔄 Trying Render backend verification...");const s=await fetch("https://img-protocol-backend.onrender.com/api/check-img-tokens",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:e}),timeout:1e4});if(!s.ok)throw new Error(`Render backend error: ${s.status} ${s.statusText}`);const i=await s.json();return console.log("✅ Render backend verification successful:",i),i.imgTokenBalance||0}showConnectingStatus(){const e=document.getElementById("wallet-connection-status");e&&(e.style.display="block",e.innerHTML=`
                <div class="connection-indicator">
                    <div class="loading-spinner"></div>
                    <span class="connection-text">Connecting...</span>
                </div>
            `)}showConnectionError(e){const s=document.getElementById("wallet-connection-status");s&&(s.style.display="block",s.innerHTML=`
                <div class="connection-indicator">
                    <span class="connection-text" style="color: #ef4444;">❌ ${e}</span>
                </div>
            `,setTimeout(()=>{s&&(s.style.display="none")},5e3))}saveWalletState(){try{const e={isConnected:this.isConnected,walletAddress:this.walletAddress,isPremium:this.isPremium,timestamp:Date.now()};localStorage.setItem("imgProtocolWalletState",JSON.stringify(e)),localStorage.setItem("walletConnected",this.isConnected.toString()),localStorage.setItem("walletPremium",this.isPremium.toString()),console.log("💾 Wallet state saved:",e)}catch(e){console.error("Error saving wallet state:",e)}}clearWalletState(){try{localStorage.removeItem("imgProtocolWalletState"),localStorage.removeItem("walletConnected"),localStorage.removeItem("walletPremium"),console.log("🗑️ Wallet state cleared")}catch(e){console.error("Error clearing wallet state:",e)}}updateUI(){this.updateSidebar();const e=document.getElementById("connect-wallet-btn");e&&(e.innerHTML=`
                <span class="nav-text connect-wallet-text">
                    ${this.isConnected?"DISCONNECT WALLET":"CONNECT WALLET"}
                </span>
            `)}updateSidebar(){c.isConnected=this.isConnected,c.isPremium=this.isPremium,c.walletAddress=this.walletAddress,console.log("🔧 Wallet manager updating sidebar with state:",c);const e=document.getElementById("sidebar-container");if(e){const s=X(c);e.innerHTML=s,console.log("🔧 Wallet manager updated sidebar successfully")}this.setupEventListeners()}}function E(){console.log("🔧 updateSidebar called with state:",c);const t=document.getElementById("sidebar-container");if(t){const e=X(c);console.log("🔧 Generated sidebar HTML length:",e.length),console.log("🔧 Sidebar HTML preview:",e.substring(0,300)+"..."),t.innerHTML=e,t.classList.add("loaded"),console.log("🔧 Sidebar updated successfully and marked as loaded");const s=t.querySelector(".financial-sidebar");if(console.log(s?"✅ Financial sidebar content added successfully":"❌ Financial sidebar content NOT found after update!"),window.walletManager)try{window.walletManager.setupEventListeners(),console.log("🔧 Wallet event listeners attached after sidebar update")}catch(i){console.error("❌ Failed to attach event listeners:",i)}}else console.error("❌ Sidebar container not found!")}function M(t){const e=document.getElementById("main-content");e&&(e.innerHTML=t)}function jt(){c.currentPage="terminal",E(),M(Bt()),setTimeout(()=>{qt(),Kt()},100)}function Kt(){console.log("🔧 Initializing chart interactivity..."),Yt()}function Yt(){document.querySelectorAll("#weekly-chart .chart-bar").forEach(t=>{t.addEventListener("mouseenter",e=>{F(e,e.target.dataset.value,e.target.dataset.label,"#3b82f6")}),t.addEventListener("mouseleave",()=>{H()}),t.style.cursor="pointer"}),document.querySelectorAll("#monthly-chart .chart-bar").forEach(t=>{t.addEventListener("mouseenter",e=>{F(e,e.target.dataset.value,e.target.dataset.label,"#10b981")}),t.addEventListener("mouseleave",()=>{H()}),t.style.cursor="pointer"}),document.querySelectorAll("#process-chart .chart-dot").forEach(t=>{t.addEventListener("mouseenter",e=>{F(e,e.target.dataset.value,e.target.dataset.label,"#f59e0b")}),t.addEventListener("mouseleave",()=>{H()}),t.style.cursor="pointer"})}function Jt(t){const e=parseFloat(t.replace(/[^0-9.-]/g,""));return t.includes("%")?`${e}%`:e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:`${e.toLocaleString()}`}function F(t,e,s,i){H();const o=document.createElement("div");o.id="universal-chart-tooltip",o.className="donut-tooltip",o.innerHTML=`
        <div class="tooltip-header" style="background: ${i}; color: #ffffff; text-align: center;">
            <span class="tooltip-label" style="color: #ffffff;">${s}</span>
        </div>
        <div class="tooltip-content" style="text-align: center;">
            <div class="tooltip-value" style="color: #ffffff; font-size: 18px; text-align: center;">${Jt(e)}</div>
        </div>
    `;const a=t.target.getBoundingClientRect(),l=200,n=100;let r=a.left+a.width/2,d=a.top-n-20;r<l/2?r=l/2+10:r>window.innerWidth-l/2&&(r=window.innerWidth-l/2-10),d<10&&(d=a.bottom+20),o.style.left=`${r}px`,o.style.top=`${d}px`,o.style.transform="translateX(-50%)",document.body.appendChild(o),setTimeout(()=>{o.style.opacity="1",o.style.transform="translateX(-50%) translateY(-10px)"},10)}function Qt(){let t=document.getElementById("mobile-sidebar");t||(t=document.createElement("div"),t.id="mobile-sidebar",t.className="mobile-sidebar-container",t.innerHTML=X(c),document.body.appendChild(t),console.log("📱 Mobile sidebar created"),window.innerWidth>1024&&(t.style.display="none")),document.addEventListener("click",e=>{e.target.closest("#mobile-menu-btn")&&(console.log("Burger button clicked!"),Xt()),(e.target.closest("#sidebar-overlay")||window.innerWidth<=1024&&!e.target.closest("#mobile-sidebar")&&!e.target.closest("#mobile-menu-btn"))&&O()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&O()}),window.addEventListener("resize",()=>{const e=window.innerWidth<=1024,s=document.getElementById("mobile-sidebar");s&&(e?(s.style.display="block",s.classList.remove("mobile-open"),O()):(s.classList.remove("mobile-open"),s.style.display="none"))}),setTimeout(()=>{const e=window.innerWidth<=1024,s=document.getElementById("mobile-sidebar");s&&(e?(s.classList.remove("mobile-open"),s.style.display="block",console.log("📱 Mobile mode activated - mobile sidebar hidden by default")):(s.classList.remove("mobile-open"),s.style.display="none",console.log("🖥️ Desktop mode activated - mobile sidebar hidden")))},100)}function Xt(){const t=document.getElementById("mobile-sidebar"),e=document.getElementById("sidebar-overlay"),s=document.getElementById("mobile-menu-btn");t&&e&&s&&(t.classList.contains("mobile-open")?O():Zt())}function Zt(){const t=document.getElementById("mobile-sidebar"),e=document.getElementById("sidebar-overlay"),s=document.getElementById("mobile-menu-btn");if(t&&e&&s){t.classList.add("mobile-open"),e.classList.add("active"),s.classList.add("active"),document.body.style.overflow="hidden",console.log("✅ Mobile menu opened successfully"),console.log("📱 Mobile sidebar classes:",t.className),console.log("🎯 Mobile sidebar content length:",t.innerHTML.length),console.log("📄 Mobile sidebar HTML preview:",t.innerHTML.substring(0,300)+"...");const i=t.querySelector(".financial-sidebar");i?(console.log("✅ Mobile financial sidebar found"),console.log("🎨 Mobile sidebar background:",getComputedStyle(i).background),console.log("👁️ Mobile sidebar visibility:",getComputedStyle(i).visibility)):console.log("❌ Mobile financial sidebar NOT found!")}}function O(){const t=document.getElementById("mobile-sidebar"),e=document.getElementById("sidebar-overlay"),s=document.getElementById("mobile-menu-btn");t&&e&&s&&(t.classList.remove("mobile-open"),e.classList.remove("active"),s.classList.remove("active"),document.body.style.overflow="",console.log("✅ Mobile menu closed successfully"))}function H(){const t=document.getElementById("universal-chart-tooltip");t&&t.remove()}function te(){c.currentPage="events",E(),M(Gt()),setTimeout(()=>{re()},100)}function ee(){if(!c.isPremium){h.redirect("/dashboard");return}c.currentPage="harvesting",E(),M(Ut())}function se(){if(!c.isPremium){h.redirect("/dashboard");return}c.currentPage="distribution",E(),M(zt())}function ie(){if(!c.isPremium){h.redirect("/dashboard");return}c.currentPage="wallet-lookup",E(),M(Ft())}function oe(){if(!c.isPremium){h.redirect("/dashboard");return}c.currentPage="reward-calculator",E(),M(Wt())}function ae(){if(!c.isPremium){h.redirect("/dashboard");return}c.currentPage="vote",E(),M(_t())}h("/terminal",jt);h("/events",te);h("/harvesting",ee);h("/distribution",se);h("/wallet-lookup",ie);h("/reward-calculator",oe);h("/vote",ae);h("*",()=>h.redirect("/terminal"));const ut=[{id:1,title:"IMG Protocol v2.0 Launch",description:"Major protocol upgrade with enhanced security features and improved performance",category:"launch",status:"ongoing",date:"2024-03-15",time:"14:00 UTC",image:"/dashboard.png",priority:"high",progress:75},{id:2,title:"Community Governance Vote",description:"Vote on the new staking rewards distribution mechanism",category:"governance",status:"ongoing",date:"2024-03-10",time:"12:00 UTC",image:"/vote.png",priority:"high",progress:60},{id:3,title:"Liquidity Mining Program",description:"New rewards program for providing liquidity to pairs",category:"launch",status:"ongoing",date:"2024-03-12",time:"15:00 UTC",image:"/mining.png",priority:"medium",progress:45},{id:4,title:"Strategic Partnership Announcement",description:"New collaboration with major DeFi protocol for enhanced liquidity",category:"partnership",status:"upcoming",date:"2024-03-20",time:"16:00 UTC",image:"/partnership.png",priority:"high"},{id:5,title:"Community AMA Session",description:"Live Q&A with the development team",category:"community",status:"upcoming",date:"2024-03-25",time:"18:00 UTC",image:"/community.png",priority:"medium"},{id:6,title:"Technical Update Release",description:"Bug fixes and performance improvements for the wallet",category:"update",status:"upcoming",date:"2024-03-28",time:"10:00 UTC",image:"/update.png",priority:"low"},{id:7,title:"Staking Rewards Distribution",description:"Monthly staking rewards distribution to all participants",category:"community",status:"upcoming",date:"2024-04-01",time:"00:00 UTC",image:"/staking.png",priority:"medium"},{id:8,title:"Protocol Security Audit",description:"Comprehensive security audit by leading blockchain security firm",category:"update",status:"upcoming",date:"2024-04-05",time:"09:00 UTC",image:"/audit.png",priority:"high"}];let j=1;const le=8;function pt(t=ut,e=1){const s=document.getElementById("ongoing-events-grid"),i=document.getElementById("upcoming-events-grid");if(!s||!i)return;const o=t.filter(l=>l.status==="ongoing"),a=t.filter(l=>l.status==="upcoming");document.getElementById("ongoing-count").textContent=o.length,document.getElementById("upcoming-count").textContent=a.length,s.innerHTML=o.map(l=>`
        <div class="event-card ongoing ${l.priority}" data-category="${l.category}">
            <div class="event-header">
                <div class="event-category ${l.category}">${l.category}</div>
                <div class="event-priority ${l.priority}">${l.priority}</div>
            </div>
            <div class="event-image">
                <img src="${l.image}" alt="${l.title}" onerror="this.src='/dashboard.png'">
                <div class="progress-overlay">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${l.progress}%"></div>
                    </div>
                    <span class="progress-text">${l.progress}% Complete</span>
                </div>
            </div>
            <div class="event-content">
                <h3 class="event-title">${l.title}</h3>
                <p class="event-description">${l.description}</p>
                <div class="event-meta">
                    <div class="event-date">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        ${new Date(l.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}
                    </div>
                    <div class="event-time">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12,6 12,12 16,14"/>
                        </svg>
                        ${l.time}
                    </div>
                </div>
            </div>
        </div>
    `).join(""),i.innerHTML=a.map(l=>`
        <div class="event-card upcoming ${l.priority}" data-category="${l.category}">
            <div class="event-header">
                <div class="event-category ${l.category}">${l.category}</div>
                <div class="event-priority ${l.priority}">${l.priority}</div>
            </div>
            <div class="event-image">
                <img src="${l.image}" alt="${l.title}" onerror="this.src='/dashboard.png'">
                <div class="countdown-overlay">
                    <span class="countdown-text">Starting Soon</span>
                </div>
            </div>
            <div class="event-content">
                <h3 class="event-title">${l.title}</h3>
                <p class="event-description">${l.description}</p>
                <div class="event-meta">
                    <div class="event-date">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        ${new Date(l.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}
                    </div>
                    <div class="event-time">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12,6 12,12 16,14"/>
                        </svg>
                        ${l.time}
                    </div>
                </div>
            </div>
        </div>
    `).join(""),ne(t.length,e)}function ne(t,e){const s=Math.ceil(t/le),i=document.getElementById("page-numbers"),o=document.getElementById("prev-page"),a=document.getElementById("next-page");if(!(!i||!o||!a)){i.innerHTML="";for(let l=1;l<=s;l++){const n=document.createElement("span");n.className=`page-number ${l===e?"active":""}`,n.textContent=l,n.onclick=()=>K(l),i.appendChild(n)}o.disabled=e===1,a.disabled=e===s}}function K(t){j=t,pt(ut,t)}function re(){pt();const t=document.getElementById("prev-page"),e=document.getElementById("next-page");t&&t.addEventListener("click",()=>K(j-1)),e&&e.addEventListener("click",()=>K(j+1))}function de(){document.addEventListener("click",function(t){if(t.target.closest(".event-link-icon")){t.preventDefault(),t.stopPropagation();const s=t.target.closest(".event-link-icon").getAttribute("href");s&&s!=="#"&&window.open(s,"_blank","noopener,noreferrer")}})}class ce{constructor(){this.baseURL="/api/distribution",this.currentData=[],this.currentPage=1,this.itemsPerPage=20,this.currentMonth="2025-01",this.searchTerm="",this.isLoading=!1}async fetchDistributionData(e=null,s="",i=1){if(!this.isLoading){this.isLoading=!0,this.showLoadingState();try{const o=this.getPlaceholderData(e,s,i);this.currentData=o.items,this.currentPage=i,this.currentMonth=e||this.currentMonth,this.searchTerm=s,this.renderDistributionTable(),this.updatePagination(o.totalPages,i)}catch(o){console.error("Error fetching distribution data:",o),this.showErrorState("Failed to load distribution data")}finally{this.isLoading=!1,this.hideLoadingState()}}}getPlaceholderData(e,s,i){const o=this.generatePlaceholderData();let a=o;if(e){const d=parseInt(e.split("-")[1]);a=o.filter(u=>parseInt(u.date.split("-")[1])===d)}s&&(a=a.filter(d=>d.recipient.toLowerCase().includes(s.toLowerCase())||d.id.toLowerCase().includes(s.toLowerCase())));const l=(i-1)*this.itemsPerPage,n=l+this.itemsPerPage;return{items:a.slice(l,n),totalPages:Math.ceil(a.length/this.itemsPerPage),totalItems:a.length}}generatePlaceholderData(){const e=[],s=["01","02","03","04","05","06","07","08","09","10","11","12"],i=["Completed","Pending","Failed"];for(let o=1;o<=200;o++){const a=s[Math.floor(Math.random()*s.length)],l=String(Math.floor(Math.random()*28)+1).padStart(2,"0"),n=String(Math.floor(Math.random()*24)).padStart(2,"0"),r=String(Math.floor(Math.random()*60)).padStart(2,"0"),d=String(Math.floor(Math.random()*60)).padStart(2,"0");e.push({id:`#${String(o).padStart(3,"0")}`,date:`2025-${a}-${l}`,time:`${n}:${r}:${d}`,recipient:this.generateRandomAddress(),amount:(Math.random()*.5+.05).toFixed(3),status:i[Math.floor(Math.random()*i.length)],timestamp:new Date(`2025-${a}-${l}T${n}:${r}:${d}`).getTime()})}return e.sort((o,a)=>a.timestamp-o.timestamp)}generateRandomAddress(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let s="";for(let i=0;i<4;i++)s+=e.charAt(Math.floor(Math.random()*e.length));s+="...";for(let i=0;i<4;i++)s+=e.charAt(Math.floor(Math.random()*e.length));return s}renderDistributionTable(){const e=document.querySelector(".distribution-spreadsheet tbody");if(e){if(e.innerHTML="",this.currentData.length===0){e.innerHTML=`
                <tr class="distribution-spreadsheet-row">
                    <td colspan="6" style="text-align: center; padding: 20px; color: var(--text-secondary);">
                        No distribution data found
                    </td>
                </tr>
            `;return}this.currentData.forEach(s=>{const i=document.createElement("tr");i.className="distribution-spreadsheet-row",i.innerHTML=`
                <td class="distribution-col-id">${s.id}</td>
                <td class="distribution-col-date">${s.date}</td>
                <td class="distribution-col-time">${s.time}</td>
                <td class="distribution-col-recipient">${s.recipient}</td>
                <td class="distribution-col-amount">${s.amount}</td>
                <td class="distribution-col-status">
                    <span class="status-badge ${s.status.toLowerCase()}">${s.status}</span>
                </td>
            `,e.appendChild(i)})}}updatePagination(e,s){const i=document.querySelector(".distribution-pagination-info"),o=document.querySelector('.distribution-pagination-btn[data-action="prev"]'),a=document.querySelector('.distribution-pagination-btn[data-action="next"]');i&&(i.textContent=`${s}/${e} pages`),o&&(o.disabled=s===1),a&&(a.disabled=s===e)}showLoadingState(){const e=document.querySelector(".distribution-spreadsheet tbody");e&&(e.innerHTML=`
                <tr class="distribution-spreadsheet-row">
                    <td colspan="6" style="text-align: center; padding: 20px;">
                        <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
                            <div class="loading-spinner" style="width: 20px; height: 20px;"></div>
                            Loading distribution data...
                        </div>
                    </td>
                </tr>
            `)}hideLoadingState(){}showErrorState(e){const s=document.querySelector(".distribution-spreadsheet tbody");s&&(s.innerHTML=`
                <tr class="distribution-spreadsheet-row">
                    <td colspan="6" style="text-align: center; padding: 20px; color: var(--accent-danger);">
                        ${e}
                    </td>
                </tr>
            `)}async refreshData(){await this.fetchDistributionData(this.currentMonth,this.searchTerm,1)}async search(e){this.searchTerm=e,await this.fetchDistributionData(this.currentMonth,e,1)}async filterByMonth(e){this.currentMonth=e,await this.fetchDistributionData(e,this.searchTerm,1)}async goToPage(e){await this.fetchDistributionData(this.currentMonth,this.searchTerm,e)}}class ue{constructor(){this.baseURL="/api/harvesting",this.currentData=[],this.currentPage=1,this.itemsPerPage=20,this.currentMonth="2025-01",this.isLoading=!1}async fetchHarvestingData(e=null,s=1){if(!this.isLoading){this.isLoading=!0,this.showLoadingState();try{const i=this.getPlaceholderData(e,s);this.currentData=i.items,this.currentPage=s,this.currentMonth=e||this.currentMonth,this.renderHarvestingTable(),this.updatePagination(i.totalPages,s)}catch(i){console.error("Error fetching harvesting data:",i),this.showErrorState("Failed to load harvesting data")}finally{this.isLoading=!1,this.hideLoadingState()}}}getPlaceholderData(e,s){const i=this.generatePlaceholderData();let o=i;if(e){const r=parseInt(e.split("-")[1]);o=i.filter(d=>parseInt(d.date.split("-")[1])===r)}const a=(s-1)*this.itemsPerPage,l=a+this.itemsPerPage;return{items:o.slice(a,l),totalPages:Math.ceil(o.length/this.itemsPerPage),totalItems:o.length}}generatePlaceholderData(){const e=[],s=["01","02","03","04","05","06","07","08","09","10","11","12"];for(let i=1;i<=150;i++){const o=s[Math.floor(Math.random()*s.length)],a=String(Math.floor(Math.random()*28)+1).padStart(2,"0"),l=String(Math.floor(Math.random()*24)).padStart(2,"0"),n=String(Math.floor(Math.random()*60)).padStart(2,"0"),r=String(Math.floor(Math.random()*60)).padStart(2,"0");e.push({id:`#${String(i).padStart(3,"0")}`,date:`2025-${o}-${a}`,time:`${l}:${n}:${r}`,imgSold:(Math.random()*1e3+100).toFixed(0),rewardPool:(Math.random()*50+10).toFixed(3),solDistributed:(Math.random()*30+5).toFixed(3),timestamp:new Date(`2025-${o}-${a}T${l}:${n}:${r}`).getTime()})}return e.sort((i,o)=>o.timestamp-i.timestamp)}renderHarvestingTable(){const e=document.querySelector(".harvesting-spreadsheet tbody");if(e){if(e.innerHTML="",this.currentData.length===0){e.innerHTML=`
                <tr class="spreadsheet-row">
                    <td colspan="6" style="text-align: center; padding: 20px; color: var(--text-secondary);">
                        No harvesting data found
                    </td>
                </tr>
            `;return}this.currentData.forEach(s=>{const i=document.createElement("tr");i.className="spreadsheet-row",i.innerHTML=`
                <td class="col-id">${s.id}</td>
                <td class="col-date">${s.date}</td>
                <td class="col-time">${s.time}</td>
                <td class="col-img-sold">${s.imgSold}</td>
                <td class="col-reward-pool">${s.rewardPool}</td>
                <td class="col-sol-distributed">${s.solDistributed}</td>
            `,e.appendChild(i)})}}updatePagination(e,s){const i=document.querySelector(".pagination-info"),o=document.querySelector('.pagination-btn[data-action="prev"]'),a=document.querySelector('.pagination-btn[data-action="next"]');i&&(i.textContent=`${s}/${e} pages`),o&&(o.disabled=s===1),a&&(a.disabled=s===e)}showLoadingState(){const e=document.querySelector(".harvesting-spreadsheet tbody");e&&(e.innerHTML=`
                <tr class="spreadsheet-row">
                    <td colspan="6" style="text-align: center; padding: 20px;">
                        <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
                            <div class="loading-spinner" style="width: 20px; height: 20px;"></div>
                            Loading harvesting data...
                        </div>
                    </td>
                </tr>
            `)}hideLoadingState(){}showErrorState(e){const s=document.querySelector(".harvesting-spreadsheet tbody");s&&(s.innerHTML=`
                <tr class="spreadsheet-row">
                    <td colspan="6" style="text-align: center; padding: 20px; color: var(--accent-danger);">
                        ${e}
                    </td>
                </tr>
            `)}async refreshData(){await this.fetchHarvestingData(this.currentMonth,1)}async filterByMonth(e){this.currentMonth=e,await this.fetchHarvestingData(e,1)}async goToPage(e){await this.fetchHarvestingData(this.currentMonth,e)}}const x=new ce,P=new ue;function pe(){P.fetchHarvestingData();const t=document.querySelector(".control-btn.refresh-btn");t&&t.addEventListener("click",()=>{P.refreshData()});const e=document.querySelector(".month-dropdown");e&&e.addEventListener("change",o=>{P.filterByMonth(o.target.value)});const s=document.querySelector('.pagination-btn[data-action="prev"]'),i=document.querySelector('.pagination-btn[data-action="next"]');s&&s.addEventListener("click",()=>{P.currentPage>1&&P.goToPage(P.currentPage-1)}),i&&i.addEventListener("click",()=>{P.goToPage(P.currentPage+1)})}function he(){x.fetchDistributionData();const t=document.querySelector(".distribution-refresh-btn");t&&t.addEventListener("click",()=>{x.refreshData()});const e=document.querySelector(".distribution-month-dropdown");e&&e.addEventListener("change",a=>{x.filterByMonth(a.target.value)}),document.querySelectorAll(".distribution-mobile-search .search-input, .distribution-spreadsheet-controls .search-input").forEach(a=>{let l;a.addEventListener("input",n=>{clearTimeout(l),l=setTimeout(()=>{x.search(n.target.value)},300)})});const i=document.querySelector('.distribution-pagination-btn[data-action="prev"]'),o=document.querySelector('.distribution-pagination-btn[data-action="next"]');i&&i.addEventListener("click",()=>{x.currentPage>1&&x.goToPage(x.currentPage-1)}),o&&o.addEventListener("click",()=>{x.goToPage(x.currentPage+1)})}function Z(){return window.walletManager&&window.walletManager.walletAddress?window.walletManager.walletAddress:null}async function ge(t,e){try{const s=Z();if(!s)throw new Error("No wallet connected");const i={walletAddress:s,voteOption:e};console.log("📤 Submitting vote to backend:",{pollId:t,walletAddress:s,voteOption:e,url:`${v.apiBaseUrl}/api/polls/${t}/vote`,walletLength:s==null?void 0:s.length,optionLength:e==null?void 0:e.length,requestBody:i});const o=await fetch(`${v.apiBaseUrl}/api/polls/${t}/vote`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});console.log("📥 Backend response status:",o.status);const a=await o.json();return console.log("📥 Backend response data:",a),o.ok&&o.status===200?(console.log("✅ Vote submitted successfully:",a),{success:!0,isNewVote:!0}):o.status===400&&a.message&&a.message.includes("already voted")?(console.log("ℹ️ User already voted, will show results instead"),{success:!0,isNewVote:!1,alreadyVoted:!0}):(console.error("❌ Vote submission failed:",a.message||a.error),{success:!1,error:a.message||a.error})}catch(s){return console.error("❌ Error submitting vote:",s),console.error("❌ Error details:",{name:s.name,message:s.message,stack:s.stack}),{success:!1,error:"Network error. Please try again."}}}const v={apiBaseUrl:"https://img-protocol-backend.onrender.com",initialized:!1,currentWallet:null,walletVoteStatus:{}};async function D(){console.log("🗳️ Initializing simple voting system...");const t=document.querySelector(".vote-page");if(!t||t.style.display==="none"){console.log("🗳️ Not on voting page");return}console.log("✅ Vote page found!");try{v.initialized||(fe(),be(),v.initialized=!0,console.log("✅ Voting system initialized successfully")),await ht()}catch(e){console.error("❌ Failed to initialize voting system:",e)}}async function ve(t,e){if(!e)return!1;try{const i=await(await fetch(`${v.apiBaseUrl}/api/polls/${t}/votes`)).json();return i.success&&i.votes?i.votes.some(o=>o.wallet_address===e):!1}catch(s){return console.error("❌ Error checking vote status:",s),!1}}async function ht(){const t=Z();if(v.currentWallet=t,!t){console.log("ℹ️ No wallet connected, showing voting options"),ot();return}console.log(`🔍 Checking vote status for wallet: ${t}`);const e=document.querySelectorAll("[data-poll-id]");for(const s of e){const i=s.getAttribute("data-poll-id");if(!i)continue;await ve(i,t)?(console.log(`✅ User voted on poll ${i}, showing results`),me(s,i)):(console.log(`ℹ️ User has not voted on poll ${i}, showing voting options`),ot(s))}}async function me(t,e){t.querySelectorAll('.poll-results-compact, .poll-results, [class*="results"]').forEach(a=>a.remove());const i=t.querySelector(".submit-vote-btn");i&&(i.innerHTML="✓ Vote Recorded",i.className="vote-recorded-btn",i.disabled=!0);const o=t.querySelector(".poll-options");o&&(o.style.display="none");try{const l=await(await fetch(`${v.apiBaseUrl}/api/polls/${e}/results`)).json();if(l.success){const n=vt(e,l.results),r=t.querySelector(".poll-explanation");r&&r.insertAdjacentHTML("afterend",n)}}catch(a){console.error("Error fetching results:",a)}}function ot(t,e){t.querySelectorAll('.poll-results-compact, .poll-results, [class*="results"]').forEach(a=>a.remove());const i=t.querySelector(".submit-vote-btn");i&&(i.innerHTML="Submit Vote",i.className="submit-vote-btn",i.disabled=!1);const o=t.querySelector(".poll-options");o&&(o.style.display="flex")}function be(){console.log("🔍 Setting up wallet monitoring for voting system..."),setInterval(async()=>{const t=Z();t!==v.currentWallet&&(console.log("🔄 WALLET CHANGED:",{from:v.currentWallet,to:t,timestamp:new Date().toISOString()}),await ht()),t&&Math.random()<.1&&console.log(`🔍 Wallet monitoring: ${t}, vote status:`,v.walletVoteStatus)},2e3)}function fe(){console.log("✅ SETTING UP IMPROVED VOTING EVENT LISTENERS - BETTER SENSITIVITY!"),document.removeEventListener("click",at),document.addEventListener("click",at),console.log("✅ TESTING CLICK DETECTION - IMPROVED SENSITIVITY!"),document.addEventListener("click",e=>{e.target.closest(".poll-option")&&console.log("✅ POLL OPTION CLICK DETECTED!",e.target)});const t=document.createElement("style");t.textContent=`
        .poll-option {
            cursor: pointer !important;
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
        }
        .poll-option:hover {
            background-color: rgba(16, 185, 129, 0.1) !important;
        }
        .poll-option.selected {
            background-color: rgba(16, 185, 129, 0.2) !important;
        }
        .submit-vote-btn {
            cursor: pointer !important;
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
        }
        .submit-vote-btn:hover {
            opacity: 0.9 !important;
        }
        /* Vote Recorded Button Styling */
        .vote-recorded-btn {
            background: #10b981 !important;
            color: white !important;
            border: none !important;
            padding: 12px 24px !important;
            border-radius: 8px !important;
            font-weight: 600 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            cursor: default !important;
            opacity: 1 !important;
            transition: all 0.2s ease !important;
        }
        .vote-recorded-btn:hover {
            background: #10b981 !important;
            opacity: 1 !important;
        }
        .vote-recorded-btn svg {
            width: 16px;
            height: 16px;
            margin-right: 8px;
        }
        
        /* Ultra-Compact Poll Results Styling */
        .poll-results-compact {
            margin-top: 4px;
            padding: 10px;
            background: rgba(31, 41, 55, 0.4);
            border-radius: 6px;
            border: 1px solid rgba(16, 185, 129, 0.2);
        }
        .results-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
        }
        .results-title {
            color: #10b981;
            font-size: 14px;
            font-weight: 600;
            margin: 0;
        }
        .vote-count {
            color: #94a3b8;
            font-size: 12px;
            font-weight: 500;
        }
        .results-list {
            margin-bottom: 8px;
        }
        .result-row {
            display: flex;
            align-items: center;
            margin-bottom: 4px;
            padding: 2px 0;
        }
        .result-row.selected .result-label {
            color: #10b981;
            font-weight: 600;
        }
        .result-label {
            min-width: 70px;
            color: #f8fafc;
            font-size: 13px;
            font-weight: 500;
            margin-right: 8px;
        }
        .result-percentage {
            min-width: 50px;
            color: #f8fafc;
            font-size: 13px;
            font-weight: 500;
            margin-left: 8px;
            text-align: right;
        }
        .result-bar {
            flex: 1;
            height: 12px;
            background: rgba(55, 65, 81, 0.6);
            border-radius: 6px;
            overflow: hidden;
            position: relative;
        }
        .result-fill {
            height: 100%;
            border-radius: 6px;
            transition: width 0.4s ease;
        }
        .yes-fill {
            background: linear-gradient(90deg, #3b82f6, #60a5fa);
        }
        .no-fill {
            background: linear-gradient(90deg, #1e40af, #3b82f6);
        }
        .abstain-fill {
            background: linear-gradient(90deg, #1d4ed8, #2563eb);
        }
        .default-fill {
            background: linear-gradient(90deg, #3b82f6, #60a5fa);
        }
        .results-footer {
            text-align: center;
            padding-top: 4px;
            border-top: 1px solid rgba(16, 185, 129, 0.1);
        }
        .view-results-link {
            color: #3b82f6;
            text-decoration: none;
            font-size: 12px;
            font-weight: 500;
            transition: color 0.2s ease;
        }
        .view-results-link:hover {
            color: #60a5fa;
            text-decoration: underline;
        }
    `,document.head.appendChild(t),setTimeout(()=>{console.log("✅ DEBUGGING POLL OPTIONS - IMPROVED SENSITIVITY!");for(let e=1;e<=3;e++){const s=document.getElementById(`poll-options-${e}`);s?(console.log(`✅ Poll ${e} options:`,s),console.log(`✅ Poll ${e} pointer-events:`,window.getComputedStyle(s).pointerEvents),console.log(`✅ Poll ${e} display:`,window.getComputedStyle(s).display),console.log(`✅ Poll ${e} opacity:`,window.getComputedStyle(s).opacity),console.log(`✅ Poll ${e} children:`,s.children.length),s.querySelectorAll(".poll-option").forEach((i,o)=>{console.log(`✅ Poll ${e} option ${o}:`,i),console.log(`✅ Poll ${e} option ${o} pointer-events:`,window.getComputedStyle(i).pointerEvents),console.log(`✅ Poll ${e} option ${o} cursor:`,window.getComputedStyle(i).cursor)})):console.log(`❌ Poll ${e} options NOT FOUND!`)}},1e3)}function at(t){console.log("🗳️ Click detected on:",t.target),console.log("🗳️ Target classes:",t.target.classList),console.log("🗳️ Target tag:",t.target.tagName),console.log("🗳️ Target text:",t.target.textContent);const e=t.target.closest(".poll-option");if(e){console.log("✅ POLL OPTION CLICKED - IMPROVED SENSITIVITY!");const i=e.closest("[data-poll-id]"),o=i==null?void 0:i.dataset.pollId,a=e.dataset.option;console.log("🗳️ Poll ID:",o),console.log("🗳️ Option:",a),o&&a&&ye(o,a);return}const s=t.target.closest(".submit-vote-btn");if(s){console.log("✅ SUBMIT BUTTON CLICKED - IMPROVED SENSITIVITY!");const i=s.dataset.pollId,o=s.dataset.selectedOption;i&&o&&we(i,o);return}console.log("🔍 Click on non-voting element:",t.target)}function ye(t,e){console.log(`✅ SELECTING OPTION ${e} FOR POLL ${t} - NO RESTRICTIONS!`);const s=document.querySelector(`[data-poll-id="${t}"]`);if(!s){console.log(`❌ Poll card not found for ID: ${t}`);return}const i=s.querySelectorAll(".poll-option");console.log(`🔍 Available options in poll ${t}:`,Array.from(i).map(l=>l.dataset.option)),s.querySelectorAll(".poll-option").forEach(l=>{l.classList.remove("selected");const n=l.querySelector(".option-circle");n&&n.classList.remove("selected")});const o=s.querySelector(`[data-option="${e}"]`);if(o){o.classList.add("selected");const l=o.querySelector(".option-circle");l&&l.classList.add("selected"),console.log(`✅ OPTION ${e} SELECTED SUCCESSFULLY!`)}else console.log(`❌ Option element not found for: ${e}`),console.log("🔍 Available options:",Array.from(i).map(l=>l.dataset.option));const a=s.querySelector(".submit-vote-btn");a?(a.disabled=!1,a.dataset.selectedOption=e,a.textContent="Submit Vote",a.style.background="#3b82f6",console.log(`✅ SUBMIT BUTTON ENABLED FOR POLL ${t} WITH OPTION: ${e}`),console.log("🔍 Submit button dataset:",a.dataset)):console.log(`❌ Submit button not found for poll ${t}`)}async function we(t,e){console.log(`✅ SUBMITTING VOTE: poll ${t}, option "${e}" - REAL BACKEND!`),console.log("🔍 Option type:",typeof e,"Option length:",e==null?void 0:e.length);const s=document.querySelector(`[data-poll-id="${t}"]`);if(!s){console.log(`❌ Poll card not found for ID: ${t}`);return}const i=s.querySelector(".submit-vote-btn");i&&(i.disabled=!0,i.textContent="Submitting...",i.style.background="#6b7280");try{const o=await ge(t,e);if(o.success){o.alreadyVoted?console.log(`ℹ️ USER ALREADY VOTED: poll ${t}, showing results`):console.log(`✅ VOTE SUBMITTED SUCCESSFULLY: poll ${t}, option ${e}`),i&&(i.textContent="✓ Vote Recorded",i.style.background="#10b981");const a=s.querySelector(".poll-options");a&&(a.style.pointerEvents="none",a.style.opacity="0.6"),v.walletVoteStatus[t]=!0,console.log(`🔄 About to call displayPollResultsAfterVote for poll ${t}`),console.log("🚨 TESTING: Calling displayPollResultsAfterVote NOW!"),await gt(t),console.log(`✅ displayPollResultsAfterVote completed for poll ${t}`),console.log("🚨 TESTING: Function call completed!"),console.log(`✅ VOTING COMPLETED FOR POLL ${t}!`)}else i&&(i.disabled=!1,i.textContent="Submit Vote",i.style.background="#3b82f6"),console.error("❌ Vote submission failed:",o.error)}catch(o){console.error("❌ Error in submitVote:",o),i&&(i.disabled=!1,i.textContent="Submit Vote",i.style.background="#3b82f6")}}async function gt(t){console.log(`🔍 DISPLAYING POLL RESULTS AFTER VOTE: poll ${t}`);const e=document.querySelector(`[data-poll-id="${t}"]`);if(!e){console.log(`❌ Poll card not found for ID: ${t}`);return}console.log(`✅ Poll card found for ID: ${t}`);const s=e.querySelectorAll('.poll-results-compact, .poll-results, [class*="results"]');s.forEach(a=>a.remove()),console.log(`🧹 Cleaned up ${s.length} existing results`);const i=e.querySelector(".poll-options");i&&(i.style.display="none",console.log("✅ Hidden voting options"));const o=e.querySelector(".submit-vote-btn");o&&(o.innerHTML="✓ Vote Recorded",o.className="vote-recorded-btn",o.disabled=!0,console.log('✅ Updated submit button to "Vote Recorded"'));try{console.log("⏳ Waiting 500ms for backend to process vote..."),await new Promise(n=>setTimeout(n,500)),console.log(`📡 Fetching results from: ${v.apiBaseUrl}/api/polls/${t}/results`);const l=await(await fetch(`${v.apiBaseUrl}/api/polls/${t}/results`)).json();if(console.log("📊 Results response:",l),l.success){console.log("✅ Results data received:",l.results);const n=vt(t,l.results);console.log("📝 Generated results HTML:",n);const r=e.querySelector(".poll-explanation");r?(r.insertAdjacentHTML("afterend",n),console.log("✅ Results HTML inserted after poll explanation")):console.log("❌ Poll explanation not found")}else console.log("❌ Results fetch failed:",l.error)}catch(a){console.error("❌ Error fetching results:",a)}}function vt(t,e){console.log(`🔧 Creating results HTML for poll ${t}:`,e);const s=e.total||0;console.log(`📊 Total votes: ${s}`);let i="";const o=e.percentages||{};console.log("📊 Percentages:",o);const a=Object.keys(o);console.log("📊 Options:",a),a.forEach(n=>{const r=o[n]||"0.0",d=e[n]||0,u=mt(n),f=xe(n);console.log(`📊 Processing option ${n}: ${r}% (${d} votes)`),i+=`
            <div class="result-row">
                <span class="result-label">${u}</span>
                <div class="result-bar">
                    <div class="result-fill ${f}" style="width: ${r}%"></div>
                </div>
                <span class="result-percentage">${r}%</span>
            </div>
        `});const l=`
        <div class="poll-results-compact">
            <div class="results-list">
                ${i}
            </div>
            <div class="results-footer">
                <a href="#" onclick="showDetailedResults('${t}')" class="view-results-link">VIEW RESULTS</a>
            </div>
        </div>
    `;return console.log("📝 Final HTML generated:",l),l}function mt(t){return{yes:"Yes",no:"No",abstain:"Abstain",approve:"Approve",reject:"Reject",support:"Support",oppose:"Oppose",for:"For",against:"Against"}[t]||t.charAt(0).toUpperCase()+t.slice(1)}function xe(t){return{yes:"yes-fill",no:"no-fill",abstain:"abstain-fill",approve:"yes-fill",reject:"no-fill",support:"yes-fill",oppose:"no-fill",for:"yes-fill",against:"no-fill"}[t]||"default-fill"}window.initializeVotingSystem=D;window.reinitializeVotingSystem=()=>{D()};window.showDetailedResults=async function(t){if(console.log(`📊 SHOWING DETAILED RESULTS FOR POLL ${t} - REAL BACKEND DATA`),!t){console.error("❌ No pollId provided to showDetailedResults");return}try{const[e,s]=await Promise.all([fetch(`${v.apiBaseUrl}/api/polls/${t}`).then(i=>i.json()),fetch(`${v.apiBaseUrl}/api/polls/${t}/votes`).then(i=>i.json())]);if(e.success&&s.success){const i={};s.votes.forEach(l=>{i[l.vote_option]||(i[l.vote_option]=[]),i[l.vote_option].push(l.wallet_address)});const o=s.votes.length,a={question:e.poll.title,totalVotes:o,options:{}};Object.keys(i).forEach(l=>{var n,r;a.options[l]={percentage:o>0?((((n=i[l])==null?void 0:n.length)||0)/o*100).toFixed(1):"0.0",votes:((r=i[l])==null?void 0:r.length)||0,wallets:i[l]||[]}}),console.log("✅ REAL POLL DATA LOADED:",a),Se(a)}else console.error("❌ Failed to fetch poll data:",e.error||s.error)}catch(e){console.error("❌ Error fetching detailed results:",e)}};function Se(t){const e=document.getElementById("poll-results-modal");e&&e.remove();const s=`
        <div id="poll-results-modal" class="poll-results-modal-overlay">
            <div class="poll-results-modal">
                <div class="modal-header">
                    <h2 class="modal-title">Poll Results</h2>
                    <button class="modal-close" onclick="closePollResultsModal()">&times;</button>
                </div>
                <div class="modal-content">
                    <div class="poll-question-section">
                        <h3 class="poll-question">${t.question}</h3>
                        <div class="total-votes-info">Total Votes: ${t.totalVotes}</div>
                    </div>
                    
                    <div class="results-sections">
                        ${Object.keys(t.options).map(i=>`
                            <div class="result-section">
                                <div class="result-section-header">
                                    <span class="result-option">${mt(i)}</span>
                                    <span class="result-stats">${t.options[i].percentage}% (${t.options[i].votes} votes)</span>
                                </div>
                                <div class="wallet-list">
                                    ${t.options[i].wallets.length>0?t.options[i].wallets.map(o=>`<div class="wallet-item">
                                                <span class="wallet-address">${Ee(o)}</span>
                                            </div>`).join(""):'<div class="no-wallets">No wallets voted for this option</div>'}
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>
        </div>
    `;document.body.insertAdjacentHTML("beforeend",s),ke(),setTimeout(()=>{const i=document.getElementById("poll-results-modal");i&&i.classList.add("show")},10)}window.closePollResultsModal=function(){const t=document.getElementById("poll-results-modal");t&&(t.classList.remove("show"),setTimeout(()=>{t.remove()},300))};function Ee(t){return!t||t.length<8?t:`${t.slice(0,4)}...${t.slice(-4)}`}function ke(){if(document.getElementById("poll-results-modal-styles"))return;const t=document.createElement("style");t.id="poll-results-modal-styles",t.textContent=`
        .poll-results-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .poll-results-modal-overlay.show {
            opacity: 1;
        }
        .poll-results-modal {
            background: #1f2937;
            border-radius: 12px;
            border: 1px solid rgba(16, 185, 129, 0.3);
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            transform: scale(0.9);
            transition: transform 0.3s ease;
        }
        .poll-results-modal-overlay.show .poll-results-modal {
            transform: scale(1);
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 16px;
            border-bottom: 1px solid rgba(16, 185, 129, 0.2);
        }
        .modal-title {
            color: #10b981;
            font-size: 18px;
            font-weight: 600;
            margin: 0;
        }
        .modal-close {
            background: none;
            border: none;
            color: #94a3b8;
            font-size: 20px;
            cursor: pointer;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            transition: all 0.2s ease;
        }
        .modal-close:hover {
            background: rgba(239, 68, 68, 0.1);
            color: #ef4444;
        }
        .modal-content {
            padding: 16px;
        }
        .poll-question-section {
            margin-bottom: 16px;
            padding-bottom: 12px;
            border-bottom: 1px solid rgba(16, 185, 129, 0.1);
        }
        .poll-question {
            color: #f8fafc;
            font-size: 15px;
            font-weight: 500;
            margin: 0 0 6px 0;
            line-height: 1.4;
        }
        .total-votes-info {
            color: #10b981;
            font-size: 13px;
            font-weight: 600;
        }
        .results-sections {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        .result-section {
            background: rgba(31, 41, 55, 0.5);
            border-radius: 6px;
            padding: 12px;
            border: 1px solid rgba(16, 185, 129, 0.1);
        }
        .result-section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
        }
        .result-option {
            color: #f8fafc;
            font-size: 15px;
            font-weight: 600;
        }
        .result-stats {
            color: #10b981;
            font-size: 13px;
            font-weight: 500;
        }
        .wallet-list {
            max-height: 100px;
            overflow-y: auto;
            border: 1px solid rgba(16, 185, 129, 0.1);
            border-radius: 4px;
            background: rgba(31, 41, 55, 0.3);
        }
        .wallet-list::-webkit-scrollbar {
            width: 4px;
        }
        .wallet-list::-webkit-scrollbar-track {
            background: rgba(55, 65, 81, 0.3);
            border-radius: 2px;
        }
        .wallet-list::-webkit-scrollbar-thumb {
            background: rgba(16, 185, 129, 0.5);
            border-radius: 2px;
        }
        .wallet-list::-webkit-scrollbar-thumb:hover {
            background: rgba(16, 185, 129, 0.7);
        }
        .wallet-item {
            padding: 4px 8px;
            border-bottom: 1px solid rgba(16, 185, 129, 0.05);
            transition: background-color 0.2s ease;
        }
        .wallet-item:last-child {
            border-bottom: none;
        }
        .wallet-item:hover {
            background: rgba(16, 185, 129, 0.05);
        }
        .wallet-address {
            color: #e2e8f0;
            font-size: 12px;
            font-family: 'Courier New', monospace;
            font-weight: 500;
        }
        .no-wallets {
            color: #94a3b8;
            font-size: 13px;
            font-style: italic;
            text-align: center;
            padding: 12px;
        }
        
        /* Responsive design */
        @media (max-width: 640px) {
            .poll-results-modal {
                width: 95%;
                margin: 20px;
            }
            .modal-header, .modal-content {
                padding: 12px;
            }
            .result-section-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 4px;
            }
            .wallet-item {
                flex-direction: column;
                align-items: flex-start;
                gap: 8px;
            }
            .wallet-address {
                margin-right: 0;
            }
        }
    `,document.head.appendChild(t)}window.testVotingSystem=()=>{console.log("🧪 MANUAL TEST: Testing voting system..."),console.log("🧪 Vote page element:",document.querySelector(".vote-page")),console.log("🧪 Poll options found:",document.querySelectorAll(".poll-option").length),console.log("🧪 Submit buttons found:",document.querySelectorAll(".submit-vote-btn").length),console.log("🧪 Poll cards found:",document.querySelectorAll("[data-poll-id]").length),document.querySelectorAll(".poll-option").forEach((e,s)=>{var i;console.log(`🧪 Poll option ${s}:`,e),console.log(`🧪 Poll option ${s} classes:`,e.classList),console.log(`🧪 Poll option ${s} data-option:`,e.dataset.option),console.log(`🧪 Poll option ${s} parent:`,e.parentElement),console.log(`🧪 Poll option ${s} parent ID:`,(i=e.parentElement)==null?void 0:i.id)});const t=document.querySelector(".poll-option");t&&(console.log("🧪 Simulating click on first option..."),t.click()),D()};window.testPollResults=function(t=1,e="yes"){console.log("🧪 TESTING NEW POLL RESULTS DESIGN..."),gt(t),console.log("✅ Poll results test completed!")};window.testPollResultsModal=function(t=1){console.log("🧪 TESTING POLL RESULTS MODAL..."),showDetailedResults(t),console.log("✅ Poll results modal test completed!")};window.testModalDirect=function(){console.log("🧪 TESTING MODAL DIRECTLY..."),console.log("🧪 showDetailedResults function:",window.showDetailedResults),console.log("🧪 Calling showDetailedResults(1)..."),window.showDetailedResults(1)};const Le=new MutationObserver(t=>{t.forEach(e=>{e.addedNodes.forEach(s=>{var i;s.nodeType===Node.ELEMENT_NODE&&(s.querySelector&&s.querySelector(".vote-page")||(i=s.classList)!=null&&i.contains("vote-page"))&&(console.log("🗳️ Vote page detected, initializing..."),D())})})});Le.observe(document.body,{childList:!0,subtree:!0});document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{D()},1e3)});document.addEventListener("DOMContentLoaded",()=>{console.log("🚀 Protocol SPA Initializing..."),console.log("🧹 Clearing old wallet test data..."),localStorage.removeItem("walletConnected"),localStorage.removeItem("walletPremium"),localStorage.removeItem("walletPublicKey"),localStorage.removeItem("imgProtocolWalletState"),c.isConnected=!1,c.isPremium=!1,c.walletAddress="",c.currentPage="dashboard",console.log("🔄 App state reset:",c),E(),console.log("🔧 Sidebar initialized"),window.walletManager=new Vt,h.start(),h("/terminal"),console.log("🎯 Initializing clean donut chart..."),Promise.resolve().then(()=>{U()}),setInterval(()=>{const s=document.getElementById("clean-donut-chart");s&&s.querySelectorAll(".daily-pie-segment").length===0&&(console.log("🔄 Chart segments missing, restoring..."),U())},500);const t=new MutationObserver(s=>{s.forEach(i=>{i.type==="childList"&&i.addedNodes.forEach(o=>{o.nodeType===Node.ELEMENT_NODE&&o.querySelector&&o.querySelector("#clean-donut-chart")&&(console.log("🚀 Dashboard chart detected, initializing immediately!"),Promise.resolve().then(()=>{U()}))})})}),e=document.getElementById("main-content");e&&t.observe(e,{childList:!0,subtree:!0}),Qt(),de(),pe(),he(),setTimeout(()=>{const s=document.getElementById("sidebar-container");console.log("🔍 Sidebar container:",s),console.log("🔍 Sidebar content:",s?s.innerHTML.length:"null"),s&&!s.innerHTML.trim()&&(console.log("🔧 Sidebar empty, forcing update with current state..."),console.log("🔧 Current app state:",c),E())},50),console.log("✅ Protocol SPA Ready!")});
