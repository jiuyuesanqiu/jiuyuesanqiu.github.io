(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-fixedResult-fixedResult"],{"1bd2":function(t,e,i){"use strict";var a=i("3ed8"),n=i.n(a);n.a},"3ed8":function(t,e,i){var a=i("8a36");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("ee4e637e",a,!0,{sourceMap:!1,shadowMode:!1})},4895:function(t,e,i){"use strict";i.r(e);var a=i("cd81"),n=i("8bca");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("1bd2");var r=i("2877"),u=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"44f786fd",null);e["default"]=u.exports},"8a36":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".text-small[data-v-44f786fd]{font-size:%?60?%}",""])},"8bca":function(t,e,i){"use strict";i.r(e);var a=i("d7d1"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},cd81:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"text-df cu-card px-3"},[i("v-uni-view",{staticClass:"p-5 bg-white rounded"},[i("v-uni-view",{staticClass:"text-center"},[i("v-uni-view",{staticClass:"text-xl"},[t._v(t._s(t.title.key))]),i("v-uni-view",{staticClass:"text-green"},[i("v-uni-text",{class:t.isLong?"text-small":"text-sl"},[t._v(t._s(t.title.value))]),i("v-uni-text",{staticClass:"text-xl"},[t._v(t._s(t.title.unit))])],1)],1),i("v-uni-view",{staticClass:"text-lg mt-3 text-gray"},[3!=t.parameter.option?i("v-uni-view",{staticClass:"flex justify-between py-1"},[i("v-uni-view",[t._v("定投期数")]),i("v-uni-view",[i("v-uni-text",{staticClass:"text-green"},[t._v(t._s(t.parameter.fixedTime))]),i("v-uni-text",[t._v("年")])],1)],1):t._e(),2!=t.parameter.option?i("v-uni-view",{staticClass:"flex justify-between py-1"},[i("v-uni-view",[t._v("每期金额")]),i("v-uni-view",[i("v-uni-text",{staticClass:"text-green"},[t._v(t._s(t.parameter.fixedMoney))]),i("v-uni-text",[t._v("元")])],1)],1):t._e(),i("v-uni-view",{staticClass:"flex justify-between py-1"},[i("v-uni-view",[t._v("投入本金")]),i("v-uni-view",[i("v-uni-text",{staticClass:"text-green"},[t._v(t._s(t.principal))]),i("v-uni-text",[t._v("元")])],1)],1),0!=t.parameter.option?i("v-uni-view",{staticClass:"flex justify-between py-1"},[i("v-uni-view",[t._v("期末资产")]),i("v-uni-view",[i("v-uni-text",{staticClass:"text-green"},[t._v(t._s(t.parameter.futureValue))]),i("v-uni-text",[t._v("元")])],1)],1):t._e(),i("v-uni-view",{staticClass:"flex justify-between py-1"},[i("v-uni-view",[t._v("总收益")]),i("v-uni-view",[i("v-uni-text",{staticClass:"text-green"},[t._v(t._s(t.totalRevenue))]),i("v-uni-text",[t._v("元")])],1)],1),i("v-uni-view",{staticClass:"flex justify-between py-1"},[i("v-uni-view",[t._v("总收益率")]),i("v-uni-view",[i("v-uni-text",{staticClass:"text-green"},[t._v(t._s(t.totalYieldRate))]),i("v-uni-text",[t._v("%")])],1)],1),1!=t.parameter.option?i("v-uni-view",{staticClass:"flex justify-between py-1"},[i("v-uni-view",[t._v("年收益率")]),i("v-uni-view",[i("v-uni-text",{staticClass:"text-green"},[t._v(t._s(t.parameter.expectInterest))]),i("v-uni-text",[t._v("%")])],1)],1):t._e()],1)],1),i("v-uni-view",{staticClass:"my-3"},[i("v-uni-ad",{attrs:{"unit-id":"adunit-64fe28fc7b3797b6"}})],1),i("v-uni-view",{staticClass:"my-5"})],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},d7d1:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("04e5"),n={data:function(){return{parameter:uni.getStorageSync("parameter"),principal:0,totalRevenue:0,totalYieldRate:0,title:{key:"",value:0,unit:"元"}}},computed:{isLong:function(){var t=this.title.value+"";return t.length>12}},onLoad:function(t){void 0!=t.parameter&&(this.parameter=JSON.parse(t.parameter)),this.calculate()},methods:{goHome:function(){uni.switchTab({url:"/pages/fixedInvestment/fixedInvestment"})},onShareAppMessage:function(){return{title:"定投计算器",path:"/pages/fixedResult/fixedResult?parameter=".concat(JSON.stringify(this.parameter))}},calculate:function(){var t=this.parameter.option,e=this.parameter.fixedTime,i=Number(this.parameter.fixedMoney),n=this.parameter.period,s=this.parameter.expectInterest,r=Number(this.parameter.futureValue),u=0,v=1/12,l=12*e;switch(0==n?(v=1/52,l=52*e):1==n&&(v=1/26,l=26*e),t){case 0:u=Math.pow(1+s/100,v),r=i*u*(Math.pow(u,l)-1)/(u-1),this.parameter.futureValue=(0,a.formatMoney)(r),this.principal=(0,a.formatMoney)(i*l),this.totalRevenue=(0,a.formatMoney)(r-i*l),this.totalYieldRate=(0,a.formatMoney)((r-i*l)/(i*l)*100),this.title.key="期末总资产",this.title.value=this.parameter.futureValue,this.title.unit="元";break;case 1:var o=this.pmt(r,i,l,v);this.principal=(0,a.formatMoney)(i*l),this.totalRevenue=(0,a.formatMoney)(r-i*l),this.totalYieldRate=(0,a.formatMoney)((r-i*l)/(i*l)*100),this.title.key="年复合收益率",this.title.value=Math.floor(1e4*o)/100,this.title.unit="%",this.parameter.futureValue=(0,a.formatMoney)(r);break;case 2:u=Math.pow(1+s/100,v),i=r*(u-1)/(u*(Math.pow(u,l)-1)),this.parameter.futureValue=(0,a.formatMoney)(r),this.principal=(0,a.formatMoney)(i*l),this.totalRevenue=(0,a.formatMoney)(r-i*l),this.totalYieldRate=(0,a.formatMoney)((r-i*l)/(i*l)*100),this.title.key="每期定投金额",this.title.value=(0,a.formatMoney)(i),this.title.unit="元";break;case 3:u=Math.pow(1+s/100,v),l=this.dealZ(r,i,u,v),this.parameter.futureValue=(0,a.formatMoney)(r),this.principal=(0,a.formatMoney)(i*l),this.totalRevenue=(0,a.formatMoney)(r-i*l),this.totalYieldRate=(0,a.formatMoney)((r-i*l)/(i*l)*100),this.title.key="定投总时长",e=0==n?l/52:1==n?l/26:l/12,this.title.value=Math.floor(100*e)/100,this.title.unit="年";break;default:break}},pmt:function(t,e,i,a){var n=t/(i*e),s=Math.abs(n);function r(){var a=e*n*(Math.pow(n,i)-1)/(n-1);return a>t}while(1){while(!r())n+=s;if(s<1e-6)break;n-=s,s*=.5}return Math.pow(n,1/a)-1},dealZ:function(t,e,i,a){var n=t/e,s=Math.abs(n);function r(){var a=e*i*(Math.pow(i,n)-1)/(i-1);return a>t}while(1){while(!r())n+=s;if(s<1)break;n-=s,s*=.5}return Math.floor(n)}}};e.default=n}}]);