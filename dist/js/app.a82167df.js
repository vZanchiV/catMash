(function(t){function e(e){for(var n,o,c=e[0],i=e[1],u=e[2],f=0,p=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,c=1;c<r.length;c++){var i=r[c];0!==a[i]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/my-first-project/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},2072:function(t,e,r){"use strict";var n=r("809e"),a=r.n(n);a.a},"26cd":function(t,e,r){},"4a50":function(t,e,r){"use strict";var n=r("b995"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("Cat Mash")]),r("router-link",{attrs:{to:"/allCats"}},[t._v("Classement")])],1),r("div",{staticClass:"container"},[r("router-view")],1)])},s=[],o=(r("5c0b"),r("2877")),c={},i=Object(o["a"])(c,a,s,!1,null,null,null),u=i.exports,l=r("8c4f"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"CatList"},[r("ul",{staticClass:"CatList__list"},t._l(t.cats,(function(t){return r("li",{key:t.id,staticClass:"CatList__item"},[r("Cat",{attrs:{title:t.id,like:t.like,urlImage:t.url}})],1)})),0)])},p=[],d=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7")),b=r("2f62"),v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Cat"},[r("div",{staticClass:"Cat__wrapper"},[r("h2",{staticClass:"Cat__name"},[t._v(t._s(t.title))]),r("div",{staticClass:"Cat__wrapLike"},[r("div",{staticClass:"Cat__heart"}),r("div",{staticClass:"Cat__like"},[t._v(t._s(t.like))])])]),r("img",{staticClass:"Cat__image",attrs:{src:t.urlImage,alt:t.title}})])},C=[],h=(r("a9e3"),{props:{title:{type:String},urlImage:{type:String},like:{type:Number}}}),m=h,O=(r("4a50"),Object(o["a"])(m,v,C,!1,null,null,null)),_=O.exports;function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(r,!0).forEach((function(e){Object(d["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var w={components:{Cat:_},created:function(){this.cats.lenght<1&&this.getCats()},methods:y({},Object(b["b"])(["getCats"])),computed:y({},Object(b["c"])({cats:"catsList"}))},j=w,T=(r("f320"),Object(o["a"])(j,f,p,!1,null,null,null)),k=T.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"CatVote"},[r("transition",{attrs:{appear:"","enter-active-class":"animated bounceIn","leave-active-class":"animated bounceOutUp"}},[t.show?r("div",{staticClass:"alert"},[t._v("Vous avez votez pour "),r("span",[t._v(t._s(t.nameCate))])]):t._e()]),t._m(0),r("ul",{staticClass:"CatVote__wrap"},t._l(t.twoCats,(function(e,n){return r("li",{key:n,staticClass:"CatVote__item",class:{disabled:t.isdisabled},on:{click:function(r){return r.preventDefault(),t.vote(e)}}},[r("Cat",{key:n,attrs:{title:e.id,like:e.like,urlImage:e.url}})],1)})),0)],1)},E=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",[t._v("Clic sur le chat que tu trouves le plus mignons")])])}];function S(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function A(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?S(r,!0).forEach((function(e){Object(d["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var D={components:{Cat:_},data:function(){return{nameCate:"",show:!1,isdisabled:!1}},created:function(){this.cats.length<1&&this.getCats()},computed:A({},Object(b["c"])({cats:"catsList",twoCats:"twoCats"})),methods:A({},Object(b["b"])(["getCats","getTwoCats","updateCat"]),{vote:function(t){var e=this;this.isdisabled=!0,this.updateCat(t),this.nameCate=t.id,this.show=!0,setTimeout((function(){return e.afterVote()}),2e3)},afterVote:function(){this.getTwoCats(),this.show=!1,this.isdisabled=!1}})},x=D,V=(r("2072"),Object(o["a"])(x,P,E,!1,null,"0bdc7642",null)),G=V.exports;n["a"].use(l["a"]);var L=[{path:"/",name:"home",component:G},{path:"/allCats",name:"allCats",component:k}],M=new l["a"]({mode:"history",base:"/my-first-project/",routes:L}),I=M,R=(r("99af"),r("c740"),r("0d03"),r("284c")),$=(r("4e82"),r("8206")),F=r.n($),U="https://cors-anywhere.herokuapp.com/https://latelier.co",W={method:"GET",headers:{"Access-Control-Allow-Origin":"*"},url:"".concat(U,"/data/cats.json")},z={getCats:function(){return F()(W)},getOneCats:function(t){return t[Math.floor(Math.random()*t.length)]},sortCats:function(t){function e(t,e){return t.like<e.like?1:t.like>e.like?-1:0}return t.sort(e)}},J={cats:[],catForVote:[]},q={catsList:function(t){return t.cats},twoCats:function(t){return t.catForVote}},N={GET_CATS:function(t,e){t.cats=e},GET_CATS_ERROR:function(t,e){t.errors=[e].concat(Object(R["a"])(t.errors))},GET_TWO_CATS:function(t,e){t.catForVote=e},UPDATE_CATS:function(t,e){t.cats=e}},B={getCats:function(t){var e=t.commit;z.getCats().then((function(t){var r=t.data.images,n=[];r.forEach((function(t){t["like"]=0})),n.push(z.getOneCats(r),z.getOneCats(r)),e("GET_CATS",r),e("GET_TWO_CATS",n)})).catch((function(t){var r={date:new Date,message:"failled to retrieve products:".concat(t.message)};e("GET_CATS_ERROR",r)}))},getTwoCats:function(t){var e=t.commit,r=[];r.push(z.getOneCats(J.cats),z.getOneCats(J.cats)),e("GET_TWO_CATS",r)},updateCat:function(t,e){var r=t.commit,n=J.cats.findIndex((function(t){return t.id==e.id}));J.cats[n].like++,J.cats=z.sortCats(J.cats),r("UPDATE_CATS",J.cats)}},H={state:J,mutations:N,getters:q,actions:B};n["a"].use(b["a"]);var K=new b["a"].Store({modules:{cats:H}});n["a"].config.productionTip=!1,new n["a"]({router:I,store:K,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"809e":function(t,e,r){},"9c0c":function(t,e,r){},b995:function(t,e,r){},f320:function(t,e,r){"use strict";var n=r("26cd"),a=r.n(n);a.a}});
//# sourceMappingURL=app.a82167df.js.map