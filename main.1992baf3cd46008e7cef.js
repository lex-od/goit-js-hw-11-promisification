(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(n,e,t){},QfWi:function(n,e,t){"use strict";t.r(e);t("lmye"),t("D/wG"),t("wCa+"),t("JBxO"),t("FdtR"),t("L1EO");var o=t("csVp"),a=function(n){return new Promise((function(e){return setTimeout((function(){return e(n)}),n)}))},c=function(n){return console.log("Resolved after "+n+"ms")};document.querySelector(".js-task1").addEventListener("click",(function(){a(2e3).then(c),a(1e3).then(c),a(1500).then(c)}));var i=function(n,e){var t=n.map((function(n){return n.name===e?Object.assign({},n,{active:!n.active}):n}));return Promise.resolve(t)},r=function(n){return console.table(n)};document.querySelector(".js-task2").addEventListener("click",(function(){i(o,"Mango").then(r),i(o,"Lux").then(r)}));var u=function(n){return new Promise((function(e,t){var o,a,c=(o=200,a=500,Math.floor(Math.random()*(a-o+1)+o));setTimeout((function(){Math.random()>.3&&e({id:n.id,time:c}),t(n.id)}),c)}))},s=function(n){var e=n.id,t=n.time;console.log("Transaction "+e+" processed in "+t+"ms")},m=function(n){console.warn("Error processing transaction "+n+". Please try again later.")};document.querySelector(".js-task3").addEventListener("click",(function(){u({id:70,amount:150}).then(s).catch(m),u({id:71,amount:230}).then(s).catch(m),u({id:72,amount:75}).then(s).catch(m),u({id:73,amount:100}).then(s).catch(m)}))},csVp:function(n){n.exports=JSON.parse('[{"name":"Mango","active":true},{"name":"Poly","active":false},{"name":"Ajax","active":true},{"name":"Lux","active":false}]')}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.1992baf3cd46008e7cef.js.map