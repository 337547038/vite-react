import{R as h,b as g,_ as L}from"./index-eab8b3d4.js";function D(r,o){if(r==null)return{};var l={},t=Object.keys(r),n,e;for(e=0;e<t.length;e++)n=t[e],!(o.indexOf(n)>=0)&&(l[n]=r[n]);return l}function S(r,o){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},S(r,o)}function R(r,o){r.prototype=Object.create(o.prototype),r.prototype.constructor=r,S(r,o)}function M(r,o){return r.classList?!!o&&r.classList.contains(o):(" "+(r.className.baseVal||r.className)+" ").indexOf(" "+o+" ")!==-1}function P(r,o){r.classList?r.classList.add(o):M(r,o)||(typeof r.className=="string"?r.className=r.className+" "+o:r.setAttribute("class",(r.className&&r.className.baseVal||"")+" "+o))}function O(r,o){return r.replace(new RegExp("(^|\\s)"+o+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function y(r,o){r.classList?r.classList.remove(o):typeof r.className=="string"?r.className=O(r.className,o):r.setAttribute("class",O(r.className&&r.className.baseVal||"",o))}const _={disabled:!1},k=h.createContext(null);var A=function(o){return o.scrollTop},C="unmounted",E="exited",v="entering",m="entered",T="exiting",c=function(r){R(o,r);function o(t,n){var e;e=r.call(this,t,n)||this;var i=n,s=i&&!i.isMounting?t.enter:t.appear,a;return e.appearStatus=null,t.in?s?(a=E,e.appearStatus=v):a=m:t.unmountOnExit||t.mountOnEnter?a=C:a=E,e.state={status:a},e.nextCallback=null,e}o.getDerivedStateFromProps=function(n,e){var i=n.in;return i&&e.status===C?{status:E}:null};var l=o.prototype;return l.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},l.componentDidUpdate=function(n){var e=null;if(n!==this.props){var i=this.state.status;this.props.in?i!==v&&i!==m&&(e=v):(i===v||i===m)&&(e=T)}this.updateStatus(!1,e)},l.componentWillUnmount=function(){this.cancelNextCallback()},l.getTimeouts=function(){var n=this.props.timeout,e,i,s;return e=i=s=n,n!=null&&typeof n!="number"&&(e=n.exit,i=n.enter,s=n.appear!==void 0?n.appear:i),{exit:e,enter:i,appear:s}},l.updateStatus=function(n,e){if(n===void 0&&(n=!1),e!==null)if(this.cancelNextCallback(),e===v){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:g.findDOMNode(this);i&&A(i)}this.performEnter(n)}else this.performExit();else this.props.unmountOnExit&&this.state.status===E&&this.setState({status:C})},l.performEnter=function(n){var e=this,i=this.props.enter,s=this.context?this.context.isMounting:n,a=this.props.nodeRef?[s]:[g.findDOMNode(this),s],p=a[0],u=a[1],f=this.getTimeouts(),d=s?f.appear:f.enter;if(!n&&!i||_.disabled){this.safeSetState({status:m},function(){e.props.onEntered(p)});return}this.props.onEnter(p,u),this.safeSetState({status:v},function(){e.props.onEntering(p,u),e.onTransitionEnd(d,function(){e.safeSetState({status:m},function(){e.props.onEntered(p,u)})})})},l.performExit=function(){var n=this,e=this.props.exit,i=this.getTimeouts(),s=this.props.nodeRef?void 0:g.findDOMNode(this);if(!e||_.disabled){this.safeSetState({status:E},function(){n.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:T},function(){n.props.onExiting(s),n.onTransitionEnd(i.exit,function(){n.safeSetState({status:E},function(){n.props.onExited(s)})})})},l.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},l.safeSetState=function(n,e){e=this.setNextCallback(e),this.setState(n,e)},l.setNextCallback=function(n){var e=this,i=!0;return this.nextCallback=function(s){i&&(i=!1,e.nextCallback=null,n(s))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},l.onTransitionEnd=function(n,e){this.setNextCallback(e);var i=this.props.nodeRef?this.props.nodeRef.current:g.findDOMNode(this),s=n==null&&!this.props.addEndListener;if(!i||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],p=a[0],u=a[1];this.props.addEndListener(p,u)}n!=null&&setTimeout(this.nextCallback,n)},l.render=function(){var n=this.state.status;if(n===C)return null;var e=this.props,i=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var s=D(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return h.createElement(k.Provider,{value:null},typeof i=="function"?i(n,s):h.cloneElement(h.Children.only(i),s))},o}(h.Component);c.contextType=k;c.propTypes={};function x(){}c.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:x,onEntering:x,onEntered:x,onExit:x,onExiting:x,onExited:x};c.UNMOUNTED=C;c.EXITED=E;c.ENTERING=v;c.ENTERED=m;c.EXITING=T;const I=c;var U=function(o,l){return o&&l&&l.split(" ").forEach(function(t){return P(o,t)})},N=function(o,l){return o&&l&&l.split(" ").forEach(function(t){return y(o,t)})},b=function(r){R(o,r);function o(){for(var t,n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];return t=r.call.apply(r,[this].concat(e))||this,t.appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(s,a){var p=t.resolveArguments(s,a),u=p[0],f=p[1];t.removeClasses(u,"exit"),t.addClass(u,f?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(s,a)},t.onEntering=function(s,a){var p=t.resolveArguments(s,a),u=p[0],f=p[1],d=f?"appear":"enter";t.addClass(u,d,"active"),t.props.onEntering&&t.props.onEntering(s,a)},t.onEntered=function(s,a){var p=t.resolveArguments(s,a),u=p[0],f=p[1],d=f?"appear":"enter";t.removeClasses(u,d),t.addClass(u,d,"done"),t.props.onEntered&&t.props.onEntered(s,a)},t.onExit=function(s){var a=t.resolveArguments(s),p=a[0];t.removeClasses(p,"appear"),t.removeClasses(p,"enter"),t.addClass(p,"exit","base"),t.props.onExit&&t.props.onExit(s)},t.onExiting=function(s){var a=t.resolveArguments(s),p=a[0];t.addClass(p,"exit","active"),t.props.onExiting&&t.props.onExiting(s)},t.onExited=function(s){var a=t.resolveArguments(s),p=a[0];t.removeClasses(p,"exit"),t.addClass(p,"exit","done"),t.props.onExited&&t.props.onExited(s)},t.resolveArguments=function(s,a){return t.props.nodeRef?[t.props.nodeRef.current,s]:[s,a]},t.getClassNames=function(s){var a=t.props.classNames,p=typeof a=="string",u=p&&a?a+"-":"",f=p?""+u+s:a[s],d=p?f+"-active":a[s+"Active"],$=p?f+"-done":a[s+"Done"];return{baseClassName:f,activeClassName:d,doneClassName:$}},t}var l=o.prototype;return l.addClass=function(n,e,i){var s=this.getClassNames(e)[i+"ClassName"],a=this.getClassNames("enter"),p=a.doneClassName;e==="appear"&&i==="done"&&p&&(s+=" "+p),i==="active"&&n&&A(n),s&&(this.appliedClasses[e][i]=s,U(n,s))},l.removeClasses=function(n,e){var i=this.appliedClasses[e],s=i.base,a=i.active,p=i.done;this.appliedClasses[e]={},s&&N(n,s),a&&N(n,a),p&&N(n,p)},l.render=function(){var n=this.props;n.classNames;var e=D(n,["classNames"]);return h.createElement(I,L({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},o}(h.Component);b.defaultProps={classNames:""};b.propTypes={};const j=b;export{j as C};
