"use strict";(self.webpackChunkair_clone=self.webpackChunkair_clone||[]).push([[61],{6061:(Oo,_,e)=>{e.r(_),e.d(_,{BookingPageModule:()=>Bo});var g=e(3073),T=e(8645),I=e(9397),P=e(9773),C=e(4264),o=e(5879),Z=e(1088),r=e(6814),l=e(9719),m=e(9025),F=e(5592),A=e(7687);function S(t,s){if(1&t){const n=o.EpF();o.TgZ(0,"map-marker",4,5),o.NdJ("mapClick",function(){const c=o.CHM(n).$implicit,p=o.MAs(1),wo=o.oxw(2);return o.KtG(wo.onMarkerClick(c,p))}),o.qZA()}if(2&t){const n=s.$implicit,i=o.oxw(2);o.Q6J("position",n)("label",(null==n?null:n.label)||"")("options",i.markerOptions)}}function J(t,s){if(1&t){const n=o.EpF();o.TgZ(0,"google-map",1),o.NdJ("mapClick",function(){o.CHM(n);const a=o.oxw();return o.KtG(a.onMapClick())}),o.YNc(1,S,2,3,"map-marker",2),o.TgZ(2,"map-info-window",3),o.NdJ("closeclick",function(){o.CHM(n);const a=o.oxw();return o.KtG(a.onInfoWindowClosed())}),o.Hsn(3),o.qZA()()}if(2&t){const n=o.oxw();o.Q6J("options",n.options),o.xp6(1),o.Q6J("ngForOf",n.markers)}}const V=["*"];let Y=(()=>{class t{constructor(n){this.googleMapsService=n,this.markers=[],this.mapMarkerClicked=new o.vpe,this.mapInfoWindowClosed=new o.vpe,this.apiLoaded$=new F.y,this.markerClicked=null}ngOnInit(){this.apiLoaded$=this.googleMapsService.load()}onMarkerClick(n,i){this.markerClicked=n,this.mapMarkerClicked.emit(n),this.infoWindow?.open(i)}onMapClick(){this.markerClicked&&this.closeInfoWindow()}onInfoWindowClosed(){this.closeInfoWindow()}closeInfoWindow(){this.markerClicked=null,this.infoWindow?.close(),this.mapInfoWindowClosed.emit()}static#o=this.\u0275fac=function(i){return new(i||t)(o.Y36(A.t))};static#t=this.\u0275cmp=o.Xpm({type:t,selectors:[["app-google-maps"]],viewQuery:function(i,a){if(1&i&&o.Gf(m.ch,5),2&i){let c;o.iGM(c=o.CRH())&&(a.infoWindow=c.first)}},inputs:{options:"options",markerOptions:"markerOptions",markers:"markers"},outputs:{mapMarkerClicked:"mapMarkerClicked",mapInfoWindowClosed:"mapInfoWindowClosed"},ngContentSelectors:V,decls:2,vars:3,consts:[["class","google-map",3,"options","mapClick",4,"ngIf"],[1,"google-map",3,"options","mapClick"],["automation-id","google-map-marker",3,"position","label","options","mapClick",4,"ngFor","ngForOf"],["automation-id","google-map-info-window",3,"closeclick"],["automation-id","google-map-marker",3,"position","label","options","mapClick"],["mapMarker","mapMarker"]],template:function(i,a){1&i&&(o.F$t(),o.YNc(0,J,4,2,"google-map",0),o.ALo(1,"async")),2&i&&o.Q6J("ngIf",o.lcZ(1,1,a.apiLoaded$))},dependencies:[r.sg,r.O5,m.b6,m.ch,m.O_,r.Ov],styles:['@charset "UTF-8";[_nghost-%COMP%]     .google-map-marker{padding:.3rem;background-color:#fff;color:#212121!important;border:1.5px solid #9e9e9e;border-radius:1.5rem;min-width:4rem}[_nghost-%COMP%]     .google-map-marker:after{content:" \\20bd"}[_nghost-%COMP%]     .google-map-marker:hover{transform:scale(1.1)}[_nghost-%COMP%]     .gm-style .gm-style-iw-c{padding:1.1rem;max-width:14rem!important}@media (min-width: 768px){[_nghost-%COMP%]     .gm-style .gm-style-iw-c{max-width:inherit!important}}.google-map[_ngcontent-%COMP%]{display:block;height:100%}.google-map[_ngcontent-%COMP%]     .map-container{min-width:100%;min-height:100%;max-width:100%;width:100%!important}'],changeDetection:0})}return t})();function Q(t,s){if(1&t){const n=o.EpF();o.ynx(0),o.TgZ(1,"app-google-maps",1),o.NdJ("mapMarkerClicked",function(a){o.CHM(n);const c=o.oxw();return o.KtG(c.onMapMarkerClicked(a))})("mapInfoWindowClosed",function(){o.CHM(n);const a=o.oxw();return o.KtG(a.onMapInfoWindowClosed())}),o.Hsn(2),o.qZA(),o.BQk()}if(2&t){const n=s.ngIf,i=o.oxw();o.xp6(1),o.Q6J("options",i.options)("markerOptions",i.markerOptions)("markers",n)}}const $=["*"];let N=(()=>{class t{constructor(n){this.bookingService=n,this.options={center:{lat:59.93839227045331,lng:30.360033589998572},zoom:14},this.markerOptions={draggable:!1,icon:"/"}}ngOnInit(){this.mapMarkers$=this.bookingService.mapMarkers$}onMapMarkerClicked(n){this.bookingService.setBookingVariant(n.data)}onMapInfoWindowClosed(){this.bookingService.clearBookingVariant()}static#o=this.\u0275fac=function(i){return new(i||t)(o.Y36(l.q$))};static#t=this.\u0275cmp=o.Xpm({type:t,selectors:[["app-booking-map"]],ngContentSelectors:$,decls:2,vars:3,consts:[[4,"ngIf"],["automation-id","booking-map-google",3,"options","markerOptions","markers","mapMarkerClicked","mapInfoWindowClosed"]],template:function(i,a){1&i&&(o.F$t(),o.YNc(0,Q,3,3,"ng-container",0),o.ALo(1,"async")),2&i&&o.Q6J("ngIf",o.lcZ(1,1,a.mapMarkers$))},dependencies:[r.O5,Y,r.Ov],styles:["[_nghost-%COMP%]{display:block;height:100%;margin:0 -1rem}@media (min-width: 768px){[_nghost-%COMP%]{margin:0}}"],changeDetection:0})}return t})();var d=e(9100),k=e(4772),b=e(5448),u=e(2296),v=e(9932),M=e(1306);let f=(()=>{class t{transform(n){return n.firstRoom?.photos??[]}static#o=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275pipe=o.Yjl({name:"bookingVariantImages",type:t,pure:!0})}return t})();var R=e(775);const L=function(){return{lg:5}},D=function(){return{lg:7}},U=function(t){return{id:t}};function W(t,s){if(1&t){const n=o.EpF();o.TgZ(0,"app-row",1)(1,"app-column",2)(2,"app-carousel",3),o.NdJ("selected",function(){o.CHM(n);const a=o.oxw();return o.KtG(a.onSelected())}),o.ALo(3,"bookingVariantImages"),o.qZA()(),o.TgZ(4,"app-column",2)(5,"div",4)(6,"h4",5),o._uU(7),o.qZA(),o.TgZ(8,"div",6)(9,"strong"),o._uU(10,"\u0410\u0434\u0440\u0435\u0441"),o.qZA(),o._uU(11),o.qZA(),o.TgZ(12,"div",7)(13,"strong"),o._uU(14,"\u0426\u0435\u043d\u0430 \u0437\u0430 \u043d\u043e\u0447\u044c"),o.qZA(),o._uU(15),o.qZA(),o.TgZ(16,"div",8)(17,"a",9),o.ALo(18,"navPath"),o._uU(19," \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 "),o.qZA()()()()()}if(2&t){const n=o.oxw();o.xp6(1),o.Q6J("modes",o.DdM(12,L)),o.xp6(1),o.Q6J("images",o.lcZ(3,7,n.bookingVariant)),o.xp6(2),o.Q6J("modes",o.DdM(13,D)),o.xp6(3),o.Oqu(n.bookingVariant.name),o.xp6(4),o.hij(": ",n.bookingVariant.address," "),o.xp6(4),o.hij(": ",null==n.bookingVariant.firstRoom?null:n.bookingVariant.firstRoom.price," \u20bd "),o.xp6(2),o.Q6J("routerLink",o.xi3(18,9,n.NavigationPath.RoomPage,o.VKq(14,U,null==n.bookingVariant.firstRoom?null:n.bookingVariant.firstRoom.id)))}}let G=(()=>{class t{constructor(n){this.navigationService=n,this.NavigationPath=d.F}onSelected(){this.bookingVariant?.firstRoom?.id&&this.navigationService.navigateByUrl(d.F.RoomPage,{id:this.bookingVariant.firstRoom?.id})}static#o=this.\u0275fac=function(i){return new(i||t)(o.Y36(k.f))};static#t=this.\u0275cmp=o.Xpm({type:t,selectors:[["app-booking-portlet"]],inputs:{bookingVariant:"bookingVariant"},decls:1,vars:1,consts:[["mode","lg",4,"ngIf"],["mode","lg"],[3,"modes"],["automation-id","booking-portlet-carousel",1,"booking-portlet-carousel",3,"images","selected"],[1,"booking-portlet-content"],["automation-id","booking-portlet-title",1,"booking-portlet-title"],["automation-id","booking-portlet-address",1,"booking-portlet-address"],["automation-id","booking-portlet-price",1,"booking-portlet-price"],[1,"booking-portlet-actions"],["mat-raised-button","","color","primary","automation-id","booking-portlet-action",3,"routerLink"]],template:function(i,a){1&i&&o.YNc(0,W,20,16,"app-row",0),2&i&&o.Q6J("ngIf",a.bookingVariant)},dependencies:[r.O5,b.F,u.zs,g.rH,v.i,M.b,f,R._],styles:["[_nghost-%COMP%]{display:block;border:1px solid #e0e0e0;border-radius:.25rem;padding:1rem;margin-bottom:1rem}[_nghost-%COMP%]:last-child{margin-bottom:0}.booking-portlet-carousel[_ngcontent-%COMP%]{max-width:100%;width:100%;height:10rem}@media (min-width: 550px){.booking-portlet-carousel[_ngcontent-%COMP%]{height:14rem}}@media (min-width: 768px){.booking-portlet-carousel[_ngcontent-%COMP%]{width:100%}}@media (min-width: 992px){.booking-portlet-carousel[_ngcontent-%COMP%]{width:auto}}.booking-portlet-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:0;height:100%}.booking-portlet-title[_ngcontent-%COMP%]{margin:1rem 0;font-weight:500;font-size:1.1rem}@media (min-width: 768px){.booking-portlet-title[_ngcontent-%COMP%]{font-size:1.25rem}}.booking-portlet-actions[_ngcontent-%COMP%]{margin:auto 0 0 auto}"],changeDetection:0})}return t})();function z(t,s){1&t&&o._UZ(0,"app-booking-portlet",5),2&t&&o.Q6J("bookingVariant",s.$implicit)}function E(t,s){if(1&t&&(o.ynx(0),o.YNc(1,z,1,1,"app-booking-portlet",4),o.BQk()),2&t){const n=o.oxw().ngIf;o.xp6(1),o.Q6J("ngForOf",n)}}function j(t,s){1&t&&(o.TgZ(0,"p",6),o._uU(1,"\u041d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u043e\u0442\u0435\u043b\u0435\u0439 \u0438 \u0430\u043f\u0430\u0440\u0442\u0430\u043c\u0435\u043d\u0442\u043e\u0432."),o.qZA())}function H(t,s){if(1&t&&(o.TgZ(0,"div",1),o.YNc(1,E,2,1,"ng-container",2),o.YNc(2,j,2,0,"p",3),o.qZA()),2&t){const n=s.ngIf;o.xp6(1),o.Q6J("ngIf",n.length),o.xp6(1),o.Q6J("ngIf",!n.length)}}let K=(()=>{class t{constructor(n){this.bookingService=n}ngOnInit(){this.bookingVariants$=this.bookingService.bookingVariants$}static#o=this.\u0275fac=function(i){return new(i||t)(o.Y36(l.q$))};static#t=this.\u0275cmp=o.Xpm({type:t,selectors:[["app-booking-list"]],decls:2,vars:3,consts:[["class","booking-list",4,"ngIf"],[1,"booking-list"],[4,"ngIf"],["automation-id","booking-list-empty",4,"ngIf"],["automation-id","booking-list-portlet",3,"bookingVariant",4,"ngFor","ngForOf"],["automation-id","booking-list-portlet",3,"bookingVariant"],["automation-id","booking-list-empty"]],template:function(i,a){1&i&&(o.YNc(0,H,3,2,"div",0),o.ALo(1,"async")),2&i&&o.Q6J("ngIf",o.lcZ(1,1,a.bookingVariants$))},dependencies:[r.sg,r.O5,G,r.Ov],styles:['[_nghost-%COMP%]{display:block;position:relative;height:100%;overflow-y:auto}.booking-list[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;width:100%;padding:1rem}.booking-list[_ngcontent-%COMP%]:after{content:"";display:block;height:1rem}'],changeDetection:0})}return t})();function X(t,s){if(1&t){const n=o.EpF();o.TgZ(0,"div")(1,"app-carousel",1),o.NdJ("selected",function(){const c=o.CHM(n).ngIf,p=o.oxw();return o.KtG(p.onSelected(c))}),o.ALo(2,"bookingVariantImages"),o.qZA(),o.TgZ(3,"p",2),o._uU(4),o.qZA()()}if(2&t){const n=s.ngIf;o.xp6(1),o.Q6J("images",o.lcZ(2,2,n)),o.xp6(3),o.Oqu(n.address)}}let q=(()=>{class t{constructor(n,i){this.bookingService=n,this.navigationService=i}ngOnInit(){this.bookingVariant$=this.bookingService.bookingVariant$}onSelected(n){n.firstRoom?.id&&this.navigationService.navigateByUrl(d.F.RoomPage,{id:n.firstRoom.id})}static#o=this.\u0275fac=function(i){return new(i||t)(o.Y36(l.q$),o.Y36(k.f))};static#t=this.\u0275cmp=o.Xpm({type:t,selectors:[["app-booking-card"]],decls:2,vars:3,consts:[[4,"ngIf"],["automation-id","booking-card-carousel",3,"images","selected"],["automation-id","booking-card-description"]],template:function(i,a){1&i&&(o.YNc(0,X,5,4,"div",0),o.ALo(1,"async")),2&i&&o.Q6J("ngIf",o.lcZ(1,1,a.bookingVariant$))},dependencies:[r.O5,b.F,r.Ov,f],styles:["[_nghost-%COMP%]{display:block;max-width:20rem}"],changeDetection:0})}return t})(),x=(()=>{class t{transform(n){return n.firstRoom?.photos?.length?n.firstRoom?.photos[0]:null}static#o=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275pipe=o.Yjl({name:"bookingVariantFirstImage",type:t,pure:!0})}return t})();var oo=e(7429);function to(t,s){if(1&t){const n=o.EpF();o.TgZ(0,"div",1),o.NdJ("click",function(){const c=o.CHM(n).ngIf,p=o.oxw();return o.KtG(p.onClick(c))}),o._UZ(1,"div",2),o.ALo(2,"backgroundImage"),o.ALo(3,"bookingVariantFirstImage"),o.TgZ(4,"p",3),o._uU(5),o.qZA()()}if(2&t){const n=s.ngIf;o.xp6(1),o.Q6J("ngStyle",o.lcZ(2,3,o.lcZ(3,5,n))),o.xp6(4),o.AsE("",n.address,": ",null==n.firstRoom?null:n.firstRoom.price,"")}}let no=(()=>{class t{constructor(n,i){this.bookingService=n,this.navigationService=i}ngOnInit(){this.bookingVariant$=this.bookingService.bookingVariant$}onClick(n){n.firstRoom?.id&&this.navigationService.navigateByUrl(d.F.RoomPage,{id:n.firstRoom?.id})}static#o=this.\u0275fac=function(i){return new(i||t)(o.Y36(l.q$),o.Y36(k.f))};static#t=this.\u0275cmp=o.Xpm({type:t,selectors:[["app-booking-box"]],decls:2,vars:3,consts:[["automation-id","booking-box",3,"click",4,"ngIf"],["automation-id","booking-box",3,"click"],["automation-id","booking-box-image",1,"booking-image",3,"ngStyle"],["automation-id","booking-box-description"]],template:function(i,a){1&i&&(o.YNc(0,to,6,7,"div",0),o.ALo(1,"async")),2&i&&o.Q6J("ngIf",o.lcZ(1,1,a.bookingVariant$))},dependencies:[r.O5,r.PC,r.Ov,x,oo._],styles:["[_nghost-%COMP%]{display:block}.booking-image[_ngcontent-%COMP%]{height:5rem;width:100%}"],changeDetection:0})}return t})();var y=e(617),io=e(9852);function eo(t,s){1&t&&o.GkF(0)}function ao(t,s){1&t&&(o.TgZ(0,"app-row")(1,"app-column"),o._UZ(2,"app-booking-list",6),o.qZA(),o.TgZ(3,"app-column")(4,"app-booking-map",7),o._UZ(5,"app-booking-card"),o.qZA()()())}function so(t,s){1&t&&o.GkF(0)}function ro(t,s){1&t&&(o.TgZ(0,"mat-icon"),o._uU(1,"view_list"),o.qZA())}function co(t,s){1&t&&(o.TgZ(0,"mat-icon"),o._uU(1,"map"),o.qZA())}function po(t,s){if(1&t&&(o.YNc(0,so,1,0,"ng-container",1),o.TgZ(1,"div",8)(2,"button",9),o.YNc(3,ro,2,0,"mat-icon",10),o.YNc(4,co,2,0,"mat-icon",10),o.qZA()()),2&t){const n=o.oxw(),i=o.MAs(7),a=o.MAs(9);o.Q6J("ngIf",n.isMapShow)("ngIfThen",i)("ngIfElse",a),o.xp6(3),o.Q6J("ngIf",n.isMapShow),o.xp6(1),o.Q6J("ngIf",!n.isMapShow)}}function go(t,s){1&t&&(o.TgZ(0,"app-booking-map",11),o._UZ(1,"app-booking-box"),o.qZA())}function lo(t,s){1&t&&o._UZ(0,"app-booking-list",12)}const mo=[{path:"",component:(()=>{class t{constructor(n,i){this.changeDetectorRef=n,this.breakpointObserver=i,this.isDesktopScreen=!1,this.isMapShow=!0,this.destroy$=new T.x}ngOnInit(){this.breakpointObserver.observe((0,C.Ot)(C.sm.Md)).pipe((0,I.b)(n=>{this.isDesktopScreen=n.matches,this.changeDetectorRef.markForCheck()}),(0,P.R)(this.destroy$)).subscribe()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}onToggleView(){this.isMapShow=!this.isMapShow}static#o=this.\u0275fac=function(i){return new(i||t)(o.Y36(o.sBO),o.Y36(Z.Yg))};static#t=this.\u0275cmp=o.Xpm({type:t,selectors:[["app-booking-page"]],decls:10,vars:3,consts:[["mode","fluid","height","max-height"],[4,"ngIf","ngIfThen","ngIfElse"],["desktopTpl",""],["mobileTpl",""],["mapMobileTpl",""],["listMobileTpl",""],["automation-id","booking-list-desktop"],["automation-id","booking-map-desktop"],[1,"booking-action"],["automation-id","booking-view-toggle","mat-icon-button","","type","button"],[4,"ngIf"],["automtion-id","booking-map-mobile"],["automation-id","booking-list-mobile"]],template:function(i,a){if(1&i&&(o.TgZ(0,"app-container",0),o.YNc(1,eo,1,0,"ng-container",1),o.qZA(),o.YNc(2,ao,6,0,"ng-template",null,2,o.W1O),o.YNc(4,po,5,5,"ng-template",null,3,o.W1O),o.YNc(6,go,2,0,"ng-template",null,4,o.W1O),o.YNc(8,lo,1,0,"ng-template",null,5,o.W1O)),2&i){const c=o.MAs(3),p=o.MAs(5);o.xp6(1),o.Q6J("ngIf",a.isDesktopScreen)("ngIfThen",c)("ngIfElse",p)}},dependencies:[r.O5,N,K,q,no,y.Hw,u.RK,v.i,M.b,io.e],styles:["[_nghost-%COMP%]{position:relative;height:100%;display:block}.booking-actions[_ngcontent-%COMP%]{position:absolute;bottom:1rem;margin:auto;left:0;right:0;width:20px;z-index:2}.booking-action[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 0 4px #223c50a8}"],changeDetection:0})}return t})()}];let B=(()=>{class t{static#o=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=o.oAB({type:t});static#n=this.\u0275inj=o.cJS({imports:[g.Bz.forChild(mo),g.Bz]})}return t})();var uo=e(213);let ko=(()=>{class t{static#o=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=o.oAB({type:t});static#n=this.\u0275inj=o.cJS({imports:[r.ez,uo.R]})}return t})();var fo=e(9984),ho=e(8657);let h=(()=>{class t{static#o=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=o.oAB({type:t});static#n=this.\u0275inj=o.cJS({})}return t})();var _o=e(52),w=e(307),O=e(1696);let Co=(()=>{class t{static#o=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=o.oAB({type:t});static#n=this.\u0275inj=o.cJS({imports:[r.ez,w.b,h,u.ot,g.Bz,_o.O,O.zE]})}return t})(),bo=(()=>{class t{static#o=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=o.oAB({type:t});static#n=this.\u0275inj=o.cJS({imports:[r.ez,g.Bz,Co]})}return t})(),vo=(()=>{class t{static#o=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=o.oAB({type:t});static#n=this.\u0275inj=o.cJS({imports:[r.ez,w.b,h]})}return t})();var Mo=e(9799);let xo=(()=>{class t{static#o=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=o.oAB({type:t});static#n=this.\u0275inj=o.cJS({imports:[r.ez,g.Bz,h,Mo.m]})}return t})();var yo=e(2140);let Bo=(()=>{class t{static#o=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=o.oAB({type:t});static#n=this.\u0275inj=o.cJS({imports:[r.ez,B,ho.n,ko,bo,vo,xo,l.LP,fo.u9,y.Ps,u.ot,O.zE,yo.n,B]})}return t})()}}]);