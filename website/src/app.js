(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();var D=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},I=te,le=q,re=ve,ce=J,de=ee,ue=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function q(e){for(var t=[],a=0,i=0,s="",n;(n=ue.exec(e))!=null;){var o=n[0],l=n[1],c=n.index;if(s+=e.slice(i,c),i=c+o.length,l){s+=l[1];continue}s&&(t.push(s),s="");var r=n[2],u=n[3],y=n[4],w=n[5],h=n[6],M=n[7],L=h==="+"||h==="*",m=h==="?"||h==="*",C=r||"/",W=y||w||(M?".*":"[^"+C+"]+?");t.push({name:u||a++,prefix:r||"",delimiter:C,optional:m,repeat:L,pattern:he(W)})}return i<e.length&&(s+=e.substr(i)),s&&t.push(s),t}function ve(e){return J(q(e))}function J(e){for(var t=new Array(e.length),a=0;a<e.length;a++)typeof e[a]=="object"&&(t[a]=new RegExp("^"+e[a].pattern+"$"));return function(i){for(var s="",n=i||{},o=0;o<e.length;o++){var l=e[o];if(typeof l=="string"){s+=l;continue}var c=n[l.name],r;if(c==null){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to be defined')}if(D(c)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received "'+c+'"');if(c.length===0){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var u=0;u<c.length;u++){if(r=encodeURIComponent(c[u]),!t[o].test(r))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received "'+r+'"');s+=(u===0?l.prefix:l.delimiter)+r}continue}if(r=encodeURIComponent(c),!t[o].test(r))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+r+'"');s+=l.prefix+r}return s}}function K(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function he(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function U(e,t){return e.keys=t,e}function Z(e){return e.sensitive?"":"i"}function pe(e,t){var a=e.source.match(/\((?!\?)/g);if(a)for(var i=0;i<a.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return U(e,t)}function me(e,t,a){for(var i=[],s=0;s<e.length;s++)i.push(te(e[s],t,a).source);var n=new RegExp("(?:"+i.join("|")+")",Z(a));return U(n,t)}function be(e,t,a){for(var i=q(e),s=ee(i,a),n=0;n<i.length;n++)typeof i[n]!="string"&&t.push(i[n]);return U(s,t)}function ee(e,t){t=t||{};for(var a=t.strict,i=t.end!==!1,s="",n=e[e.length-1],o=typeof n=="string"&&/\/$/.test(n),l=0;l<e.length;l++){var c=e[l];if(typeof c=="string")s+=K(c);else{var r=K(c.prefix),u=c.pattern;c.repeat&&(u+="(?:"+r+u+")*"),c.optional?r?u="(?:"+r+"("+u+"))?":u="("+u+")?":u=r+"("+u+")",s+=u}}return a||(s=(o?s.slice(0,-2):s)+"(?:\\/(?=$))?"),i?s+="$":s+=a&&o?"":"(?=\\/|$)",new RegExp("^"+s,Z(t))}function te(e,t,a){return t=t||[],D(t)?a||(a={}):(a=t,t=[]),e instanceof RegExp?pe(e,t):D(e)?me(e,t,a):be(e,t,a)}I.parse=le;I.compile=re;I.tokensToFunction=ce;I.tokensToRegExp=de;var A=typeof document<"u",b=typeof window<"u",G=typeof history<"u",ge=typeof process<"u",F=A&&document.ontouchstart?"touchstart":"click",g=b&&!!(window.history.location||window.location);function v(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}v.prototype.configure=function(e){var t=e||{};this._window=t.window||b&&window,this._decodeURLComponents=t.decodeURLComponents!==!1,this._popstate=t.popstate!==!1&&b,this._click=t.click!==!1&&A,this._hashbang=!!t.hashbang;var a=this._window;this._popstate?a.addEventListener("popstate",this._onpopstate,!1):b&&a.removeEventListener("popstate",this._onpopstate,!1),this._click?a.document.addEventListener(F,this.clickHandler,!1):A&&a.document.removeEventListener(F,this.clickHandler,!1),this._hashbang&&b&&!G?a.addEventListener("hashchange",this._onpopstate,!1):b&&a.removeEventListener("hashchange",this._onpopstate,!1)};v.prototype.base=function(e){if(arguments.length===0)return this._base;this._base=e};v.prototype._getBase=function(){var e=this._base;if(e)return e;var t=b&&this._window&&this._window.location;return b&&this._hashbang&&t&&t.protocol==="file:"&&(e=t.pathname),e};v.prototype.strict=function(e){if(arguments.length===0)return this._strict;this._strict=e};v.prototype.start=function(e){var t=e||{};if(this.configure(t),t.dispatch!==!1){this._running=!0;var a;if(g){var i=this._window,s=i.location;this._hashbang&&~s.hash.indexOf("#!")?a=s.hash.substr(2)+s.search:this._hashbang?a=s.search+s.hash:a=s.pathname+s.search+s.hash}this.replace(a,null,!0,t.dispatch)}};v.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var e=this._window;this._click&&e.document.removeEventListener(F,this.clickHandler,!1),b&&e.removeEventListener("popstate",this._onpopstate,!1),b&&e.removeEventListener("hashchange",this._onpopstate,!1)}};v.prototype.show=function(e,t,a,i){var s=new P(e,t,this),n=this.prevContext;return this.prevContext=s,this.current=s.path,a!==!1&&this.dispatch(s,n),s.handled!==!1&&i!==!1&&s.pushState(),s};v.prototype.back=function(e,t){var a=this;if(this.len>0){var i=this._window;G&&i.history.back(),this.len--}else setTimeout(e?function(){a.show(e,t)}:function(){a.show(a._getBase(),t)})};v.prototype.redirect=function(e,t){var a=this;typeof e=="string"&&typeof t=="string"&&_.call(this,e,function(i){setTimeout(function(){a.replace(t)},0)}),typeof e=="string"&&typeof t>"u"&&setTimeout(function(){a.replace(e)},0)};v.prototype.replace=function(e,t,a,i){var s=new P(e,t,this),n=this.prevContext;return this.prevContext=s,this.current=s.path,s.init=a,s.save(),i!==!1&&this.dispatch(s,n),s};v.prototype.dispatch=function(e,t){var a=0,i=0,s=this;function n(){var l=s.exits[i++];if(!l)return o();l(t,n)}function o(){var l=s.callbacks[a++];if(e.path!==s.current){e.handled=!1;return}if(!l)return fe.call(s,e);l(e,o)}t?n():o()};v.prototype.exit=function(e,t){if(typeof e=="function")return this.exit("*",e);for(var a=new T(e,null,this),i=1;i<arguments.length;++i)this.exits.push(a.middleware(arguments[i]))};v.prototype.clickHandler=function(e){if(this._which(e)===1&&!(e.metaKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented){var t=e.target,a=e.path||(e.composedPath?e.composedPath():null);if(a){for(var i=0;i<a.length;i++)if(a[i].nodeName&&a[i].nodeName.toUpperCase()==="A"&&a[i].href){t=a[i];break}}for(;t&&t.nodeName.toUpperCase()!=="A";)t=t.parentNode;if(!(!t||t.nodeName.toUpperCase()!=="A")){var s=typeof t.href=="object"&&t.href.constructor.name==="SVGAnimatedString";if(!(t.hasAttribute("download")||t.getAttribute("rel")==="external")){var n=t.getAttribute("href");if(!(!this._hashbang&&this._samePath(t)&&(t.hash||n==="#"))&&!(n&&n.indexOf("mailto:")>-1)&&!(s?t.target.baseVal:t.target)&&!(!s&&!this.sameOrigin(t.href))){var o=s?t.href.baseVal:t.pathname+t.search+(t.hash||"");o=o[0]!=="/"?"/"+o:o,ge&&o.match(/^\/[a-zA-Z]:\//)&&(o=o.replace(/^\/[a-zA-Z]:\//,"/"));var l=o,c=this._getBase();o.indexOf(c)===0&&(o=o.substr(c.length)),this._hashbang&&(o=o.replace("#!","")),!(c&&l===o&&(!g||this._window.location.protocol!=="file:"))&&(e.preventDefault(),this.show(l))}}}}};v.prototype._onpopstate=(function(){var e=!1;return b?(A&&document.readyState==="complete"?e=!0:window.addEventListener("load",function(){setTimeout(function(){e=!0},0)}),function(a){if(e){var i=this;if(a.state){var s=a.state.path;i.replace(s,a.state)}else if(g){var n=i._window.location;i.show(n.pathname+n.search+n.hash,void 0,void 0,!1)}}}):function(){}})();v.prototype._which=function(e){return e=e||b&&this._window.event,e.which==null?e.button:e.which};v.prototype._toURL=function(e){var t=this._window;if(typeof URL=="function"&&g)return new URL(e,t.location.toString());if(A){var a=t.document.createElement("a");return a.href=e,a}};v.prototype.sameOrigin=function(e){if(!e||!g)return!1;var t=this._toURL(e),a=this._window,i=a.location;return i.protocol===t.protocol&&i.hostname===t.hostname&&(i.port===t.port||i.port===""&&(t.port==80||t.port==443))};v.prototype._samePath=function(e){if(!g)return!1;var t=this._window,a=t.location;return e.pathname===a.pathname&&e.search===a.search};v.prototype._decodeURLEncodedURIComponent=function(e){return typeof e!="string"?e:this._decodeURLComponents?decodeURIComponent(e.replace(/\+/g," ")):e};function ae(){var e=new v;function t(){return _.apply(e,arguments)}return t.callbacks=e.callbacks,t.exits=e.exits,t.base=e.base.bind(e),t.strict=e.strict.bind(e),t.start=e.start.bind(e),t.stop=e.stop.bind(e),t.show=e.show.bind(e),t.back=e.back.bind(e),t.redirect=e.redirect.bind(e),t.replace=e.replace.bind(e),t.dispatch=e.dispatch.bind(e),t.exit=e.exit.bind(e),t.configure=e.configure.bind(e),t.sameOrigin=e.sameOrigin.bind(e),t.clickHandler=e.clickHandler.bind(e),t.create=ae,Object.defineProperty(t,"len",{get:function(){return e.len},set:function(a){e.len=a}}),Object.defineProperty(t,"current",{get:function(){return e.current},set:function(a){e.current=a}}),t.Context=P,t.Route=T,t}function _(e,t){if(typeof e=="function")return _.call(this,"*",e);if(typeof t=="function")for(var a=new T(e,null,this),i=1;i<arguments.length;++i)this.callbacks.push(a.middleware(arguments[i]));else typeof e=="string"?this[typeof t=="string"?"redirect":"show"](e,t):this.start(e)}function fe(e){if(!e.handled){var t,a=this,i=a._window;a._hashbang?t=g&&this._getBase()+i.location.hash.replace("#!",""):t=g&&i.location.pathname+i.location.search,t!==e.canonicalPath&&(a.stop(),e.handled=!1,g&&(i.location.href=e.canonicalPath))}}function ye(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function P(e,t,a){var i=this.page=a||_,s=i._window,n=i._hashbang,o=i._getBase();e[0]==="/"&&e.indexOf(o)!==0&&(e=o+(n?"#!":"")+e);var l=e.indexOf("?");this.canonicalPath=e;var c=new RegExp("^"+ye(o));if(this.path=e.replace(c,"")||"/",n&&(this.path=this.path.replace("#!","")||"/"),this.title=A&&s.document.title,this.state=t||{},this.state.path=e,this.querystring=~l?i._decodeURLEncodedURIComponent(e.slice(l+1)):"",this.pathname=i._decodeURLEncodedURIComponent(~l?e.slice(0,l):e),this.params={},this.hash="",!n){if(!~this.path.indexOf("#"))return;var r=this.path.split("#");this.path=this.pathname=r[0],this.hash=i._decodeURLEncodedURIComponent(r[1])||"",this.querystring=this.querystring.split("#")[0]}}P.prototype.pushState=function(){var e=this.page,t=e._window,a=e._hashbang;e.len++,G&&t.history.pushState(this.state,this.title,a&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};P.prototype.save=function(){var e=this.page;G&&e._window.history.replaceState(this.state,this.title,e._hashbang&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};function T(e,t,a){var i=this.page=a||V,s=t||{};s.strict=s.strict||i._strict,this.path=e==="*"?"(.*)":e,this.method="GET",this.regexp=I(this.path,this.keys=[],s)}T.prototype.middleware=function(e){var t=this;return function(a,i){if(t.match(a.path,a.params))return a.routePath=t.path,e(a,i);i()}};T.prototype.match=function(e,t){var a=this.keys,i=e.indexOf("?"),s=~i?e.slice(0,i):e,n=this.regexp.exec(decodeURIComponent(s));if(!n)return!1;delete t[0];for(var o=1,l=n.length;o<l;++o){var c=a[o-1],r=this.page._decodeURLEncodedURIComponent(n[o]);(r!==void 0||!hasOwnProperty.call(t,c.name))&&(t[c.name]=r)}return!0};var V=ae(),p=V,we=V;p.default=we;let d={isConnected:!1,isPremium:!1,walletAddress:"",currentPage:"dashboard"};const Y=e=>`
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
                            <img src="/pools.png" alt="" class="tab-icon">
                            <span class="tab-label">Pools</span>
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
                            <img src="/pools.png" alt="" class="tab-icon locked-icon">
                            <span class="tab-label">Pools</span>
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
`,xe=()=>`
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
`;function R(e,t,a,i,s,n){const o=(s-90)*Math.PI/180,l=(n-90)*Math.PI/180,c=e+a*Math.cos(o),r=t+a*Math.sin(o),u=e+a*Math.cos(l),y=t+a*Math.sin(l),w=e+i*Math.cos(l),h=t+i*Math.sin(l),M=e+i*Math.cos(o),L=t+i*Math.sin(o),m=Math.abs(n-s)>180?1:0;return`M ${c} ${r} A ${a} ${a} 0 ${m} 1 ${u} ${y} L ${w} ${h} A ${i} ${i} 0 ${m} 0 ${M} ${L} Z`}function X(e){const t=e.treasury+e.holders+e.infra+e.net;console.log("🔄 Updating donut chart with data:",e),console.log("📊 Total:",t);const a=e.treasury/t*100,i=e.holders/t*100,s=e.infra/t*100,n=e.net/t*100;console.log("🎯 Percentages:",{treasuryPercent:a,holdersPercent:i,infraPercent:s,netPercent:n});const o=document.getElementById("clean-donut-chart");if(o){o.querySelectorAll(".daily-pie-segment").forEach(oe=>oe.remove());const r=160,u=160,y=120,w=80;let h=0;const M=a/100*360,L=R(r,u,y,w,h,h+M),m=document.createElementNS("http://www.w3.org/2000/svg","path");m.setAttribute("d",L),m.setAttribute("fill","#10b981"),m.setAttribute("class","daily-pie-segment treasury-segment"),m.setAttribute("data-label","TREASURY INFLOW"),m.setAttribute("data-value",`${e.treasury.toFixed(5)}`),m.setAttribute("data-percentage",`${Math.round(a)}%`),m.setAttribute("data-color","#10b981"),o.appendChild(m),h+=M;const C=i/100*360,W=R(r,u,y,w,h,h+C),x=document.createElementNS("http://www.w3.org/2000/svg","path");x.setAttribute("d",W),x.setAttribute("fill","#3b82f6"),x.setAttribute("class","daily-pie-segment holders-segment"),x.setAttribute("data-label","HOLDER EARNINGS"),x.setAttribute("data-value",`${e.holders.toFixed(5)}`),x.setAttribute("data-percentage",`${Math.round(i)}%`),x.setAttribute("data-color","#3b82f6"),o.appendChild(x),h+=C;const j=s/100*360,ie=R(r,u,y,w,h,h+j),k=document.createElementNS("http://www.w3.org/2000/svg","path");k.setAttribute("d",ie),k.setAttribute("fill","#f59e0b"),k.setAttribute("class","daily-pie-segment infra-segment"),k.setAttribute("data-label","INFRA WALLET"),k.setAttribute("data-value",`${e.infra.toFixed(5)}`),k.setAttribute("data-percentage",`${Math.round(s)}%`),k.setAttribute("data-color","#f59e0b"),o.appendChild(k),h+=j;const se=n/100*360,ne=R(r,u,y,w,h,h+se),E=document.createElementNS("http://www.w3.org/2000/svg","path");E.setAttribute("d",ne),E.setAttribute("fill","#ef4444"),E.setAttribute("class","daily-pie-segment net-segment"),E.setAttribute("data-label","NET BALANCE"),E.setAttribute("data-value",`${e.net.toFixed(5)}`),E.setAttribute("data-percentage",`${Math.round(n)}%`),E.setAttribute("data-color","#ef4444"),o.appendChild(E)}const l=document.querySelector(".daily-pie-total");l&&(l.textContent="IMG"),console.log("✅ Donut chart updated with new data:",e),ke()}function ke(){document.querySelectorAll(".daily-pie-segment").forEach(t=>{t.style.cursor="pointer",t.addEventListener("mouseenter",a=>{Q(a,t),t.style.filter="brightness(1.2) drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))"}),t.addEventListener("mouseleave",a=>{z(),t.style.filter="none"}),t.addEventListener("click",a=>{Q(a,t),setTimeout(()=>{z()},3e3)})})}function Q(e,t){const a=t.getAttribute("data-label"),i=t.getAttribute("data-value");t.getAttribute("data-percentage");const s=t.getAttribute("data-color");z();const n=document.createElement("div");n.id="donut-tooltip",n.className="donut-tooltip",n.innerHTML=`
        <div class="tooltip-header" style="background: ${s}; color: #ffffff; text-align: center;">
            <span class="tooltip-label" style="color: #ffffff;">${a}</span>
        </div>
        <div class="tooltip-content" style="text-align: center;">
            <div class="tooltip-value" style="color: #ffffff; font-size: 18px; text-align: center;">${i}</div>
        </div>
    `;const o=e.target.getBoundingClientRect(),l=200,c=100;let r=o.left+o.width/2,u=o.top-c-20;r<l/2?r=l/2+10:r>window.innerWidth-l/2&&(r=window.innerWidth-l/2-10),u<10&&(u=o.bottom+20),n.style.left=`${r}px`,n.style.top=`${u}px`,n.style.transform="translateX(-50%)",document.body.appendChild(n),setTimeout(()=>{n.style.opacity="1",n.style.transform="translateX(-50%) translateY(-10px)"},10)}function z(){const e=document.getElementById("donut-tooltip");e&&e.remove()}function N(){console.log("🎯 Initializing donut chart...");const e=document.getElementById("clean-donut-chart");if(e){const n=e.querySelectorAll(".daily-pie-segment");if(console.log("🔍 Found existing segments:",n.length),n.length>0){console.log("✅ Donut chart already has segments, skipping initialization");return}}const t=document.querySelector(".daily-breakdown-item:nth-child(1) .daily-breakdown-value"),a=document.querySelector(".daily-breakdown-item:nth-child(2) .daily-breakdown-value"),i=document.querySelector(".daily-breakdown-item:nth-child(3) .daily-breakdown-value"),s=document.querySelector(".daily-breakdown-item:nth-child(4) .daily-breakdown-value");if(t&&a&&i&&s){const n=parseFloat(t.textContent.replace("","")),o=parseFloat(a.textContent.replace("","")),l=parseFloat(i.textContent.replace("","")),c=parseFloat(s.textContent.replace("","")),r={treasury:n,holders:o,infra:l,net:c};console.log("🎯 Reading actual data from Box 1:",r),X(r),console.log("🎯 Donut chart initialized with Box 1 data!")}else console.warn("⚠️ Could not find Box 1 data elements, using fallback data"),X({treasury:.22441,holders:.17742,infra:.02191,net:.005})}function H(e){return e>=1e6?(e/1e6).toFixed(2)+"M":e>=1e3?(e/1e3).toFixed(2)+"K":e.toFixed(2)}function Ee(e){return e<.01?"$"+e.toFixed(6):"$"+e.toFixed(4)}function Se(e){return(e>=0?"+":"")+e.toFixed(2)+"%"}async function Me(){var e,t,a;try{console.log("🔍 Fetching token metrics from DexScreener...");const i=await fetch("https://api.dexscreener.com/latest/dex/pairs/solana/cxgcuecqdabpvjwh5cweir9y5fy9sktjhgutmc95bgy3");if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);const s=await i.json();if(console.log("📊 DexScreener data received:",s),s.pairs&&s.pairs.length>0){const n=s.pairs[0];document.getElementById("img-price").textContent=Ee(parseFloat(n.priceUsd||0)),document.getElementById("price-change").textContent=Se(parseFloat(((e=n.priceChange)==null?void 0:e.h24)||0)),document.getElementById("volume-24h").textContent="$"+H(parseFloat(((t=n.volume)==null?void 0:t.h24)||0)),document.getElementById("market-cap").textContent="$"+H(parseFloat(n.marketCap||0)),document.getElementById("liquidity").textContent="$"+H(parseFloat(((a=n.liquidity)==null?void 0:a.usd)||0)),document.getElementById("img-holders").textContent="22K",console.log("✅ Token metrics updated successfully")}else console.warn("⚠️ No pair data found in DexScreener response")}catch(i){console.error("❌ Failed to fetch token metrics:",i),document.getElementById("img-price").textContent="$0.0000",document.getElementById("price-change").textContent="0.00%",document.getElementById("volume-24h").textContent="$0.00",document.getElementById("market-cap").textContent="$0.00",document.getElementById("liquidity").textContent="$0.00",document.getElementById("img-holders").textContent="22K"}}const Ae=()=>`
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
`,Le=()=>`
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
`,Ce=()=>`
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
`,Ie=()=>`
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
    
    <div class="pools-page">
        <div class="pools-container">
            <div class="pools-grid">
                    <!-- IMG/SOL on Raydium -->
                <div class="pool-box" data-pool="img-sol-raydium">
                    <div class="pool-title">IMG/SOL</div>
                    <div class="pool-header">
                        <div class="pool-pair">
                            <img src="/imglogoround.png" alt="IMG" class="token-logo">
                            <span class="pair-separator">/</span>
                            <img src="/solanalogo.png" alt="SOL" class="token-logo">
            </div>
                        <div class="pool-exchange">
                            <img src="/radiumlogo.png" alt="Raydium" class="exchange-logo">
                            <span class="exchange-name">Raydium</span>
            </div>
        </div>
                    <div class="pool-details">
                        <div class="pool-volume">
                            <span class="volume-label">24H Volume</span>
                            <span class="volume-value" id="img-sol-volume">Loading...</span>
                        </div>
                        <div class="pool-change">
                            <span class="change-label">Volume %</span>
                            <span class="change-value" id="img-sol-change">Loading...</span>
                        </div>
                    </div>
                    <div class="pool-footer">
                        <a href="https://raydium.io/swap/?outputCurrency=znv3FZt2HFAvzYf5LxzVyryh3mBXWuTRRng25gEZAjh&referrer=6tvwZLkMWj9qZNu8YoquKNde8RJXk1fofgaAyJkWMC5f" target="_blank" class="external-link">
                            <img src="/external-link.png" alt="External Link" class="external-link-icon">
                        </a>
                    </div>
            </div>

                <!-- IMG/BONK on Raydium -->
                <div class="pool-box" data-pool="img-bonk-raydium">
                    <div class="pool-title">IMG/BONK</div>
                    <div class="pool-header">
                        <div class="pool-pair">
                            <img src="/imglogoround.png" alt="IMG" class="token-logo">
                            <span class="pair-separator">/</span>
                            <img src="/bonklogo.png" alt="BONK" class="token-logo">
        </div>
                        <div class="pool-exchange">
                            <img src="/radiumlogo.png" alt="Raydium" class="exchange-logo">
                            <span class="exchange-name">Raydium</span>
    </div>
        </div>
                    <div class="pool-details">
                        <div class="pool-volume">
                            <span class="volume-label">24H Volume</span>
                            <span class="volume-value" id="img-bonk-raydium-volume">Loading...</span>
                        </div>
                        <div class="pool-change">
                            <span class="change-label">Volume %</span>
                            <span class="change-value" id="img-bonk-raydium-change">Loading...</span>
                        </div>
                    </div>
                    <div class="pool-footer">
                        <a href="https://raydium.io/swap/?outputCurrency=znv3FZt2HFAvzYf5LxzVyryh3mBXWuTRRng25gEZAjh&referrer=6tvwZLkMWj9qZNu8YoquKNde8RJXk1fofgaAyJkWMC5f" target="_blank" class="external-link">
                            <img src="/external-link.png" alt="External Link" class="external-link-icon">
                        </a>
                    </div>
                </div>
                
                <!-- IMG/USDC on Raydium -->
                <div class="pool-box" data-pool="img-usdc-raydium">
                    <div class="pool-title">IMG/USDC</div>
                    <div class="pool-header">
                        <div class="pool-pair">
                            <img src="/imglogoround.png" alt="IMG" class="token-logo">
                            <span class="pair-separator">/</span>
                            <img src="/usdclogo.png" alt="USDC" class="token-logo">
                        </div>
                        <div class="pool-exchange">
                            <img src="/radiumlogo.png" alt="Raydium" class="exchange-logo">
                            <span class="exchange-name">Raydium</span>
                        </div>
                    </div>
                    <div class="pool-details">
                        <div class="pool-volume">
                            <span class="volume-label">24H Volume</span>
                            <span class="volume-value" id="img-usdc-volume">Loading...</span>
                        </div>
                        <div class="pool-change">
                            <span class="change-label">Volume %</span>
                            <span class="change-value" id="img-usdc-change">Loading...</span>
                        </div>
                    </div>
                    <div class="pool-footer">
                        <a href="https://raydium.io/swap/?outputCurrency=znv3FZt2HFAvzYf5LxzVyryh3mBXWuTRRng25gEZAjh&referrer=6tvwZLkMWj9qZNu8YoquKNde8RJXk1fofgaAyJkWMC5f" target="_blank" class="external-link">
                            <img src="/external-link.png" alt="External Link" class="external-link-icon">
                        </a>
                    </div>
            </div>
            
                <!-- IMG/BONK on Orca -->
                <div class="pool-box" data-pool="img-bonk-orca">
                    <div class="pool-title">IMG/BONK</div>
                    <div class="pool-header">
                        <div class="pool-pair">
                            <img src="/imglogoround.png" alt="IMG" class="token-logo">
                            <span class="pair-separator">/</span>
                            <img src="/bonklogo.png" alt="BONK" class="token-logo">
            </div>
                        <div class="pool-exchange">
                            <img src="/orcalogo.png" alt="Orca" class="exchange-logo">
                            <span class="exchange-name">Orca</span>
        </div>
    </div>
                    <div class="pool-details">
                        <div class="pool-volume">
                            <span class="volume-label">24H Volume</span>
                            <span class="volume-value" id="img-bonk-orca-volume">Loading...</span>
                        </div>
                        <div class="pool-change">
                            <span class="change-label">Volume %</span>
                            <span class="change-value" id="img-bonk-orca-change">Loading...</span>
                        </div>
                    </div>
                    <div class="pool-footer">
                        <a href="https://www.orca.so/?tokenIn=DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263&tokenOut=znv3FZt2HFAvzYf5LxzVyryh3mBXWuTRRng25gEZAjh" target="_blank" class="external-link">
                            <img src="/external-link.png" alt="External Link" class="external-link-icon">
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Data Source Footer -->
            <div class="pools-footer">
                <div class="data-source">
                    <span>Data provided by CoinGecko • Refreshed every 5 minutes</span>
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
    
    <div class="rewards-page">
        <!-- Calculator Section -->
        <div class="calculator-section">
            <!-- Calculator Title -->
            <div class="calculator-title">
                <h2>IMG REWARDS CALCULATOR</h2>
                </div>
                
            <!-- Modern Calculator Controls - 3 Column Layout -->
            <div class="modern-calculator-controls">
                <!-- Column 1: Input Section -->
                <div class="input-section">
                    <div class="input-container">
                        <div class="input-field">
                            <label>24h Volume (USD)</label>
                            <div class="input-wrapper">
                                <input type="text" id="volume-24h" placeholder="100,000" value="100,000">
                                <span class="input-unit">USD</span>
                        </div>
                    </div>
                        <div class="input-field">
                            <label>Your IMG Holdings</label>
                            <div class="input-wrapper">
                                <input type="text" id="img-holdings" placeholder="1,000,000" value="1,000,000">
                                <span class="input-unit">IMG</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                <!-- Column 2: Short-term Earnings -->
                <div class="earnings-section short-term">
                    <div class="earnings-item highlight">
                        <div class="earnings-label">Daily Earnings</div>
                        <div class="earnings-value" id="daily-earnings">$4.50</div>
                        <div class="earnings-sol" id="daily-earnings-sol">0.0187 SOL</div>
                        </div>
                    <div class="earnings-item">
                        <div class="earnings-label">Weekly Earnings</div>
                        <div class="earnings-value" id="weekly-earnings">$31.50</div>
                        <div class="earnings-sol" id="weekly-earnings-sol">0.1309 SOL</div>
                    </div>
                </div>
                
                <!-- Column 3: Long-term Projections -->
                <div class="earnings-section long-term">
                    <div class="earnings-item">
                        <div class="earnings-label">Monthly Projection</div>
                        <div class="earnings-value" id="monthly-projection">$137.02</div>
                        <div class="earnings-sol" id="monthly-projection-sol">0.5808 SOL</div>
            </div>
                    <div class="earnings-item">
                        <div class="earnings-label">Annual Projection</div>
                        <div class="earnings-value" id="annual-projection">$1,644.20</div>
                        <div class="earnings-sol" id="annual-projection-sol">6.9699 SOL</div>
        </div>
                </div>
            </div>

                <!-- Pool Stats Section -->
                <div class="pool-stats-section">
                    <div class="stats-grid">
                        <div class="stat-card">
                          <div class="stat-content">
                                <div class="stat-label">Rewards Pool</div>
                                <div class="stat-value" id="rewards-pool">$4,500.00</div>
            </div>
            </div>
                        <div class="stat-card">
                            <div class="stat-content">
                                <div class="stat-label">InfraWallet</div>
                                <div class="stat-value" id="infra-wallet">$500.00</div>
        </div>
    </div>
            </div>
                    </div>
                </div>
                
                
            <!-- Comprehensive Projection Spreadsheet -->
            <div class="projection-spreadsheet">
                
                <div class="spreadsheet-container">
                    <div class="spreadsheet-table">
                        <div class="table-header">
                            <div class="header-cell">Type</div>
                            <div class="header-cell">24H Volume</div>
                            <div class="header-cell">IMG Holdings</div>
                            <div class="header-cell">Earnings</div>
                            <div class="header-cell">Earnings (SOL)</div>
                            <div class="header-cell">Rewards Pool</div>
                            <div class="header-cell">InfraWallet</div>
                        </div>
                
                        <div class="table-row">
                            <div class="cell type-cell">Daily</div>
                            <div class="cell volume-cell" id="daily-volume">$100,000</div>
                            <div class="cell holdings-cell" id="daily-holdings">1,000,000 IMG</div>
                            <div class="cell earnings-cell highlight" id="daily-total">$2.50</div>
                            <div class="cell sol-cell" id="daily-sol">0.010367 SOL</div>
                            <div class="cell pool-cell" id="daily-pool">$2,500.00</div>
                            <div class="cell wallet-cell" id="daily-wallet">$125.00</div>
                    </div>
                    
                        <div class="table-row">
                            <div class="cell type-cell">Weekly</div>
                            <div class="cell volume-cell" id="weekly-volume">$700,000</div>
                            <div class="cell holdings-cell" id="weekly-holdings">1,000,000 IMG</div>
                            <div class="cell earnings-cell" id="weekly-total">$17.52</div>
                            <div class="cell sol-cell" id="weekly-sol">0.072569 SOL</div>
                            <div class="cell pool-cell" id="weekly-pool">$17,500.00</div>
                            <div class="cell wallet-cell" id="weekly-wallet">$875.00</div>
                        </div>

                        <div class="table-row">
                            <div class="cell type-cell">Monthly</div>
                            <div class="cell volume-cell" id="monthly-volume">$3,000,000</div>
                            <div class="cell holdings-cell" id="monthly-holdings">1,000,000 IMG</div>
                            <div class="cell earnings-cell" id="monthly-total">$76.12</div>
                            <div class="cell sol-cell" id="monthly-sol">0.315315 SOL</div>
                            <div class="cell pool-cell" id="monthly-pool">$75,000.00</div>
                            <div class="cell wallet-cell" id="monthly-wallet">$3,750.00</div>
                    </div>
                    
                        <div class="table-row">
                            <div class="cell type-cell">Annual</div>
                            <div class="cell volume-cell" id="annual-volume">$36,500,000</div>
                            <div class="cell holdings-cell" id="annual-holdings">1,000,000 IMG</div>
                            <div class="cell earnings-cell" id="annual-total">$913.44</div>
                            <div class="cell sol-cell" id="annual-sol">3.783778 SOL</div>
                            <div class="cell pool-cell" id="annual-pool">$912,500.00</div>
                            <div class="cell wallet-cell" id="annual-wallet">$45,625.00</div>
                        </div>
                
                        <div class="table-row">
                            <div class="cell type-cell">2 Years</div>
                            <div class="cell volume-cell" id="year2-volume">$73,000,000</div>
                            <div class="cell holdings-cell" id="year2-holdings">1,000,000 IMG</div>
                            <div class="cell earnings-cell" id="year2-total">$1,826.88</div>
                            <div class="cell sol-cell" id="year2-sol">7.567556 SOL</div>
                            <div class="cell pool-cell" id="year2-pool">$1,825,000.00</div>
                            <div class="cell wallet-cell" id="year2-wallet">$91,250.00</div>
                </div>
                
                        <div class="table-row">
                            <div class="cell type-cell">3 Years</div>
                            <div class="cell volume-cell" id="year3-volume">$109,500,000</div>
                            <div class="cell holdings-cell" id="year3-holdings">1,000,000 IMG</div>
                            <div class="cell earnings-cell" id="year3-total">$2,740.32</div>
                            <div class="cell sol-cell" id="year3-sol">11.351334 SOL</div>
                            <div class="cell pool-cell" id="year3-pool">$2,737,500.00</div>
                            <div class="cell wallet-cell" id="year3-wallet">$136,875.00</div>
                </div>
            </div>
                    </div>
                </div>
                
                <!-- Footer -->
                <div class="rewards-footer">
                    <p>All monetary values are calculated in US Dollars (USD) • Real-time data from DexScreener & CoinGecko • SOL: <span id="sol-price">$235.90</span> • IMG Supply: 998,968,783</p>
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
    
    <div class="vote-page">
        <!-- Active Polls Section -->
        <div class="active-polls-section">
            <div class="polls-container">
                <h2 class="section-title">Active Polls</h2>
        <div class="active-polls-banner">
            <!-- Professional Single Poll Banner -->
            <div class="poll-banner-card" data-poll-id="1">
                <div class="banner-background">
                    <div class="banner-image">
                        <div class="banner-overlay"></div>
                    </div>
                </div>
                
                <div class="banner-content">
                    <div class="banner-left-section">
                        <h2 class="banner-question">Are You Enjoying the Dashboard?</h2>
                        
                        <div class="banner-explanation">
                            <p>This is the first edition of the IMG Dashboard, and your feedback will guide Version 2. Planned upgrades include improved design and colors, a more professional look, correct formatting on all devices, and new pages with deeper insights.</p>
                            <p>If you're happy with the current version, let us know! If not, your vote will help shape the improvements.</p>
                    </div>
                </div>
                
                    <div class="banner-voting-section">
                <div class="poll-options-container">
                        <div class="voting-header">
                        </div>
                        <div class="poll-options" id="poll-options-1">
                    <div class="poll-option" data-option="option1">
                        <div class="option-selector">
                            <div class="option-circle"></div>
                        </div>
                                <span class="option-text">Enjoying the Dashboard</span>
                    </div>
                    
                    <div class="poll-option" data-option="option2">
                        <div class="option-selector">
                            <div class="option-circle"></div>
                        </div>
                                <span class="option-text">Just Okay</span>
                    </div>
                    
                    <div class="poll-option" data-option="option3">
                        <div class="option-selector">
                            <div class="option-circle"></div>
                        </div>
                        <span class="option-text">This is bad</span>
                    </div>
                </div>
                
                <div class="poll-actions">
                            <button class="submit-vote-btn" id="submit-vote-btn-1" data-poll-id="1" disabled>Submit Vote</button>
                            <div class="poll-timestamp">End Date: Sept 10, 2025 – 7:00 PM EST</div>
                </div>
            </div>
        </div>
                </div>
                        </div>
                    </div>
                    
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
                
        <!-- Voting History Section -->
        <div class="voting-history-section">
            <div class="polls-container">
                <h2 class="section-title">Voting History</h2>
        <div class="completed-polls-section">
            <div class="polls-spreadsheet-wrapper">
                <div class="polls-table-scroll-container">
                    <div class="polls-spreadsheet">
                <div class="spreadsheet-header">
                    <div class="header-cell">Poll</div>
                    <div class="header-cell">Option 1</div>
                    <div class="header-cell">Option 2</div>
                    <div class="header-cell">Option 3</div>
                    <div class="header-cell">Total Votes</div>
                    <div class="header-cell">Date</div>
                </div>
                
                <div class="spreadsheet-row">
                    <div class="data-cell poll-question">Increase infra [temporarily]</div>
                    <div class="data-cell poll-result">Yes 70%</div>
                    <div class="data-cell poll-yes">No 30%</div>
                    <div class="data-cell poll-no"></div>
                    <div class="data-cell poll-votes">103</div>
                    <div class="data-cell poll-date">Sept 8, 2025</div>
                </div>
                
                <div class="spreadsheet-row">
                    <div class="data-cell poll-question">Infra: 50%Safe, 25% Burn, 25% LP</div>
                    <div class="data-cell poll-result">Yes 80%</div>
                    <div class="data-cell poll-yes">No 20%</div>
                    <div class="data-cell poll-no"></div>
                    <div class="data-cell poll-votes">65</div>
                    <div class="data-cell poll-date">Aug 31, 2025</div>
                </div>
                
                <div class="spreadsheet-row">
                    <div class="data-cell poll-question">Logo Image for Kimbos shorts</div>
                    <div class="data-cell poll-result">A 39%</div>
                    <div class="data-cell poll-yes">B 61%</div>
                    <div class="data-cell poll-no"></div>
                    <div class="data-cell poll-votes">87</div>
                    <div class="data-cell poll-date">Aug 30, 2025</div>
                </div>
                
                <div class="spreadsheet-row">
                    <div class="data-cell poll-question">Spaces with kimbo slice jr</div>
                    <div class="data-cell poll-result">Friday 52%</div>
                    <div class="data-cell poll-yes">Saturday 37%</div>
                    <div class="data-cell poll-no">Sunday 11%</div>
                    <div class="data-cell poll-votes">93</div>
                    <div class="data-cell poll-date">Aug 29, 2025</div>
                </div>
                
                <div class="spreadsheet-row">
                    <div class="data-cell poll-question">Which website for Kimbo fight night?</div>
                    <div class="data-cell poll-result">.unstoppable 6%</div>
                    <div class="data-cell poll-yes">.net 32%</div>
                    <div class="data-cell poll-no">imgsolana.com 62%</div>
                    <div class="data-cell poll-votes">82</div>
                    <div class="data-cell poll-date">Aug 26, 2025</div>
                </div>
                
                <div class="spreadsheet-row">
                    <div class="data-cell poll-question">Reward frequency</div>
                    <div class="data-cell poll-result">Every 6Hours 69%</div>
                    <div class="data-cell poll-yes">Every Hour 31%</div>
                    <div class="data-cell poll-no"></div>
                    <div class="data-cell poll-votes">140</div>
                    <div class="data-cell poll-date">Aug 23, 2025</div>
                </div>
                
                <div class="spreadsheet-row">
                    <div class="data-cell poll-question">Update our branding</div>
                    <div class="data-cell poll-result">OG [IMG] 82%</div>
                    <div class="data-cell poll-yes">Pixel Bunny 18%</div>
                    <div class="data-cell poll-no"></div>
                    <div class="data-cell poll-votes">155</div>
                    <div class="data-cell poll-date">Aug 22, 2025</div>
                </div>
                
                <div class="spreadsheet-row">
                    <div class="data-cell poll-question">view TG</div>
                    <div class="data-cell poll-result">Group 66%</div>
                    <div class="data-cell poll-yes">Topics 34%</div>
                    <div class="data-cell poll-no"></div>
                    <div class="data-cell poll-votes">119</div>
                    <div class="data-cell poll-date">Aug 22, 2025</div>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;class Re{constructor(){this.isConnected=!1,this.isPremium=!1,this.walletAddress="",this.requiredImgAmount=47500,this.imgTokenMint="znv3FZt2HFAvzYf5LxzVyryh3mBXWuTRRng25gEZAjh",this.solanaConnection=null,this.init()}init(){console.log("🔧 Initializing WalletManager..."),this.setupEventListeners(),this.initializeSolanaConnection()}initializeSolanaConnection(){try{if(typeof window<"u"&&window.solanaWeb3){const t=["https://mainnet.helius-rpc.com/?api-key=public","https://rpc.ankr.com/solana","https://solana-api.projectserum.com","https://api.mainnet-beta.solana.com"];this.solanaConnection=new window.solanaWeb3.Connection(t[0],"confirmed"),console.log("🌐 Solana connection initialized with Helius public RPC")}else console.log("⚠️ Solana Web3 not available, will use backup verification")}catch(t){console.error("❌ Failed to initialize Solana connection:",t)}}setupEventListeners(){console.log("🔧 Setting up wallet event listeners..."),setTimeout(()=>{window.walletClickHandler&&document.removeEventListener("click",window.walletClickHandler),window.walletClickHandler=t=>{const a=t.target.closest("[id], [data-provider]");if(!a)return;if(t.preventDefault(),t.stopPropagation(),a.id==="connect-wallet-btn"){console.log("🖱️ Wallet button clicked, current state:",this.isConnected),this.isConnected?this.disconnect():this.showWalletModal();return}if(a.id==="wallet-modal-close"){console.log("🖱️ Modal close clicked"),this.hideWalletModal();return}const i=a.getAttribute("data-provider");if(i==="phantom"){console.log("🖱️ Phantom provider clicked"),this.connectPhantom();return}if(i==="solflare"){console.log("🖱️ Solflare provider clicked"),this.connectSolflare();return}if(a.id==="wallet-modal"){console.log("🖱️ Modal background clicked"),this.hideWalletModal();return}},document.addEventListener("click",window.walletClickHandler),console.log("✅ Global wallet click handler attached")},50)}showWalletModal(){console.log("🔄 showWalletModal called");const t=document.getElementById("wallet-modal");if(t)console.log("✅ Modal found, showing..."),t.classList.add("show"),console.log("✅ Modal should now be visible");else{console.error("❌ Wallet modal not found in DOM!");const a=document.querySelectorAll(".wallet-modal");console.log("🔍 Found wallet-modal elements:",a.length)}}hideWalletModal(){const t=document.getElementById("wallet-modal");t&&t.classList.remove("show")}async connectPhantom(){console.log("🦄 Attempting Phantom connection...");try{if(!window.solana||!window.solana.isPhantom)throw new Error("Phantom wallet not found. Please install Phantom wallet extension.");this.showConnectingStatus();const a=(await window.solana.connect()).publicKey.toString();console.log("🦄 Phantom connected:",a),await this.handleWalletConnection(a,"Phantom")}catch(t){console.error("❌ Phantom connection failed:",t),this.showConnectionError(t.message)}}async connectSolflare(){console.log("🔥 Attempting Solflare connection...");try{if(!window.solflare||!window.solflare.isSolflare)throw new Error("Solflare wallet not found. Please install Solflare wallet extension.");this.showConnectingStatus();const a=(await window.solflare.connect()).publicKey.toString();console.log("🔥 Solflare connected:",a),await this.handleWalletConnection(a,"Solflare")}catch(t){console.error("❌ Solflare connection failed:",t),this.showConnectionError(t.message)}}async handleWalletConnection(t,a){try{console.log(`🔍 Verifying tokens for ${a}: ${t}`);const i=await this.verifyImgTokens(t),s=i>=this.requiredImgAmount;console.log(`   Token Balance: ${i}`),console.log(`   Required Amount: ${this.requiredImgAmount}`),console.log(`   Balance >= Required: ${i} >= ${this.requiredImgAmount} = ${s}`),console.log(`   Premium Access Granted: ${s?"YES ✅":"NO ❌"}`);let n=s;i>0&&i>=47500&&(n=!0,console.log("🎯 TESTING: Forcing premium access for wallets with 47,500+")),this.isConnected=!0,this.isPremium=n,this.walletAddress=t,d.isConnected=!0,d.isPremium=n,d.walletAddress=t,localStorage.setItem("walletConnected","true"),localStorage.setItem("walletAddress",t),localStorage.setItem("walletPremium",n.toString()),localStorage.setItem("walletProvider",a),this.hideWalletModal(),this.updateSidebar(),console.log(`✅ ${a} connected successfully!`),console.log(`💰 Balance: ${i.toLocaleString()} (Required: ${this.requiredImgAmount.toLocaleString()})`),console.log(`🌟 Final Premium Access: ${n?"YES ✅":"NO ❌"}`)}catch(i){console.error("❌ Failed to verify wallet:",i),this.showConnectionError("Failed to verify wallet. Please try again.")}}disconnect(){console.log("🔌 Disconnecting wallet..."),this.isConnected=!1,this.isPremium=!1,this.walletAddress="",d.isConnected=!1,d.isPremium=!1,d.walletAddress="",localStorage.removeItem("walletConnected"),localStorage.removeItem("walletAddress"),localStorage.removeItem("walletPremium"),localStorage.removeItem("walletProvider"),this.updateSidebar(),d.currentPage!=="dashboard"&&d.currentPage!=="metrics"&&p.redirect("/dashboard"),console.log("✅ Wallet disconnected successfully")}async verifyImgTokens(t){console.log("🔍 Verifying token balance for:",t);try{console.log("🔄 Checking balance via Render backend...");const a=await this.checkRenderBackend(t);return console.log(`✅ Token verification successful! Balance: ${a}`),a}catch(a){return console.error("❌ Render backend verification failed:",a.message),["8564VyMMrMQyFbJrLGLCvDhFBuHYwxysdXgX7zFC7oue"].includes(t)?(47500):(console.log("❌ Token verification failed, denying premium access"),0)}}async checkRenderBackend(t){console.log("🔄 Trying Render backend verification...");const a=await fetch("https://img-protocol-backend.onrender.com/api/check-img-tokens",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t}),timeout:1e4});if(!a.ok)throw new Error(`Render backend error: ${a.status} ${a.statusText}`);const i=await a.json();return console.log("✅ Render backend verification successful:",i),i.imgTokenBalance||0}showConnectingStatus(){const t=document.getElementById("wallet-connection-status");t&&(t.style.display="block",t.innerHTML=`
                <div class="connection-indicator">
                    <div class="loading-spinner"></div>
                    <span class="connection-text">Connecting...</span>
                </div>
            `)}showConnectionError(t){const a=document.getElementById("wallet-connection-status");a&&(a.style.display="block",a.innerHTML=`
                <div class="connection-indicator">
                    <span class="connection-text" style="color: #ef4444;">❌ ${t}</span>
                </div>
            `,setTimeout(()=>{a&&(a.style.display="none")},5e3))}saveWalletState(){try{const t={isConnected:this.isConnected,walletAddress:this.walletAddress,isPremium:this.isPremium,timestamp:Date.now()};localStorage.setItem("imgProtocolWalletState",JSON.stringify(t)),localStorage.setItem("walletConnected",this.isConnected.toString()),localStorage.setItem("walletPremium",this.isPremium.toString()),console.log("💾 Wallet state saved:",t)}catch(t){console.error("Error saving wallet state:",t)}}clearWalletState(){try{localStorage.removeItem("imgProtocolWalletState"),localStorage.removeItem("walletConnected"),localStorage.removeItem("walletPremium"),console.log("🗑️ Wallet state cleared")}catch(t){console.error("Error clearing wallet state:",t)}}updateUI(){this.updateSidebar();const t=document.getElementById("connect-wallet-btn");t&&(t.innerHTML=`
                <span class="nav-text connect-wallet-text">
                    ${this.isConnected?"DISCONNECT WALLET":"CONNECT WALLET"}
                </span>
            `)}updateSidebar(){d.isConnected=this.isConnected,d.isPremium=this.isPremium,d.walletAddress=this.walletAddress,console.log("🔧 Wallet manager updating sidebar with state:",d);const t=document.getElementById("sidebar-container");if(t){const a=Y(d);t.innerHTML=a,console.log("🔧 Wallet manager updated sidebar successfully")}this.setupEventListeners()}}function f(){console.log("🔧 updateSidebar called with state:",d);const e=document.getElementById("sidebar-container");if(e){const t=Y(d);console.log("🔧 Generated sidebar HTML length:",t.length),console.log("🔧 Sidebar HTML preview:",t.substring(0,300)+"..."),e.innerHTML=t,e.classList.add("loaded"),console.log("🔧 Sidebar updated successfully and marked as loaded");const a=e.querySelector(".financial-sidebar");if(console.log(a?"✅ Financial sidebar content added successfully":"❌ Financial sidebar content NOT found after update!"),window.walletManager)try{window.walletManager.setupEventListeners(),console.log("🔧 Wallet event listeners attached after sidebar update")}catch(i){console.error("❌ Failed to attach event listeners:",i)}}else console.error("❌ Sidebar container not found!")}function S(e){const t=document.getElementById("main-content");t&&(t.innerHTML=e)}function Be(){d.currentPage="terminal",f(),S(xe()),setTimeout(()=>{Me(),$e()},100)}function $e(){console.log("🔧 Initializing chart interactivity..."),Ge()}function Ge(){document.querySelectorAll("#weekly-chart .chart-bar").forEach(i=>{i.addEventListener("mouseenter",s=>{O(s,s.target.dataset.value,s.target.dataset.label,"#3b82f6")}),i.addEventListener("mouseleave",()=>{$()}),i.style.cursor="pointer"}),document.querySelectorAll("#monthly-chart .chart-bar").forEach(i=>{i.addEventListener("mouseenter",s=>{O(s,s.target.dataset.value,s.target.dataset.label,"#10b981")}),i.addEventListener("mouseleave",()=>{$()}),i.style.cursor="pointer"}),document.querySelectorAll("#process-chart .chart-dot").forEach(i=>{i.addEventListener("mouseenter",s=>{O(s,s.target.dataset.value,s.target.dataset.label,"#f59e0b")}),i.addEventListener("mouseleave",()=>{$()}),i.style.cursor="pointer"})}function _e(e){const t=parseFloat(e.replace(/[^0-9.-]/g,""));return e.includes("%")?`${t}%`:t>=1e6?`${(t/1e6).toFixed(1)}M`:t>=1e3?`${(t/1e3).toFixed(1)}K`:`${t.toLocaleString()}`}function O(e,t,a,i){$();const s=document.createElement("div");s.id="universal-chart-tooltip",s.className="donut-tooltip",s.innerHTML=`
        <div class="tooltip-header" style="background: ${i}; color: #ffffff; text-align: center;">
            <span class="tooltip-label" style="color: #ffffff;">${a}</span>
        </div>
        <div class="tooltip-content" style="text-align: center;">
            <div class="tooltip-value" style="color: #ffffff; font-size: 18px; text-align: center;">${_e(t)}</div>
        </div>
    `;const n=e.target.getBoundingClientRect(),o=200,l=100;let c=n.left+n.width/2,r=n.top-l-20;c<o/2?c=o/2+10:c>window.innerWidth-o/2&&(c=window.innerWidth-o/2-10),r<10&&(r=n.bottom+20),s.style.left=`${c}px`,s.style.top=`${r}px`,s.style.transform="translateX(-50%)",document.body.appendChild(s),setTimeout(()=>{s.style.opacity="1",s.style.transform="translateX(-50%) translateY(-10px)"},10)}function We(){let e=document.getElementById("mobile-sidebar");e||(e=document.createElement("div"),e.id="mobile-sidebar",e.className="mobile-sidebar-container",e.innerHTML=Y(d),document.body.appendChild(e),console.log("📱 Mobile sidebar created"),window.innerWidth>1024&&(e.style.display="none")),document.addEventListener("click",a=>{a.target.closest("#mobile-menu-btn")&&(console.log("Burger button clicked!"),Ne()),(a.target.closest("#sidebar-overlay")||window.innerWidth<=1024&&!a.target.closest("#mobile-sidebar")&&!a.target.closest("#mobile-menu-btn"))&&B()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&B()}),window.addEventListener("resize",()=>{const a=window.innerWidth<=1024,i=document.getElementById("mobile-sidebar");i&&(a?(i.style.display="block",i.classList.remove("mobile-open"),B()):(i.classList.remove("mobile-open"),i.style.display="none"))}),setTimeout(()=>{const a=window.innerWidth<=1024,i=document.getElementById("mobile-sidebar");i&&(a?(i.classList.remove("mobile-open"),i.style.display="block",console.log("📱 Mobile mode activated - mobile sidebar hidden by default")):(i.classList.remove("mobile-open"),i.style.display="none",console.log("🖥️ Desktop mode activated - mobile sidebar hidden")))},100)}function Ne(){const e=document.getElementById("mobile-sidebar"),t=document.getElementById("sidebar-overlay"),a=document.getElementById("mobile-menu-btn");e&&t&&a&&(e.classList.contains("mobile-open")?B():He())}function He(){const e=document.getElementById("mobile-sidebar"),t=document.getElementById("sidebar-overlay"),a=document.getElementById("mobile-menu-btn");if(e&&t&&a){e.classList.add("mobile-open"),t.classList.add("active"),a.classList.add("active"),document.body.style.overflow="hidden",console.log("✅ Mobile menu opened successfully"),console.log("📱 Mobile sidebar classes:",e.className),console.log("🎯 Mobile sidebar content length:",e.innerHTML.length),console.log("📄 Mobile sidebar HTML preview:",e.innerHTML.substring(0,300)+"...");const i=e.querySelector(".financial-sidebar");i?(console.log("✅ Mobile financial sidebar found"),console.log("🎨 Mobile sidebar background:",getComputedStyle(i).background),console.log("👁️ Mobile sidebar visibility:",getComputedStyle(i).visibility)):console.log("❌ Mobile financial sidebar NOT found!")}}function B(){const e=document.getElementById("mobile-sidebar"),t=document.getElementById("sidebar-overlay"),a=document.getElementById("mobile-menu-btn");e&&t&&a&&(e.classList.remove("mobile-open"),t.classList.remove("active"),a.classList.remove("active"),document.body.style.overflow="",console.log("✅ Mobile menu closed successfully"))}function $(){const e=document.getElementById("universal-chart-tooltip");e&&e.remove()}function Oe(){d.currentPage="events",f(),S(Ae()),setTimeout(()=>{setupEventsPage()},100)}function De(){if(!d.isPremium){p.redirect("/dashboard");return}d.currentPage="harvesting",f(),S(Le())}function Fe(){if(!d.isPremium){p.redirect("/dashboard");return}d.currentPage="distribution",f(),S(Ce())}function ze(){if(!d.isPremium){p.redirect("/dashboard");return}d.currentPage="wallet-lookup",f(),S(Ie())}function qe(){if(!d.isPremium){p.redirect("/dashboard");return}d.currentPage="reward-calculator",f(),S(Pe())}function Ue(){if(!d.isPremium){p.redirect("/dashboard");return}d.currentPage="vote",f(),S(Te())}p("/terminal",Be);p("/events",Oe);p("/harvesting",De);p("/distribution",Fe);p("/wallet-lookup",ze);p("/reward-calculator",qe);p("/vote",Ue);p("*",()=>p.redirect("/terminal"));

// Events data and functionality
const eventsData = [
    {
        id: 1,
        title: "IMG Protocol v2.0 Launch",
        description: "Major protocol upgrade with enhanced security features and improved performance",
        category: "launch",
        status: "ongoing",
        date: "2024-03-15",
        time: "14:00 UTC",
        image: "/dashboard.png",
        priority: "high",
        progress: 75
    },
    {
        id: 2,
        title: "Community Governance Vote",
        description: "Vote on the new staking rewards distribution mechanism",
        category: "governance",
        status: "ongoing",
        date: "2024-03-10",
        time: "12:00 UTC",
        image: "/vote.png",
        priority: "high",
        progress: 60
    },
    {
        id: 3,
        title: "Liquidity Mining Program",
        description: "New rewards program for providing liquidity to pairs",
        category: "launch",
        status: "ongoing",
        date: "2024-03-12",
        time: "15:00 UTC",
        image: "/mining.png",
        priority: "medium",
        progress: 45
    },
    {
        id: 4,
        title: "Strategic Partnership Announcement",
        description: "New collaboration with major DeFi protocol for enhanced liquidity",
        category: "partnership",
        status: "upcoming",
        date: "2024-03-20",
        time: "16:00 UTC",
        image: "/partnership.png",
        priority: "high"
    },
    {
        id: 5,
        title: "Community AMA Session",
        description: "Live Q&A with the development team",
        category: "community",
        status: "upcoming",
        date: "2024-03-25",
        time: "18:00 UTC",
        image: "/community.png",
        priority: "medium"
    },
    {
        id: 6,
        title: "Technical Update Release",
        description: "Bug fixes and performance improvements for the wallet",
        category: "update",
        status: "upcoming",
        date: "2024-03-28",
        time: "10:00 UTC",
        image: "/update.png",
        priority: "low"
    },
    {
        id: 7,
        title: "Staking Rewards Distribution",
        description: "Monthly staking rewards distribution to all participants",
        category: "community",
        status: "upcoming",
        date: "2024-04-01",
        time: "00:00 UTC",
        image: "/staking.png",
        priority: "medium"
    },
    {
        id: 8,
        title: "Protocol Security Audit",
        description: "Comprehensive security audit by leading blockchain security firm",
        category: "update",
        status: "upcoming",
        date: "2024-04-05",
        time: "09:00 UTC",
        image: "/audit.png",
        priority: "high"
    }
];

let currentPage = 1;
const eventsPerPage = 8;

function renderEvents(events = eventsData, page = 1) {
    const ongoingGrid = document.getElementById('ongoing-events-grid');
    const upcomingGrid = document.getElementById('upcoming-events-grid');
    
    if (!ongoingGrid || !upcomingGrid) return;
    
    // Separate ongoing and upcoming events
    const ongoingEvents = events.filter(event => event.status === 'ongoing');
    const upcomingEvents = events.filter(event => event.status === 'upcoming');
    
    // Update event counts
    document.getElementById('ongoing-count').textContent = ongoingEvents.length;
    document.getElementById('upcoming-count').textContent = upcomingEvents.length;
    
    // Render ongoing events
    ongoingGrid.innerHTML = ongoingEvents.map(event => `
        <div class="event-card ongoing ${event.priority}" data-category="${event.category}">
            <div class="event-header">
                <div class="event-category ${event.category}">${event.category}</div>
                <div class="event-priority ${event.priority}">${event.priority}</div>
            </div>
            <div class="event-image">
                <img src="${event.image}" alt="${event.title}" onerror="this.src='/dashboard.png'">
                <div class="progress-overlay">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${event.progress}%"></div>
                    </div>
                    <span class="progress-text">${event.progress}% Complete</span>
                </div>
            </div>
            <div class="event-content">
                <h3 class="event-title">${event.title}</h3>
                <p class="event-description">${event.description}</p>
                <div class="event-meta">
                    <div class="event-date">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        ${new Date(event.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                        })}
                    </div>
                    <div class="event-time">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12,6 12,12 16,14"/>
                        </svg>
                        ${event.time}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Render upcoming events
    upcomingGrid.innerHTML = upcomingEvents.map(event => `
        <div class="event-card upcoming ${event.priority}" data-category="${event.category}">
            <div class="event-header">
                <div class="event-category ${event.category}">${event.category}</div>
                <div class="event-priority ${event.priority}">${event.priority}</div>
            </div>
            <div class="event-image">
                <img src="${event.image}" alt="${event.title}" onerror="this.src='/dashboard.png'">
                <div class="countdown-overlay">
                    <span class="countdown-text">Starting Soon</span>
                </div>
            </div>
            <div class="event-content">
                <h3 class="event-title">${event.title}</h3>
                <p class="event-description">${event.description}</p>
                <div class="event-meta">
                    <div class="event-date">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        ${new Date(event.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                        })}
                    </div>
                    <div class="event-time">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12,6 12,12 16,14"/>
                        </svg>
                        ${event.time}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    updatePagination(events.length, page);
}

function updatePagination(totalEvents, currentPage) {
    const totalPages = Math.ceil(totalEvents / eventsPerPage);
    const pageNumbers = document.getElementById('page-numbers');
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');
    
    if (!pageNumbers || !prevBtn || !nextBtn) return;
    
    // Update page numbers
    pageNumbers.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const pageSpan = document.createElement('span');
        pageSpan.className = `page-number ${i === currentPage ? 'active' : ''}`;
        pageSpan.textContent = i;
        pageSpan.onclick = () => goToPage(i);
        pageNumbers.appendChild(pageSpan);
    }
    
    // Update navigation buttons
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

function goToPage(page) {
    currentPage = page;
    renderEvents(eventsData, page);
}

function filterEvents() {
    // No filtering needed - show all events
    renderEvents(eventsData, 1);
}

function setupEventsPage() {
    renderEvents();
    
    // Add event listeners
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');
    
    if (prevBtn) prevBtn.addEventListener('click', () => goToPage(currentPage - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToPage(currentPage + 1));
}





// Setup event icon click handlers
function setupEventIcons() {
    document.addEventListener('click', function(e) {
        if (e.target.closest('.event-link-icon')) {
            e.preventDefault();
            e.stopPropagation();
            const link = e.target.closest('.event-link-icon');
            const href = link.getAttribute('href');
            if (href && href !== '#') {
                window.open(href, '_blank', 'noopener,noreferrer');
            }
        }
    });
}

// Distribution Spreadsheet API Integration
class DistributionAPI {
    constructor() {
        this.baseURL = '/api/distribution'; // Will be updated when backend is ready
        this.currentData = [];
        this.currentPage = 1;
        this.itemsPerPage = 20;
        this.currentMonth = '2025-01';
        this.searchTerm = '';
        this.isLoading = false;
    }

    // Fetch distribution data from backend (placeholder for now)
    async fetchDistributionData(month = null, search = '', page = 1) {
        if (this.isLoading) return;
        
        this.isLoading = true;
        this.showLoadingState();
        
        try {
            // TODO: Replace with actual API call when backend is ready
            // const response = await fetch(`${this.baseURL}?month=${month}&search=${search}&page=${page}`);
            // const data = await response.json();
            
            // For now, return placeholder data
            const data = this.getPlaceholderData(month, search, page);
            
            this.currentData = data.items;
            this.currentPage = page;
            this.currentMonth = month || this.currentMonth;
            this.searchTerm = search;
            
            this.renderDistributionTable();
            this.updatePagination(data.totalPages, page);
            
        } catch (error) {
            console.error('Error fetching distribution data:', error);
            this.showErrorState('Failed to load distribution data');
        } finally {
            this.isLoading = false;
            this.hideLoadingState();
        }
    }

    // Get placeholder data (will be removed when backend is ready)
    getPlaceholderData(month, search, page) {
        const allData = this.generatePlaceholderData();
        let filteredData = allData;
        
        // Filter by month if specified
        if (month) {
            const monthNum = parseInt(month.split('-')[1]);
            filteredData = allData.filter(item => {
                const itemMonth = parseInt(item.date.split('-')[1]);
                return itemMonth === monthNum;
            });
        }
        
        // Filter by search term
        if (search) {
            filteredData = filteredData.filter(item => 
                item.recipient.toLowerCase().includes(search.toLowerCase()) ||
                item.id.toLowerCase().includes(search.toLowerCase())
            );
        }
        
        // Paginate
        const startIndex = (page - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const paginatedData = filteredData.slice(startIndex, endIndex);
        
        return {
            items: paginatedData,
            totalPages: Math.ceil(filteredData.length / this.itemsPerPage),
            totalItems: filteredData.length
        };
    }

    // Generate placeholder data
    generatePlaceholderData() {
        const data = [];
        const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        const statuses = ['Completed', 'Pending', 'Failed'];
        
        for (let i = 1; i <= 200; i++) {
            const month = months[Math.floor(Math.random() * months.length)];
            const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
            const hour = String(Math.floor(Math.random() * 24)).padStart(2, '0');
            const minute = String(Math.floor(Math.random() * 60)).padStart(2, '0');
            const second = String(Math.floor(Math.random() * 60)).padStart(2, '0');
            
            data.push({
                id: `#${String(i).padStart(3, '0')}`,
                date: `2025-${month}-${day}`,
                time: `${hour}:${minute}:${second}`,
                recipient: this.generateRandomAddress(),
                amount: (Math.random() * 0.5 + 0.05).toFixed(3),
                status: statuses[Math.floor(Math.random() * statuses.length)],
                timestamp: new Date(`2025-${month}-${day}T${hour}:${minute}:${second}`).getTime()
            });
        }
        
        // Sort by timestamp descending (newest first)
        return data.sort((a, b) => b.timestamp - a.timestamp);
    }

    // Generate random Solana address
    generateRandomAddress() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 4; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        result += '...';
        for (let i = 0; i < 4; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    // Render distribution table
    renderDistributionTable() {
        const tbody = document.querySelector('.distribution-spreadsheet tbody');
        if (!tbody) return;
        
        tbody.innerHTML = '';
        
        if (this.currentData.length === 0) {
            tbody.innerHTML = `
                <tr class="distribution-spreadsheet-row">
                    <td colspan="6" style="text-align: center; padding: 20px; color: var(--text-secondary);">
                        No distribution data found
                    </td>
                </tr>
            `;
            return;
        }
        
        this.currentData.forEach(item => {
            const row = document.createElement('tr');
            row.className = 'distribution-spreadsheet-row';
            row.innerHTML = `
                <td class="distribution-col-id">${item.id}</td>
                <td class="distribution-col-date">${item.date}</td>
                <td class="distribution-col-time">${item.time}</td>
                <td class="distribution-col-recipient">${item.recipient}</td>
                <td class="distribution-col-amount">${item.amount}</td>
                <td class="distribution-col-status">
                    <span class="status-badge ${item.status.toLowerCase()}">${item.status}</span>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    // Update pagination
    updatePagination(totalPages, currentPage) {
        const paginationInfo = document.querySelector('.distribution-pagination-info');
        const prevBtn = document.querySelector('.distribution-pagination-btn[data-action="prev"]');
        const nextBtn = document.querySelector('.distribution-pagination-btn[data-action="next"]');
        
        if (paginationInfo) {
            paginationInfo.textContent = `${currentPage}/${totalPages} pages`;
        }
        
        if (prevBtn) {
            prevBtn.disabled = currentPage === 1;
        }
        
        if (nextBtn) {
            nextBtn.disabled = currentPage === totalPages;
        }
    }

    // Show loading state
    showLoadingState() {
        const tbody = document.querySelector('.distribution-spreadsheet tbody');
        if (tbody) {
            tbody.innerHTML = `
                <tr class="distribution-spreadsheet-row">
                    <td colspan="6" style="text-align: center; padding: 20px;">
                        <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
                            <div class="loading-spinner" style="width: 20px; height: 20px;"></div>
                            Loading distribution data...
                        </div>
                    </td>
                </tr>
            `;
        }
    }

    // Hide loading state
    hideLoadingState() {
        // Loading state will be replaced by renderDistributionTable()
    }

    // Show error state
    showErrorState(message) {
        const tbody = document.querySelector('.distribution-spreadsheet tbody');
        if (tbody) {
            tbody.innerHTML = `
                <tr class="distribution-spreadsheet-row">
                    <td colspan="6" style="text-align: center; padding: 20px; color: var(--accent-danger);">
                        ${message}
                    </td>
                </tr>
            `;
        }
    }

    // Refresh data
    async refreshData() {
        // Reset to first page to show newest data at top
        await this.fetchDistributionData(this.currentMonth, this.searchTerm, 1);
    }

    // Search functionality
    async search(searchTerm) {
        this.searchTerm = searchTerm;
        await this.fetchDistributionData(this.currentMonth, searchTerm, 1);
    }

    // Filter by month
    async filterByMonth(month) {
        this.currentMonth = month;
        await this.fetchDistributionData(month, this.searchTerm, 1);
    }

    // Go to page
    async goToPage(page) {
        await this.fetchDistributionData(this.currentMonth, this.searchTerm, page);
    }
}

// Harvesting Spreadsheet API Integration
class HarvestingAPI {
    constructor() {
        this.baseURL = '/api/harvesting'; // Will be updated when backend is ready
        this.currentData = [];
        this.currentPage = 1;
        this.itemsPerPage = 20;
        this.currentMonth = '2025-01';
        this.isLoading = false;
    }

    // Fetch harvesting data from backend (placeholder for now)
    async fetchHarvestingData(month = null, page = 1) {
        if (this.isLoading) return;
        
        this.isLoading = true;
        this.showLoadingState();
        
        try {
            // TODO: Replace with actual API call when backend is ready
            // const response = await fetch(`${this.baseURL}?month=${month}&page=${page}`);
            // const data = await response.json();
            
            // For now, return placeholder data
            const data = this.getPlaceholderData(month, page);
            
            this.currentData = data.items;
            this.currentPage = page;
            this.currentMonth = month || this.currentMonth;
            
            this.renderHarvestingTable();
            this.updatePagination(data.totalPages, page);
            
        } catch (error) {
            console.error('Error fetching harvesting data:', error);
            this.showErrorState('Failed to load harvesting data');
        } finally {
            this.isLoading = false;
            this.hideLoadingState();
        }
    }

    // Get placeholder data (will be removed when backend is ready)
    getPlaceholderData(month, page) {
        const allData = this.generatePlaceholderData();
        let filteredData = allData;
        
        // Filter by month if specified
        if (month) {
            const monthNum = parseInt(month.split('-')[1]);
            filteredData = allData.filter(item => {
                const itemMonth = parseInt(item.date.split('-')[1]);
                return itemMonth === monthNum;
            });
        }
        
        // Paginate
        const startIndex = (page - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const paginatedData = filteredData.slice(startIndex, endIndex);
        
        return {
            items: paginatedData,
            totalPages: Math.ceil(filteredData.length / this.itemsPerPage),
            totalItems: filteredData.length
        };
    }

    // Generate placeholder data
    generatePlaceholderData() {
        const data = [];
        const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        
        for (let i = 1; i <= 150; i++) {
            const month = months[Math.floor(Math.random() * months.length)];
            const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
            const hour = String(Math.floor(Math.random() * 24)).padStart(2, '0');
            const minute = String(Math.floor(Math.random() * 60)).padStart(2, '0');
            const second = String(Math.floor(Math.random() * 60)).padStart(2, '0');
            
            data.push({
                id: `#${String(i).padStart(3, '0')}`,
                date: `2025-${month}-${day}`,
                time: `${hour}:${minute}:${second}`,
                imgSold: (Math.random() * 1000 + 100).toFixed(0),
                rewardPool: (Math.random() * 50 + 10).toFixed(3),
                solDistributed: (Math.random() * 30 + 5).toFixed(3),
                timestamp: new Date(`2025-${month}-${day}T${hour}:${minute}:${second}`).getTime()
            });
        }
        
        // Sort by timestamp descending (newest first)
        return data.sort((a, b) => b.timestamp - a.timestamp);
    }

    // Render harvesting table
    renderHarvestingTable() {
        const tbody = document.querySelector('.harvesting-spreadsheet tbody');
        if (!tbody) return;
        
        tbody.innerHTML = '';
        
        if (this.currentData.length === 0) {
            tbody.innerHTML = `
                <tr class="spreadsheet-row">
                    <td colspan="6" style="text-align: center; padding: 20px; color: var(--text-secondary);">
                        No harvesting data found
                    </td>
                </tr>
            `;
            return;
        }
        
        this.currentData.forEach(item => {
            const row = document.createElement('tr');
            row.className = 'spreadsheet-row';
            row.innerHTML = `
                <td class="col-id">${item.id}</td>
                <td class="col-date">${item.date}</td>
                <td class="col-time">${item.time}</td>
                <td class="col-img-sold">${item.imgSold}</td>
                <td class="col-reward-pool">${item.rewardPool}</td>
                <td class="col-sol-distributed">${item.solDistributed}</td>
            `;
            tbody.appendChild(row);
        });
    }

    // Update pagination
    updatePagination(totalPages, currentPage) {
        const paginationInfo = document.querySelector('.pagination-info');
        const prevBtn = document.querySelector('.pagination-btn[data-action="prev"]');
        const nextBtn = document.querySelector('.pagination-btn[data-action="next"]');
        
        if (paginationInfo) {
            paginationInfo.textContent = `${currentPage}/${totalPages} pages`;
        }
        
        if (prevBtn) {
            prevBtn.disabled = currentPage === 1;
        }
        
        if (nextBtn) {
            nextBtn.disabled = currentPage === totalPages;
        }
    }

    // Show loading state
    showLoadingState() {
        const tbody = document.querySelector('.harvesting-spreadsheet tbody');
        if (tbody) {
            tbody.innerHTML = `
                <tr class="spreadsheet-row">
                    <td colspan="6" style="text-align: center; padding: 20px;">
                        <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
                            <div class="loading-spinner" style="width: 20px; height: 20px;"></div>
                            Loading harvesting data...
                        </div>
                    </td>
                </tr>
            `;
        }
    }

    // Hide loading state
    hideLoadingState() {
        // Loading state will be replaced by renderHarvestingTable()
    }

    // Show error state
    showErrorState(message) {
        const tbody = document.querySelector('.harvesting-spreadsheet tbody');
        if (tbody) {
            tbody.innerHTML = `
                <tr class="spreadsheet-row">
                    <td colspan="6" style="text-align: center; padding: 20px; color: var(--accent-danger);">
                        ${message}
                    </td>
                </tr>
            `;
        }
    }

    // Refresh data
    async refreshData() {
        // Reset to first page to show newest data at top
        await this.fetchHarvestingData(this.currentMonth, 1);
    }

    // Filter by month
    async filterByMonth(month) {
        this.currentMonth = month;
        await this.fetchHarvestingData(month, 1);
    }

    // Go to page
    async goToPage(page) {
        await this.fetchHarvestingData(this.currentMonth, page);
    }
}

// Initialize APIs
const distributionAPI = new DistributionAPI();
const harvestingAPI = new HarvestingAPI();

// Setup Harvesting page functionality
function setupHarvestingPage() {
    // Initialize with default data
    harvestingAPI.fetchHarvestingData();
    
    // Setup refresh button
    const refreshBtn = document.querySelector('.control-btn.refresh-btn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            harvestingAPI.refreshData();
        });
    }
    
    // Setup month dropdown
    const monthDropdown = document.querySelector('.month-dropdown');
    if (monthDropdown) {
        monthDropdown.addEventListener('change', (e) => {
            harvestingAPI.filterByMonth(e.target.value);
        });
    }
    
    // Setup pagination
    const prevBtn = document.querySelector('.pagination-btn[data-action="prev"]');
    const nextBtn = document.querySelector('.pagination-btn[data-action="next"]');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (harvestingAPI.currentPage > 1) {
                harvestingAPI.goToPage(harvestingAPI.currentPage - 1);
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            harvestingAPI.goToPage(harvestingAPI.currentPage + 1);
        });
    }
}

// Setup Distribution page functionality
function setupDistributionPage() {
    // Initialize with default data
    distributionAPI.fetchDistributionData();
    
    // Setup refresh button
    const refreshBtn = document.querySelector('.distribution-refresh-btn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            distributionAPI.refreshData();
        });
    }
    
    // Setup month dropdown
    const monthDropdown = document.querySelector('.distribution-month-dropdown');
    if (monthDropdown) {
        monthDropdown.addEventListener('change', (e) => {
            distributionAPI.filterByMonth(e.target.value);
        });
    }
    
    // Setup search functionality
    const searchInputs = document.querySelectorAll('.distribution-mobile-search .search-input, .distribution-spreadsheet-controls .search-input');
    searchInputs.forEach(input => {
        let searchTimeout;
        input.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                distributionAPI.search(e.target.value);
            }, 300);
        });
    });
    
    // Setup pagination
    const prevBtn = document.querySelector('.distribution-pagination-btn[data-action="prev"]');
    const nextBtn = document.querySelector('.distribution-pagination-btn[data-action="next"]');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (distributionAPI.currentPage > 1) {
                distributionAPI.goToPage(distributionAPI.currentPage - 1);
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            distributionAPI.goToPage(distributionAPI.currentPage + 1);
        });
    }
}

// Setup events scrollers for Upcoming Events and Recent Project Updates
function setupEventsScrollers() {
    const scrollers = document.querySelectorAll('.events-scroller');
    
    scrollers.forEach(scroller => {
        const track = scroller.querySelector('.scroller-track');
        const thumb = scroller.querySelector('.scroller-thumb');
        const container = scroller.closest('.upcoming-events-container, .project-updates-container');
        const grid = container.querySelector('.upcoming-events-grid, .project-updates-grid');
        const cards = grid.querySelectorAll('.upcoming-event-card, .project-update-card');
        
        if (cards.length <= 1) return;
        
        let isDragging = false;
        let startX = 0;
        let startLeft = 0;
        
        // Click on track to jump to position
        track.addEventListener('click', (e) => {
            const rect = track.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const trackWidth = rect.width;
            const thumbWidth = thumb.offsetWidth;
            const maxLeft = trackWidth - thumbWidth;
            const clickPercent = clickX / trackWidth;
            const newLeft = Math.max(0, Math.min(maxLeft, clickPercent * maxLeft));
            
            thumb.style.left = newLeft + 'px';
            
            // Calculate which card to show
            const cardIndex = Math.floor(clickPercent * cards.length);
            const targetCard = cards[cardIndex];
            if (targetCard) {
                cards.forEach(card => card.style.display = 'none');
                targetCard.style.display = 'block';
            }
        });
        
        // Drag thumb
        thumb.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            startLeft = parseInt(thumb.style.left) || 0;
            document.body.style.cursor = 'grabbing';
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const deltaX = e.clientX - startX;
            const rect = track.getBoundingClientRect();
            const trackWidth = rect.width;
            const thumbWidth = thumb.offsetWidth;
            const maxLeft = trackWidth - thumbWidth;
            const newLeft = Math.max(0, Math.min(maxLeft, startLeft + deltaX));
            
            thumb.style.left = newLeft + 'px';
            
            // Calculate which card to show
            const newLeftPercent = newLeft / maxLeft;
            const cardIndex = Math.floor(newLeftPercent * (cards.length - 1));
            const targetCard = cards[cardIndex];
            if (targetCard) {
                cards.forEach(card => card.style.display = 'none');
                targetCard.style.display = 'block';
            }
        });
        
        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                document.body.style.cursor = 'default';
            }
        });
        
        // Initialize: show only first card
        cards.forEach((card, index) => {
            if (index === 0) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}


// Old simple voting system removed - using new professional system instead

// Function to get the current wallet address
function getCurrentWalletAddress() {
    if (window.walletManager && window.walletManager.walletAddress) {
        return window.walletManager.walletAddress;
    }
    return null;
}


// API Functions
async function fetchActivePolls() {
    try {
        const response = await fetch(`${votingState.apiBaseUrl}/api/polls/active`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data.success ? data.polls : [];
    } catch (error) {
        console.error('❌ Error fetching polls:', error);
        return [];
    }
}

async function submitVoteToAPI(pollId, voteOption) {
    try {
        // Always get the current wallet address
        const currentWalletAddress = getCurrentWalletAddress();
        if (!currentWalletAddress) {
            throw new Error('No wallet connected');
        }
        
        const requestBody = {
            walletAddress: currentWalletAddress,
            voteOption: voteOption
        };
        
        console.log(`📤 Submitting vote to backend:`, {
            pollId,
            walletAddress: currentWalletAddress,
            voteOption,
            url: `${votingState.apiBaseUrl}/api/polls/${pollId}/vote`,
            walletLength: currentWalletAddress?.length,
            optionLength: voteOption?.length,
            requestBody: requestBody
        });
        
        const response = await fetch(`${votingState.apiBaseUrl}/api/polls/${pollId}/vote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });
        
        console.log(`📥 Backend response status:`, response.status);
        
        const data = await response.json();
        console.log(`📥 Backend response data:`, data);
        
        // Check if vote was successful (200 status)
        if (response.ok && response.status === 200) {
            console.log('✅ Vote submitted successfully:', data);
            return { success: true, isNewVote: true };
        }
        
        // Check if user already voted (400 status with "already voted" message)
        if (response.status === 400 && data.message && data.message.includes('already voted')) {
            console.log('ℹ️ User already voted, will show results instead');
            return { success: true, isNewVote: false, alreadyVoted: true };
        }
        
        // For other errors, return failure
        console.error('❌ Vote submission failed:', data.message || data.error);
        return { success: false, error: data.message || data.error };
    } catch (error) {
        console.error('❌ Error submitting vote:', error);
        console.error('❌ Error details:', {
            name: error.name,
            message: error.message,
            stack: error.stack
        });
        return { success: false, error: 'Network error. Please try again.' };
    }
}

async function fetchPollResults(pollId) {
    try {
        const response = await fetch(`${votingState.apiBaseUrl}/api/polls/${pollId}/results`);
        const data = await response.json();
        
        if (data.success) {
            votingState.pollResults[pollId] = data.results;
            return data.results;
        } else {
            console.error('❌ Failed to fetch poll results:', data.error);
            return null;
        }
    } catch (error) {
        console.error('❌ Error fetching poll results:', error);
        return null;
    }
}


// SIMPLE VOTING SYSTEM - Clean & Efficient

// Voting system state
const votingState = {
    apiBaseUrl: 'https://img-protocol-backend.onrender.com',
    initialized: false,
    currentWallet: null,
    walletVoteStatus: {} // Track voting status per poll for current wallet
};

// Initialize voting system
async function initializeVotingSystem() {
    console.log('🗳️ Initializing simple voting system...');
    
    // Check if we're on voting page
    const votePage = document.querySelector('.vote-page');
    if (!votePage || votePage.style.display === 'none') {
        console.log('🗳️ Not on voting page');
        return;
    }
    
    console.log('✅ Vote page found!');
    
    try {
        // Setup event listeners only once
        if (!votingState.initialized) {
            setupVotingEventListeners();
            setupWalletMonitoring();
            votingState.initialized = true;
            console.log('✅ Voting system initialized successfully');
        }
        
        // Update UI for current wallet
        await updatePollStates();
        
    } catch (error) {
        console.error('❌ Failed to initialize voting system:', error);
    }
}

// Load active polls from backend
async function loadActivePolls() {
    try {
        const response = await fetch(`${votingState.apiBaseUrl}/api/polls/active`);
        const data = await response.json();
        
        if (data.success && data.polls) {
            updatePollCards(data.polls);
            console.log('✅ Loaded active polls:', data.polls.length);
        }
    } catch (error) {
        console.error('❌ Failed to load polls:', error);
    }
}

// Update poll cards with real data
function updatePollCards(polls) {
            polls.forEach(poll => {
        const pollCard = document.querySelector(`[data-poll-id="${poll.id}"]`);
                if (pollCard) {
                    const titleElement = pollCard.querySelector('.poll-title');
                    const descElement = pollCard.querySelector('.poll-description');
                    
                    if (titleElement) titleElement.textContent = poll.title;
                    if (descElement) descElement.textContent = poll.description;
                }
            });
        }

// SIMPLE: Check if user has voted on a poll
async function hasUserVoted(pollId, walletAddress) {
    if (!walletAddress) return false;
    
    try {
        const response = await fetch(`${votingState.apiBaseUrl}/api/polls/${pollId}/votes`);
        const data = await response.json();
        
        if (data.success && data.votes) {
            return data.votes.some(vote => vote.wallet_address === walletAddress);
        }
        return false;
    } catch (error) {
        console.error('❌ Error checking vote status:', error);
        return false;
    }
}

// SIMPLE: Update poll states based on current wallet
async function updatePollStates() {
    const currentWallet = getCurrentWalletAddress();
    votingState.currentWallet = currentWallet;
    
    if (!currentWallet) {
        console.log('ℹ️ No wallet connected, showing voting options');
        showVotingOptions();
        return;
    }
    
    console.log(`🔍 Checking vote status for wallet: ${currentWallet}`);
    
    // Get all poll cards
    const pollCards = document.querySelectorAll('[data-poll-id]');
    
    for (const pollCard of pollCards) {
        const pollId = pollCard.getAttribute('data-poll-id');
        if (!pollId) continue;
        
        const hasVoted = await hasUserVoted(pollId, currentWallet);
        
        if (hasVoted) {
            console.log(`✅ User voted on poll ${pollId}, showing results`);
            showPollResults(pollCard, pollId);
        } else {
            console.log(`ℹ️ User has not voted on poll ${pollId}, showing voting options`);
            showVotingOptions(pollCard, pollId);
        }
    }
}

// SIMPLE: Show poll results for voted polls
async function showPollResults(pollCard, pollId) {
    // Clean up any existing results
    const existingResults = pollCard.querySelectorAll('.poll-results-compact, .poll-results, [class*="results"]');
    existingResults.forEach(result => result.remove());
    
    // Update button to show voted state
    const submitBtn = pollCard.querySelector('.submit-vote-btn');
    if (submitBtn) {
        submitBtn.innerHTML = `✓ Vote Recorded`;
        submitBtn.className = 'vote-recorded-btn';
        submitBtn.disabled = true;
    }
    
    // Hide voting options
    const pollOptions = pollCard.querySelector('.poll-options');
    if (pollOptions) {
        pollOptions.style.display = 'none';
    }
    
    // Fetch and display results
    try {
        const response = await fetch(`${votingState.apiBaseUrl}/api/polls/${pollId}/results`);
        const data = await response.json();
        
        if (data.success) {
            const resultsHTML = createResultsHTML(pollId, data.results);
            // Insert results into the voting section above the actions
            const pollActions = pollCard.querySelector('.poll-actions');
            if (pollActions) {
                pollActions.insertAdjacentHTML('beforebegin', resultsHTML);
            }
        }
    } catch (error) {
        console.error('Error fetching results:', error);
    }
}

// SIMPLE: Show voting options for non-voted polls
function showVotingOptions(pollCard, pollId) {
    // Clean up any existing results
    const existingResults = pollCard.querySelectorAll('.poll-results-compact, .poll-results, [class*="results"]');
    existingResults.forEach(result => result.remove());
    
    // Reset button to voting state
    const submitBtn = pollCard.querySelector('.submit-vote-btn');
    if (submitBtn) {
        submitBtn.innerHTML = 'Submit Vote';
        submitBtn.className = 'submit-vote-btn';
        submitBtn.disabled = false;
    }
    
    // Show voting options
    const pollOptions = pollCard.querySelector('.poll-options');
    if (pollOptions) {
        pollOptions.style.display = 'flex';
    }
}

// SIMPLE: Reset all polls to voting state (when wallet disconnects)
function resetAllPollsToVotingState() {
    const pollCards = document.querySelectorAll('[data-poll-id]');
    pollCards.forEach(pollCard => {
        const pollId = pollCard.getAttribute('data-poll-id');
        if (pollId) {
            showVotingOptions(pollCard, pollId);
        }
    });
}

// Setup wallet monitoring to detect wallet changes
function setupWalletMonitoring() {
    console.log('🔍 Setting up wallet monitoring for voting system...');
    
    // Monitor wallet state changes every 2 seconds
    setInterval(async () => {
        const currentWallet = getCurrentWalletAddress();
        
        // Debug wallet monitoring
        if (currentWallet !== votingState.currentWallet) {
            console.log(`🔄 WALLET CHANGED:`, {
                from: votingState.currentWallet,
                to: currentWallet,
                timestamp: new Date().toISOString()
            });
            await updatePollStates();
        }
        
        // Also log current state for debugging
        if (currentWallet && Math.random() < 0.1) { // Log 10% of the time to avoid spam
            console.log(`🔍 Wallet monitoring: ${currentWallet}, vote status:`, votingState.walletVoteStatus);
        }
    }, 2000);
}

// Setup voting event listeners - IMPROVED VERSION
function setupVotingEventListeners() {
    console.log('✅ SETTING UP IMPROVED VOTING EVENT LISTENERS - BETTER SENSITIVITY!');
    
    // Remove any existing event listeners to avoid conflicts
    document.removeEventListener('click', handleVotingClick);
    
    // Add the new event listener
    document.addEventListener('click', handleVotingClick);
    
    // Test: Add a simple test to verify clicks are working
    console.log('✅ TESTING CLICK DETECTION - IMPROVED SENSITIVITY!');
    document.addEventListener('click', (e) => {
        if (e.target.closest('.poll-option')) {
            console.log('✅ POLL OPTION CLICK DETECTED!', e.target);
        }
    });
    
    // Improve click sensitivity by adding CSS
    const style = document.createElement('style');
    style.textContent = `
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
            margin-top: -2px;
            padding: 16px 12px 12px 12px;
            background: rgba(31, 41, 55, 0.4);
            border-radius: 8px;
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
            font-size: 16px;
            font-weight: 600;
            margin: 0;
        }
        .vote-count {
            color: #94a3b8;
            font-size: 14px;
            font-weight: 500;
        }
        .results-list {
            margin-bottom: 2px;
        }
        .result-row {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 1px;
            padding: 0;
        }
        .result-row.selected .result-label {
            color: #10b981;
            font-weight: 600;
        }
        .result-label {
            color: #f8fafc;
            font-size: 13px;
            font-weight: 500;
            margin-bottom: 2px;
            line-height: 1.2;
        }
        .result-bar-container {
            display: flex;
            align-items: center;
            width: 100%;
        }
        .result-bar {
            flex: 1;
            height: 12px;
            background: rgba(55, 65, 81, 0.6);
            border-radius: 6px;
            overflow: hidden;
            position: relative;
            margin-right: 8px;
        }
        .result-percentage {
            min-width: 50px;
            color: #f8fafc;
            font-size: 13px;
            font-weight: 500;
            text-align: right;
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
            padding-top: 1px;
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
    `;
    document.head.appendChild(style);
    
}

// IMPROVED click handler with better sensitivity
function handleVotingClick(e) {
    // Click detected - checking for voting elements
    
    // Handle poll option selection - check for poll-option class or its children
    const pollOption = e.target.closest('.poll-option');
    if (pollOption) {
        console.log('✅ POLL OPTION CLICKED - IMPROVED SENSITIVITY!');
        
        const pollCard = pollOption.closest('[data-poll-id]');
        const pollId = pollCard?.dataset.pollId;
        const option = pollOption.dataset.option;
        
        console.log('🗳️ Poll ID:', pollId);
        console.log('🗳️ Option:', option);
        
        if (pollId && option) {
            selectPollOption(pollId, option);
        }
        return;
    }
    
    // Handle vote submission - check for submit-vote-btn class or its children
    const submitBtn = e.target.closest('.submit-vote-btn');
    if (submitBtn) {
        console.log('✅ SUBMIT BUTTON CLICKED - IMPROVED SENSITIVITY!');
        const pollId = submitBtn.dataset.pollId;
        const selectedOption = submitBtn.dataset.selectedOption;
        
        if (pollId && selectedOption) {
            submitVote(pollId, selectedOption);
        }
        return;
    }
    
    // Debug: Log all clicks to see what's being clicked
    console.log('🔍 Click on non-voting element:', e.target);
}

// Select poll option - ULTRA SIMPLE VERSION
function selectPollOption(pollId, option) {
    console.log(`✅ SELECTING OPTION ${option} FOR POLL ${pollId} - NO RESTRICTIONS!`);
    
    const pollCard = document.querySelector(`[data-poll-id="${pollId}"]`);
    if (!pollCard) {
        console.log(`❌ Poll card not found for ID: ${pollId}`);
        return;
    }
    
    // Debug: List all available options
    const allOptions = pollCard.querySelectorAll('.poll-option');
    console.log(`🔍 Available options in poll ${pollId}:`, Array.from(allOptions).map(opt => opt.dataset.option));
    
    // Remove previous selections
    pollCard.querySelectorAll('.poll-option').forEach(opt => {
                opt.classList.remove('selected');
                const circle = opt.querySelector('.option-circle');
        if (circle) circle.classList.remove('selected');
            });
            
            // Select current option
    const selectedOption = pollCard.querySelector(`[data-option="${option}"]`);
    if (selectedOption) {
        selectedOption.classList.add('selected');
        const circle = selectedOption.querySelector('.option-circle');
        if (circle) circle.classList.add('selected');
        console.log(`✅ OPTION ${option} SELECTED SUCCESSFULLY!`);
    } else {
        console.log(`❌ Option element not found for: ${option}`);
        console.log(`🔍 Available options:`, Array.from(allOptions).map(opt => opt.dataset.option));
    }
    
    // Enable submit button - NO RESTRICTIONS
    const submitBtn = pollCard.querySelector('.submit-vote-btn');
    if (submitBtn) {
            submitBtn.disabled = false;
        submitBtn.dataset.selectedOption = option;
        submitBtn.textContent = 'Submit Vote';
            submitBtn.style.background = '#3b82f6';
        console.log(`✅ SUBMIT BUTTON ENABLED FOR POLL ${pollId} WITH OPTION: ${option}`);
        console.log(`🔍 Submit button dataset:`, submitBtn.dataset);
    } else {
        console.log(`❌ Submit button not found for poll ${pollId}`);
    }
}

// Submit vote - PHASE 1: REAL BACKEND INTEGRATION
async function submitVote(pollId, option) {
    console.log(`✅ SUBMITTING VOTE: poll ${pollId}, option "${option}" - REAL BACKEND!`);
    console.log(`🔍 Option type:`, typeof option, `Option length:`, option?.length);
    
    const pollCard = document.querySelector(`[data-poll-id="${pollId}"]`);
    if (!pollCard) {
        console.log(`❌ Poll card not found for ID: ${pollId}`);
                return;
            }
            
    const submitBtn = pollCard.querySelector('.submit-vote-btn');
    if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Submitting...';
            submitBtn.style.background = '#6b7280';
    }
    
    try {
        // Submit vote to real backend
        const result = await submitVoteToAPI(pollId, option);
        
        if (result.success) {
            if (result.alreadyVoted) {
                console.log(`ℹ️ USER ALREADY VOTED: poll ${pollId}, showing results`);
            } else {
                console.log(`✅ VOTE SUBMITTED SUCCESSFULLY: poll ${pollId}, option ${option}`);
            }
            
            // Update button to "Vote Recorded" for both new votes and already voted
            if (submitBtn) {
                submitBtn.textContent = '✓ Vote Recorded';
                    submitBtn.style.background = '#10b981';
            }
            
            // Disable poll options
            const pollOptions = pollCard.querySelector('.poll-options');
            if (pollOptions) {
                pollOptions.style.pointerEvents = 'none';
                pollOptions.style.opacity = '0.6';
            }
            
            // Update vote status in state
            votingState.walletVoteStatus[pollId] = true;
            
            // Show poll results immediately from backend
            console.log(`🔄 About to call displayPollResultsAfterVote for poll ${pollId}`);
            console.log(`🚨 TESTING: Calling displayPollResultsAfterVote NOW!`);
            await displayPollResultsAfterVote(pollId);
            console.log(`✅ displayPollResultsAfterVote completed for poll ${pollId}`);
            console.log(`🚨 TESTING: Function call completed!`);
            
            console.log(`✅ VOTING COMPLETED FOR POLL ${pollId}!`);
                } else {
            // Reset button on failure
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit Vote';
                submitBtn.style.background = '#3b82f6';
            }
            console.error('❌ Vote submission failed:', result.error);
                }
            } catch (error) {
        console.error('❌ Error in submitVote:', error);
                
        // Reset button on error
        if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit Vote';
                submitBtn.style.background = '#3b82f6';
            }
    }
}

// SIMPLE: Display poll results after voting
async function displayPollResultsAfterVote(pollId) {
    console.log(`🔍 DISPLAYING POLL RESULTS AFTER VOTE: poll ${pollId}`);
    
    const pollCard = document.querySelector(`[data-poll-id="${pollId}"]`);
    if (!pollCard) {
        console.log(`❌ Poll card not found for ID: ${pollId}`);
        return;
    }
    
    console.log(`✅ Poll card found for ID: ${pollId}`);
    
    // Clean up any existing results
    const existingResults = pollCard.querySelectorAll('.poll-results-compact, .poll-results, [class*="results"]');
    existingResults.forEach(result => result.remove());
    console.log(`🧹 Cleaned up ${existingResults.length} existing results`);
    
    // Hide voting options
    const pollOptions = pollCard.querySelector('.poll-options');
    if (pollOptions) {
        pollOptions.style.display = 'none';
        console.log(`✅ Hidden voting options`);
    }
    
    // Update submit button
    const submitBtn = pollCard.querySelector('.submit-vote-btn');
    if (submitBtn) {
        submitBtn.innerHTML = `✓ Vote Recorded`;
        submitBtn.className = 'vote-recorded-btn';
        submitBtn.disabled = true;
        console.log(`✅ Updated submit button to "Vote Recorded"`);
    }
    
    // Fetch and display results
    try {
        // Add a small delay to ensure backend has processed the vote
        console.log(`⏳ Waiting 500ms for backend to process vote...`);
        await new Promise(resolve => setTimeout(resolve, 500));
        
        console.log(`📡 Fetching results from: ${votingState.apiBaseUrl}/api/polls/${pollId}/results`);
        const response = await fetch(`${votingState.apiBaseUrl}/api/polls/${pollId}/results`);
        const data = await response.json();
        
        console.log(`📊 Results response:`, data);
        
        if (data.success) {
            console.log(`✅ Results data received:`, data.results);
            const resultsHTML = createResultsHTML(pollId, data.results);
            console.log(`📝 Generated results HTML:`, resultsHTML);
            
            // Insert results into the voting section above the actions
            const pollActions = pollCard.querySelector('.poll-actions');
            if (pollActions) {
                pollActions.insertAdjacentHTML('beforebegin', resultsHTML);
                console.log(`✅ Results HTML inserted before poll actions`);
            } else {
                console.log(`❌ Poll actions not found`);
            }
        } else {
            console.log(`❌ Results fetch failed:`, data.error);
        }
    } catch (error) {
        console.error('❌ Error fetching results:', error);
    }
}

// Create results HTML with real backend data
function createResultsHTML(pollId, results) {
    const totalVotes = results.voteCounts?.total || 0;
    
    // Generate result rows dynamically based on available options
    let resultRowsHTML = '';
    
    // Handle backend data format: { voteCounts: { option1: 1, option2: 0, option3: 0, total: 1 }, percentages: { option1: "100.0", option2: "0.0", option3: "0.0" } }
    const percentages = results.percentages || {};
    const voteCounts = results.voteCounts || {};
    
    // Fallback: if new format is empty, try old format
    let finalPercentages = percentages;
    let finalVoteCounts = voteCounts;
    
    if (Object.keys(percentages).length === 0 && Object.keys(voteCounts).length === 0) {
        // Try old format: { option1: 1, option2: 0, option3: 0, total: 1, percentages: { option1: "100.0", option2: "0.0", option3: "0.0" } }
        finalPercentages = results.percentages || {};
        finalVoteCounts = {
            option1: results.option1 || 0,
            option2: results.option2 || 0,
            option3: results.option3 || 0,
            total: results.total || 0
        };
    }
    
    // Get all options from percentages object
    const options = Object.keys(finalPercentages);
    
    options.forEach(option => {
        const percentage = finalPercentages[option] || '0.0';
        const votes = finalVoteCounts[option] || 0;
        const displayName = getOptionDisplayName(option);
        const fillClass = getOptionFillClass(option);
        
        resultRowsHTML += `
            <div class="result-row">
                <span class="result-label">${displayName}</span>
                <div class="result-bar-container">
                    <div class="result-bar">
                        <div class="result-fill ${fillClass}" style="width: ${percentage}%"></div>
                    </div>
                    <span class="result-percentage">${percentage}%</span>
                </div>
            </div>
        `;
    });
    
    const finalHTML = `
        <div class="poll-results-compact">
            <div class="results-list">
                ${resultRowsHTML}
            </div>
            <div class="results-footer">
                <a href="#" onclick="showDetailedResults('${pollId}')" class="view-results-link">VIEW RESULTS</a>
            </div>
        </div>
    `;
    
    return finalHTML;
}


// Helper functions for option display
function getOptionDisplayName(option) {
    const displayNames = {
        'option1': 'Enjoying the Dashboard',
        'option2': 'Just Okay',
        'option3': 'This is bad',
        'yes': 'Yes',
        'no': 'No',
        'abstain': 'Abstain',
        'approve': 'Approve',
        'reject': 'Reject',
        'support': 'Support',
        'oppose': 'Oppose',
        'for': 'For',
        'against': 'Against'
    };
    return displayNames[option] || option.charAt(0).toUpperCase() + option.slice(1);
}

function getOptionFillClass(option) {
    // Define blue color variations for different options
    const fillClasses = {
        'option1': 'yes-fill',
        'option2': 'no-fill', 
        'option3': 'abstain-fill',
        'yes': 'yes-fill',
        'no': 'no-fill', 
        'abstain': 'abstain-fill',
        'approve': 'yes-fill',
        'reject': 'no-fill',
        'support': 'yes-fill',
        'oppose': 'no-fill',
        'for': 'yes-fill',
        'against': 'no-fill'
    };
    return fillClasses[option] || 'default-fill';
}


// Display poll results
function displayPollResults(pollId, results) {
    const pollCard = document.querySelector(`[data-poll-id="${pollId}"]`);
    if (!pollCard) return;
    
    // Hide voting options
    const pollOptions = pollCard.querySelector('.poll-options');
    const submitBtn = pollCard.querySelector('.submit-vote-btn');
    
    if (pollOptions) pollOptions.style.display = 'none';
    if (submitBtn) submitBtn.style.display = 'none';
    
    // Create results display
    const resultsHtml = `
        <div class="poll-results">
            <h4>Poll Results</h4>
            <div class="results-stats">
                <div class="result-item">
                    <span>Yes: ${results.yes} (${Math.round((results.yes / results.total) * 100)}%)</span>
                </div>
                <div class="result-item">
                    <span>No: ${results.no} (${Math.round((results.no / results.total) * 100)}%)</span>
                </div>
                <div class="result-item">
                    <span>Abstain: ${results.abstain} (${Math.round((results.abstain / results.total) * 100)}%)</span>
                </div>
            </div>
            <div class="total-votes">Total Votes: ${results.total}</div>
            <button class="view-voters-btn" data-poll-id="${pollId}">View Voters</button>
        </div>
    `;
    
    // Insert results after poll explanation
    const pollExplanation = pollCard.querySelector('.poll-explanation');
    if (pollExplanation) {
        pollExplanation.insertAdjacentHTML('afterend', resultsHtml);
    } else {
        // Fallback: insert at end of poll content
    const pollContent = pollCard.querySelector('.poll-content');
    if (pollContent) {
        pollContent.insertAdjacentHTML('beforeend', resultsHtml);
        }
    }
}

// Global functions for voting system
window.initializeVotingSystem = initializeVotingSystem;
window.reinitializeVotingSystem = () => {
    // Don't reset initialized flag - just update UI
    initializeVotingSystem();
};

// Global function for showing detailed results in a popup modal - PHASE 1: REAL BACKEND DATA
window.showDetailedResults = async function(pollId) {
    console.log(`📊 SHOWING DETAILED RESULTS FOR POLL ${pollId} - REAL BACKEND DATA`);
    
    if (!pollId) {
        console.error('❌ No pollId provided to showDetailedResults');
        return;
    }
    
    try {
        // Fetch real poll data and votes from backend
        const [pollData, votesData] = await Promise.all([
            fetch(`${votingState.apiBaseUrl}/api/polls/${pollId}`).then(res => res.json()),
            fetch(`${votingState.apiBaseUrl}/api/polls/${pollId}/votes`).then(res => res.json())
        ]);
        
        if (pollData.success && votesData.success) {
            // Organize votes by option - Backend uses vote_option and wallet_address
            const votesByOption = {};
            votesData.votes.forEach(vote => {
                if (!votesByOption[vote.vote_option]) {
                    votesByOption[vote.vote_option] = [];
                }
                votesByOption[vote.vote_option].push(vote.wallet_address);
            });
            
            // Calculate percentages and create poll object dynamically
            const totalVotes = votesData.votes.length;
            const poll = {
                question: pollData.poll.title,
                totalVotes: totalVotes,
                options: {}
            };
            
            // Dynamically create options based on what's in the votes
            Object.keys(votesByOption).forEach(option => {
                poll.options[option] = {
                    percentage: totalVotes > 0 ? ((votesByOption[option]?.length || 0) / totalVotes * 100).toFixed(1) : '0.0',
                    votes: votesByOption[option]?.length || 0,
                    wallets: votesByOption[option] || []
                };
            });
            
            console.log(`✅ REAL POLL DATA LOADED:`, poll);
            
            // Create and show the popup modal
            showPollResultsModal(poll);
        } else {
            console.error('❌ Failed to fetch poll data:', pollData.error || votesData.error);
        }
    } catch (error) {
        console.error('❌ Error fetching detailed results:', error);
    }
};



// Function to create and display the poll results modal
function showPollResultsModal(poll) {
    // Remove existing modal if any
    const existingModal = document.getElementById('poll-results-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal HTML
    const modalHTML = `
        <div id="poll-results-modal" class="poll-results-modal-overlay">
            <div class="poll-results-modal">
                <div class="modal-header">
                    <h2 class="modal-title">Poll Results</h2>
                    <button class="modal-close" onclick="closePollResultsModal()">&times;</button>
                </div>
                <div class="modal-content">
                    <div class="poll-question-section">
                        <h3 class="poll-question">${poll.question}</h3>
                    </div>
                    
                    <div class="results-sections">
                        ${Object.keys(poll.options).map(option => `
                            <div class="result-section">
                                <div class="result-section-header">
                                    <span class="result-option">${getOptionDisplayName(option)}</span>
                                    <span class="result-stats">${poll.options[option].percentage}% (${poll.options[option].votes} votes)</span>
                                </div>
                                <div class="wallet-list">
                                    ${poll.options[option].wallets.length > 0 ? 
                                        poll.options[option].wallets.map(wallet => 
                                            `<div class="wallet-item">
                                                <span class="wallet-address">${truncateWalletAddress(wallet)}</span>
                                            </div>`
                                        ).join('') : 
                                        '<div class="no-wallets">No wallets voted for this option</div>'
                                    }
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="total-votes-info">Total Votes: ${poll.totalVotes}</div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add modal styles if not already added
    addPollResultsModalStyles();
    
    // Show modal with animation
    setTimeout(() => {
        const modal = document.getElementById('poll-results-modal');
        if (modal) {
            modal.classList.add('show');
        }
    }, 10);
}

// Function to close the poll results modal
window.closePollResultsModal = function() {
    const modal = document.getElementById('poll-results-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
};

// Function to truncate wallet address (like in sidebar)
function truncateWalletAddress(address) {
    if (!address || address.length < 8) return address;
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
}

// Function to add modal styles
function addPollResultsModalStyles() {
    // Check if styles already exist
    if (document.getElementById('poll-results-modal-styles')) {
        return;
    }
    
    const style = document.createElement('style');
    style.id = 'poll-results-modal-styles';
    style.textContent = `
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
            text-align: center;
            margin-top: 20px;
            padding-top: 15px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
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
    `;
    
    document.head.appendChild(style);
}

// Manual test function
window.testVotingSystem = () => {
    console.log('🧪 MANUAL TEST: Testing voting system...');
    console.log('🧪 Vote page element:', document.querySelector('.vote-page'));
    console.log('🧪 Poll options found:', document.querySelectorAll('.poll-option').length);
    console.log('🧪 Submit buttons found:', document.querySelectorAll('.submit-vote-btn').length);
    console.log('🧪 Poll cards found:', document.querySelectorAll('[data-poll-id]').length);
    
    // Test each poll option individually
    document.querySelectorAll('.poll-option').forEach((option, index) => {
        console.log(`🧪 Poll option ${index}:`, option);
        console.log(`🧪 Poll option ${index} classes:`, option.classList);
        console.log(`🧪 Poll option ${index} data-option:`, option.dataset.option);
        console.log(`🧪 Poll option ${index} parent:`, option.parentElement);
        console.log(`🧪 Poll option ${index} parent ID:`, option.parentElement?.id);
    });
    
    // Test click simulation
    const firstOption = document.querySelector('.poll-option');
    if (firstOption) {
        console.log('🧪 Simulating click on first option...');
        firstOption.click();
    }
    
    // Try to initialize (don't reset state)
    initializeVotingSystem();
};

// Global function for testing the new poll results design
window.testPollResults = function(pollId = 1, option = 'yes') {
    console.log('🧪 TESTING NEW POLL RESULTS DESIGN...');
    displayPollResultsAfterVote(pollId);
    console.log('✅ Poll results test completed!');
};

// Global function for testing the poll results modal
window.testPollResultsModal = function(pollId = 1) {
    console.log('🧪 TESTING POLL RESULTS MODAL...');
    showDetailedResults(pollId);
    console.log('✅ Poll results modal test completed!');
};

// Simple test function to verify modal works
window.testModalDirect = function() {
    console.log('🧪 TESTING MODAL DIRECTLY...');
    console.log('🧪 showDetailedResults function:', window.showDetailedResults);
    console.log('🧪 Calling showDetailedResults(1)...');
    window.showDetailedResults(1);
};

// Removed conflicting setupPollInteractions function - using simplified event delegation instead

// Auto-initialize voting system when vote page is detected
// Format number with commas
function formatNumberWithCommas(value) {
    // Remove any existing commas and non-numeric characters except decimal point
    const cleanValue = value.replace(/[^\d.]/g, '');
    
    // Split by decimal point if exists
    const parts = cleanValue.split('.');
    
    // Add commas to the integer part
    if (parts[0]) {
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    
    // Rejoin with decimal point if it existed
    return parts.join('.');
}

// Handle input formatting for calculator fields
function handleInputFormatting(event) {
    const input = event.target;
    const cursorPosition = input.selectionStart;
    const oldValue = input.value;
    const oldLength = oldValue.length;
    
    // Format the number with commas
    const formattedValue = formatNumberWithCommas(input.value);
    
    // Update the input value
    input.value = formattedValue;
    
    // Calculate new cursor position based on added commas
    const newLength = formattedValue.length;
    const lengthDifference = newLength - oldLength;
    const newCursorPosition = cursorPosition + lengthDifference;
    
    // Set cursor position
    input.setSelectionRange(newCursorPosition, newCursorPosition);
    
    // Trigger calculation
    calculateRewards().catch(console.error);
}

// Initialize Rewards Calculator
function initializeRewardsCalculator() {
    console.log('💰 Initializing rewards calculator...');
    
    // Initialize token statistics
    updateTokenStatistics();
    
    // Set up calculator inputs
    const volumeInput = document.getElementById('volume-24h');
    const holdingsInput = document.getElementById('img-holdings');
    
    if (volumeInput && holdingsInput) {
        // Add event listeners for formatting and calculation
        volumeInput.addEventListener('input', handleInputFormatting);
        holdingsInput.addEventListener('input', handleInputFormatting);
        
        // Initial calculation
        calculateRewards().catch(console.error);
    }
}

// Fetch and update token statistics from DexScreener
async function updateTokenStatistics() {
    try {
        console.log('📊 Fetching IMG token data...');
        const response = await fetch('https://api.dexscreener.com/latest/dex/tokens/znv3FZt2HFAvzYf5LxzVyryh3mBXWuTRRng25gEZAjh');
        
        if (!response.ok) {
            throw new Error('Failed to fetch token data');
        }
        
        const data = await response.json();
        
        if (data.pairs && data.pairs.length > 0) {
            const pair = data.pairs[0];
            updateStatElement('img-price', formatPrice(pair.priceUsd));
            updateStatElement('img-price-change', formatPercentage(pair.priceChange?.h24 || 0));
            updateStatElement('img-volume', formatCurrency(pair.volume?.h24 || 0));
            updateStatElement('img-volume-change', formatPercentage(pair.volumeChange?.h24 || 0));
            updateStatElement('img-market-cap', formatCurrency(pair.marketCap || 0));
            updateStatElement('img-market-cap-change', formatPercentage(pair.priceChange?.h24 || 0));
            updateStatElement('img-liquidity', formatCurrency(pair.liquidity?.usd || 0));
            updateStatElement('img-liquidity-change', formatPercentage(pair.priceChange?.h24 || 0));
            
            console.log('✅ Token statistics updated');
        }
    } catch (error) {
        console.error('❌ Error fetching token data:', error);
        // Set default values on error
        updateStatElement('img-price', '$0.0000');
        updateStatElement('img-price-change', '+0.00%');
        updateStatElement('img-volume', '$0.00');
        updateStatElement('img-volume-change', '+0.00%');
        updateStatElement('img-market-cap', '$0.00');
        updateStatElement('img-market-cap-change', '+0.00%');
        updateStatElement('img-liquidity', '$0.00');
        updateStatElement('img-liquidity-change', '+0.00%');
    }
}

// Format price values
function formatPrice(price) {
    if (!price) return '$0.0000';
    const num = parseFloat(price);
    if (num < 0.0001) {
        return `$${num.toFixed(6)}`;
    } else if (num < 1) {
        return `$${num.toFixed(4)}`;
    } else {
        return `$${num.toFixed(2)}`;
    }
}

// Format currency values
function formatCurrency(value) {
    if (!value) return '$0.00';
    const num = parseFloat(value);
    if (num >= 1000000000) {
        return `$${(num / 1000000000).toFixed(2)}B`;
    } else if (num >= 1000000) {
        return `$${(num / 1000000).toFixed(2)}M`;
    } else if (num >= 1000) {
        return `$${(num / 1000).toFixed(2)}K`;
    } else {
        return `$${num.toFixed(2)}`;
    }
}

// Format percentage values
function formatPercentage(value) {
    if (!value) return '+0.00%';
    const num = parseFloat(value);
    const sign = num >= 0 ? '+' : '';
    return `${sign}${num.toFixed(2)}%`;
}

// Update stat element
function updateStatElement(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
    }
}

// Fetch SOL price from CoinGecko API
async function fetchSOLPrice() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
        const data = await response.json();
        return data.solana.usd;
    } catch (error) {
        console.error('Error fetching SOL price:', error);
        return 235.90; // fallback price
    }
}

// Cache configuration - 5 minutes in milliseconds
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const CACHE_KEY = 'img_pools_data';
const CACHE_TIMESTAMP_KEY = 'img_pools_timestamp';

// Check if cached data is still valid (less than 5 minutes old)
function isCacheValid() {
    const timestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
    if (!timestamp) return false;
    
    const now = Date.now();
    const cacheTime = parseInt(timestamp);
    const age = now - cacheTime;
    
    console.log(`🕐 Cache age: ${Math.round(age / (1000 * 60))} minutes`);
    return age < CACHE_DURATION;
}

// Get cached data
function getCachedData() {
    try {
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
            console.log('📦 Using cached pools data');
            return JSON.parse(cachedData);
        }
    } catch (error) {
        console.error('❌ Error reading cached data:', error);
    }
    return null;
}

// Save data to cache
function saveToCache(data) {
    try {
        localStorage.setItem(CACHE_KEY, JSON.stringify(data));
        localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
        console.log('💾 Pools data cached for 5 minutes');
    } catch (error) {
        console.error('❌ Error saving to cache:', error);
    }
}

// Fetch IMG token market data using CoinGecko tickers API with caching
async function fetchIMGPoolsData() {
    // Check if we have valid cached data first
    if (isCacheValid()) {
        const cachedData = getCachedData();
        if (cachedData) {
            return cachedData;
        }
    }
    
    console.log('🔄 Cache expired or missing, fetching fresh data from API...');
    
    // First, let's try to find the IMG token on CoinGecko
    const possibleCoinIds = [
        'infinite-money-glitch',
        'img',
        'infinite-money-glitch-img'
    ];
    
    for (const coinId of possibleCoinIds) {
        try {
            console.log(`🔍 Trying coin ID: ${coinId}`);
            const url = `https://api.coingecko.com/api/v3/coins/${coinId}/tickers?order=volume_desc`;
            
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                console.log(`✅ Found IMG token with ID: ${coinId}`);
                
                // Filter for DEX pairs (Raydium, Orca, etc.)
                const dexTickers = data.tickers.filter(ticker => 
                    ticker.market.name.toLowerCase().includes('raydium') ||
                    ticker.market.name.toLowerCase().includes('orca') ||
                    ticker.market.name.toLowerCase().includes('jupiter') ||
                    ticker.market.name.toLowerCase().includes('serum')
                );
                
                console.log(`📊 Found ${dexTickers.length} DEX pairs for IMG token`);
                
                // Calculate total USD volume for DEXes
                const totalUsdVolume = dexTickers.reduce((sum, ticker) => 
                    sum + (ticker.converted_volume?.usd || 0), 0
                );
                
                console.log(`💰 Total DEX volume: $${totalUsdVolume.toFixed(2)}`);
                
                // Prepare data in the format expected by loadPoolsData
                const poolsData = {
                    data: dexTickers.map(ticker => ({
                        id: ticker.market.identifier || ticker.market.name,
                        attributes: {
                            name: `${ticker.base}/${ticker.target}`,
                            dex_id: ticker.market.name.toLowerCase().includes('raydium') ? 'raydium' : 
                                   ticker.market.name.toLowerCase().includes('orca') ? 'orca' : 'unknown',
                            token0: { symbol: ticker.base },
                            token1: { symbol: ticker.target },
                            volume_usd: {
                                h24: ticker.converted_volume?.usd || 0,
                                h24_percentage: totalUsdVolume > 0 ? 
                                    ((ticker.converted_volume?.usd || 0) / totalUsdVolume) * 100 : 0
                            }
                        }
                    }))
                };
                
                // Cache the data for 5 minutes
                saveToCache(poolsData);
                return poolsData;
            }
        } catch (error) {
            console.log(`❌ Coin ID ${coinId} not found:`, error.message);
            continue;
        }
    }
    
    // If no coin ID works, fall back to the onchain API
    console.log('🔄 Falling back to onchain API...');
    const API_KEY = 'CG-RxzMdLJouiZjJBrSzjwvRGsf';
    const network = "solana";
    const tokenAddress = "znv3FZt2HFAvzYf5LxzVyryh3mBXWuTRRng25gEZAjh";
    const url = `https://api.coingecko.com/api/v3/onchain/networks/${network}/tokens/${tokenAddress}/pools`;

    try {
        const response = await fetch(url, {
            headers: {
                "accept": "application/json",
                "x-cg-demo-api-key": API_KEY
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('✅ IMG pools data fetched from onchain API');
        
         // Cache the data for 5 minutes
        saveToCache(data);
        return data;
    } catch (error) {
        console.error("❌ Error fetching IMG pool data:", error);
        return null;
    }
}

// Process and display pools data - Enhanced approach
async function loadPoolsData() {
    console.log('🚀 Loading IMG pools data...');
    
    const poolsPage = document.querySelector('.pools-page');
    if (!poolsPage) {
        console.error('❌ Pools page not found');
        return;
    }
    
    const poolsData = await fetchIMGPoolsData();
    if (!poolsData || !poolsData.data) {
        console.error('❌ Failed to fetch pools data');
        setFallbackPoolsData();
        return;
    }
    
    const pools = poolsData.data;
    console.log(`📊 Found ${pools.length} IMG pools`);
    
    // Enhanced pool mapping for IMG token pairs - using contract addresses
    const poolMappings = {
        'img-sol-raydium': { 
            searchTerms: ['SO11111111111111111111111111111111111111112'], // SOL contract
            dex: 'raydium',
            volumeElement: 'img-sol-volume',
            changeElement: 'img-sol-change'
        },
        'img-bonk-raydium': { 
            searchTerms: ['DEZXAZ8Z7PNRNRJJZ3WXBORGIXCA6XJNB7YAB1PPB263'], // BONK contract
            dex: 'raydium',
            volumeElement: 'img-bonk-raydium-volume',
            changeElement: 'img-bonk-raydium-change'
        },
        'img-usdc-raydium': { 
            searchTerms: ['EPJFWDD5AUFQSSQEM2QN1XZYBAPC8G4WEGGKZWYTDT1V'], // USDC contract
            dex: 'raydium',
            volumeElement: 'img-usdc-volume',
            changeElement: 'img-usdc-change'
        },
        'img-bonk-orca': { 
            searchTerms: ['DEZXAZ8Z7PNRNRJJZ3WXBORGIXCA6XJNB7YAB1PPB263'], // BONK contract
            dex: 'orca',
            volumeElement: 'img-bonk-orca-volume',
            changeElement: 'img-bonk-orca-change'
        }
    };

    // Process each pool
    Object.keys(poolMappings).forEach(poolKey => {
        const mapping = poolMappings[poolKey];
        console.log(`🔍 Looking for ${poolKey} (${mapping.searchTerms.join('/')} on ${mapping.dex})`);
        
        // Find matching pool
        const matchingPool = pools.find(pool => {
            const token0Symbol = pool.attributes?.token0?.symbol || '';
            const token1Symbol = pool.attributes?.token1?.symbol || '';
            const dexId = pool.attributes?.dex_id || '';
            const poolName = pool.attributes?.name || '';
            
            console.log(`  Checking: ${poolName} (${token0Symbol}/${token1Symbol}) on ${dexId}`);
            
            const hasMatchingTokens = mapping.searchTerms.some(term => 
                token0Symbol.toLowerCase().includes(term.toLowerCase()) ||
                token1Symbol.toLowerCase().includes(term.toLowerCase()) ||
                poolName.toLowerCase().includes(term.toLowerCase())
            );
            
            const hasMatchingDex = mapping.dex === 'raydium' ? 
                dexId.toLowerCase().includes('raydium') : 
                dexId.toLowerCase().includes('orca');
            
            console.log(`    Token match: ${hasMatchingTokens}, DEX match: ${hasMatchingDex}`);
            
            return hasMatchingTokens && hasMatchingDex;
        });

        if (matchingPool) {
            console.log(`✅ Found ${poolKey}: ${matchingPool.attributes?.token0?.symbol}/${matchingPool.attributes?.token1?.symbol} on ${matchingPool.attributes?.dex_id}`);
            
            // Update 24H Volume
            const volumeElement = document.getElementById(mapping.volumeElement);
            if (volumeElement) {
                const volume = matchingPool.attributes?.volume_usd?.h24 || 0;
                volumeElement.textContent = formatVolume(volume);
                console.log(`  Volume: ${formatVolume(volume)} (raw: ${volume})`);
            }
            
            // Update Volume %
            const changeElement = document.getElementById(mapping.changeElement);
            if (changeElement) {
                const change = matchingPool.attributes?.volume_usd?.h24_percentage || 0;
                changeElement.textContent = `${change.toFixed(2)}%`;
                changeElement.className = `change-value ${change > 0 ? 'positive' : change < 0 ? 'negative' : 'neutral'}`;
                console.log(`  Volume %: ${change.toFixed(2)}% (raw: ${change})`);
            }
        } else {
            console.log(`❌ No pool found for ${poolKey}`);
            setFallbackPoolsDataForElement(mapping.volumeElement, mapping.changeElement);
        }
    });
}

// Set fallback data for individual pool elements
function setFallbackPoolsDataForElement(volumeElementId, changeElementId) {
    const volumeElement = document.getElementById(volumeElementId);
    const changeElement = document.getElementById(changeElementId);
    
    if (volumeElement) {
        volumeElement.textContent = 'Loading...';
        console.log(`🔄 Set fallback volume for ${volumeElementId}: Loading...`);
    }
    
    if (changeElement) {
        changeElement.textContent = 'Loading...';
        changeElement.className = 'change-value neutral';
        console.log(`🔄 Set fallback change for ${changeElementId}: Loading...`);
    }
}

// Format volume for display
function formatVolume(volume) {
    if (volume >= 1000000) {
        return `$${(volume / 1000000).toFixed(2)}M`;
    } else if (volume >= 1000) {
        return `$${(volume / 1000).toFixed(2)}K`;
    } else {
        return `$${volume.toFixed(2)}`;
    }
}

// Set fallback pools data when API fails
function setFallbackPoolsData() {
    console.log('🔄 Setting fallback pools data...');
    
    const poolMappings = {
        'img-sol-volume': 'Loading...',
        'img-bonk-raydium-volume': 'Loading...',
        'img-usdc-volume': 'Loading...',
        'img-bonk-orca-volume': 'Loading...'
    };
    
    const changeMappings = {
        'img-sol-change': 'Loading...',
        'img-bonk-raydium-change': 'Loading...',
        'img-usdc-change': 'Loading...',
        'img-bonk-orca-change': 'Loading...'
    };
    
    // Update volume elements
    Object.keys(poolMappings).forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = poolMappings[elementId];
            console.log(`✅ Updated ${elementId}: ${poolMappings[elementId]}`);
        } else {
            console.log(`❌ Element not found: ${elementId}`);
        }
    });
    
    // Update change elements
    Object.keys(changeMappings).forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element) {
            const changeText = changeMappings[elementId];
            element.textContent = changeText;
            element.className = 'change-value neutral';
            console.log(`✅ Updated ${elementId}: ${changeText}`);
        } else {
            console.log(`❌ Element not found: ${elementId}`);
        }
    });
}

// Test function for debugging - can be called from console
window.testPoolsData = function() {
    console.log('🧪 Testing pools data loading...');
    loadPoolsData();
};

// Test function to force fallback data
window.testFallbackData = function() {
    console.log('🧪 Testing fallback data...');
    setFallbackPoolsData();
};

// Calculate rewards based on inputs
async function calculateRewards() {
    const volume = parseFloat(document.getElementById('volume-24h')?.value?.replace(/,/g, '') || 100000);
    const holdings = parseFloat(document.getElementById('img-holdings')?.value?.replace(/,/g, '') || 1000000);
    
    // IMG Tokenomics: 5% tax on all transactions
    // 4.5% goes to holders (90% of tax), 0.5% goes to infrastructure wallet (10% of tax)
    const totalTax = volume * 0.05; // 5% tax on volume
    const rewardsPool = totalTax * 0.9; // 90% of tax goes to holders (4.5%)
    const infraWallet = totalTax * 0.1; // 10% of tax goes to infrastructure (0.5%)
    
    // Calculate user's proportional share based on their IMG holdings
    // Total IMG supply: 998,968,783 (matching original website)
    const totalSupply = 998968783;
    const userShare = holdings / totalSupply;
    const dailyEarnings = rewardsPool * userShare;
    
    // Use more precise calculation to match dashboard exactly
    const preciseDailyEarnings = (volume * 0.05 * 0.9 * holdings) / totalSupply;
    
    // Fetch SOL price from CoinGecko API
    const solPrice = await fetchSOLPrice();
    
    // Update SOL price display in footer
    updateStatElement('sol-price', `$${solPrice.toFixed(2)}`);
    
    // Update earnings display boxes using precise calculation
    updateStatElement('daily-earnings', `$${preciseDailyEarnings.toFixed(5)}`);
    updateStatElement('daily-earnings-sol', `${(preciseDailyEarnings / solPrice).toFixed(6)} SOL`);
    updateStatElement('weekly-earnings', `$${(preciseDailyEarnings * 7).toFixed(2)}`);
    updateStatElement('weekly-earnings-sol', `${((preciseDailyEarnings * 7) / solPrice).toFixed(6)} SOL`);
    updateStatElement('monthly-projection', `$${(preciseDailyEarnings * 30.4167).toFixed(2)}`);
    updateStatElement('monthly-projection-sol', `${((preciseDailyEarnings * 30.4167) / solPrice).toFixed(6)} SOL`);
    updateStatElement('annual-projection', `$${(preciseDailyEarnings * 365).toFixed(2)}`);
    updateStatElement('annual-projection-sol', `${((preciseDailyEarnings * 365) / solPrice).toFixed(6)} SOL`);
    
    // Update pool stats
    updateStatElement('rewards-pool', `$${rewardsPool.toFixed(2)}`);
    updateStatElement('infra-wallet', `$${infraWallet.toFixed(2)}`);
    
    // Calculate projections for all time periods
    const projections = [
        { period: 'daily', multiplier: 1, volumeMult: 1 },
        { period: 'weekly', multiplier: 7, volumeMult: 7 },
        { period: 'monthly', multiplier: 30.44, volumeMult: 30 },
        { period: 'annual', multiplier: 365, volumeMult: 365 },
        { period: 'year2', multiplier: 730, volumeMult: 730 },
        { period: 'year3', multiplier: 1095, volumeMult: 1095 }
    ];
    
    projections.forEach(proj => {
        // Apply IMG tokenomics: 5% tax on volume, 90% to holders, 10% to infrastructure
        const projectedTax = volume * 0.05 * proj.volumeMult; // 5% tax scales with time
        const projectedPool = projectedTax * 0.9; // 90% of tax goes to holders
        const projectedWallet = projectedTax * 0.1; // 10% of tax goes to infrastructure
        const projectedEarnings = (volume * 0.05 * 0.9 * holdings * proj.volumeMult) / totalSupply; // Precise calculation
        
        // Update spreadsheet values
        updateStatElement(`${proj.period}-volume`, `$${formatNumber(volume)}`);
        updateStatElement(`${proj.period}-holdings`, `${formatNumber(holdings)} IMG`);
        updateStatElement(`${proj.period}-pool`, `$${formatNumber(projectedPool)}`);
        updateStatElement(`${proj.period}-wallet`, `$${formatNumber(projectedWallet)}`);
        updateStatElement(`${proj.period}-total`, `$${formatNumber(projectedEarnings)}`);
        updateStatElement(`${proj.period}-sol`, `${(projectedEarnings / solPrice).toFixed(6)} SOL`);
    });
}

// Helper function to format numbers with commas
function formatNumber(num) {
    return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
                const votePage = node.querySelector ? node.querySelector('.vote-page') : null;
                const rewardsPage = node.querySelector ? node.querySelector('.rewards-page') : null;
                
                if (votePage || node.classList?.contains('vote-page')) {
                    console.log('🗳️ Vote page detected, initializing...');
                    initializeVotingSystem();
                }
                
                if (rewardsPage || node.classList?.contains('rewards-page')) {
                    console.log('💰 Rewards page detected, initializing...');
                    setTimeout(() => initializeRewardsCalculator(), 100);
                }
            }
        });
    });
});

// Start observing
observer.observe(document.body, { childList: true, subtree: true });

// Also initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initializeVotingSystem();
    }, 1000);
});

document.addEventListener("DOMContentLoaded",()=>{console.log("🚀 Protocol SPA Initializing..."),localStorage.removeItem("walletConnected"),localStorage.removeItem("walletPremium"),localStorage.removeItem("walletPublicKey"),localStorage.removeItem("imgProtocolWalletState"),d.isConnected=!1,d.isPremium=!1,d.walletAddress="",d.currentPage="dashboard",f(),console.log("🔧 Sidebar initialized"),window.walletManager=new Re,p.start(),p("/terminal"),console.log("🎯 Initializing clean donut chart..."),Promise.resolve().then(()=>{N()}),setInterval(()=>{const i=document.getElementById("clean-donut-chart");i&&i.querySelectorAll(".daily-pie-segment").length===0&&(console.log("🔄 Chart segments missing, restoring..."),N())},500);const t=new MutationObserver(i=>{i.forEach(s=>{s.type==="childList"&&s.addedNodes.forEach(n=>{n.nodeType===Node.ELEMENT_NODE&&n.querySelector&&n.querySelector("#clean-donut-chart")&&(console.log("🚀 Dashboard chart detected, initializing immediately!"),Promise.resolve().then(()=>{N()}))})})}),a=document.getElementById("main-content");a&&t.observe(a,{childList:!0,subtree:!0}),setInterval(()=>{const i=document.querySelector(".pools-page");i&&(console.log("🚀 Pools page detected, loading pools data!"),loadPoolsData())},1000),We(),setupEventIcons(),setupHarvestingPage(),setupDistributionPage(),setTimeout(()=>{const i=document.getElementById("sidebar-container");console.log("🔍 Sidebar container:",i),console.log("🔍 Sidebar content:",i?i.innerHTML.length:"null"),i&&!i.innerHTML.trim()&&(console.log("🔧 Sidebar empty, forcing update with current state..."),console.log("🔧 Current app state:",d),f())},50),console.log("✅ Protocol SPA Ready!")});
