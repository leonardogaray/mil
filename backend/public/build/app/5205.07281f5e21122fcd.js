"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5205],{5205:(O,g,i)=>{i.r(g),i.d(g,{HomePageModule:()=>j});var p=i(1929),D=i(6814),F=i(95),M=i(3554),f=i(1379),v=i(5861);const d=new class b{isPointInsidePolygon(o,e,t){const n=e,a=o;let l=!1;for(let u=0,c=t.length-1;u<t.length;c=u++){const y=t[u][0],h=t[u][1],P=t[c][1];h>a!=P>a&&n<(t[c][0]-y)*(a-h)/(P-h)+y&&(l=!l)}return l}csv2Json(o){let e=o.split("\n"),t=[],n=e[0].split(",");for(let a=1;a<e.length-1;a++){let l={},u=e[a].split(",");for(let c=0;c<n.length;c++)l[n[c]]=u[c];t.push(l)}return t}todayFormatted(){const o=new Date;return`${o.getFullYear()}-${(o.getMonth()+1).toString().padStart(2,"0")}-${o.getDate().toString().padStart(2,"0")}`}},I=new class S{loadData(){var o=this;return(0,v.Z)(function*(){const e=yield window.fetch("https://firms.modaps.eosdis.nasa.gov/api/country/csv/76db7f998faeaeb1d02f68b315bb5a12/MODIS_NRT/ARG/1/"+d.todayFormatted(),{method:"GET",headers:{Accept:"text/csv"}}),t=yield e.text();if(e.ok){let n=d.csv2Json(t);return o.processData(n)}return Promise.reject(e.statusText)})()}processData(o){const e=[[-60.7035826,-31.9551536],[-59.987548,-32.7282481],[-59.3283683,-33.2261903],[-59.1306144,-33.1111758],[-58.4439689,-33.2813436],[-58.3615714,-34.0498202],[-58.4879142,-34.4903853],[-60.2457267,-33.3685985],[-60.7016593,-32.8991555],[-60.8115226,-32.5199454],[-60.7071524,-31.9574472],[-60.3555905,-32.3289323]];return o.filter(n=>{const a=parseFloat(n.latitude),l=parseFloat(n.longitude);return d.isPointInsidePolygon(a,l,e)})}},T=new class x{loadData(){var o=this;return(0,v.Z)(function*(){const e=yield window.fetch("https://firms.modaps.eosdis.nasa.gov/api/country/csv/76db7f998faeaeb1d02f68b315bb5a12/VIIRS_SNPP_NRT/ARG/1/"+d.todayFormatted(),{method:"GET",headers:{Accept:"text/csv"}}),t=yield e.text();if(e.ok){let n=d.csv2Json(t);return o.processData(n)}return Promise.reject(e.statusText)})()}processData(o){const e=[[-60.7035826,-31.9551536],[-59.987548,-32.7282481],[-59.3283683,-33.2261903],[-59.1306144,-33.1111758],[-58.4439689,-33.2813436],[-58.3615714,-34.0498202],[-58.4879142,-34.4903853],[-60.2457267,-33.3685985],[-60.7016593,-32.8991555],[-60.8115226,-32.5199454],[-60.7071524,-31.9574472],[-60.3555905,-32.3289323]];return o.filter(n=>{const a=parseFloat(n.latitude),l=parseFloat(n.longitude);return d.isPointInsidePolygon(a,l,e)})}};var m=i(8433),r=i(5678);const w=[{path:"",component:(()=>{var s;class o{constructor(){this.lat=-33.27688650546989,this.lng=-59.820610521170714}ngAfterViewInit(){let t=m.DomUtil.get("map-home");t&&null!=t._leaflet_id&&t.remove();let n=this;navigator.geolocation.getCurrentPosition(function(a){n.initMap()},function(a){console.log("SSL Certificate required",a),n.initMap()},{timeout:1e4})}initMap(){const t=m.icon({iconUrl:"./assets/marker-icon.png",shadowUrl:"./assets/marker-shadow.png"});this.marker=m.marker([this.lat,this.lng],{icon:t}),this.map=m.map("map-home",{center:[this.lat,this.lng],zoom:11}),m.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,minZoom:3,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(this.map),this.marker.addTo(this.map).bindPopup("<b>You are here</b>"),setTimeout(()=>{this.map.invalidateSize()},500),this.loadDataFromMODIS()}loadDataFromMODIS(){I.loadData().then(t=>{this.generateFires(t)}),T.loadData().then(t=>{this.generateFires(t)})}generateFires(t){let n=this;t.forEach(function(a){m.circle([a.latitude,a.longitude],{color:"red",fillColor:"red",fillOpacity:.5,radius:100}).addTo(n.map).bindPopup(`<b>Lat:</b> ${a.latitude}<br/><b>Lng:</b> ${a.longitude}<br/>`)})}}return(s=o).\u0275fac=function(t){return new(t||s)},s.\u0275cmp=r.Xpm({type:s,selectors:[["app-home"]],decls:9,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],[1,"map-container"],[1,"map-frame"],["id","map-home"]],template:function(t,n){1&t&&(r.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),r._uU(3," General "),r.qZA()()(),r.TgZ(4,"ion-content",1)(5,"ion-content",1)(6,"div",2)(7,"div",3),r._UZ(8,"div",4),r.qZA()()()()),2&t&&(r.Q6J("translucent",!0),r.xp6(4),r.Q6J("fullscreen",!0),r.xp6(1),r.Q6J("fullscreen",!0))},dependencies:[p.W2,p.Gu,p.wd,p.sr],styles:[".map-container[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0}.map-frame[_ngcontent-%COMP%]{border:2px solid #000000;height:100%}#map-home[_ngcontent-%COMP%]{height:100%}"]}),o})()}];let H=(()=>{var s;class o{}return(s=o).\u0275fac=function(t){return new(t||s)},s.\u0275mod=r.oAB({type:s}),s.\u0275inj=r.cJS({imports:[f.Bz.forChild(w),f.Bz]}),o})(),j=(()=>{var s;class o{}return(s=o).\u0275fac=function(t){return new(t||s)},s.\u0275mod=r.oAB({type:s}),s.\u0275inj=r.cJS({imports:[p.Pc,D.ez,F.u5,M.e,H]}),o})()}}]);