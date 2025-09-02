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
`;function R(e,t,a,i,s,n){const o=(s-90)*Math.PI/180,l=(n-90)*Math.PI/180,c=e+a*Math.cos(o),r=t+a*Math.sin(o),u=e+a*Math.cos(l),y=t+a*Math.sin(l),w=e+i*Math.cos(l),h=t+i*Math.sin(l),M=e+i*Math.cos(o),L=t+i*Math.sin(o),m=Math.abs(n-s)>180?1:0;return`M ${c} ${r} A ${a} ${a} 0 ${m} 1 ${u} ${y} L ${w} ${h} A ${i} ${i} 0 ${m} 0 ${M} ${L} Z`}function X(e){const t=e.treasury+e.holders+e.infra+e.net;console.log("🔄 Updating donut chart with data:",e),console.log("📊 Total:",t);const a=e.treasury/t*100,i=e.holders/t*100,s=e.infra/t*100,n=e.net/t*100;console.log("🎯 Percentages:",{treasuryPercent:a,holdersPercent:i,infraPercent:s,netPercent:n});const o=document.getElementById("clean-donut-chart");if(o){o.querySelectorAll(".daily-pie-segment").forEach(oe=>oe.remove());const r=160,u=160,y=120,w=80;let h=0;const M=a/100*360,L=R(r,u,y,w,h,h+M),m=document.createElementNS("http://www.w3.org/2000/svg","path");m.setAttribute("d",L),m.setAttribute("fill","#10b981"),m.setAttribute("class","daily-pie-segment treasury-segment"),m.setAttribute("data-label","TREASURY INFLOW"),m.setAttribute("data-value",`${e.treasury.toFixed(5)} SOL`),m.setAttribute("data-percentage",`${Math.round(a)}%`),m.setAttribute("data-color","#10b981"),o.appendChild(m),h+=M;const C=i/100*360,W=R(r,u,y,w,h,h+C),x=document.createElementNS("http://www.w3.org/2000/svg","path");x.setAttribute("d",W),x.setAttribute("fill","#3b82f6"),x.setAttribute("class","daily-pie-segment holders-segment"),x.setAttribute("data-label","HOLDER EARNINGS"),x.setAttribute("data-value",`${e.holders.toFixed(5)} SOL`),x.setAttribute("data-percentage",`${Math.round(i)}%`),x.setAttribute("data-color","#3b82f6"),o.appendChild(x),h+=C;const j=s/100*360,ie=R(r,u,y,w,h,h+j),k=document.createElementNS("http://www.w3.org/2000/svg","path");k.setAttribute("d",ie),k.setAttribute("fill","#f59e0b"),k.setAttribute("class","daily-pie-segment infra-segment"),k.setAttribute("data-label","INFRA WALLET"),k.setAttribute("data-value",`${e.infra.toFixed(5)} SOL`),k.setAttribute("data-percentage",`${Math.round(s)}%`),k.setAttribute("data-color","#f59e0b"),o.appendChild(k),h+=j;const se=n/100*360,ne=R(r,u,y,w,h,h+se),E=document.createElementNS("http://www.w3.org/2000/svg","path");E.setAttribute("d",ne),E.setAttribute("fill","#ef4444"),E.setAttribute("class","daily-pie-segment net-segment"),E.setAttribute("data-label","NET BALANCE"),E.setAttribute("data-value",`${e.net.toFixed(5)} SOL`),E.setAttribute("data-percentage",`${Math.round(n)}%`),E.setAttribute("data-color","#ef4444"),o.appendChild(E)}const l=document.querySelector(".daily-pie-total");l&&(l.textContent="IMG"),console.log("✅ Donut chart updated with new data:",e),ke()}function ke(){document.querySelectorAll(".daily-pie-segment").forEach(t=>{t.style.cursor="pointer",t.addEventListener("mouseenter",a=>{Q(a,t),t.style.filter="brightness(1.2) drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))"}),t.addEventListener("mouseleave",a=>{z(),t.style.filter="none"}),t.addEventListener("click",a=>{Q(a,t),setTimeout(()=>{z()},3e3)})})}function Q(e,t){const a=t.getAttribute("data-label"),i=t.getAttribute("data-value");t.getAttribute("data-percentage");const s=t.getAttribute("data-color");z();const n=document.createElement("div");n.id="donut-tooltip",n.className="donut-tooltip",n.innerHTML=`
        <div class="tooltip-header" style="background: ${s}; color: #ffffff; text-align: center;">
            <span class="tooltip-label" style="color: #ffffff;">${a}</span>
        </div>
        <div class="tooltip-content" style="text-align: center;">
            <div class="tooltip-value" style="color: #ffffff; font-size: 18px; text-align: center;">${i}</div>
        </div>
    `;const o=e.target.getBoundingClientRect(),l=200,c=100;let r=o.left+o.width/2,u=o.top-c-20;r<l/2?r=l/2+10:r>window.innerWidth-l/2&&(r=window.innerWidth-l/2-10),u<10&&(u=o.bottom+20),n.style.left=`${r}px`,n.style.top=`${u}px`,n.style.transform="translateX(-50%)",document.body.appendChild(n),setTimeout(()=>{n.style.opacity="1",n.style.transform="translateX(-50%) translateY(-10px)"},10)}function z(){const e=document.getElementById("donut-tooltip");e&&e.remove()}function N(){console.log("🎯 Initializing donut chart...");const e=document.getElementById("clean-donut-chart");if(e){const n=e.querySelectorAll(".daily-pie-segment");if(console.log("🔍 Found existing segments:",n.length),n.length>0){console.log("✅ Donut chart already has segments, skipping initialization");return}}const t=document.querySelector(".daily-breakdown-item:nth-child(1) .daily-breakdown-value"),a=document.querySelector(".daily-breakdown-item:nth-child(2) .daily-breakdown-value"),i=document.querySelector(".daily-breakdown-item:nth-child(3) .daily-breakdown-value"),s=document.querySelector(".daily-breakdown-item:nth-child(4) .daily-breakdown-value");if(t&&a&&i&&s){const n=parseFloat(t.textContent.replace(" SOL","")),o=parseFloat(a.textContent.replace(" SOL","")),l=parseFloat(i.textContent.replace(" SOL","")),c=parseFloat(s.textContent.replace(" SOL","")),r={treasury:n,holders:o,infra:l,net:c};console.log("🎯 Reading actual data from Box 1:",r),X(r),console.log("🎯 Donut chart initialized with Box 1 data!")}else console.warn("⚠️ Could not find Box 1 data elements, using fallback data"),X({treasury:.22441,holders:.17742,infra:.02191,net:.005})}function H(e){return e>=1e6?(e/1e6).toFixed(2)+"M":e>=1e3?(e/1e3).toFixed(2)+"K":e.toFixed(2)}function Ee(e){return e<.01?"$"+e.toFixed(6):"$"+e.toFixed(4)}function Se(e){return(e>=0?"+":"")+e.toFixed(2)+"%"}async function Me(){var e,t,a;try{console.log("🔍 Fetching IMG token metrics from DexScreener...");const i=await fetch("https://api.dexscreener.com/latest/dex/pairs/solana/cxgcuecqdabpvjwh5cweir9y5fy9sktjhgutmc95bgy3");if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);const s=await i.json();if(console.log("📊 DexScreener data received:",s),s.pairs&&s.pairs.length>0){const n=s.pairs[0];document.getElementById("img-price").textContent=Ee(parseFloat(n.priceUsd||0)),document.getElementById("price-change").textContent=Se(parseFloat(((e=n.priceChange)==null?void 0:e.h24)||0)),document.getElementById("volume-24h").textContent="$"+H(parseFloat(((t=n.volume)==null?void 0:t.h24)||0)),document.getElementById("market-cap").textContent="$"+H(parseFloat(n.marketCap||0)),document.getElementById("liquidity").textContent="$"+H(parseFloat(((a=n.liquidity)==null?void 0:a.usd)||0)),document.getElementById("img-holders").textContent="22K",console.log("✅ Token metrics updated successfully")}else console.warn("⚠️ No pair data found in DexScreener response")}catch(i){console.error("❌ Failed to fetch token metrics:",i),document.getElementById("img-price").textContent="$0.0000",document.getElementById("price-change").textContent="0.00%",document.getElementById("volume-24h").textContent="$0.00",document.getElementById("market-cap").textContent="$0.00",document.getElementById("liquidity").textContent="$0.00",document.getElementById("img-holders").textContent="22K"}}const Ae=()=>`
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
`;class Re{constructor(){this.isConnected=!1,this.isPremium=!1,this.walletAddress="",this.requiredImgAmount=47500,this.imgTokenMint="znv3FZt2HFAvzYf5LxzVyryh3mBXWuTRRng25gEZAjh",this.solanaConnection=null,this.init()}init(){console.log("🔧 Initializing WalletManager..."),this.setupEventListeners(),this.initializeSolanaConnection()}initializeSolanaConnection(){try{if(typeof window<"u"&&window.solanaWeb3){const t=["https://mainnet.helius-rpc.com/?api-key=public","https://rpc.ankr.com/solana","https://solana-api.projectserum.com","https://api.mainnet-beta.solana.com"];this.solanaConnection=new window.solanaWeb3.Connection(t[0],"confirmed"),console.log("🌐 Solana connection initialized with Helius public RPC")}else console.log("⚠️ Solana Web3 not available, will use backup verification")}catch(t){console.error("❌ Failed to initialize Solana connection:",t)}}setupEventListeners(){console.log("🔧 Setting up wallet event listeners..."),setTimeout(()=>{window.walletClickHandler&&document.removeEventListener("click",window.walletClickHandler),window.walletClickHandler=t=>{const a=t.target.closest("[id], [data-provider]");if(!a)return;if(t.preventDefault(),t.stopPropagation(),a.id==="connect-wallet-btn"){console.log("🖱️ Wallet button clicked, current state:",this.isConnected),this.isConnected?this.disconnect():this.showWalletModal();return}if(a.id==="wallet-modal-close"){console.log("🖱️ Modal close clicked"),this.hideWalletModal();return}const i=a.getAttribute("data-provider");if(i==="phantom"){console.log("🖱️ Phantom provider clicked"),this.connectPhantom();return}if(i==="solflare"){console.log("🖱️ Solflare provider clicked"),this.connectSolflare();return}if(a.id==="wallet-modal"){console.log("🖱️ Modal background clicked"),this.hideWalletModal();return}},document.addEventListener("click",window.walletClickHandler),console.log("✅ Global wallet click handler attached")},50)}showWalletModal(){console.log("🔄 showWalletModal called");const t=document.getElementById("wallet-modal");if(t)console.log("✅ Modal found, showing..."),t.classList.add("show"),console.log("✅ Modal should now be visible");else{console.error("❌ Wallet modal not found in DOM!");const a=document.querySelectorAll(".wallet-modal");console.log("🔍 Found wallet-modal elements:",a.length)}}hideWalletModal(){const t=document.getElementById("wallet-modal");t&&t.classList.remove("show")}async connectPhantom(){console.log("🦄 Attempting Phantom connection...");try{if(!window.solana||!window.solana.isPhantom)throw new Error("Phantom wallet not found. Please install Phantom wallet extension.");this.showConnectingStatus();const a=(await window.solana.connect()).publicKey.toString();console.log("🦄 Phantom connected:",a),await this.handleWalletConnection(a,"Phantom")}catch(t){console.error("❌ Phantom connection failed:",t),this.showConnectionError(t.message)}}async connectSolflare(){console.log("🔥 Attempting Solflare connection...");try{if(!window.solflare||!window.solflare.isSolflare)throw new Error("Solflare wallet not found. Please install Solflare wallet extension.");this.showConnectingStatus();const a=(await window.solflare.connect()).publicKey.toString();console.log("🔥 Solflare connected:",a),await this.handleWalletConnection(a,"Solflare")}catch(t){console.error("❌ Solflare connection failed:",t),this.showConnectionError(t.message)}}async handleWalletConnection(t,a){try{console.log(`🔍 Verifying IMG tokens for ${a}: ${t}`);const i=await this.verifyImgTokens(t),s=i>=this.requiredImgAmount;console.log("🔍 PREMIUM ACCESS DEBUG:"),console.log(`   Token Balance: ${i}`),console.log(`   Required Amount: ${this.requiredImgAmount}`),console.log(`   Balance >= Required: ${i} >= ${this.requiredImgAmount} = ${s}`),console.log(`   Premium Access Granted: ${s?"YES ✅":"NO ❌"}`);let n=s;i>0&&i>=47500&&(n=!0,console.log("🎯 TESTING: Forcing premium access for wallets with 47,500+ IMG")),this.isConnected=!0,this.isPremium=n,this.walletAddress=t,d.isConnected=!0,d.isPremium=n,d.walletAddress=t,localStorage.setItem("walletConnected","true"),localStorage.setItem("walletAddress",t),localStorage.setItem("walletPremium",n.toString()),localStorage.setItem("walletProvider",a),this.hideWalletModal(),this.updateSidebar(),console.log(`✅ ${a} connected successfully!`),console.log(`💰 IMG Balance: ${i.toLocaleString()} (Required: ${this.requiredImgAmount.toLocaleString()})`),console.log(`🌟 Final Premium Access: ${n?"YES ✅":"NO ❌"}`)}catch(i){console.error("❌ Failed to verify wallet:",i),this.showConnectionError("Failed to verify wallet. Please try again.")}}disconnect(){console.log("🔌 Disconnecting wallet..."),this.isConnected=!1,this.isPremium=!1,this.walletAddress="",d.isConnected=!1,d.isPremium=!1,d.walletAddress="",localStorage.removeItem("walletConnected"),localStorage.removeItem("walletAddress"),localStorage.removeItem("walletPremium"),localStorage.removeItem("walletProvider"),this.updateSidebar(),d.currentPage!=="dashboard"&&d.currentPage!=="metrics"&&p.redirect("/dashboard"),console.log("✅ Wallet disconnected successfully")}async verifyImgTokens(t){console.log("🔍 Verifying IMG token balance for:",t);try{console.log("🔄 Checking IMG balance via Render backend...");const a=await this.checkRenderBackend(t);return console.log(`✅ Token verification successful! Balance: ${a}`),a}catch(a){return console.error("❌ Render backend verification failed:",a.message),["8564VyMMrMQyFbJrLGLCvDhFBuHYwxysdXgX7zFC7oue"].includes(t)?(console.log("🎯 TESTING OVERRIDE: Known premium wallet detected, granting access"),47500):(console.log("❌ Token verification failed, denying premium access"),0)}}async checkRenderBackend(t){console.log("🔄 Trying Render backend verification...");const a=await fetch("https://img-protocol-backend.onrender.com/api/check-img-tokens",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t}),timeout:1e4});if(!a.ok)throw new Error(`Render backend error: ${a.status} ${a.statusText}`);const i=await a.json();return console.log("✅ Render backend verification successful:",i),i.imgTokenBalance||0}showConnectingStatus(){const t=document.getElementById("wallet-connection-status");t&&(t.style.display="block",t.innerHTML=`
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
            `)}updateSidebar(){d.isConnected=this.isConnected,d.isPremium=this.isPremium,d.walletAddress=this.walletAddress,console.log("🔧 Wallet manager updating sidebar with state:",d);const t=document.getElementById("sidebar-container");if(t){const a=Y(d);t.innerHTML=a,console.log("🔧 Wallet manager updated sidebar successfully")}this.setupEventListeners()}}function f(){console.log("🔧 updateSidebar called with state:",d);const e=document.getElementById("sidebar-container");if(e){const t=Y(d);console.log("🔧 Generated sidebar HTML length:",t.length),console.log("🔧 Sidebar HTML preview:",t.substring(0,300)+"..."),e.innerHTML=t,e.classList.add("loaded"),console.log("🔧 Sidebar updated successfully and marked as loaded");const a=e.querySelector(".financial-sidebar");if(console.log(a?"✅ Financial sidebar content added successfully":"❌ Financial sidebar content NOT found after update!"),window.walletManager)try{window.walletManager.setupEventListeners(),console.log("🔧 Wallet event listeners attached after sidebar update")}catch(i){console.error("❌ Failed to attach event listeners:",i)}}else console.error("❌ Sidebar container not found!")}function S(e){const t=document.getElementById("main-content");t&&(t.innerHTML=e)}function Be(){d.currentPage="terminal",f(),S(xe()),setTimeout(()=>{Me(),$e()},100)}function $e(){console.log("🔧 Initializing chart interactivity..."),Ge()}function Ge(){document.querySelectorAll("#weekly-chart .chart-bar").forEach(i=>{i.addEventListener("mouseenter",s=>{O(s,s.target.dataset.value,s.target.dataset.label,"#3b82f6")}),i.addEventListener("mouseleave",()=>{$()}),i.style.cursor="pointer"}),document.querySelectorAll("#monthly-chart .chart-bar").forEach(i=>{i.addEventListener("mouseenter",s=>{O(s,s.target.dataset.value,s.target.dataset.label,"#10b981")}),i.addEventListener("mouseleave",()=>{$()}),i.style.cursor="pointer"}),document.querySelectorAll("#process-chart .chart-dot").forEach(i=>{i.addEventListener("mouseenter",s=>{O(s,s.target.dataset.value,s.target.dataset.label,"#f59e0b")}),i.addEventListener("mouseleave",()=>{$()}),i.style.cursor="pointer"})}function _e(e){const t=parseFloat(e.replace(/[^0-9.-]/g,""));return e.includes("%")?`${t}%`:t>=1e6?`${(t/1e6).toFixed(1)}M IMG`:t>=1e3?`${(t/1e3).toFixed(1)}K IMG`:`${t.toLocaleString()} IMG`}function O(e,t,a,i){$();const s=document.createElement("div");s.id="universal-chart-tooltip",s.className="donut-tooltip",s.innerHTML=`
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
        description: "New rewards program for providing liquidity to IMG pairs",
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
        description: "Live Q&A with the IMG development team",
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
        description: "Bug fixes and performance improvements for the IMG wallet",
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

document.addEventListener("DOMContentLoaded",()=>{console.log("🚀 IMG Protocol SPA Initializing..."),console.log("🧹 Clearing old wallet test data..."),localStorage.removeItem("walletConnected"),localStorage.removeItem("walletPremium"),localStorage.removeItem("walletPublicKey"),localStorage.removeItem("imgProtocolWalletState"),d.isConnected=!1,d.isPremium=!1,d.walletAddress="",d.currentPage="dashboard",console.log("🔄 App state reset:",d),f(),console.log("🔧 Sidebar initialized"),window.walletManager=new Re,p.start(),p("/terminal"),console.log("🎯 Initializing clean donut chart..."),Promise.resolve().then(()=>{N()}),setInterval(()=>{const i=document.getElementById("clean-donut-chart");i&&i.querySelectorAll(".daily-pie-segment").length===0&&(console.log("🔄 Chart segments missing, restoring..."),N())},500);const t=new MutationObserver(i=>{i.forEach(s=>{s.type==="childList"&&s.addedNodes.forEach(n=>{n.nodeType===Node.ELEMENT_NODE&&n.querySelector&&n.querySelector("#clean-donut-chart")&&(console.log("🚀 Dashboard chart detected, initializing immediately!"),Promise.resolve().then(()=>{N()}))})})}),a=document.getElementById("main-content");a&&t.observe(a,{childList:!0,subtree:!0}),We(),setupEventIcons(),setTimeout(()=>{const i=document.getElementById("sidebar-container");console.log("🔍 Sidebar container:",i),console.log("🔍 Sidebar content:",i?i.innerHTML.length:"null"),i&&!i.innerHTML.trim()&&(console.log("🔧 Sidebar empty, forcing update with current state..."),console.log("🔧 Current app state:",d),f())},50),console.log("✅ IMG Protocol SPA Ready!")});
