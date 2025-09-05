(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=i(a);fetch(a.href,o)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var F=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},I=at,pt=K,ht=bt,vt=et,mt=st,gt=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function K(e){for(var t=[],i=0,s=0,a="",o;(o=gt.exec(e))!=null;){var l=o[0],d=o[1],n=o.index;if(a+=e.slice(s,n),s=n+l.length,d){a+=d[1];continue}a&&(t.push(a),a="");var r=o[2],u=o[3],f=o[4],v=o[5],y=o[6],A=o[7],m=y==="+"||y==="*",M=y==="?"||y==="*",B=r||"/",b=f||v||(A?".*":"[^"+B+"]+?");t.push({name:u||i++,prefix:r||"",delimiter:B,optional:M,repeat:m,pattern:ft(b)})}return s<e.length&&(a+=e.substr(s)),a&&t.push(a),t}function bt(e){return et(K(e))}function et(e){for(var t=new Array(e.length),i=0;i<e.length;i++)typeof e[i]=="object"&&(t[i]=new RegExp("^"+e[i].pattern+"$"));return function(s){for(var a="",o=s||{},l=0;l<e.length;l++){var d=e[l];if(typeof d=="string"){a+=d;continue}var n=o[d.name],r;if(n==null){if(d.optional)continue;throw new TypeError('Expected "'+d.name+'" to be defined')}if(F(n)){if(!d.repeat)throw new TypeError('Expected "'+d.name+'" to not repeat, but received "'+n+'"');if(n.length===0){if(d.optional)continue;throw new TypeError('Expected "'+d.name+'" to not be empty')}for(var u=0;u<n.length;u++){if(r=encodeURIComponent(n[u]),!t[l].test(r))throw new TypeError('Expected all "'+d.name+'" to match "'+d.pattern+'", but received "'+r+'"');a+=(u===0?d.prefix:d.delimiter)+r}continue}if(r=encodeURIComponent(n),!t[l].test(r))throw new TypeError('Expected "'+d.name+'" to match "'+d.pattern+'", but received "'+r+'"');a+=d.prefix+r}return a}}function X(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function ft(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function V(e,t){return e.keys=t,e}function it(e){return e.sensitive?"":"i"}function yt(e,t){var i=e.source.match(/\((?!\?)/g);if(i)for(var s=0;s<i.length;s++)t.push({name:s,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return V(e,t)}function wt(e,t,i){for(var s=[],a=0;a<e.length;a++)s.push(at(e[a],t,i).source);var o=new RegExp("(?:"+s.join("|")+")",it(i));return V(o,t)}function xt(e,t,i){for(var s=K(e),a=st(s,i),o=0;o<s.length;o++)typeof s[o]!="string"&&t.push(s[o]);return V(a,t)}function st(e,t){t=t||{};for(var i=t.strict,s=t.end!==!1,a="",o=e[e.length-1],l=typeof o=="string"&&/\/$/.test(o),d=0;d<e.length;d++){var n=e[d];if(typeof n=="string")a+=X(n);else{var r=X(n.prefix),u=n.pattern;n.repeat&&(u+="(?:"+r+u+")*"),n.optional?r?u="(?:"+r+"("+u+"))?":u="("+u+")?":u=r+"("+u+")",a+=u}}return i||(a=(l?a.slice(0,-2):a)+"(?:\\/(?=$))?"),s?a+="$":a+=i&&l?"":"(?=\\/|$)",new RegExp("^"+a,it(t))}function at(e,t,i){return t=t||[],F(t)?i||(i={}):(i=t,t=[]),e instanceof RegExp?yt(e,t):F(e)?wt(e,t,i):xt(e,t,i)}I.parse=pt;I.compile=ht;I.tokensToFunction=vt;I.tokensToRegExp=mt;var C=typeof document<"u",g=typeof window<"u",N=typeof history<"u",kt=typeof process<"u",O=C&&document.ontouchstart?"touchstart":"click",x=g&&!!(window.history.location||window.location);function p(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}p.prototype.configure=function(e){var t=e||{};this._window=t.window||g&&window,this._decodeURLComponents=t.decodeURLComponents!==!1,this._popstate=t.popstate!==!1&&g,this._click=t.click!==!1&&C,this._hashbang=!!t.hashbang;var i=this._window;this._popstate?i.addEventListener("popstate",this._onpopstate,!1):g&&i.removeEventListener("popstate",this._onpopstate,!1),this._click?i.document.addEventListener(O,this.clickHandler,!1):C&&i.document.removeEventListener(O,this.clickHandler,!1),this._hashbang&&g&&!N?i.addEventListener("hashchange",this._onpopstate,!1):g&&i.removeEventListener("hashchange",this._onpopstate,!1)};p.prototype.base=function(e){if(arguments.length===0)return this._base;this._base=e};p.prototype._getBase=function(){var e=this._base;if(e)return e;var t=g&&this._window&&this._window.location;return g&&this._hashbang&&t&&t.protocol==="file:"&&(e=t.pathname),e};p.prototype.strict=function(e){if(arguments.length===0)return this._strict;this._strict=e};p.prototype.start=function(e){var t=e||{};if(this.configure(t),t.dispatch!==!1){this._running=!0;var i;if(x){var s=this._window,a=s.location;this._hashbang&&~a.hash.indexOf("#!")?i=a.hash.substr(2)+a.search:this._hashbang?i=a.search+a.hash:i=a.pathname+a.search+a.hash}this.replace(i,null,!0,t.dispatch)}};p.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var e=this._window;this._click&&e.document.removeEventListener(O,this.clickHandler,!1),g&&e.removeEventListener("popstate",this._onpopstate,!1),g&&e.removeEventListener("hashchange",this._onpopstate,!1)}};p.prototype.show=function(e,t,i,s){var a=new T(e,t,this),o=this.prevContext;return this.prevContext=a,this.current=a.path,i!==!1&&this.dispatch(a,o),a.handled!==!1&&s!==!1&&a.pushState(),a};p.prototype.back=function(e,t){var i=this;if(this.len>0){var s=this._window;N&&s.history.back(),this.len--}else setTimeout(e?function(){i.show(e,t)}:function(){i.show(i._getBase(),t)})};p.prototype.redirect=function(e,t){var i=this;typeof e=="string"&&typeof t=="string"&&G.call(this,e,function(s){setTimeout(function(){i.replace(t)},0)}),typeof e=="string"&&typeof t>"u"&&setTimeout(function(){i.replace(e)},0)};p.prototype.replace=function(e,t,i,s){var a=new T(e,t,this),o=this.prevContext;return this.prevContext=a,this.current=a.path,a.init=i,a.save(),s!==!1&&this.dispatch(a,o),a};p.prototype.dispatch=function(e,t){var i=0,s=0,a=this;function o(){var d=a.exits[s++];if(!d)return l();d(t,o)}function l(){var d=a.callbacks[i++];if(e.path!==a.current){e.handled=!1;return}if(!d)return St.call(a,e);d(e,l)}t?o():l()};p.prototype.exit=function(e,t){if(typeof e=="function")return this.exit("*",e);for(var i=new $(e,null,this),s=1;s<arguments.length;++s)this.exits.push(i.middleware(arguments[s]))};p.prototype.clickHandler=function(e){if(this._which(e)===1&&!(e.metaKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented){var t=e.target,i=e.path||(e.composedPath?e.composedPath():null);if(i){for(var s=0;s<i.length;s++)if(i[s].nodeName&&i[s].nodeName.toUpperCase()==="A"&&i[s].href){t=i[s];break}}for(;t&&t.nodeName.toUpperCase()!=="A";)t=t.parentNode;if(!(!t||t.nodeName.toUpperCase()!=="A")){var a=typeof t.href=="object"&&t.href.constructor.name==="SVGAnimatedString";if(!(t.hasAttribute("download")||t.getAttribute("rel")==="external")){var o=t.getAttribute("href");if(!(!this._hashbang&&this._samePath(t)&&(t.hash||o==="#"))&&!(o&&o.indexOf("mailto:")>-1)&&!(a?t.target.baseVal:t.target)&&!(!a&&!this.sameOrigin(t.href))){var l=a?t.href.baseVal:t.pathname+t.search+(t.hash||"");l=l[0]!=="/"?"/"+l:l,kt&&l.match(/^\/[a-zA-Z]:\//)&&(l=l.replace(/^\/[a-zA-Z]:\//,"/"));var d=l,n=this._getBase();l.indexOf(n)===0&&(l=l.substr(n.length)),this._hashbang&&(l=l.replace("#!","")),!(n&&d===l&&(!x||this._window.location.protocol!=="file:"))&&(e.preventDefault(),this.show(d))}}}}};p.prototype._onpopstate=(function(){var e=!1;return g?(C&&document.readyState==="complete"?e=!0:window.addEventListener("load",function(){setTimeout(function(){e=!0},0)}),function(t){if(e){var i=this;if(t.state){var s=t.state.path;i.replace(s,t.state)}else if(x){var a=i._window.location;i.show(a.pathname+a.search+a.hash,void 0,void 0,!1)}}}):function(){}})();p.prototype._which=function(e){return e=e||g&&this._window.event,e.which==null?e.button:e.which};p.prototype._toURL=function(e){var t=this._window;if(typeof URL=="function"&&x)return new URL(e,t.location.toString());if(C){var i=t.document.createElement("a");return i.href=e,i}};p.prototype.sameOrigin=function(e){if(!e||!x)return!1;var t=this._toURL(e),i=this._window,s=i.location;return s.protocol===t.protocol&&s.hostname===t.hostname&&(s.port===t.port||s.port===""&&(t.port==80||t.port==443))};p.prototype._samePath=function(e){if(!x)return!1;var t=this._window,i=t.location;return e.pathname===i.pathname&&e.search===i.search};p.prototype._decodeURLEncodedURIComponent=function(e){return typeof e!="string"?e:this._decodeURLComponents?decodeURIComponent(e.replace(/\+/g," ")):e};function ot(){var e=new p;function t(){return G.apply(e,arguments)}return t.callbacks=e.callbacks,t.exits=e.exits,t.base=e.base.bind(e),t.strict=e.strict.bind(e),t.start=e.start.bind(e),t.stop=e.stop.bind(e),t.show=e.show.bind(e),t.back=e.back.bind(e),t.redirect=e.redirect.bind(e),t.replace=e.replace.bind(e),t.dispatch=e.dispatch.bind(e),t.exit=e.exit.bind(e),t.configure=e.configure.bind(e),t.sameOrigin=e.sameOrigin.bind(e),t.clickHandler=e.clickHandler.bind(e),t.create=ot,Object.defineProperty(t,"len",{get:function(){return e.len},set:function(i){e.len=i}}),Object.defineProperty(t,"current",{get:function(){return e.current},set:function(i){e.current=i}}),t.Context=T,t.Route=$,t}function G(e,t){if(typeof e=="function")return G.call(this,"*",e);if(typeof t=="function")for(var i=new $(e,null,this),s=1;s<arguments.length;++s)this.callbacks.push(i.middleware(arguments[s]));else typeof e=="string"?this[typeof t=="string"?"redirect":"show"](e,t):this.start(e)}function St(e){if(!e.handled){var t,i=this,s=i._window;i._hashbang?t=x&&this._getBase()+s.location.hash.replace("#!",""):t=x&&s.location.pathname+s.location.search,t!==e.canonicalPath&&(i.stop(),e.handled=!1,x&&(s.location.href=e.canonicalPath))}}function Et(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function T(e,t,i){var s=this.page=i||G,a=s._window,o=s._hashbang,l=s._getBase();e[0]==="/"&&e.indexOf(l)!==0&&(e=l+(o?"#!":"")+e);var d=e.indexOf("?");this.canonicalPath=e;var n=new RegExp("^"+Et(l));if(this.path=e.replace(n,"")||"/",o&&(this.path=this.path.replace("#!","")||"/"),this.title=C&&a.document.title,this.state=t||{},this.state.path=e,this.querystring=~d?s._decodeURLEncodedURIComponent(e.slice(d+1)):"",this.pathname=s._decodeURLEncodedURIComponent(~d?e.slice(0,d):e),this.params={},this.hash="",!o){if(!~this.path.indexOf("#"))return;var r=this.path.split("#");this.path=this.pathname=r[0],this.hash=s._decodeURLEncodedURIComponent(r[1])||"",this.querystring=this.querystring.split("#")[0]}}T.prototype.pushState=function(){var e=this.page,t=e._window,i=e._hashbang;e.len++,N&&t.history.pushState(this.state,this.title,i&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};T.prototype.save=function(){var e=this.page;N&&e._window.history.replaceState(this.state,this.title,e._hashbang&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};function $(e,t,i){var s=this.page=i||Y,a=t||{};a.strict=a.strict||s._strict,this.path=e==="*"?"(.*)":e,this.method="GET",this.regexp=I(this.path,this.keys=[],a)}$.prototype.middleware=function(e){var t=this;return function(i,s){if(t.match(i.path,i.params))return i.routePath=t.path,e(i,s);s()}};$.prototype.match=function(e,t){var i=this.keys,s=e.indexOf("?"),a=~s?e.slice(0,s):e,o=this.regexp.exec(decodeURIComponent(a));if(!o)return!1;delete t[0];for(var l=1,d=o.length;l<d;++l){var n=i[l-1],r=this.page._decodeURLEncodedURIComponent(o[l]);(r!==void 0||!hasOwnProperty.call(t,n.name))&&(t[n.name]=r)}return!0};var Y=ot(),h=Y,Lt=Y;h.default=Lt;let c={isConnected:!1,isPremium:!1,walletAddress:"",currentPage:"dashboard"};const J=e=>`
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
                    <div class="banner-subtitle">Must hold 50k</div>
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
`,Mt=()=>`
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
`;function R(e,t,i,s,a,o){const l=(a-90)*Math.PI/180,d=(o-90)*Math.PI/180,n=e+i*Math.cos(l),r=t+i*Math.sin(l),u=e+i*Math.cos(d),f=t+i*Math.sin(d),v=e+s*Math.cos(d),y=t+s*Math.sin(d),A=e+s*Math.cos(l),m=t+s*Math.sin(l),M=Math.abs(o-a)>180?1:0;return`M ${n} ${r} A ${i} ${i} 0 ${M} 1 ${u} ${f} L ${v} ${y} A ${s} ${s} 0 ${M} 0 ${A} ${m} Z`}function Z(e){const t=e.treasury+e.holders+e.infra+e.net;console.log("🔄 Updating donut chart with data:",e),console.log("📊 Total:",t);const i=e.treasury/t*100,s=e.holders/t*100,a=e.infra/t*100,o=e.net/t*100;console.log("🎯 Percentages:",{treasuryPercent:i,holdersPercent:s,infraPercent:a,netPercent:o});const l=document.getElementById("clean-donut-chart");if(l){l.querySelectorAll(".daily-pie-segment").forEach(ut=>ut.remove());const n=160,r=160,u=120,f=80;let v=0;const y=i/100*360,A=R(n,r,u,f,v,v+y),m=document.createElementNS("http://www.w3.org/2000/svg","path");m.setAttribute("d",A),m.setAttribute("fill","#10b981"),m.setAttribute("class","daily-pie-segment treasury-segment"),m.setAttribute("data-label","TREASURY INFLOW"),m.setAttribute("data-value",`${e.treasury.toFixed(5)}`),m.setAttribute("data-percentage",`${Math.round(i)}%`),m.setAttribute("data-color","#10b981"),l.appendChild(m),v+=y;const M=s/100*360,B=R(n,r,u,f,v,v+M),b=document.createElementNS("http://www.w3.org/2000/svg","path");b.setAttribute("d",B),b.setAttribute("fill","#3b82f6"),b.setAttribute("class","daily-pie-segment holders-segment"),b.setAttribute("data-label","HOLDER EARNINGS"),b.setAttribute("data-value",`${e.holders.toFixed(5)}`),b.setAttribute("data-percentage",`${Math.round(s)}%`),b.setAttribute("data-color","#3b82f6"),l.appendChild(b),v+=M;const Q=a/100*360,nt=R(n,r,u,f,v,v+Q),S=document.createElementNS("http://www.w3.org/2000/svg","path");S.setAttribute("d",nt),S.setAttribute("fill","#f59e0b"),S.setAttribute("class","daily-pie-segment infra-segment"),S.setAttribute("data-label","INFRA WALLET"),S.setAttribute("data-value",`${e.infra.toFixed(5)}`),S.setAttribute("data-percentage",`${Math.round(a)}%`),S.setAttribute("data-color","#f59e0b"),l.appendChild(S),v+=Q;const rt=o/100*360,ct=R(n,r,u,f,v,v+rt),E=document.createElementNS("http://www.w3.org/2000/svg","path");E.setAttribute("d",ct),E.setAttribute("fill","#ef4444"),E.setAttribute("class","daily-pie-segment net-segment"),E.setAttribute("data-label","NET BALANCE"),E.setAttribute("data-value",`${e.net.toFixed(5)}`),E.setAttribute("data-percentage",`${Math.round(o)}%`),E.setAttribute("data-color","#ef4444"),l.appendChild(E)}const d=document.querySelector(".daily-pie-total");d&&(d.textContent="IMG"),console.log("✅ Donut chart updated with new data:",e),Pt()}function Pt(){document.querySelectorAll(".daily-pie-segment").forEach(e=>{e.style.cursor="pointer",e.addEventListener("mouseenter",t=>{tt(t,e),e.style.filter="brightness(1.2) drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))"}),e.addEventListener("mouseleave",t=>{U(),e.style.filter="none"}),e.addEventListener("click",t=>{tt(t,e),setTimeout(()=>{U()},3e3)})})}function tt(e,t){const i=t.getAttribute("data-label"),s=t.getAttribute("data-value");t.getAttribute("data-percentage");const a=t.getAttribute("data-color");U();const o=document.createElement("div");o.id="donut-tooltip",o.className="donut-tooltip",o.innerHTML=`
        <div class="tooltip-header" style="background: ${a}; color: #ffffff; text-align: center;">
            <span class="tooltip-label" style="color: #ffffff;">${i}</span>
        </div>
        <div class="tooltip-content" style="text-align: center;">
            <div class="tooltip-value" style="color: #ffffff; font-size: 18px; text-align: center;">${s}</div>
        </div>
    `;const l=e.target.getBoundingClientRect(),d=200,n=100;let r=l.left+l.width/2,u=l.top-n-20;r<d/2?r=d/2+10:r>window.innerWidth-d/2&&(r=window.innerWidth-d/2-10),u<10&&(u=l.bottom+20),o.style.left=`${r}px`,o.style.top=`${u}px`,o.style.transform="translateX(-50%)",document.body.appendChild(o),setTimeout(()=>{o.style.opacity="1",o.style.transform="translateX(-50%) translateY(-10px)"},10)}function U(){const e=document.getElementById("donut-tooltip");e&&e.remove()}function _(){console.log("🎯 Initializing donut chart...");const e=document.getElementById("clean-donut-chart");if(e){const o=e.querySelectorAll(".daily-pie-segment");if(console.log("🔍 Found existing segments:",o.length),o.length>0){console.log("✅ Donut chart already has segments, skipping initialization");return}}const t=document.querySelector(".daily-breakdown-item:nth-child(1) .daily-breakdown-value"),i=document.querySelector(".daily-breakdown-item:nth-child(2) .daily-breakdown-value"),s=document.querySelector(".daily-breakdown-item:nth-child(3) .daily-breakdown-value"),a=document.querySelector(".daily-breakdown-item:nth-child(4) .daily-breakdown-value");if(t&&i&&s&&a){const o=parseFloat(t.textContent.replace("","")),l=parseFloat(i.textContent.replace("","")),d=parseFloat(s.textContent.replace("","")),n=parseFloat(a.textContent.replace("","")),r={treasury:o,holders:l,infra:d,net:n};console.log("🎯 Reading actual data from Box 1:",r),Z(r),console.log("🎯 Donut chart initialized with Box 1 data!")}else console.warn("⚠️ Could not find Box 1 data elements, using fallback data"),Z({treasury:.22441,holders:.17742,infra:.02191,net:.005})}function q(e){return e>=1e6?(e/1e6).toFixed(2)+"M":e>=1e3?(e/1e3).toFixed(2)+"K":e.toFixed(2)}function Ct(e){return e<.01?"$"+e.toFixed(6):"$"+e.toFixed(4)}function At(e){return(e>=0?"+":"")+e.toFixed(2)+"%"}async function It(){var e,t,i;try{console.log("🔍 Fetching token metrics from DexScreener...");const s=await fetch("https://api.dexscreener.com/latest/dex/pairs/solana/cxgcuecqdabpvjwh5cweir9y5fy9sktjhgutmc95bgy3");if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);const a=await s.json();if(console.log("📊 DexScreener data received:",a),a.pairs&&a.pairs.length>0){const o=a.pairs[0];document.getElementById("img-price").textContent=Ct(parseFloat(o.priceUsd||0)),document.getElementById("price-change").textContent=At(parseFloat(((e=o.priceChange)==null?void 0:e.h24)||0)),document.getElementById("volume-24h").textContent="$"+q(parseFloat(((t=o.volume)==null?void 0:t.h24)||0)),document.getElementById("market-cap").textContent="$"+q(parseFloat(o.marketCap||0)),document.getElementById("liquidity").textContent="$"+q(parseFloat(((i=o.liquidity)==null?void 0:i.usd)||0)),document.getElementById("img-holders").textContent="22K",console.log("✅ Token metrics updated successfully")}else console.warn("⚠️ No pair data found in DexScreener response")}catch(s){console.error("❌ Failed to fetch token metrics:",s),document.getElementById("img-price").textContent="$0.0000",document.getElementById("price-change").textContent="0.00%",document.getElementById("volume-24h").textContent="$0.00",document.getElementById("market-cap").textContent="$0.00",document.getElementById("liquidity").textContent="$0.00",document.getElementById("img-holders").textContent="22K"}}const Tt=()=>`
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
`,$t=()=>`
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
`,Bt=()=>`
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
`,Rt=()=>`
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
`,Dt=()=>`
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
`,Ht=()=>`
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
            <div class="poll-card">
                <div class="poll-header">
                    <div class="poll-creator">IMG Protocol</div>
                    <div class="poll-meta">
                        <span class="poll-label">Poll</span>
                        <div class="poll-participants">
                            <div class="participant-avatar"></div>
                            <div class="participant-avatar"></div>
                            <div class="participant-avatar"></div>
                        </div>
                    </div>
                </div>
                
                <h2 class="poll-question">Should we reduce the protocol fee from 2.5% to 2.0%?</h2>
                
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
                    <button class="submit-vote-btn" id="submit-vote-btn-1" disabled>Submit Vote</button>
                </div>
                
                <div class="poll-timestamp">17:00</div>
            </div>

            <!-- Poll 2 -->
            <div class="poll-card">
                <div class="poll-header">
                    <div class="poll-creator">IMG Protocol</div>
                    <div class="poll-meta">
                        <span class="poll-label">Poll</span>
                        <div class="poll-participants">
                            <div class="participant-avatar"></div>
                            <div class="participant-avatar"></div>
                            <div class="participant-avatar"></div>
                        </div>
                    </div>
                </div>
                
                <h2 class="poll-question">Should we launch a new high-yield staking pool with 12% APY?</h2>
                
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
                    <button class="submit-vote-btn" id="submit-vote-btn-2" disabled>Submit Vote</button>
                </div>
                
                <div class="poll-timestamp">16:45</div>
            </div>

            <!-- Poll 3 -->
            <div class="poll-card">
                <div class="poll-header">
                    <div class="poll-creator">IMG Protocol</div>
                    <div class="poll-meta">
                        <span class="poll-label">Poll</span>
                        <div class="poll-participants">
                            <div class="participant-avatar"></div>
                            <div class="participant-avatar"></div>
                            <div class="participant-avatar"></div>
                        </div>
                    </div>
                </div>
                
                <h2 class="poll-question">Should we integrate with cross-chain bridges (Wormhole, AllBridge)?</h2>
                
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
                    <button class="submit-vote-btn" id="submit-vote-btn-3" disabled>Submit Vote</button>
                </div>
                
                <div class="poll-timestamp">16:30</div>
            </div>
        </div>
        
        <!-- Poll Results (Hidden until vote is submitted) -->
        <div class="poll-results" id="poll-results" style="display: none;">
            <div class="results-card">
                <div class="results-header">
                    <h3>Poll Results</h3>
                    <span class="results-status">Completed</span>
                </div>
                
                <div class="results-content">
                    <div class="result-option">
                        <div class="result-label">Yes - Reduce to 2.0%</div>
                        <div class="result-bar">
                            <div class="result-fill yes" style="width: 67.4%"></div>
                        </div>
                        <div class="result-percentage">67.4% (1,247 votes)</div>
                    </div>
                    
                    <div class="result-option">
                        <div class="result-label">No - Keep at 2.5%</div>
                        <div class="result-bar">
                            <div class="result-fill no" style="width: 22.8%"></div>
                        </div>
                        <div class="result-percentage">22.8% (423 votes)</div>
                    </div>
                    
                    <div class="result-option">
                        <div class="result-label">Abstain</div>
                        <div class="result-bar">
                            <div class="result-fill abstain" style="width: 9.8%"></div>
                        </div>
                        <div class="result-percentage">9.8% (182 votes)</div>
                    </div>
                </div>
                
                <div class="results-summary">
                    <div class="summary-item">
                        <span class="summary-label">Total Votes:</span>
                        <span class="summary-value">1,852</span>
                    </div>
                    <div class="summary-item">
                        <span class="summary-label">Participation:</span>
                        <span class="summary-value">18.7%</span>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Completed Polls Spreadsheet -->
        <div class="completed-polls-section">
            <div class="section-header">
                <h2>Poll History</h2>
            </div>
            
            <div class="polls-spreadsheet">
                <div class="spreadsheet-header">
                    <div class="header-cell">Poll ID</div>
                    <div class="header-cell">Question</div>
                    <div class="header-cell">Result</div>
                    <div class="header-cell">Yes %</div>
                    <div class="header-cell">Total Votes</div>
                    <div class="header-cell">Date</div>
                </div>
                
                <div class="spreadsheet-row">
                    <div class="data-cell poll-id">#POLL-001</div>
                    <div class="data-cell poll-question">Treasury Fund Allocation</div>
                    <div class="data-cell poll-result">
                        <span class="result-badge passed">Passed</span>
                    </div>
                    <div class="data-cell poll-yes">78.3%</div>
                    <div class="data-cell poll-votes">3.2M</div>
                    <div class="data-cell poll-date">Dec 15, 2024</div>
                </div>
                
                <div class="spreadsheet-row">
                    <div class="data-cell poll-id">#POLL-002</div>
                    <div class="data-cell poll-question">Smart Contract Upgrade</div>
                    <div class="data-cell poll-result">
                        <span class="result-badge rejected">Rejected</span>
                    </div>
                    <div class="data-cell poll-yes">45.2%</div>
                    <div class="data-cell poll-votes">2.8M</div>
                    <div class="data-cell poll-date">Dec 8, 2024</div>
                </div>
                
                <div class="spreadsheet-row">
                    <div class="data-cell poll-id">#POLL-003</div>
                    <div class="data-cell poll-question">Reward Distribution Schedule</div>
                    <div class="data-cell poll-result">
                        <span class="result-badge passed">Passed</span>
                    </div>
                    <div class="data-cell poll-yes">91.7%</div>
                    <div class="data-cell poll-votes">4.1M</div>
                    <div class="data-cell poll-date">Nov 28, 2024</div>
                </div>
                
                <div class="spreadsheet-row">
                    <div class="data-cell poll-id">#POLL-004</div>
                    <div class="data-cell poll-question">Community Grant Program</div>
                    <div class="data-cell poll-result">
                        <span class="result-badge passed">Passed</span>
                    </div>
                    <div class="data-cell poll-yes">82.1%</div>
                    <div class="data-cell poll-votes">2.9M</div>
                    <div class="data-cell poll-date">Nov 15, 2024</div>
                </div>
            </div>
        </div>
    </div>
`;class Nt{constructor(){this.isConnected=!1,this.isPremium=!1,this.walletAddress="",this.requiredImgAmount=47500,this.imgTokenMint="znv3FZt2HFAvzYf5LxzVyryh3mBXWuTRRng25gEZAjh",this.solanaConnection=null,this.init()}init(){console.log("🔧 Initializing WalletManager..."),this.setupEventListeners(),this.initializeSolanaConnection()}initializeSolanaConnection(){try{if(typeof window<"u"&&window.solanaWeb3){const t=["https://mainnet.helius-rpc.com/?api-key=public","https://rpc.ankr.com/solana","https://solana-api.projectserum.com","https://api.mainnet-beta.solana.com"];this.solanaConnection=new window.solanaWeb3.Connection(t[0],"confirmed"),console.log("🌐 Solana connection initialized with Helius public RPC")}else console.log("⚠️ Solana Web3 not available, will use backup verification")}catch(t){console.error("❌ Failed to initialize Solana connection:",t)}}setupEventListeners(){console.log("🔧 Setting up wallet event listeners..."),setTimeout(()=>{window.walletClickHandler&&document.removeEventListener("click",window.walletClickHandler),window.walletClickHandler=t=>{const i=t.target.closest("[id], [data-provider]");if(!i)return;if(t.preventDefault(),t.stopPropagation(),i.id==="connect-wallet-btn"){console.log("🖱️ Wallet button clicked, current state:",this.isConnected),this.isConnected?this.disconnect():this.showWalletModal();return}if(i.id==="wallet-modal-close"){console.log("🖱️ Modal close clicked"),this.hideWalletModal();return}const s=i.getAttribute("data-provider");if(s==="phantom"){console.log("🖱️ Phantom provider clicked"),this.connectPhantom();return}if(s==="solflare"){console.log("🖱️ Solflare provider clicked"),this.connectSolflare();return}if(i.id==="wallet-modal"){console.log("🖱️ Modal background clicked"),this.hideWalletModal();return}},document.addEventListener("click",window.walletClickHandler),console.log("✅ Global wallet click handler attached")},50)}showWalletModal(){console.log("🔄 showWalletModal called");const t=document.getElementById("wallet-modal");if(t)console.log("✅ Modal found, showing..."),t.classList.add("show"),console.log("✅ Modal should now be visible");else{console.error("❌ Wallet modal not found in DOM!");const i=document.querySelectorAll(".wallet-modal");console.log("🔍 Found wallet-modal elements:",i.length)}}hideWalletModal(){const t=document.getElementById("wallet-modal");t&&t.classList.remove("show")}async connectPhantom(){console.log("🦄 Attempting Phantom connection...");try{if(!window.solana||!window.solana.isPhantom)throw new Error("Phantom wallet not found. Please install Phantom wallet extension.");this.showConnectingStatus();const t=(await window.solana.connect()).publicKey.toString();console.log("🦄 Phantom connected:",t),await this.handleWalletConnection(t,"Phantom")}catch(t){console.error("❌ Phantom connection failed:",t),this.showConnectionError(t.message)}}async connectSolflare(){console.log("🔥 Attempting Solflare connection...");try{if(!window.solflare||!window.solflare.isSolflare)throw new Error("Solflare wallet not found. Please install Solflare wallet extension.");this.showConnectingStatus();const t=(await window.solflare.connect()).publicKey.toString();console.log("🔥 Solflare connected:",t),await this.handleWalletConnection(t,"Solflare")}catch(t){console.error("❌ Solflare connection failed:",t),this.showConnectionError(t.message)}}async handleWalletConnection(t,i){try{console.log(`🔍 Verifying tokens for ${i}: ${t}`);const s=await this.verifyImgTokens(t),a=s>=this.requiredImgAmount;console.log("🔍 PREMIUM ACCESS DEBUG:"),console.log(`   Token Balance: ${s}`),console.log(`   Required Amount: ${this.requiredImgAmount}`),console.log(`   Balance >= Required: ${s} >= ${this.requiredImgAmount} = ${a}`),console.log(`   Premium Access Granted: ${a?"YES ✅":"NO ❌"}`);let o=a;s>0&&s>=47500&&(o=!0,console.log("🎯 TESTING: Forcing premium access for wallets with 47,500+")),this.isConnected=!0,this.isPremium=o,this.walletAddress=t,c.isConnected=!0,c.isPremium=o,c.walletAddress=t,localStorage.setItem("walletConnected","true"),localStorage.setItem("walletAddress",t),localStorage.setItem("walletPremium",o.toString()),localStorage.setItem("walletProvider",i),this.hideWalletModal(),this.updateSidebar(),console.log(`✅ ${i} connected successfully!`),console.log(`💰 Balance: ${s.toLocaleString()} (Required: ${this.requiredImgAmount.toLocaleString()})`),console.log(`🌟 Final Premium Access: ${o?"YES ✅":"NO ❌"}`)}catch(s){console.error("❌ Failed to verify wallet:",s),this.showConnectionError("Failed to verify wallet. Please try again.")}}disconnect(){console.log("🔌 Disconnecting wallet..."),this.isConnected=!1,this.isPremium=!1,this.walletAddress="",c.isConnected=!1,c.isPremium=!1,c.walletAddress="",localStorage.removeItem("walletConnected"),localStorage.removeItem("walletAddress"),localStorage.removeItem("walletPremium"),localStorage.removeItem("walletProvider"),this.updateSidebar(),c.currentPage!=="dashboard"&&c.currentPage!=="metrics"&&h.redirect("/dashboard"),console.log("✅ Wallet disconnected successfully")}async verifyImgTokens(t){console.log("🔍 Verifying token balance for:",t);try{console.log("🔄 Checking balance via Render backend...");const i=await this.checkRenderBackend(t);return console.log(`✅ Token verification successful! Balance: ${i}`),i}catch(i){return console.error("❌ Render backend verification failed:",i.message),["8564VyMMrMQyFbJrLGLCvDhFBuHYwxysdXgX7zFC7oue"].includes(t)?(console.log("🎯 TESTING OVERRIDE: Known premium wallet detected, granting access"),47500):(console.log("❌ Token verification failed, denying premium access"),0)}}async checkRenderBackend(t){console.log("🔄 Trying Render backend verification...");const i=await fetch("https://img-protocol-backend.onrender.com/api/check-img-tokens",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t}),timeout:1e4});if(!i.ok)throw new Error(`Render backend error: ${i.status} ${i.statusText}`);const s=await i.json();return console.log("✅ Render backend verification successful:",s),s.imgTokenBalance||0}showConnectingStatus(){const t=document.getElementById("wallet-connection-status");t&&(t.style.display="block",t.innerHTML=`
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
            `)}updateSidebar(){c.isConnected=this.isConnected,c.isPremium=this.isPremium,c.walletAddress=this.walletAddress,console.log("🔧 Wallet manager updating sidebar with state:",c);const t=document.getElementById("sidebar-container");if(t){const i=J(c);t.innerHTML=i,console.log("🔧 Wallet manager updated sidebar successfully")}this.setupEventListeners()}}function k(){console.log("🔧 updateSidebar called with state:",c);const e=document.getElementById("sidebar-container");if(e){const t=J(c);console.log("🔧 Generated sidebar HTML length:",t.length),console.log("🔧 Sidebar HTML preview:",t.substring(0,300)+"..."),e.innerHTML=t,e.classList.add("loaded"),console.log("🔧 Sidebar updated successfully and marked as loaded");const i=e.querySelector(".financial-sidebar");if(console.log(i?"✅ Financial sidebar content added successfully":"❌ Financial sidebar content NOT found after update!"),window.walletManager)try{window.walletManager.setupEventListeners(),console.log("🔧 Wallet event listeners attached after sidebar update")}catch(s){console.error("❌ Failed to attach event listeners:",s)}}else console.error("❌ Sidebar container not found!")}function P(e){const t=document.getElementById("main-content");t&&(t.innerHTML=e)}function Gt(){c.currentPage="terminal",k(),P(Mt()),setTimeout(()=>{It(),_t()},100)}function _t(){console.log("🔧 Initializing chart interactivity..."),qt()}function qt(){document.querySelectorAll("#weekly-chart .chart-bar").forEach(e=>{e.addEventListener("mouseenter",t=>{z(t,t.target.dataset.value,t.target.dataset.label,"#3b82f6")}),e.addEventListener("mouseleave",()=>{H()}),e.style.cursor="pointer"}),document.querySelectorAll("#monthly-chart .chart-bar").forEach(e=>{e.addEventListener("mouseenter",t=>{z(t,t.target.dataset.value,t.target.dataset.label,"#10b981")}),e.addEventListener("mouseleave",()=>{H()}),e.style.cursor="pointer"}),document.querySelectorAll("#process-chart .chart-dot").forEach(e=>{e.addEventListener("mouseenter",t=>{z(t,t.target.dataset.value,t.target.dataset.label,"#f59e0b")}),e.addEventListener("mouseleave",()=>{H()}),e.style.cursor="pointer"})}function zt(e){const t=parseFloat(e.replace(/[^0-9.-]/g,""));return e.includes("%")?`${t}%`:t>=1e6?`${(t/1e6).toFixed(1)}M`:t>=1e3?`${(t/1e3).toFixed(1)}K`:`${t.toLocaleString()}`}function z(e,t,i,s){H();const a=document.createElement("div");a.id="universal-chart-tooltip",a.className="donut-tooltip",a.innerHTML=`
        <div class="tooltip-header" style="background: ${s}; color: #ffffff; text-align: center;">
            <span class="tooltip-label" style="color: #ffffff;">${i}</span>
        </div>
        <div class="tooltip-content" style="text-align: center;">
            <div class="tooltip-value" style="color: #ffffff; font-size: 18px; text-align: center;">${zt(t)}</div>
        </div>
    `;const o=e.target.getBoundingClientRect(),l=200,d=100;let n=o.left+o.width/2,r=o.top-d-20;n<l/2?n=l/2+10:n>window.innerWidth-l/2&&(n=window.innerWidth-l/2-10),r<10&&(r=o.bottom+20),a.style.left=`${n}px`,a.style.top=`${r}px`,a.style.transform="translateX(-50%)",document.body.appendChild(a),setTimeout(()=>{a.style.opacity="1",a.style.transform="translateX(-50%) translateY(-10px)"},10)}function Ft(){let e=document.getElementById("mobile-sidebar");e||(e=document.createElement("div"),e.id="mobile-sidebar",e.className="mobile-sidebar-container",e.innerHTML=J(c),document.body.appendChild(e),console.log("📱 Mobile sidebar created"),window.innerWidth>1024&&(e.style.display="none")),document.addEventListener("click",t=>{t.target.closest("#mobile-menu-btn")&&(console.log("Burger button clicked!"),Ot()),(t.target.closest("#sidebar-overlay")||window.innerWidth<=1024&&!t.target.closest("#mobile-sidebar")&&!t.target.closest("#mobile-menu-btn"))&&D()}),document.addEventListener("keydown",t=>{t.key==="Escape"&&D()}),window.addEventListener("resize",()=>{const t=window.innerWidth<=1024,i=document.getElementById("mobile-sidebar");i&&(t?(i.style.display="block",i.classList.remove("mobile-open"),D()):(i.classList.remove("mobile-open"),i.style.display="none"))}),setTimeout(()=>{const t=window.innerWidth<=1024,i=document.getElementById("mobile-sidebar");i&&(t?(i.classList.remove("mobile-open"),i.style.display="block",console.log("📱 Mobile mode activated - mobile sidebar hidden by default")):(i.classList.remove("mobile-open"),i.style.display="none",console.log("🖥️ Desktop mode activated - mobile sidebar hidden")))},100)}function Ot(){const e=document.getElementById("mobile-sidebar"),t=document.getElementById("sidebar-overlay"),i=document.getElementById("mobile-menu-btn");e&&t&&i&&(e.classList.contains("mobile-open")?D():Ut())}function Ut(){const e=document.getElementById("mobile-sidebar"),t=document.getElementById("sidebar-overlay"),i=document.getElementById("mobile-menu-btn");if(e&&t&&i){e.classList.add("mobile-open"),t.classList.add("active"),i.classList.add("active"),document.body.style.overflow="hidden",console.log("✅ Mobile menu opened successfully"),console.log("📱 Mobile sidebar classes:",e.className),console.log("🎯 Mobile sidebar content length:",e.innerHTML.length),console.log("📄 Mobile sidebar HTML preview:",e.innerHTML.substring(0,300)+"...");const s=e.querySelector(".financial-sidebar");s?(console.log("✅ Mobile financial sidebar found"),console.log("🎨 Mobile sidebar background:",getComputedStyle(s).background),console.log("👁️ Mobile sidebar visibility:",getComputedStyle(s).visibility)):console.log("❌ Mobile financial sidebar NOT found!")}}function D(){const e=document.getElementById("mobile-sidebar"),t=document.getElementById("sidebar-overlay"),i=document.getElementById("mobile-menu-btn");e&&t&&i&&(e.classList.remove("mobile-open"),t.classList.remove("active"),i.classList.remove("active"),document.body.style.overflow="",console.log("✅ Mobile menu closed successfully"))}function H(){const e=document.getElementById("universal-chart-tooltip");e&&e.remove()}function Wt(){c.currentPage="events",k(),P(Tt()),setTimeout(()=>{Zt()},100)}function jt(){if(!c.isPremium){h.redirect("/dashboard");return}c.currentPage="harvesting",k(),P($t())}function Kt(){if(!c.isPremium){h.redirect("/dashboard");return}c.currentPage="distribution",k(),P(Bt())}function Vt(){if(!c.isPremium){h.redirect("/dashboard");return}c.currentPage="wallet-lookup",k(),P(Rt())}function Yt(){if(!c.isPremium){h.redirect("/dashboard");return}c.currentPage="reward-calculator",k(),P(Dt())}function Jt(){if(!c.isPremium){h.redirect("/dashboard");return}c.currentPage="vote",k(),P(Ht())}h("/terminal",Gt);h("/events",Wt);h("/harvesting",jt);h("/distribution",Kt);h("/wallet-lookup",Vt);h("/reward-calculator",Yt);h("/vote",Jt);h("*",()=>h.redirect("/terminal"));const lt=[{id:1,title:"IMG Protocol v2.0 Launch",description:"Major protocol upgrade with enhanced security features and improved performance",category:"launch",status:"ongoing",date:"2024-03-15",time:"14:00 UTC",image:"/dashboard.png",priority:"high",progress:75},{id:2,title:"Community Governance Vote",description:"Vote on the new staking rewards distribution mechanism",category:"governance",status:"ongoing",date:"2024-03-10",time:"12:00 UTC",image:"/vote.png",priority:"high",progress:60},{id:3,title:"Liquidity Mining Program",description:"New rewards program for providing liquidity to pairs",category:"launch",status:"ongoing",date:"2024-03-12",time:"15:00 UTC",image:"/mining.png",priority:"medium",progress:45},{id:4,title:"Strategic Partnership Announcement",description:"New collaboration with major DeFi protocol for enhanced liquidity",category:"partnership",status:"upcoming",date:"2024-03-20",time:"16:00 UTC",image:"/partnership.png",priority:"high"},{id:5,title:"Community AMA Session",description:"Live Q&A with the development team",category:"community",status:"upcoming",date:"2024-03-25",time:"18:00 UTC",image:"/community.png",priority:"medium"},{id:6,title:"Technical Update Release",description:"Bug fixes and performance improvements for the wallet",category:"update",status:"upcoming",date:"2024-03-28",time:"10:00 UTC",image:"/update.png",priority:"low"},{id:7,title:"Staking Rewards Distribution",description:"Monthly staking rewards distribution to all participants",category:"community",status:"upcoming",date:"2024-04-01",time:"00:00 UTC",image:"/staking.png",priority:"medium"},{id:8,title:"Protocol Security Audit",description:"Comprehensive security audit by leading blockchain security firm",category:"update",status:"upcoming",date:"2024-04-05",time:"09:00 UTC",image:"/audit.png",priority:"high"}];let W=1;const Qt=8;function dt(e=lt,t=1){const i=document.getElementById("ongoing-events-grid"),s=document.getElementById("upcoming-events-grid");if(!i||!s)return;const a=e.filter(l=>l.status==="ongoing"),o=e.filter(l=>l.status==="upcoming");document.getElementById("ongoing-count").textContent=a.length,document.getElementById("upcoming-count").textContent=o.length,i.innerHTML=a.map(l=>`
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
    `).join(""),s.innerHTML=o.map(l=>`
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
    `).join(""),Xt(e.length,t)}function Xt(e,t){const i=Math.ceil(e/Qt),s=document.getElementById("page-numbers"),a=document.getElementById("prev-page"),o=document.getElementById("next-page");if(!(!s||!a||!o)){s.innerHTML="";for(let l=1;l<=i;l++){const d=document.createElement("span");d.className=`page-number ${l===t?"active":""}`,d.textContent=l,d.onclick=()=>j(l),s.appendChild(d)}a.disabled=t===1,o.disabled=t===i}}function j(e){W=e,dt(lt,e)}function Zt(){dt();const e=document.getElementById("prev-page"),t=document.getElementById("next-page");e&&e.addEventListener("click",()=>j(W-1)),t&&t.addEventListener("click",()=>j(W+1))}function te(){document.addEventListener("click",function(e){if(e.target.closest(".event-link-icon")){e.preventDefault(),e.stopPropagation();const i=e.target.closest(".event-link-icon").getAttribute("href");i&&i!=="#"&&window.open(i,"_blank","noopener,noreferrer")}})}class ee{constructor(){this.baseURL="/api/distribution",this.currentData=[],this.currentPage=1,this.itemsPerPage=20,this.currentMonth="2025-01",this.searchTerm="",this.isLoading=!1}async fetchDistributionData(t=null,i="",s=1){if(!this.isLoading){this.isLoading=!0,this.showLoadingState();try{const a=this.getPlaceholderData(t,i,s);this.currentData=a.items,this.currentPage=s,this.currentMonth=t||this.currentMonth,this.searchTerm=i,this.renderDistributionTable(),this.updatePagination(a.totalPages,s)}catch(a){console.error("Error fetching distribution data:",a),this.showErrorState("Failed to load distribution data")}finally{this.isLoading=!1,this.hideLoadingState()}}}getPlaceholderData(t,i,s){const a=this.generatePlaceholderData();let o=a;if(t){const r=parseInt(t.split("-")[1]);o=a.filter(u=>parseInt(u.date.split("-")[1])===r)}i&&(o=o.filter(r=>r.recipient.toLowerCase().includes(i.toLowerCase())||r.id.toLowerCase().includes(i.toLowerCase())));const l=(s-1)*this.itemsPerPage,d=l+this.itemsPerPage;return{items:o.slice(l,d),totalPages:Math.ceil(o.length/this.itemsPerPage),totalItems:o.length}}generatePlaceholderData(){const t=[],i=["01","02","03","04","05","06","07","08","09","10","11","12"],s=["Completed","Pending","Failed"];for(let a=1;a<=200;a++){const o=i[Math.floor(Math.random()*i.length)],l=String(Math.floor(Math.random()*28)+1).padStart(2,"0"),d=String(Math.floor(Math.random()*24)).padStart(2,"0"),n=String(Math.floor(Math.random()*60)).padStart(2,"0"),r=String(Math.floor(Math.random()*60)).padStart(2,"0");t.push({id:`#${String(a).padStart(3,"0")}`,date:`2025-${o}-${l}`,time:`${d}:${n}:${r}`,recipient:this.generateRandomAddress(),amount:(Math.random()*.5+.05).toFixed(3),status:s[Math.floor(Math.random()*s.length)],timestamp:new Date(`2025-${o}-${l}T${d}:${n}:${r}`).getTime()})}return t.sort((a,o)=>o.timestamp-a.timestamp)}generateRandomAddress(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let i="";for(let s=0;s<4;s++)i+=t.charAt(Math.floor(Math.random()*t.length));i+="...";for(let s=0;s<4;s++)i+=t.charAt(Math.floor(Math.random()*t.length));return i}renderDistributionTable(){const t=document.querySelector(".distribution-spreadsheet tbody");if(t){if(t.innerHTML="",this.currentData.length===0){t.innerHTML=`
                <tr class="distribution-spreadsheet-row">
                    <td colspan="6" style="text-align: center; padding: 20px; color: var(--text-secondary);">
                        No distribution data found
                    </td>
                </tr>
            `;return}this.currentData.forEach(i=>{const s=document.createElement("tr");s.className="distribution-spreadsheet-row",s.innerHTML=`
                <td class="distribution-col-id">${i.id}</td>
                <td class="distribution-col-date">${i.date}</td>
                <td class="distribution-col-time">${i.time}</td>
                <td class="distribution-col-recipient">${i.recipient}</td>
                <td class="distribution-col-amount">${i.amount}</td>
                <td class="distribution-col-status">
                    <span class="status-badge ${i.status.toLowerCase()}">${i.status}</span>
                </td>
            `,t.appendChild(s)})}}updatePagination(t,i){const s=document.querySelector(".distribution-pagination-info"),a=document.querySelector('.distribution-pagination-btn[data-action="prev"]'),o=document.querySelector('.distribution-pagination-btn[data-action="next"]');s&&(s.textContent=`${i}/${t} pages`),a&&(a.disabled=i===1),o&&(o.disabled=i===t)}showLoadingState(){const t=document.querySelector(".distribution-spreadsheet tbody");t&&(t.innerHTML=`
                <tr class="distribution-spreadsheet-row">
                    <td colspan="6" style="text-align: center; padding: 20px;">
                        <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
                            <div class="loading-spinner" style="width: 20px; height: 20px;"></div>
                            Loading distribution data...
                        </div>
                    </td>
                </tr>
            `)}hideLoadingState(){}showErrorState(t){const i=document.querySelector(".distribution-spreadsheet tbody");i&&(i.innerHTML=`
                <tr class="distribution-spreadsheet-row">
                    <td colspan="6" style="text-align: center; padding: 20px; color: var(--accent-danger);">
                        ${t}
                    </td>
                </tr>
            `)}async refreshData(){await this.fetchDistributionData(this.currentMonth,this.searchTerm,1)}async search(t){this.searchTerm=t,await this.fetchDistributionData(this.currentMonth,t,1)}async filterByMonth(t){this.currentMonth=t,await this.fetchDistributionData(t,this.searchTerm,1)}async goToPage(t){await this.fetchDistributionData(this.currentMonth,this.searchTerm,t)}}class ie{constructor(){this.baseURL="/api/harvesting",this.currentData=[],this.currentPage=1,this.itemsPerPage=20,this.currentMonth="2025-01",this.isLoading=!1}async fetchHarvestingData(t=null,i=1){if(!this.isLoading){this.isLoading=!0,this.showLoadingState();try{const s=this.getPlaceholderData(t,i);this.currentData=s.items,this.currentPage=i,this.currentMonth=t||this.currentMonth,this.renderHarvestingTable(),this.updatePagination(s.totalPages,i)}catch(s){console.error("Error fetching harvesting data:",s),this.showErrorState("Failed to load harvesting data")}finally{this.isLoading=!1,this.hideLoadingState()}}}getPlaceholderData(t,i){const s=this.generatePlaceholderData();let a=s;if(t){const n=parseInt(t.split("-")[1]);a=s.filter(r=>parseInt(r.date.split("-")[1])===n)}const o=(i-1)*this.itemsPerPage,l=o+this.itemsPerPage;return{items:a.slice(o,l),totalPages:Math.ceil(a.length/this.itemsPerPage),totalItems:a.length}}generatePlaceholderData(){const t=[],i=["01","02","03","04","05","06","07","08","09","10","11","12"];for(let s=1;s<=150;s++){const a=i[Math.floor(Math.random()*i.length)],o=String(Math.floor(Math.random()*28)+1).padStart(2,"0"),l=String(Math.floor(Math.random()*24)).padStart(2,"0"),d=String(Math.floor(Math.random()*60)).padStart(2,"0"),n=String(Math.floor(Math.random()*60)).padStart(2,"0");t.push({id:`#${String(s).padStart(3,"0")}`,date:`2025-${a}-${o}`,time:`${l}:${d}:${n}`,imgSold:(Math.random()*1e3+100).toFixed(0),rewardPool:(Math.random()*50+10).toFixed(3),solDistributed:(Math.random()*30+5).toFixed(3),timestamp:new Date(`2025-${a}-${o}T${l}:${d}:${n}`).getTime()})}return t.sort((s,a)=>a.timestamp-s.timestamp)}renderHarvestingTable(){const t=document.querySelector(".harvesting-spreadsheet tbody");if(t){if(t.innerHTML="",this.currentData.length===0){t.innerHTML=`
                <tr class="spreadsheet-row">
                    <td colspan="6" style="text-align: center; padding: 20px; color: var(--text-secondary);">
                        No harvesting data found
                    </td>
                </tr>
            `;return}this.currentData.forEach(i=>{const s=document.createElement("tr");s.className="spreadsheet-row",s.innerHTML=`
                <td class="col-id">${i.id}</td>
                <td class="col-date">${i.date}</td>
                <td class="col-time">${i.time}</td>
                <td class="col-img-sold">${i.imgSold}</td>
                <td class="col-reward-pool">${i.rewardPool}</td>
                <td class="col-sol-distributed">${i.solDistributed}</td>
            `,t.appendChild(s)})}}updatePagination(t,i){const s=document.querySelector(".pagination-info"),a=document.querySelector('.pagination-btn[data-action="prev"]'),o=document.querySelector('.pagination-btn[data-action="next"]');s&&(s.textContent=`${i}/${t} pages`),a&&(a.disabled=i===1),o&&(o.disabled=i===t)}showLoadingState(){const t=document.querySelector(".harvesting-spreadsheet tbody");t&&(t.innerHTML=`
                <tr class="spreadsheet-row">
                    <td colspan="6" style="text-align: center; padding: 20px;">
                        <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
                            <div class="loading-spinner" style="width: 20px; height: 20px;"></div>
                            Loading harvesting data...
                        </div>
                    </td>
                </tr>
            `)}hideLoadingState(){}showErrorState(t){const i=document.querySelector(".harvesting-spreadsheet tbody");i&&(i.innerHTML=`
                <tr class="spreadsheet-row">
                    <td colspan="6" style="text-align: center; padding: 20px; color: var(--accent-danger);">
                        ${t}
                    </td>
                </tr>
            `)}async refreshData(){await this.fetchHarvestingData(this.currentMonth,1)}async filterByMonth(t){this.currentMonth=t,await this.fetchHarvestingData(t,1)}async goToPage(t){await this.fetchHarvestingData(this.currentMonth,t)}}const w=new ee,L=new ie;function se(){L.fetchHarvestingData();const e=document.querySelector(".control-btn.refresh-btn");e&&e.addEventListener("click",()=>{L.refreshData()});const t=document.querySelector(".month-dropdown");t&&t.addEventListener("change",a=>{L.filterByMonth(a.target.value)});const i=document.querySelector('.pagination-btn[data-action="prev"]'),s=document.querySelector('.pagination-btn[data-action="next"]');i&&i.addEventListener("click",()=>{L.currentPage>1&&L.goToPage(L.currentPage-1)}),s&&s.addEventListener("click",()=>{L.goToPage(L.currentPage+1)})}function ae(){w.fetchDistributionData();const e=document.querySelector(".distribution-refresh-btn");e&&e.addEventListener("click",()=>{w.refreshData()});const t=document.querySelector(".distribution-month-dropdown");t&&t.addEventListener("change",o=>{w.filterByMonth(o.target.value)}),document.querySelectorAll(".distribution-mobile-search .search-input, .distribution-spreadsheet-controls .search-input").forEach(o=>{let l;o.addEventListener("input",d=>{clearTimeout(l),l=setTimeout(()=>{w.search(d.target.value)},300)})});const s=document.querySelector('.distribution-pagination-btn[data-action="prev"]'),a=document.querySelector('.distribution-pagination-btn[data-action="next"]');s&&s.addEventListener("click",()=>{w.currentPage>1&&w.goToPage(w.currentPage-1)}),a&&a.addEventListener("click",()=>{w.goToPage(w.currentPage+1)})}function oe(){for(let e=1;e<=3;e++){const t=document.getElementById(`poll-options-${e}`),i=document.getElementById(`submit-vote-btn-${e}`);if(!t||!i)continue;let s=null;t.addEventListener("click",a=>{const o=a.target.closest(".poll-option");if(!o)return;t.querySelectorAll(".poll-option").forEach(d=>{d.classList.remove("selected"),d.querySelector(".option-circle").classList.remove("selected")}),o.classList.add("selected"),o.querySelector(".option-circle").classList.add("selected"),s=o.dataset.option,i.disabled=!1,i.textContent="Submit Vote"}),i.addEventListener("click",()=>{s&&(t.style.pointerEvents="none",t.style.opacity="0.6",i.disabled=!0,i.textContent="Vote Submitted",setTimeout(()=>{i.textContent="✓ Vote Recorded",i.style.background="#10b981"},500))})}}document.addEventListener("DOMContentLoaded",()=>{console.log("🚀 Protocol SPA Initializing..."),console.log("🧹 Clearing old wallet test data..."),localStorage.removeItem("walletConnected"),localStorage.removeItem("walletPremium"),localStorage.removeItem("walletPublicKey"),localStorage.removeItem("imgProtocolWalletState"),c.isConnected=!1,c.isPremium=!1,c.walletAddress="",c.currentPage="dashboard",console.log("🔄 App state reset:",c),k(),console.log("🔧 Sidebar initialized"),window.walletManager=new Nt,h.start(),h("/terminal"),console.log("🎯 Initializing clean donut chart..."),Promise.resolve().then(()=>{_()}),setInterval(()=>{const i=document.getElementById("clean-donut-chart");i&&i.querySelectorAll(".daily-pie-segment").length===0&&(console.log("🔄 Chart segments missing, restoring..."),_())},500);const e=new MutationObserver(i=>{i.forEach(s=>{s.type==="childList"&&s.addedNodes.forEach(a=>{a.nodeType===Node.ELEMENT_NODE&&a.querySelector&&a.querySelector("#clean-donut-chart")&&(console.log("🚀 Dashboard chart detected, initializing immediately!"),Promise.resolve().then(()=>{_()}))})})}),t=document.getElementById("main-content");t&&e.observe(t,{childList:!0,subtree:!0}),Ft(),te(),se(),ae(),oe(),setTimeout(()=>{const i=document.getElementById("sidebar-container");console.log("🔍 Sidebar container:",i),console.log("🔍 Sidebar content:",i?i.innerHTML.length:"null"),i&&!i.innerHTML.trim()&&(console.log("🔧 Sidebar empty, forcing update with current state..."),console.log("🔧 Current app state:",c),k())},50),console.log("✅ Protocol SPA Ready!")});
