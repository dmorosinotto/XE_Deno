"use strict";(self.webpackChunkngnew_latest=self.webpackChunkngnew_latest||[]).push([[944],{944:(ie,y,c)=>{c.r(y),c.d(y,{default:()=>f});var i=c(256),l=c(895),v=c(751),w=c(576);function C(e){return!!e&&(e instanceof v.y||(0,w.m)(e.lift)&&(0,w.m)(e.subscribe))}var T=c(121),L=c(76),M=c(579);const S={now:()=>(S.delegate||Date).now(),delegate:void 0};class D extends M.x{constructor(t=1/0,n=1/0,r=S){super(),this._bufferSize=t,this._windowTime=n,this._timestampProvider=r,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=n===1/0,this._bufferSize=Math.max(1,t),this._windowTime=Math.max(1,n)}next(t){const{isStopped:n,_buffer:r,_infiniteTimeWindow:u,_timestampProvider:o,_windowTime:s}=this;n||(r.push(t),!u&&r.push(o.now()+s)),this._trimBuffer(),super.next(t)}_subscribe(t){this._throwIfClosed(),this._trimBuffer();const n=this._innerSubscribe(t),{_infiniteTimeWindow:r,_buffer:u}=this,o=u.slice();for(let s=0;s<o.length&&!t.closed;s+=r?1:2)t.next(o[s]);return this._checkFinalizedStatuses(t),n}_trimBuffer(){const{_bufferSize:t,_timestampProvider:n,_buffer:r,_infiniteTimeWindow:u}=this,o=(u?1:2)*t;if(t<1/0&&o<r.length&&r.splice(0,r.length-o),!u){const s=n.now();let a=0;for(let p=1;p<r.length&&r[p]<=s;p+=2)a=p;a&&r.splice(0,a+1)}}}var O=c(635),V=c(727),F=c(671),P=c(482),m=c(403);function g(e,t=F.y){return e=e??E,(0,P.e)((n,r)=>{let u,o=!0;n.subscribe((0,m.x)(r,s=>{const a=t(s);(o||!e(u,a))&&(o=!1,u=a,r.next(s))}))})}function E(e,t){return e===t}var A=c(505),H=c(900);let h=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=i.Yz7({token:e,factory:function(){return function U(e){return e instanceof i.R0b}((0,i.f3M)(i.R0b))?new j:(0,i.f3M)($)},providedIn:"root"}),e})(),$=(()=>{class e extends h{constructor(n){super(),this.appRef=n,this.isScheduled=!1}schedule(){this.isScheduled||(this.isScheduled=!0,requestAnimationFrame(()=>{this.appRef.tick(),this.isScheduled=!1}))}}return e.\u0275fac=function(n){return new(n||e)(i.LFG(i.z2F))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();class j extends h{schedule(){}}let x=(()=>{class e{constructor(n,r){this.cdRef=n,this.tickScheduler=r}schedule(){this.cdRef.markForCheck(),this.tickScheduler.schedule()}}return e.\u0275fac=function(n){return new(n||e)(i.LFG(i.sBO),i.LFG(h))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac}),e})();function N(e){const t=function I(e){return t=>e[t.type]?.(t)}(e),n=new D(1);return{nextPotentialObservable(r){n.next(r)},handlePotentialObservableChanges:()=>n.pipe(g(),function W(){return(0,O.z)((0,H.w)(e=>{const t=function k(e){return C(e)?e:function B(e){return function Z(e){return!!e&&"object"==typeof e&&!Array.isArray(e)}(e)&&Object.keys(e).length>0&&Object.values(e).every(C)}(e)?(0,T.a)(function Y(e){return Object.keys(e).reduce((t,n)=>({...t,[n]:e[n].pipe(g())}),{})}(e)):function z(e){return"function"==typeof e?.then}(e)?(0,L.D)(e):new v.y(t=>{t.next(e)})}(e);let n=!0,r=!0;return new v.y(u=>{const o=t.subscribe({next(s){u.next({type:"next",value:s,reset:n,synchronous:r}),n=!1},error(s){u.next({type:"error",error:s,reset:n,synchronous:r}),n=!1},complete(){u.next({type:"complete",reset:n,synchronous:r}),n=!1}});return n&&(u.next({type:"suspense",reset:n,synchronous:!0}),n=!1),r=!1,o})}))}(),g(J),(0,A.b)(t))}}function J(e,t){return e.type===t.type&&e.reset===t.reset&&("next"===t.type?e.value===t.value:"error"!==t.type||e.error===t.error)}let G=(()=>{class e{constructor(n,r,u,o){this.mainTemplateRef=n,this.viewContainerRef=r,this.errorHandler=u,this.renderScheduler=o,this.isMainViewCreated=!1,this.isSuspenseViewCreated=!1,this.viewContext={$implicit:void 0,ngrxLet:void 0,error:void 0,complete:!1},this.renderEventManager=N({suspense:()=>{this.viewContext.$implicit=void 0,this.viewContext.ngrxLet=void 0,this.viewContext.error=void 0,this.viewContext.complete=!1,this.renderSuspenseView()},next:s=>{this.viewContext.$implicit=s.value,this.viewContext.ngrxLet=s.value,s.reset&&(this.viewContext.error=void 0,this.viewContext.complete=!1),this.renderMainView(s.synchronous)},error:s=>{this.viewContext.error=s.error,s.reset&&(this.viewContext.$implicit=void 0,this.viewContext.ngrxLet=void 0,this.viewContext.complete=!1),this.renderMainView(s.synchronous),this.errorHandler.handleError(s.error)},complete:s=>{this.viewContext.complete=!0,s.reset&&(this.viewContext.$implicit=void 0,this.viewContext.ngrxLet=void 0,this.viewContext.error=void 0),this.renderMainView(s.synchronous)}}),this.subscription=new V.w0}set ngrxLet(n){this.renderEventManager.nextPotentialObservable(n)}static ngTemplateContextGuard(n,r){return!0}ngOnInit(){this.subscription.add(this.renderEventManager.handlePotentialObservableChanges().subscribe())}ngOnDestroy(){this.subscription.unsubscribe()}renderMainView(n){this.isSuspenseViewCreated&&(this.isSuspenseViewCreated=!1,this.viewContainerRef.clear()),this.isMainViewCreated||(this.isMainViewCreated=!0,this.viewContainerRef.createEmbeddedView(this.mainTemplateRef,this.viewContext)),n||this.renderScheduler.schedule()}renderSuspenseView(){this.isMainViewCreated&&(this.isMainViewCreated=!1,this.viewContainerRef.clear()),this.suspenseTemplateRef&&!this.isSuspenseViewCreated&&(this.isSuspenseViewCreated=!0,this.viewContainerRef.createEmbeddedView(this.suspenseTemplateRef))}}return e.\u0275fac=function(n){return new(n||e)(i.Y36(i.Rgc),i.Y36(i.s_b),i.Y36(i.qLn),i.Y36(x))},e.\u0275dir=i.lG2({type:e,selectors:[["","ngrxLet",""]],inputs:{ngrxLet:"ngrxLet",suspenseTemplateRef:["ngrxLetSuspenseTpl","suspenseTemplateRef"]},features:[i._Bn([x])]}),e})(),Q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({}),e})();var K=c(529);class d{constructor(){this.http=(0,i.f3M)(K.eN)}apiUrl(t){let n="/api";return n.endsWith("/")&&t.startsWith("/")?n+t.substring(1):n.endsWith("/")||t.startsWith("/")?n+t:n+"/"+t}getAll(){return this.http.get(this.apiUrl("/users"))}getOne(t){return this.http.get(this.apiUrl(`/user/${t}`))}delBy(t){return this.http.post(this.apiUrl("/users/kill"),t)}}d.\u0275fac=function(t){return new(t||d)},d.\u0275prov=i.Yz7({token:d,factory:d.\u0275fac});var _=c(4),b=c(421);function R(e,t){return t?n=>n.pipe(R((r,u)=>(0,b.Xf)(e(r,u)).pipe((0,_.U)((o,s)=>t(r,o,u,s))))):(0,P.e)((n,r)=>{let u=0,o=null,s=!1;n.subscribe((0,m.x)(r,a=>{o||(o=(0,m.x)(r,void 0,()=>{o=null,s&&r.complete()}),(0,b.Xf)(e(a,u++)).subscribe(o))},()=>{s=!0,!o&&r.complete()}))})}function q(e,t){if(1&e){const n=i.EpF();i.TgZ(0,"article")(1,"pre"),i._uU(2),i.ALo(3,"json"),i.qZA(),i.TgZ(4,"button",0),i.NdJ("click",function(){const o=i.CHM(n).$implicit,s=i.oxw(2);return i.KtG(s.delByCap(o.cap))}),i._uU(5,"DELETE"),i.qZA()()}if(2&e){const n=t.$implicit;i.xp6(2),i.Oqu(i.lcZ(3,1,n))}}function ee(e,t){if(1&e&&(i.TgZ(0,"h4"),i._uU(1),i.ALo(2,"json"),i.qZA()),2&e){const n=i.oxw().error;i.xp6(1),i.hij("ERROR: ",i.lcZ(2,1,n),"")}}function te(e,t){if(1&e&&(i.ynx(0),i.YNc(1,q,6,3,"article",3),i.YNc(2,ee,3,3,"h4",4),i.BQk()),2&e){const n=t.ngrxLet,r=t.error;i.xp6(1),i.Q6J("ngForOf",n),i.xp6(1),i.Q6J("ngIf",r)}}function ne(e,t){1&e&&i._uU(0," Loading ... ")}class f{constructor(){this.userService=(0,i.f3M)(d),this.load$=new M.x,this.user$=this.load$.pipe(R(()=>this.userService.getAll()))}delByCap(t){this.userService.delBy({cap:t}).subscribe({next:n=>console.log(n),error:n=>alert(JSON.stringify(n)),complete:()=>this.load$.next(!0)})}get now(){return console.count("now"),new Date}}f.\u0275fac=function(t){return new(t||f)},f.\u0275cmp=i.Xpm({type:f,selectors:[["app-users-page"]],standalone:!0,features:[i._Bn([d]),i.jDz],decls:8,vars:6,consts:[[3,"click"],[4,"ngrxLet","ngrxLetSuspenseTpl"],["loading",""],[4,"ngFor","ngForOf"],[4,"ngIf"]],template:function(t,n){if(1&t&&(i.TgZ(0,"p"),i._uU(1),i.ALo(2,"date"),i.qZA(),i.TgZ(3,"button",0),i.NdJ("click",function(){return n.load$.next(!0)}),i._uU(4,"LOAD"),i.qZA(),i.YNc(5,te,3,2,"ng-container",1),i.YNc(6,ne,1,0,"ng-template",null,2,i.W1O)),2&t){const r=i.MAs(7);i.xp6(1),i.hij("home-page works ",i.xi3(2,3,n.now,"HH:mm:ss.SSS"),"!"),i.xp6(4),i.Q6J("ngrxLet",n.user$)("ngrxLetSuspenseTpl",r)}},dependencies:[l.ez,l.sg,l.O5,l.Ts,l.uU,Q,G],styles:["article[_ngcontent-%COMP%]{position:relative}","article[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;top:0}"],changeDetection:0})}}]);