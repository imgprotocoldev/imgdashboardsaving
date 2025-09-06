(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();var F=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},$=nt,yt=K,wt=Et,xt=at,St=lt,kt=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function K(e){for(var t=[],s=0,i=0,a="",o;(o=kt.exec(e))!=null;){var l=o[0],n=o[1],d=o.index;if(a+=e.slice(i,d),i=d+l.length,n){a+=n[1];continue}a&&(t.push(a),a="");var r=o[2],c=o[3],g=o[4],v=o[5],u=o[6],S=o[7],f=u==="+"||u==="*",w=u==="?"||u==="*",R=r||"/",x=g||v||(S?".*":"[^"+R+"]+?");t.push({name:c||s++,prefix:r||"",delimiter:R,optional:w,repeat:f,pattern:Mt(x)})}return i<e.length&&(a+=e.substr(i)),a&&t.push(a),t}function Et(e){return at(K(e))}function at(e){for(var t=new Array(e.length),s=0;s<e.length;s++)typeof e[s]=="object"&&(t[s]=new RegExp("^"+e[s].pattern+"$"));return function(i){for(var a="",o=i||{},l=0;l<e.length;l++){var n=e[l];if(typeof n=="string"){a+=n;continue}var d=o[n.name],r;if(d==null){if(n.optional)continue;throw new TypeError('Expected "'+n.name+'" to be defined')}if(F(d)){if(!n.repeat)throw new TypeError('Expected "'+n.name+'" to not repeat, but received "'+d+'"');if(d.length===0){if(n.optional)continue;throw new TypeError('Expected "'+n.name+'" to not be empty')}for(var c=0;c<d.length;c++){if(r=encodeURIComponent(d[c]),!t[l].test(r))throw new TypeError('Expected all "'+n.name+'" to match "'+n.pattern+'", but received "'+r+'"');a+=(c===0?n.prefix:n.delimiter)+r}continue}if(r=encodeURIComponent(d),!t[l].test(r))throw new TypeError('Expected "'+n.name+'" to match "'+n.pattern+'", but received "'+r+'"');a+=n.prefix+r}return a}}function et(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function Mt(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function Y(e,t){return e.keys=t,e}function ot(e){return e.sensitive?"":"i"}function Pt(e,t){var s=e.source.match(/\((?!\?)/g);if(s)for(var i=0;i<s.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return Y(e,t)}function Lt(e,t,s){for(var i=[],a=0;a<e.length;a++)i.push(nt(e[a],t,s).source);var o=new RegExp("(?:"+i.join("|")+")",ot(s));return Y(o,t)}function At(e,t,s){for(var i=K(e),a=lt(i,s),o=0;o<i.length;o++)typeof i[o]!="string"&&t.push(i[o]);return Y(a,t)}function lt(e,t){t=t||{};for(var s=t.strict,i=t.end!==!1,a="",o=e[e.length-1],l=typeof o=="string"&&/\/$/.test(o),n=0;n<e.length;n++){var d=e[n];if(typeof d=="string")a+=et(d);else{var r=et(d.prefix),c=d.pattern;d.repeat&&(c+="(?:"+r+c+")*"),d.optional?r?c="(?:"+r+"("+c+"))?":c="("+c+")?":c=r+"("+c+")",a+=c}}return s||(a=(l?a.slice(0,-2):a)+"(?:\\/(?=$))?"),i?a+="$":a+=s&&l?"":"(?=\\/|$)",new RegExp("^"+a,ot(t))}function nt(e,t,s){return t=t||[],F(t)?s||(s={}):(s=t,t=[]),e instanceof RegExp?Pt(e,t):F(e)?Lt(e,t,s):At(e,t,s)}$.parse=yt;$.compile=wt;$.tokensToFunction=xt;$.tokensToRegExp=St;var T=typeof document<"u",y=typeof window<"u",q=typeof history<"u",Ct=typeof process<"u",U=T&&document.ontouchstart?"touchstart":"click",E=y&&!!(window.history.location||window.location);function h(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}h.prototype.configure=function(e){var t=e||{};this._window=t.window||y&&window,this._decodeURLComponents=t.decodeURLComponents!==!1,this._popstate=t.popstate!==!1&&y,this._click=t.click!==!1&&T,this._hashbang=!!t.hashbang;var s=this._window;this._popstate?s.addEventListener("popstate",this._onpopstate,!1):y&&s.removeEventListener("popstate",this._onpopstate,!1),this._click?s.document.addEventListener(U,this.clickHandler,!1):T&&s.document.removeEventListener(U,this.clickHandler,!1),this._hashbang&&y&&!q?s.addEventListener("hashchange",this._onpopstate,!1):y&&s.removeEventListener("hashchange",this._onpopstate,!1)};h.prototype.base=function(e){if(arguments.length===0)return this._base;this._base=e};h.prototype._getBase=function(){var e=this._base;if(e)return e;var t=y&&this._window&&this._window.location;return y&&this._hashbang&&t&&t.protocol==="file:"&&(e=t.pathname),e};h.prototype.strict=function(e){if(arguments.length===0)return this._strict;this._strict=e};h.prototype.start=function(e){var t=e||{};if(this.configure(t),t.dispatch!==!1){this._running=!0;var s;if(E){var i=this._window,a=i.location;this._hashbang&&~a.hash.indexOf("#!")?s=a.hash.substr(2)+a.search:this._hashbang?s=a.search+a.hash:s=a.pathname+a.search+a.hash}this.replace(s,null,!0,t.dispatch)}};h.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var e=this._window;this._click&&e.document.removeEventListener(U,this.clickHandler,!1),y&&e.removeEventListener("popstate",this._onpopstate,!1),y&&e.removeEventListener("hashchange",this._onpopstate,!1)}};h.prototype.show=function(e,t,s,i){var a=new I(e,t,this),o=this.prevContext;return this.prevContext=a,this.current=a.path,s!==!1&&this.dispatch(a,o),a.handled!==!1&&i!==!1&&a.pushState(),a};h.prototype.back=function(e,t){var s=this;if(this.len>0){var i=this._window;q&&i.history.back(),this.len--}else setTimeout(e?function(){s.show(e,t)}:function(){s.show(s._getBase(),t)})};h.prototype.redirect=function(e,t){var s=this;typeof e=="string"&&typeof t=="string"&&O.call(this,e,function(i){setTimeout(function(){s.replace(t)},0)}),typeof e=="string"&&typeof t>"u"&&setTimeout(function(){s.replace(e)},0)};h.prototype.replace=function(e,t,s,i){var a=new I(e,t,this),o=this.prevContext;return this.prevContext=a,this.current=a.path,a.init=s,a.save(),i!==!1&&this.dispatch(a,o),a};h.prototype.dispatch=function(e,t){var s=0,i=0,a=this;function o(){var n=a.exits[i++];if(!n)return l();n(t,o)}function l(){var n=a.callbacks[s++];if(e.path!==a.current){e.handled=!1;return}if(!n)return Tt.call(a,e);n(e,l)}t?o():l()};h.prototype.exit=function(e,t){if(typeof e=="function")return this.exit("*",e);for(var s=new B(e,null,this),i=1;i<arguments.length;++i)this.exits.push(s.middleware(arguments[i]))};h.prototype.clickHandler=function(e){if(this._which(e)===1&&!(e.metaKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented){var t=e.target,s=e.path||(e.composedPath?e.composedPath():null);if(s){for(var i=0;i<s.length;i++)if(s[i].nodeName&&s[i].nodeName.toUpperCase()==="A"&&s[i].href){t=s[i];break}}for(;t&&t.nodeName.toUpperCase()!=="A";)t=t.parentNode;if(!(!t||t.nodeName.toUpperCase()!=="A")){var a=typeof t.href=="object"&&t.href.constructor.name==="SVGAnimatedString";if(!(t.hasAttribute("download")||t.getAttribute("rel")==="external")){var o=t.getAttribute("href");if(!(!this._hashbang&&this._samePath(t)&&(t.hash||o==="#"))&&!(o&&o.indexOf("mailto:")>-1)&&!(a?t.target.baseVal:t.target)&&!(!a&&!this.sameOrigin(t.href))){var l=a?t.href.baseVal:t.pathname+t.search+(t.hash||"");l=l[0]!=="/"?"/"+l:l,Ct&&l.match(/^\/[a-zA-Z]:\//)&&(l=l.replace(/^\/[a-zA-Z]:\//,"/"));var n=l,d=this._getBase();l.indexOf(d)===0&&(l=l.substr(d.length)),this._hashbang&&(l=l.replace("#!","")),!(d&&n===l&&(!E||this._window.location.protocol!=="file:"))&&(e.preventDefault(),this.show(n))}}}}};h.prototype._onpopstate=(function(){var e=!1;return y?(T&&document.readyState==="complete"?e=!0:window.addEventListener("load",function(){setTimeout(function(){e=!0},0)}),function(t){if(e){var s=this;if(t.state){var i=t.state.path;s.replace(i,t.state)}else if(E){var a=s._window.location;s.show(a.pathname+a.search+a.hash,void 0,void 0,!1)}}}):function(){}})();h.prototype._which=function(e){return e=e||y&&this._window.event,e.which==null?e.button:e.which};h.prototype._toURL=function(e){var t=this._window;if(typeof URL=="function"&&E)return new URL(e,t.location.toString());if(T){var s=t.document.createElement("a");return s.href=e,s}};h.prototype.sameOrigin=function(e){if(!e||!E)return!1;var t=this._toURL(e),s=this._window,i=s.location;return i.protocol===t.protocol&&i.hostname===t.hostname&&(i.port===t.port||i.port===""&&(t.port==80||t.port==443))};h.prototype._samePath=function(e){if(!E)return!1;var t=this._window,s=t.location;return e.pathname===s.pathname&&e.search===s.search};h.prototype._decodeURLEncodedURIComponent=function(e){return typeof e!="string"?e:this._decodeURLComponents?decodeURIComponent(e.replace(/\+/g," ")):e};function dt(){var e=new h;function t(){return O.apply(e,arguments)}return t.callbacks=e.callbacks,t.exits=e.exits,t.base=e.base.bind(e),t.strict=e.strict.bind(e),t.start=e.start.bind(e),t.stop=e.stop.bind(e),t.show=e.show.bind(e),t.back=e.back.bind(e),t.redirect=e.redirect.bind(e),t.replace=e.replace.bind(e),t.dispatch=e.dispatch.bind(e),t.exit=e.exit.bind(e),t.configure=e.configure.bind(e),t.sameOrigin=e.sameOrigin.bind(e),t.clickHandler=e.clickHandler.bind(e),t.create=dt,Object.defineProperty(t,"len",{get:function(){return e.len},set:function(s){e.len=s}}),Object.defineProperty(t,"current",{get:function(){return e.current},set:function(s){e.current=s}}),t.Context=I,t.Route=B,t}function O(e,t){if(typeof e=="function")return O.call(this,"*",e);if(typeof t=="function")for(var s=new B(e,null,this),i=1;i<arguments.length;++i)this.callbacks.push(s.middleware(arguments[i]));else typeof e=="string"?this[typeof t=="string"?"redirect":"show"](e,t):this.start(e)}function Tt(e){if(!e.handled){var t,s=this,i=s._window;s._hashbang?t=E&&this._getBase()+i.location.hash.replace("#!",""):t=E&&i.location.pathname+i.location.search,t!==e.canonicalPath&&(s.stop(),e.handled=!1,E&&(i.location.href=e.canonicalPath))}}function $t(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function I(e,t,s){var i=this.page=s||O,a=i._window,o=i._hashbang,l=i._getBase();e[0]==="/"&&e.indexOf(l)!==0&&(e=l+(o?"#!":"")+e);var n=e.indexOf("?");this.canonicalPath=e;var d=new RegExp("^"+$t(l));if(this.path=e.replace(d,"")||"/",o&&(this.path=this.path.replace("#!","")||"/"),this.title=T&&a.document.title,this.state=t||{},this.state.path=e,this.querystring=~n?i._decodeURLEncodedURIComponent(e.slice(n+1)):"",this.pathname=i._decodeURLEncodedURIComponent(~n?e.slice(0,n):e),this.params={},this.hash="",!o){if(!~this.path.indexOf("#"))return;var r=this.path.split("#");this.path=this.pathname=r[0],this.hash=i._decodeURLEncodedURIComponent(r[1])||"",this.querystring=this.querystring.split("#")[0]}}I.prototype.pushState=function(){var e=this.page,t=e._window,s=e._hashbang;e.len++,q&&t.history.pushState(this.state,this.title,s&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};I.prototype.save=function(){var e=this.page;q&&e._window.history.replaceState(this.state,this.title,e._hashbang&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};function B(e,t,s){var i=this.page=s||J,a=t||{};a.strict=a.strict||i._strict,this.path=e==="*"?"(.*)":e,this.method="GET",this.regexp=$(this.path,this.keys=[],a)}B.prototype.middleware=function(e){var t=this;return function(s,i){if(t.match(s.path,s.params))return s.routePath=t.path,e(s,i);i()}};B.prototype.match=function(e,t){var s=this.keys,i=e.indexOf("?"),a=~i?e.slice(0,i):e,o=this.regexp.exec(decodeURIComponent(a));if(!o)return!1;delete t[0];for(var l=1,n=o.length;l<n;++l){var d=s[l-1],r=this.page._decodeURLEncodedURIComponent(o[l]);(r!==void 0||!hasOwnProperty.call(t,d.name))&&(t[d.name]=r)}return!0};var J=dt(),m=J,It=J;m.default=It;let p={isConnected:!1,isPremium:!1,walletAddress:"",currentPage:"dashboard"};const Q=e=>`
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
`;function D(e,t,s,i,a,o){const l=(a-90)*Math.PI/180,n=(o-90)*Math.PI/180,d=e+s*Math.cos(l),r=t+s*Math.sin(l),c=e+s*Math.cos(n),g=t+s*Math.sin(n),v=e+i*Math.cos(n),u=t+i*Math.sin(n),S=e+i*Math.cos(l),f=t+i*Math.sin(l),w=Math.abs(o-a)>180?1:0;return`M ${d} ${r} A ${s} ${s} 0 ${w} 1 ${c} ${g} L ${v} ${u} A ${i} ${i} 0 ${w} 0 ${S} ${f} Z`}function st(e){const t=e.treasury+e.holders+e.infra+e.net;console.log("🔄 Updating donut chart with data:",e),console.log("📊 Total:",t);const s=e.treasury/t*100,i=e.holders/t*100,a=e.infra/t*100,o=e.net/t*100;console.log("🎯 Percentages:",{treasuryPercent:s,holdersPercent:i,infraPercent:a,netPercent:o});const l=document.getElementById("clean-donut-chart");if(l){l.querySelectorAll(".daily-pie-segment").forEach(ft=>ft.remove());const d=160,r=160,c=120,g=80;let v=0;const u=s/100*360,S=D(d,r,c,g,v,v+u),f=document.createElementNS("http://www.w3.org/2000/svg","path");f.setAttribute("d",S),f.setAttribute("fill","#10b981"),f.setAttribute("class","daily-pie-segment treasury-segment"),f.setAttribute("data-label","TREASURY INFLOW"),f.setAttribute("data-value",`${e.treasury.toFixed(5)}`),f.setAttribute("data-percentage",`${Math.round(s)}%`),f.setAttribute("data-color","#10b981"),l.appendChild(f),v+=u;const w=i/100*360,R=D(d,r,c,g,v,v+w),x=document.createElementNS("http://www.w3.org/2000/svg","path");x.setAttribute("d",R),x.setAttribute("fill","#3b82f6"),x.setAttribute("class","daily-pie-segment holders-segment"),x.setAttribute("data-label","HOLDER EARNINGS"),x.setAttribute("data-value",`${e.holders.toFixed(5)}`),x.setAttribute("data-percentage",`${Math.round(i)}%`),x.setAttribute("data-color","#3b82f6"),l.appendChild(x),v+=w;const tt=a/100*360,gt=D(d,r,c,g,v,v+tt),P=document.createElementNS("http://www.w3.org/2000/svg","path");P.setAttribute("d",gt),P.setAttribute("fill","#f59e0b"),P.setAttribute("class","daily-pie-segment infra-segment"),P.setAttribute("data-label","INFRA WALLET"),P.setAttribute("data-value",`${e.infra.toFixed(5)}`),P.setAttribute("data-percentage",`${Math.round(a)}%`),P.setAttribute("data-color","#f59e0b"),l.appendChild(P),v+=tt;const mt=o/100*360,bt=D(d,r,c,g,v,v+mt),L=document.createElementNS("http://www.w3.org/2000/svg","path");L.setAttribute("d",bt),L.setAttribute("fill","#ef4444"),L.setAttribute("class","daily-pie-segment net-segment"),L.setAttribute("data-label","NET BALANCE"),L.setAttribute("data-value",`${e.net.toFixed(5)}`),L.setAttribute("data-percentage",`${Math.round(o)}%`),L.setAttribute("data-color","#ef4444"),l.appendChild(L)}const n=document.querySelector(".daily-pie-total");n&&(n.textContent="IMG"),console.log("✅ Donut chart updated with new data:",e),Rt()}function Rt(){document.querySelectorAll(".daily-pie-segment").forEach(e=>{e.style.cursor="pointer",e.addEventListener("mouseenter",t=>{it(t,e),e.style.filter="brightness(1.2) drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))"}),e.addEventListener("mouseleave",t=>{W(),e.style.filter="none"}),e.addEventListener("click",t=>{it(t,e),setTimeout(()=>{W()},3e3)})})}function it(e,t){const s=t.getAttribute("data-label"),i=t.getAttribute("data-value");t.getAttribute("data-percentage");const a=t.getAttribute("data-color");W();const o=document.createElement("div");o.id="donut-tooltip",o.className="donut-tooltip",o.innerHTML=`
        <div class="tooltip-header" style="background: ${a}; color: #ffffff; text-align: center;">
            <span class="tooltip-label" style="color: #ffffff;">${s}</span>
        </div>
        <div class="tooltip-content" style="text-align: center;">
            <div class="tooltip-value" style="color: #ffffff; font-size: 18px; text-align: center;">${i}</div>
        </div>
    `;const l=e.target.getBoundingClientRect(),n=200,d=100;let r=l.left+l.width/2,c=l.top-d-20;r<n/2?r=n/2+10:r>window.innerWidth-n/2&&(r=window.innerWidth-n/2-10),c<10&&(c=l.bottom+20),o.style.left=`${r}px`,o.style.top=`${c}px`,o.style.transform="translateX(-50%)",document.body.appendChild(o),setTimeout(()=>{o.style.opacity="1",o.style.transform="translateX(-50%) translateY(-10px)"},10)}function W(){const e=document.getElementById("donut-tooltip");e&&e.remove()}function z(){console.log("🎯 Initializing donut chart...");const e=document.getElementById("clean-donut-chart");if(e){const o=e.querySelectorAll(".daily-pie-segment");if(console.log("🔍 Found existing segments:",o.length),o.length>0){console.log("✅ Donut chart already has segments, skipping initialization");return}}const t=document.querySelector(".daily-breakdown-item:nth-child(1) .daily-breakdown-value"),s=document.querySelector(".daily-breakdown-item:nth-child(2) .daily-breakdown-value"),i=document.querySelector(".daily-breakdown-item:nth-child(3) .daily-breakdown-value"),a=document.querySelector(".daily-breakdown-item:nth-child(4) .daily-breakdown-value");if(t&&s&&i&&a){const o=parseFloat(t.textContent.replace("","")),l=parseFloat(s.textContent.replace("","")),n=parseFloat(i.textContent.replace("","")),d=parseFloat(a.textContent.replace("","")),r={treasury:o,holders:l,infra:n,net:d};console.log("🎯 Reading actual data from Box 1:",r),st(r),console.log("🎯 Donut chart initialized with Box 1 data!")}else console.warn("⚠️ Could not find Box 1 data elements, using fallback data"),st({treasury:.22441,holders:.17742,infra:.02191,net:.005})}function G(e){return e>=1e6?(e/1e6).toFixed(2)+"M":e>=1e3?(e/1e3).toFixed(2)+"K":e.toFixed(2)}function Dt(e){return e<.01?"$"+e.toFixed(6):"$"+e.toFixed(4)}function Ht(e){return(e>=0?"+":"")+e.toFixed(2)+"%"}async function Nt(){var e,t,s;try{console.log("🔍 Fetching token metrics from DexScreener...");const i=await fetch("https://api.dexscreener.com/latest/dex/pairs/solana/cxgcuecqdabpvjwh5cweir9y5fy9sktjhgutmc95bgy3");if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);const a=await i.json();if(console.log("📊 DexScreener data received:",a),a.pairs&&a.pairs.length>0){const o=a.pairs[0];document.getElementById("img-price").textContent=Dt(parseFloat(o.priceUsd||0)),document.getElementById("price-change").textContent=Ht(parseFloat(((e=o.priceChange)==null?void 0:e.h24)||0)),document.getElementById("volume-24h").textContent="$"+G(parseFloat(((t=o.volume)==null?void 0:t.h24)||0)),document.getElementById("market-cap").textContent="$"+G(parseFloat(o.marketCap||0)),document.getElementById("liquidity").textContent="$"+G(parseFloat(((s=o.liquidity)==null?void 0:s.usd)||0)),document.getElementById("img-holders").textContent="22K",console.log("✅ Token metrics updated successfully")}else console.warn("⚠️ No pair data found in DexScreener response")}catch(i){console.error("❌ Failed to fetch token metrics:",i),document.getElementById("img-price").textContent="$0.0000",document.getElementById("price-change").textContent="0.00%",document.getElementById("volume-24h").textContent="$0.00",document.getElementById("market-cap").textContent="$0.00",document.getElementById("liquidity").textContent="$0.00",document.getElementById("img-holders").textContent="22K"}}const qt=()=>`
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
`,Ot=()=>`
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
`,Gt=()=>`
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
    
    <div class="vote-page">
        <!-- Active Polls Grid -->
        <div class="active-polls-grid">
            <!-- Poll 1 -->
            <div class="poll-card">
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
                    <button class="submit-vote-btn" id="submit-vote-btn-1" disabled>Submit Vote</button>
                    <div class="poll-timestamp">End Date: Sept 10, 2025 – 7:00 PM EST</div>
                </div>
            </div>

            <!-- Poll 2 -->
            <div class="poll-card">
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
                    <button class="submit-vote-btn" id="submit-vote-btn-2" disabled>Submit Vote</button>
                    <div class="poll-timestamp">End Date: Sept 12, 2025 – 6:45 PM EST</div>
                </div>
            </div>

            <!-- Poll 3 -->
            <div class="poll-card">
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
                    <button class="submit-vote-btn" id="submit-vote-btn-3" disabled>Submit Vote</button>
                    <div class="poll-timestamp">End Date: Sept 15, 2025 – 4:30 PM EST</div>
                </div>
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
`;class Ut{constructor(){this.isConnected=!1,this.isPremium=!1,this.walletAddress="",this.requiredImgAmount=47500,this.imgTokenMint="znv3FZt2HFAvzYf5LxzVyryh3mBXWuTRRng25gEZAjh",this.solanaConnection=null,this.init()}init(){console.log("🔧 Initializing WalletManager..."),this.setupEventListeners(),this.initializeSolanaConnection()}initializeSolanaConnection(){try{if(typeof window<"u"&&window.solanaWeb3){const t=["https://mainnet.helius-rpc.com/?api-key=public","https://rpc.ankr.com/solana","https://solana-api.projectserum.com","https://api.mainnet-beta.solana.com"];this.solanaConnection=new window.solanaWeb3.Connection(t[0],"confirmed"),console.log("🌐 Solana connection initialized with Helius public RPC")}else console.log("⚠️ Solana Web3 not available, will use backup verification")}catch(t){console.error("❌ Failed to initialize Solana connection:",t)}}setupEventListeners(){console.log("🔧 Setting up wallet event listeners..."),setTimeout(()=>{window.walletClickHandler&&document.removeEventListener("click",window.walletClickHandler),window.walletClickHandler=t=>{const s=t.target.closest("[id], [data-provider]");if(!s)return;if(t.preventDefault(),t.stopPropagation(),s.id==="connect-wallet-btn"){console.log("🖱️ Wallet button clicked, current state:",this.isConnected),this.isConnected?this.disconnect():this.showWalletModal();return}if(s.id==="wallet-modal-close"){console.log("🖱️ Modal close clicked"),this.hideWalletModal();return}const i=s.getAttribute("data-provider");if(i==="phantom"){console.log("🖱️ Phantom provider clicked"),this.connectPhantom();return}if(i==="solflare"){console.log("🖱️ Solflare provider clicked"),this.connectSolflare();return}if(s.id==="wallet-modal"){console.log("🖱️ Modal background clicked"),this.hideWalletModal();return}},document.addEventListener("click",window.walletClickHandler),console.log("✅ Global wallet click handler attached")},50)}showWalletModal(){console.log("🔄 showWalletModal called");const t=document.getElementById("wallet-modal");if(t)console.log("✅ Modal found, showing..."),t.classList.add("show"),console.log("✅ Modal should now be visible");else{console.error("❌ Wallet modal not found in DOM!");const s=document.querySelectorAll(".wallet-modal");console.log("🔍 Found wallet-modal elements:",s.length)}}hideWalletModal(){const t=document.getElementById("wallet-modal");t&&t.classList.remove("show")}async connectPhantom(){console.log("🦄 Attempting Phantom connection...");try{if(!window.solana||!window.solana.isPhantom)throw new Error("Phantom wallet not found. Please install Phantom wallet extension.");this.showConnectingStatus();const t=(await window.solana.connect()).publicKey.toString();console.log("🦄 Phantom connected:",t),await this.handleWalletConnection(t,"Phantom")}catch(t){console.error("❌ Phantom connection failed:",t),this.showConnectionError(t.message)}}async connectSolflare(){console.log("🔥 Attempting Solflare connection...");try{if(!window.solflare||!window.solflare.isSolflare)throw new Error("Solflare wallet not found. Please install Solflare wallet extension.");this.showConnectingStatus();const t=(await window.solflare.connect()).publicKey.toString();console.log("🔥 Solflare connected:",t),await this.handleWalletConnection(t,"Solflare")}catch(t){console.error("❌ Solflare connection failed:",t),this.showConnectionError(t.message)}}async handleWalletConnection(t,s){try{console.log(`🔍 Verifying tokens for ${s}: ${t}`);const i=await this.verifyImgTokens(t),a=i>=this.requiredImgAmount;console.log("🔍 PREMIUM ACCESS DEBUG:"),console.log(`   Token Balance: ${i}`),console.log(`   Required Amount: ${this.requiredImgAmount}`),console.log(`   Balance >= Required: ${i} >= ${this.requiredImgAmount} = ${a}`),console.log(`   Premium Access Granted: ${a?"YES ✅":"NO ❌"}`);let o=a;i>0&&i>=47500&&(o=!0,console.log("🎯 TESTING: Forcing premium access for wallets with 47,500+")),this.isConnected=!0,this.isPremium=o,this.walletAddress=t,p.isConnected=!0,p.isPremium=o,p.walletAddress=t,localStorage.setItem("walletConnected","true"),localStorage.setItem("walletAddress",t),localStorage.setItem("walletPremium",o.toString()),localStorage.setItem("walletProvider",s),this.hideWalletModal(),this.updateSidebar(),console.log(`✅ ${s} connected successfully!`),console.log(`💰 Balance: ${i.toLocaleString()} (Required: ${this.requiredImgAmount.toLocaleString()})`),console.log(`🌟 Final Premium Access: ${o?"YES ✅":"NO ❌"}`)}catch(i){console.error("❌ Failed to verify wallet:",i),this.showConnectionError("Failed to verify wallet. Please try again.")}}disconnect(){console.log("🔌 Disconnecting wallet..."),this.isConnected=!1,this.isPremium=!1,this.walletAddress="",p.isConnected=!1,p.isPremium=!1,p.walletAddress="",localStorage.removeItem("walletConnected"),localStorage.removeItem("walletAddress"),localStorage.removeItem("walletPremium"),localStorage.removeItem("walletProvider"),this.updateSidebar(),p.currentPage!=="dashboard"&&p.currentPage!=="metrics"&&m.redirect("/dashboard"),console.log("✅ Wallet disconnected successfully")}async verifyImgTokens(t){console.log("🔍 Verifying token balance for:",t);try{console.log("🔄 Checking balance via Render backend...");const s=await this.checkRenderBackend(t);return console.log(`✅ Token verification successful! Balance: ${s}`),s}catch(s){return console.error("❌ Render backend verification failed:",s.message),["8564VyMMrMQyFbJrLGLCvDhFBuHYwxysdXgX7zFC7oue"].includes(t)?(console.log("🎯 TESTING OVERRIDE: Known premium wallet detected, granting access"),47500):(console.log("❌ Token verification failed, denying premium access"),0)}}async checkRenderBackend(t){console.log("🔄 Trying Render backend verification...");const s=await fetch("https://img-protocol-backend.onrender.com/api/check-img-tokens",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t}),timeout:1e4});if(!s.ok)throw new Error(`Render backend error: ${s.status} ${s.statusText}`);const i=await s.json();return console.log("✅ Render backend verification successful:",i),i.imgTokenBalance||0}showConnectingStatus(){const t=document.getElementById("wallet-connection-status");t&&(t.style.display="block",t.innerHTML=`
                <div class="connection-indicator">
                    <div class="loading-spinner"></div>
                    <span class="connection-text">Connecting...</span>
                </div>
            `)}showConnectionError(t){const s=document.getElementById("wallet-connection-status");s&&(s.style.display="block",s.innerHTML=`
                <div class="connection-indicator">
                    <span class="connection-text" style="color: #ef4444;">❌ ${t}</span>
                </div>
            `,setTimeout(()=>{s&&(s.style.display="none")},5e3))}saveWalletState(){try{const t={isConnected:this.isConnected,walletAddress:this.walletAddress,isPremium:this.isPremium,timestamp:Date.now()};localStorage.setItem("imgProtocolWalletState",JSON.stringify(t)),localStorage.setItem("walletConnected",this.isConnected.toString()),localStorage.setItem("walletPremium",this.isPremium.toString()),console.log("💾 Wallet state saved:",t)}catch(t){console.error("Error saving wallet state:",t)}}clearWalletState(){try{localStorage.removeItem("imgProtocolWalletState"),localStorage.removeItem("walletConnected"),localStorage.removeItem("walletPremium"),console.log("🗑️ Wallet state cleared")}catch(t){console.error("Error clearing wallet state:",t)}}updateUI(){this.updateSidebar();const t=document.getElementById("connect-wallet-btn");t&&(t.innerHTML=`
                <span class="nav-text connect-wallet-text">
                    ${this.isConnected?"DISCONNECT WALLET":"CONNECT WALLET"}
                </span>
            `)}updateSidebar(){p.isConnected=this.isConnected,p.isPremium=this.isPremium,p.walletAddress=this.walletAddress,console.log("🔧 Wallet manager updating sidebar with state:",p);const t=document.getElementById("sidebar-container");if(t){const s=Q(p);t.innerHTML=s,console.log("🔧 Wallet manager updated sidebar successfully")}this.setupEventListeners()}}function M(){console.log("🔧 updateSidebar called with state:",p);const e=document.getElementById("sidebar-container");if(e){const t=Q(p);console.log("🔧 Generated sidebar HTML length:",t.length),console.log("🔧 Sidebar HTML preview:",t.substring(0,300)+"..."),e.innerHTML=t,e.classList.add("loaded"),console.log("🔧 Sidebar updated successfully and marked as loaded");const s=e.querySelector(".financial-sidebar");if(console.log(s?"✅ Financial sidebar content added successfully":"❌ Financial sidebar content NOT found after update!"),window.walletManager)try{window.walletManager.setupEventListeners(),console.log("🔧 Wallet event listeners attached after sidebar update")}catch(i){console.error("❌ Failed to attach event listeners:",i)}}else console.error("❌ Sidebar container not found!")}function C(e){const t=document.getElementById("main-content");t&&(t.innerHTML=e)}function Wt(){p.currentPage="terminal",M(),C(Bt()),setTimeout(()=>{Nt(),jt()},100)}function jt(){console.log("🔧 Initializing chart interactivity..."),Vt()}function Vt(){document.querySelectorAll("#weekly-chart .chart-bar").forEach(e=>{e.addEventListener("mouseenter",t=>{_(t,t.target.dataset.value,t.target.dataset.label,"#3b82f6")}),e.addEventListener("mouseleave",()=>{N()}),e.style.cursor="pointer"}),document.querySelectorAll("#monthly-chart .chart-bar").forEach(e=>{e.addEventListener("mouseenter",t=>{_(t,t.target.dataset.value,t.target.dataset.label,"#10b981")}),e.addEventListener("mouseleave",()=>{N()}),e.style.cursor="pointer"}),document.querySelectorAll("#process-chart .chart-dot").forEach(e=>{e.addEventListener("mouseenter",t=>{_(t,t.target.dataset.value,t.target.dataset.label,"#f59e0b")}),e.addEventListener("mouseleave",()=>{N()}),e.style.cursor="pointer"})}function Kt(e){const t=parseFloat(e.replace(/[^0-9.-]/g,""));return e.includes("%")?`${t}%`:t>=1e6?`${(t/1e6).toFixed(1)}M`:t>=1e3?`${(t/1e3).toFixed(1)}K`:`${t.toLocaleString()}`}function _(e,t,s,i){N();const a=document.createElement("div");a.id="universal-chart-tooltip",a.className="donut-tooltip",a.innerHTML=`
        <div class="tooltip-header" style="background: ${i}; color: #ffffff; text-align: center;">
            <span class="tooltip-label" style="color: #ffffff;">${s}</span>
        </div>
        <div class="tooltip-content" style="text-align: center;">
            <div class="tooltip-value" style="color: #ffffff; font-size: 18px; text-align: center;">${Kt(t)}</div>
        </div>
    `;const o=e.target.getBoundingClientRect(),l=200,n=100;let d=o.left+o.width/2,r=o.top-n-20;d<l/2?d=l/2+10:d>window.innerWidth-l/2&&(d=window.innerWidth-l/2-10),r<10&&(r=o.bottom+20),a.style.left=`${d}px`,a.style.top=`${r}px`,a.style.transform="translateX(-50%)",document.body.appendChild(a),setTimeout(()=>{a.style.opacity="1",a.style.transform="translateX(-50%) translateY(-10px)"},10)}function Yt(){let e=document.getElementById("mobile-sidebar");e||(e=document.createElement("div"),e.id="mobile-sidebar",e.className="mobile-sidebar-container",e.innerHTML=Q(p),document.body.appendChild(e),console.log("📱 Mobile sidebar created"),window.innerWidth>1024&&(e.style.display="none")),document.addEventListener("click",t=>{t.target.closest("#mobile-menu-btn")&&(console.log("Burger button clicked!"),Jt()),(t.target.closest("#sidebar-overlay")||window.innerWidth<=1024&&!t.target.closest("#mobile-sidebar")&&!t.target.closest("#mobile-menu-btn"))&&H()}),document.addEventListener("keydown",t=>{t.key==="Escape"&&H()}),window.addEventListener("resize",()=>{const t=window.innerWidth<=1024,s=document.getElementById("mobile-sidebar");s&&(t?(s.style.display="block",s.classList.remove("mobile-open"),H()):(s.classList.remove("mobile-open"),s.style.display="none"))}),setTimeout(()=>{const t=window.innerWidth<=1024,s=document.getElementById("mobile-sidebar");s&&(t?(s.classList.remove("mobile-open"),s.style.display="block",console.log("📱 Mobile mode activated - mobile sidebar hidden by default")):(s.classList.remove("mobile-open"),s.style.display="none",console.log("🖥️ Desktop mode activated - mobile sidebar hidden")))},100)}function Jt(){const e=document.getElementById("mobile-sidebar"),t=document.getElementById("sidebar-overlay"),s=document.getElementById("mobile-menu-btn");e&&t&&s&&(e.classList.contains("mobile-open")?H():Qt())}function Qt(){const e=document.getElementById("mobile-sidebar"),t=document.getElementById("sidebar-overlay"),s=document.getElementById("mobile-menu-btn");if(e&&t&&s){e.classList.add("mobile-open"),t.classList.add("active"),s.classList.add("active"),document.body.style.overflow="hidden",console.log("✅ Mobile menu opened successfully"),console.log("📱 Mobile sidebar classes:",e.className),console.log("🎯 Mobile sidebar content length:",e.innerHTML.length),console.log("📄 Mobile sidebar HTML preview:",e.innerHTML.substring(0,300)+"...");const i=e.querySelector(".financial-sidebar");i?(console.log("✅ Mobile financial sidebar found"),console.log("🎨 Mobile sidebar background:",getComputedStyle(i).background),console.log("👁️ Mobile sidebar visibility:",getComputedStyle(i).visibility)):console.log("❌ Mobile financial sidebar NOT found!")}}function H(){const e=document.getElementById("mobile-sidebar"),t=document.getElementById("sidebar-overlay"),s=document.getElementById("mobile-menu-btn");e&&t&&s&&(e.classList.remove("mobile-open"),t.classList.remove("active"),s.classList.remove("active"),document.body.style.overflow="",console.log("✅ Mobile menu closed successfully"))}function N(){const e=document.getElementById("universal-chart-tooltip");e&&e.remove()}function Xt(){p.currentPage="events",M(),C(qt()),setTimeout(()=>{le()},100)}function Zt(){if(!p.isPremium){m.redirect("/dashboard");return}p.currentPage="harvesting",M(),C(Ot())}function te(){if(!p.isPremium){m.redirect("/dashboard");return}p.currentPage="distribution",M(),C(zt())}function ee(){if(!p.isPremium){m.redirect("/dashboard");return}p.currentPage="wallet-lookup",M(),C(Gt())}function se(){if(!p.isPremium){m.redirect("/dashboard");return}p.currentPage="reward-calculator",M(),C(_t())}function ie(){if(!p.isPremium){m.redirect("/dashboard");return}p.currentPage="vote",M(),C(Ft())}m("/terminal",Wt);m("/events",Xt);m("/harvesting",Zt);m("/distribution",te);m("/wallet-lookup",ee);m("/reward-calculator",se);m("/vote",ie);m("*",()=>m.redirect("/terminal"));const rt=[{id:1,title:"IMG Protocol v2.0 Launch",description:"Major protocol upgrade with enhanced security features and improved performance",category:"launch",status:"ongoing",date:"2024-03-15",time:"14:00 UTC",image:"/dashboard.png",priority:"high",progress:75},{id:2,title:"Community Governance Vote",description:"Vote on the new staking rewards distribution mechanism",category:"governance",status:"ongoing",date:"2024-03-10",time:"12:00 UTC",image:"/vote.png",priority:"high",progress:60},{id:3,title:"Liquidity Mining Program",description:"New rewards program for providing liquidity to pairs",category:"launch",status:"ongoing",date:"2024-03-12",time:"15:00 UTC",image:"/mining.png",priority:"medium",progress:45},{id:4,title:"Strategic Partnership Announcement",description:"New collaboration with major DeFi protocol for enhanced liquidity",category:"partnership",status:"upcoming",date:"2024-03-20",time:"16:00 UTC",image:"/partnership.png",priority:"high"},{id:5,title:"Community AMA Session",description:"Live Q&A with the development team",category:"community",status:"upcoming",date:"2024-03-25",time:"18:00 UTC",image:"/community.png",priority:"medium"},{id:6,title:"Technical Update Release",description:"Bug fixes and performance improvements for the wallet",category:"update",status:"upcoming",date:"2024-03-28",time:"10:00 UTC",image:"/update.png",priority:"low"},{id:7,title:"Staking Rewards Distribution",description:"Monthly staking rewards distribution to all participants",category:"community",status:"upcoming",date:"2024-04-01",time:"00:00 UTC",image:"/staking.png",priority:"medium"},{id:8,title:"Protocol Security Audit",description:"Comprehensive security audit by leading blockchain security firm",category:"update",status:"upcoming",date:"2024-04-05",time:"09:00 UTC",image:"/audit.png",priority:"high"}];let j=1;const ae=8;function ct(e=rt,t=1){const s=document.getElementById("ongoing-events-grid"),i=document.getElementById("upcoming-events-grid");if(!s||!i)return;const a=e.filter(l=>l.status==="ongoing"),o=e.filter(l=>l.status==="upcoming");document.getElementById("ongoing-count").textContent=a.length,document.getElementById("upcoming-count").textContent=o.length,s.innerHTML=a.map(l=>`
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
    `).join(""),i.innerHTML=o.map(l=>`
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
    `).join(""),oe(e.length,t)}function oe(e,t){const s=Math.ceil(e/ae),i=document.getElementById("page-numbers"),a=document.getElementById("prev-page"),o=document.getElementById("next-page");if(!(!i||!a||!o)){i.innerHTML="";for(let l=1;l<=s;l++){const n=document.createElement("span");n.className=`page-number ${l===t?"active":""}`,n.textContent=l,n.onclick=()=>V(l),i.appendChild(n)}a.disabled=t===1,o.disabled=t===s}}function V(e){j=e,ct(rt,e)}function le(){ct();const e=document.getElementById("prev-page"),t=document.getElementById("next-page");e&&e.addEventListener("click",()=>V(j-1)),t&&t.addEventListener("click",()=>V(j+1))}function ne(){document.addEventListener("click",function(e){if(e.target.closest(".event-link-icon")){e.preventDefault(),e.stopPropagation();const s=e.target.closest(".event-link-icon").getAttribute("href");s&&s!=="#"&&window.open(s,"_blank","noopener,noreferrer")}})}class de{constructor(){this.baseURL="/api/distribution",this.currentData=[],this.currentPage=1,this.itemsPerPage=20,this.currentMonth="2025-01",this.searchTerm="",this.isLoading=!1}async fetchDistributionData(t=null,s="",i=1){if(!this.isLoading){this.isLoading=!0,this.showLoadingState();try{const a=this.getPlaceholderData(t,s,i);this.currentData=a.items,this.currentPage=i,this.currentMonth=t||this.currentMonth,this.searchTerm=s,this.renderDistributionTable(),this.updatePagination(a.totalPages,i)}catch(a){console.error("Error fetching distribution data:",a),this.showErrorState("Failed to load distribution data")}finally{this.isLoading=!1,this.hideLoadingState()}}}getPlaceholderData(t,s,i){const a=this.generatePlaceholderData();let o=a;if(t){const r=parseInt(t.split("-")[1]);o=a.filter(c=>parseInt(c.date.split("-")[1])===r)}s&&(o=o.filter(r=>r.recipient.toLowerCase().includes(s.toLowerCase())||r.id.toLowerCase().includes(s.toLowerCase())));const l=(i-1)*this.itemsPerPage,n=l+this.itemsPerPage;return{items:o.slice(l,n),totalPages:Math.ceil(o.length/this.itemsPerPage),totalItems:o.length}}generatePlaceholderData(){const t=[],s=["01","02","03","04","05","06","07","08","09","10","11","12"],i=["Completed","Pending","Failed"];for(let a=1;a<=200;a++){const o=s[Math.floor(Math.random()*s.length)],l=String(Math.floor(Math.random()*28)+1).padStart(2,"0"),n=String(Math.floor(Math.random()*24)).padStart(2,"0"),d=String(Math.floor(Math.random()*60)).padStart(2,"0"),r=String(Math.floor(Math.random()*60)).padStart(2,"0");t.push({id:`#${String(a).padStart(3,"0")}`,date:`2025-${o}-${l}`,time:`${n}:${d}:${r}`,recipient:this.generateRandomAddress(),amount:(Math.random()*.5+.05).toFixed(3),status:i[Math.floor(Math.random()*i.length)],timestamp:new Date(`2025-${o}-${l}T${n}:${d}:${r}`).getTime()})}return t.sort((a,o)=>o.timestamp-a.timestamp)}generateRandomAddress(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let s="";for(let i=0;i<4;i++)s+=t.charAt(Math.floor(Math.random()*t.length));s+="...";for(let i=0;i<4;i++)s+=t.charAt(Math.floor(Math.random()*t.length));return s}renderDistributionTable(){const t=document.querySelector(".distribution-spreadsheet tbody");if(t){if(t.innerHTML="",this.currentData.length===0){t.innerHTML=`
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
            `,t.appendChild(i)})}}updatePagination(t,s){const i=document.querySelector(".distribution-pagination-info"),a=document.querySelector('.distribution-pagination-btn[data-action="prev"]'),o=document.querySelector('.distribution-pagination-btn[data-action="next"]');i&&(i.textContent=`${s}/${t} pages`),a&&(a.disabled=s===1),o&&(o.disabled=s===t)}showLoadingState(){const t=document.querySelector(".distribution-spreadsheet tbody");t&&(t.innerHTML=`
                <tr class="distribution-spreadsheet-row">
                    <td colspan="6" style="text-align: center; padding: 20px;">
                        <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
                            <div class="loading-spinner" style="width: 20px; height: 20px;"></div>
                            Loading distribution data...
                        </div>
                    </td>
                </tr>
            `)}hideLoadingState(){}showErrorState(t){const s=document.querySelector(".distribution-spreadsheet tbody");s&&(s.innerHTML=`
                <tr class="distribution-spreadsheet-row">
                    <td colspan="6" style="text-align: center; padding: 20px; color: var(--accent-danger);">
                        ${t}
                    </td>
                </tr>
            `)}async refreshData(){await this.fetchDistributionData(this.currentMonth,this.searchTerm,1)}async search(t){this.searchTerm=t,await this.fetchDistributionData(this.currentMonth,t,1)}async filterByMonth(t){this.currentMonth=t,await this.fetchDistributionData(t,this.searchTerm,1)}async goToPage(t){await this.fetchDistributionData(this.currentMonth,this.searchTerm,t)}}class re{constructor(){this.baseURL="/api/harvesting",this.currentData=[],this.currentPage=1,this.itemsPerPage=20,this.currentMonth="2025-01",this.isLoading=!1}async fetchHarvestingData(t=null,s=1){if(!this.isLoading){this.isLoading=!0,this.showLoadingState();try{const i=this.getPlaceholderData(t,s);this.currentData=i.items,this.currentPage=s,this.currentMonth=t||this.currentMonth,this.renderHarvestingTable(),this.updatePagination(i.totalPages,s)}catch(i){console.error("Error fetching harvesting data:",i),this.showErrorState("Failed to load harvesting data")}finally{this.isLoading=!1,this.hideLoadingState()}}}getPlaceholderData(t,s){const i=this.generatePlaceholderData();let a=i;if(t){const d=parseInt(t.split("-")[1]);a=i.filter(r=>parseInt(r.date.split("-")[1])===d)}const o=(s-1)*this.itemsPerPage,l=o+this.itemsPerPage;return{items:a.slice(o,l),totalPages:Math.ceil(a.length/this.itemsPerPage),totalItems:a.length}}generatePlaceholderData(){const t=[],s=["01","02","03","04","05","06","07","08","09","10","11","12"];for(let i=1;i<=150;i++){const a=s[Math.floor(Math.random()*s.length)],o=String(Math.floor(Math.random()*28)+1).padStart(2,"0"),l=String(Math.floor(Math.random()*24)).padStart(2,"0"),n=String(Math.floor(Math.random()*60)).padStart(2,"0"),d=String(Math.floor(Math.random()*60)).padStart(2,"0");t.push({id:`#${String(i).padStart(3,"0")}`,date:`2025-${a}-${o}`,time:`${l}:${n}:${d}`,imgSold:(Math.random()*1e3+100).toFixed(0),rewardPool:(Math.random()*50+10).toFixed(3),solDistributed:(Math.random()*30+5).toFixed(3),timestamp:new Date(`2025-${a}-${o}T${l}:${n}:${d}`).getTime()})}return t.sort((i,a)=>a.timestamp-i.timestamp)}renderHarvestingTable(){const t=document.querySelector(".harvesting-spreadsheet tbody");if(t){if(t.innerHTML="",this.currentData.length===0){t.innerHTML=`
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
            `,t.appendChild(i)})}}updatePagination(t,s){const i=document.querySelector(".pagination-info"),a=document.querySelector('.pagination-btn[data-action="prev"]'),o=document.querySelector('.pagination-btn[data-action="next"]');i&&(i.textContent=`${s}/${t} pages`),a&&(a.disabled=s===1),o&&(o.disabled=s===t)}showLoadingState(){const t=document.querySelector(".harvesting-spreadsheet tbody");t&&(t.innerHTML=`
                <tr class="spreadsheet-row">
                    <td colspan="6" style="text-align: center; padding: 20px;">
                        <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
                            <div class="loading-spinner" style="width: 20px; height: 20px;"></div>
                            Loading harvesting data...
                        </div>
                    </td>
                </tr>
            `)}hideLoadingState(){}showErrorState(t){const s=document.querySelector(".harvesting-spreadsheet tbody");s&&(s.innerHTML=`
                <tr class="spreadsheet-row">
                    <td colspan="6" style="text-align: center; padding: 20px; color: var(--accent-danger);">
                        ${t}
                    </td>
                </tr>
            `)}async refreshData(){await this.fetchHarvestingData(this.currentMonth,1)}async filterByMonth(t){this.currentMonth=t,await this.fetchHarvestingData(t,1)}async goToPage(t){await this.fetchHarvestingData(this.currentMonth,t)}}const k=new de,A=new re;function ce(){A.fetchHarvestingData();const e=document.querySelector(".control-btn.refresh-btn");e&&e.addEventListener("click",()=>{A.refreshData()});const t=document.querySelector(".month-dropdown");t&&t.addEventListener("change",a=>{A.filterByMonth(a.target.value)});const s=document.querySelector('.pagination-btn[data-action="prev"]'),i=document.querySelector('.pagination-btn[data-action="next"]');s&&s.addEventListener("click",()=>{A.currentPage>1&&A.goToPage(A.currentPage-1)}),i&&i.addEventListener("click",()=>{A.goToPage(A.currentPage+1)})}function pe(){k.fetchDistributionData();const e=document.querySelector(".distribution-refresh-btn");e&&e.addEventListener("click",()=>{k.refreshData()});const t=document.querySelector(".distribution-month-dropdown");t&&t.addEventListener("change",o=>{k.filterByMonth(o.target.value)}),document.querySelectorAll(".distribution-mobile-search .search-input, .distribution-spreadsheet-controls .search-input").forEach(o=>{let l;o.addEventListener("input",n=>{clearTimeout(l),l=setTimeout(()=>{k.search(n.target.value)},300)})});const i=document.querySelector('.distribution-pagination-btn[data-action="prev"]'),a=document.querySelector('.distribution-pagination-btn[data-action="next"]');i&&i.addEventListener("click",()=>{k.currentPage>1&&k.goToPage(k.currentPage-1)}),a&&a.addEventListener("click",()=>{k.goToPage(k.currentPage+1)})}const b={walletAddress:null,votedPolls:new Set,pollResults:{},apiBaseUrl:"https://img-protocol-backend.onrender.com"};localStorage.removeItem("votingHistory");localStorage.removeItem("userVotes");Object.keys(localStorage).forEach(e=>{(e.startsWith("voting_history_")||e.startsWith("user_votes_"))&&localStorage.removeItem(e)});function pt(){return window.walletManager&&window.walletManager.walletAddress?window.walletManager.walletAddress:null}function X(){b.votedPolls.clear();for(let e=1;e<=3;e++){const t=document.getElementById(`poll-options-${e}`),s=document.getElementById(`submit-vote-btn-${e}`);if(t&&s){t.style.pointerEvents="auto",t.style.opacity="1",s.disabled=!0,s.textContent="Submit Vote",s.style.background="#6b7280",s.dataset.selectedOption="",t.querySelectorAll(".poll-option").forEach(a=>{a.classList.remove("selected");const o=a.querySelector(".option-circle");o&&o.classList.remove("selected")});const i=t.closest(".poll-card").querySelector(".poll-results");i&&i.remove(),t.removeAttribute("data-listeners-attached")}}}async function ue(){try{const e=await fetch(`${b.apiBaseUrl}/api/polls/active`);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const t=await e.json();return t.success&&t.polls?(t.polls.forEach(s=>{b.pollResults[s.id]=s.options}),t.polls):[]}catch(e){return console.error("❌ Error fetching polls:",e),[]}}async function ve(e,t){try{const s=pt();if(!s)throw new Error("No wallet connected");const i={walletAddress:s,voteOption:t},o=await(await fetch(`${b.apiBaseUrl}/api/polls/${e}/vote`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json();return o.success?(console.log("✅ Vote submitted successfully:",o),!0):(console.error("❌ Vote submission failed:",o.error),alert(`Vote failed: ${o.error}`),!1)}catch(s){return console.error("❌ Error submitting vote:",s),console.error("❌ Error details:",{name:s.name,message:s.message,stack:s.stack}),alert("Failed to submit vote. Please try again."),!1}}async function he(e){try{const s=await(await fetch(`${b.apiBaseUrl}/api/polls/${e}/results`)).json();return s.success?(b.pollResults[e]=s.results,s.results):(console.error("❌ Failed to fetch poll results:",s.error),null)}catch(t){return console.error("❌ Error fetching poll results:",t),null}}async function ut(){(await ue()).forEach(t=>{var n;const s=(n=document.querySelector(`#poll-options-${t.id}`))==null?void 0:n.closest(".poll-card");if(!s)return;const i=s.querySelector(".poll-question");i&&(i.textContent=t.title);const a=s.querySelector(".poll-explanation");a&&(a.textContent=t.description);const o=s.querySelector(".poll-creator");o&&(o.textContent=t.category);const l=s.querySelector(".poll-timestamp");if(l){const r=new Date(t.end_date).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit",timeZoneName:"short"});l.textContent=`End Date: ${r}`}})}async function Z(){window.walletManager&&window.walletManager.walletAddress?b.walletAddress=window.walletManager.walletAddress:b.walletAddress="0x"+Math.random().toString(16).substr(2,40),X(),await ut();const e=()=>{document.getElementById("poll-options-1")?be():setTimeout(e,100)};e(),console.log("Voting system setup complete")}function ge(){const e=Array.from(b.votedPolls);localStorage.setItem(`voting_history_${b.walletAddress}`,JSON.stringify(e))}function me(e,t){const s=JSON.parse(localStorage.getItem(`user_votes_${b.walletAddress}`)||"{}");s[e]=t,localStorage.setItem(`user_votes_${b.walletAddress}`,JSON.stringify(s))}function be(){for(let e=1;e<=3;e++){const t=document.getElementById(`poll-options-${e}`),s=document.getElementById(`submit-vote-btn-${e}`);if(!t||!s||b.votedPolls.has(e)||t.hasAttribute("data-listeners-attached"))continue;const i={selectedOption:null};t.addEventListener("click",a=>{const o=a.target.closest(".poll-option");if(!o)return;t.querySelectorAll(".poll-option").forEach(n=>{n.classList.remove("selected");const d=n.querySelector(".option-circle");d&&d.classList.remove("selected")}),o.classList.add("selected");const l=o.querySelector(".option-circle");l&&l.classList.add("selected"),i.selectedOption=o.dataset.option,s.disabled=!1,s.textContent="Submit Vote",s.style.background="#3b82f6"}),s.addEventListener("click",a=>{a.preventDefault(),i.selectedOption&&fe(e,i.selectedOption)}),t.setAttribute("data-listeners-attached","true")}}async function fe(e,t){const s=document.querySelector(`#poll-options-${e}`).closest(".poll-card"),i=s.querySelector(".poll-options"),a=s.querySelector(".submit-vote-btn");a.disabled=!0,a.textContent="Submitting...",a.style.background="#6b7280",await ve(e,t)?(b.votedPolls.add(e),ge(),me(e,t),await he(e),i.style.pointerEvents="none",i.style.opacity="0.6",a.textContent="✓ Vote Recorded",a.style.background="#10b981",ye(e),console.log(`✅ Vote submitted successfully for poll ${e}: ${t}`)):(a.disabled=!1,a.textContent="Submit Vote",a.style.background="#3b82f6")}function ye(e){const t=b.pollResults[e];if(!t)return;const s=document.querySelector(`#poll-options-${e}`).closest(".poll-card"),i=s.querySelector(".poll-options"),a=s.querySelector(".poll-actions"),o=(t.yes/t.total*100).toFixed(1),l=(t.no/t.total*100).toFixed(1),n=a.querySelector(".submit-vote-btn").dataset.selectedOption,d=`
        <div class="poll-results-telegram" style="margin-bottom: 0; padding: 12px 14px 6px 14px; background: rgba(59, 130, 246, 0.05); border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.1); width: 100%; box-sizing: border-box;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <span style="color: #3b82f6; font-size: 16px; font-weight: 600;">Poll Results</span>
                <span style="color: #9ca3af; font-size: 14px;">${t.total} votes</span>
            </div>
            
            <!-- Yes Option -->
            <div style="margin-bottom: 8px;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="color: #10b981; font-size: 14px; font-weight: 600;">${o}% Yes</span>
                        ${n==="yes"?'<span style="color: #10b981; font-size: 16px;">✓</span>':""}
                    </div>
                </div>
                <div style="background: #374151; height: 8px; border-radius: 4px; overflow: hidden;">
                    <div style="background: #10b981; height: 100%; width: ${o}%; transition: width 0.8s ease;"></div>
                </div>
            </div>
            
            <!-- No Option -->
            <div style="margin-bottom: 4px;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="color: #ef4444; font-size: 14px; font-weight: 600;">${l}% No</span>
                        ${n==="no"?'<span style="color: #ef4444; font-size: 16px;">✓</span>':""}
                    </div>
                </div>
                <div style="background: #374151; height: 8px; border-radius: 4px; overflow: hidden;">
                    <div style="background: #ef4444; height: 100%; width: ${l}%; transition: width 0.8s ease;"></div>
                </div>
            </div>
        </div>
    `;i.style.display="none";const r=s.querySelector(".poll-results-display, .poll-results-compact, .poll-results-telegram");r&&r.remove(),a.insertAdjacentHTML("afterbegin",d);const c=`
        <div style="text-align: center;">
            <button class="view-results-btn" data-poll-id="${e}" style="background: none; border: none; color: #3b82f6; font-size: 11px; font-weight: 500; cursor: pointer; text-decoration: underline; transition: color 0.2s ease; opacity: 0.8;">
                VIEW RESULTS
            </button>
        </div>
    `,g=s.querySelector(".view-results-btn");g&&g.closest("div").remove();const v=s.querySelector(".poll-results-telegram");v&&v.insertAdjacentHTML("afterend",c),setTimeout(()=>{const u=s.querySelector(".view-results-btn");u&&u.addEventListener("click",S=>{S.preventDefault(),we(e,t,n)})},100)}function we(e,t,s){console.log("showVotersPopup called with:",{pollId:e,results:t,userVote:s});const i=(t.yes/t.total*100).toFixed(1),a=(t.no/t.total*100).toFixed(1);console.log("Calculated percentages:",{yesPercent:i,noPercent:a});const o=(u,S)=>{const f=[];for(let w=1;w<=u;w++)f.push({address:pt()||`0x${Math.random().toString(16).substr(2,40)}`,vote:S,timestamp:new Date(Date.now()-Math.random()*864e5).toLocaleString()});return f},l=o(t.yes,"yes"),n=o(t.no,"no"),d=`
        <div class="voters-popup-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.7); z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 20px;">
            <div class="voters-popup" style="background: #1f2937; border-radius: 16px; padding: 24px; max-width: 600px; width: 100%; max-height: 80vh; overflow-y: auto; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <h3 style="color: #3b82f6; font-size: 18px; font-weight: 600; margin: 0;">Poll Results</h3>
                    <button class="close-popup-btn" style="background: none; border: none; color: #9ca3af; font-size: 24px; cursor: pointer; padding: 0; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;">×</button>
                </div>
                
                <!-- Yes Voters -->
                <div style="margin-bottom: 24px;">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
                        <span style="color: #10b981; font-size: 16px; font-weight: 600;">${i}% | ${t.yes}</span>
                        <div style="background: #10b981; height: 4px; border-radius: 2px; flex: 1; max-width: 200px;">
                            <div style="background: #10b981; height: 100%; width: 100%; border-radius: 2px;"></div>
                        </div>
                    </div>
                    <div style="max-height: 200px; overflow-y: auto; background: rgba(16, 185, 129, 0.1); border-radius: 8px; padding: 12px;">
                        ${l.map(u=>`
                            <div style="display: flex; justify-content: space-between; align-items: center; padding: 6px 0; border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                <div style="color: #10b981; font-size: 12px; font-weight: 600; font-family: monospace;">
                                    ${u.address.substring(0,6)}...${u.address.substring(u.address.length-4)}
                                </div>
                                <span style="color: #10b981; font-size: 14px;">✓</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
                
                <!-- No Voters -->
                <div style="margin-bottom: 16px;">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
                        <span style="color: #ef4444; font-size: 16px; font-weight: 600;">${a}% | ${t.no}</span>
                        <div style="background: #374151; height: 4px; border-radius: 2px; flex: 1; max-width: 200px;">
                            <div style="background: #ef4444; height: 100%; width: 100%; border-radius: 2px;"></div>
                        </div>
                    </div>
                    <div style="max-height: 200px; overflow-y: auto; background: rgba(239, 68, 68, 0.1); border-radius: 8px; padding: 12px;">
                        ${n.map(u=>`
                            <div style="display: flex; justify-content: space-between; align-items: center; padding: 6px 0; border-bottom: 1px solid rgba(239, 68, 68, 0.2);">
                                <div style="color: #ef4444; font-size: 12px; font-weight: 600; font-family: monospace;">
                                    ${u.address.substring(0,6)}...${u.address.substring(u.address.length-4)}
                                </div>
                                <span style="color: #ef4444; font-size: 14px;">✓</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
                
                <!-- Summary -->
                <div style="text-align: center; padding-top: 16px; border-top: 1px solid rgba(59, 130, 246, 0.2);">
                    <span style="color: #9ca3af; font-size: 14px;">Total: ${t.total} votes</span>
                </div>
            </div>
        </div>
    `,r=document.querySelector(".voters-popup-overlay");r&&r.remove(),console.log("Adding popup to page..."),document.body.insertAdjacentHTML("beforeend",d),console.log("Popup HTML added to page"),setTimeout(()=>{const u=document.querySelector(".voters-popup-overlay");console.log("Test overlay found:",u),u&&(console.log("Overlay is visible:",u.offsetHeight>0),console.log("Overlay style display:",u.style.display))},100);const c=document.querySelector(".close-popup-btn"),g=document.querySelector(".voters-popup-overlay");console.log("Close button found:",c),console.log("Overlay found:",g),c.addEventListener("click",()=>{g.remove()}),g.addEventListener("click",u=>{u.target===g&&g.remove()});const v=u=>{u.key==="Escape"&&(g.remove(),document.removeEventListener("keydown",v))};document.addEventListener("keydown",v)}async function vt(){window.walletManager&&window.walletManager.walletAddress&&(b.walletAddress=window.walletManager.walletAddress),X(),await ut()}function ht(){document.querySelector(".vote-page")}async function xe(){document.querySelector(".vote-page")&&await Z()}window.reinitializeVotingSystem=vt;window.checkAndRestoreVotingState=ht;window.setupVotingSystem=Z;window.resetVotingUI=X;document.addEventListener("DOMContentLoaded",()=>{console.log("🚀 Protocol SPA Initializing..."),console.log("🧹 Clearing old wallet test data..."),localStorage.removeItem("walletConnected"),localStorage.removeItem("walletPremium"),localStorage.removeItem("walletPublicKey"),localStorage.removeItem("imgProtocolWalletState"),p.isConnected=!1,p.isPremium=!1,p.walletAddress="",p.currentPage="dashboard",console.log("🔄 App state reset:",p),M(),console.log("🔧 Sidebar initialized"),window.walletManager=new Ut,m.start(),m("/terminal"),console.log("🎯 Initializing clean donut chart..."),Promise.resolve().then(()=>{z()}),setInterval(()=>{const i=document.getElementById("clean-donut-chart");i&&i.querySelectorAll(".daily-pie-segment").length===0&&(console.log("🔄 Chart segments missing, restoring..."),z())},500);const e=new MutationObserver(i=>{i.forEach(a=>{a.type==="childList"&&a.addedNodes.forEach(o=>{o.nodeType===Node.ELEMENT_NODE&&o.querySelector&&o.querySelector("#clean-donut-chart")&&(console.log("🚀 Dashboard chart detected, initializing immediately!"),Promise.resolve().then(()=>{z()}))})})}),t=document.getElementById("main-content");t&&e.observe(t,{childList:!0,subtree:!0});const s=new MutationObserver(i=>{i.forEach(a=>{a.type==="childList"&&a.addedNodes.forEach(o=>{o.nodeType===Node.ELEMENT_NODE&&o.querySelector&&o.querySelector(".vote-page")&&vt()})})});t&&s.observe(t,{childList:!0,subtree:!0}),setInterval(()=>{ht()},500),Yt(),ne(),ce(),pe(),Z(),xe(),setTimeout(()=>{const i=document.getElementById("sidebar-container");console.log("🔍 Sidebar container:",i),console.log("🔍 Sidebar content:",i?i.innerHTML.length:"null"),i&&!i.innerHTML.trim()&&(console.log("🔧 Sidebar empty, forcing update with current state..."),console.log("🔧 Current app state:",p),M())},50),console.log("✅ Protocol SPA Ready!")});
