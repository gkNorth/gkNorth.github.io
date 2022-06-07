(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{271:function(t,e,n){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",l="date",d="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:l,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},M="en",D={};D[M]=y;var p=function(t){return t instanceof _},w=function t(e,n,r){var i;if(!e)return M;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(M=i),i||!r&&M},O=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},S=g;S.l=w,S.i=p,S.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function y(t){this.$L=w(t.locale,null,!0),this.parse(t)}var m=y.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return S},m.isValid=function(){return!(this.$d.toString()===d)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!S.u(e)||e,f=S.p(t),d=function(t,e){var i=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,y=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(f){case h:return r?d(1,0):d(31,11);case c:return r?d(1,y):d(0,y+1);case o:var M=this.$locale().weekStart||0,D=(v<M?v+7:v)-M;return d(r?m-D:m+(6-D),y);case a:case l:return $(g+"Hours",0);case u:return $(g+"Minutes",1);case s:return $(g+"Seconds",2);case i:return $(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=S.p(t),f="set"+(this.$u?"UTC":""),d=(n={},n[a]=f+"Date",n[l]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var v=this.clone().set(l,1);v.$d[d]($),v.init(),this.$d=v.set(l,Math.min(this.$D,v.daysInMonth())).$d}else d&&this.$d[d]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[S.p(t)]()},m.add=function(r,f){var l,d=this;r=Number(r);var $=S.p(f),v=function(t){var e=O(d);return S.w(e.date(e.date()+Math.round(t*r)),d)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return v(1);if($===o)return v(7);var y=(l={},l[s]=e,l[u]=n,l[i]=t,l)[$]||1,m=this.$d.getTime()+r*y;return S.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},h=function(t){return S.s(s%12||12,t,"0")},l=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:S.s(a+1,2,"0"),MMM:f(n.monthsShort,a,c,3),MMMM:f(c,a),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:f(n.weekdaysMin,this.$W,o,2),ddd:f(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:S.s(s,2,"0"),h:h(1),hh:h(2),a:l(s,u,!0),A:l(s,u,!1),m:String(u),mm:S.s(u,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:i};return r.replace(v,(function(t,e){return e||$[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,l,d){var $,v=S.p(l),y=O(r),m=(y.utcOffset()-this.utcOffset())*e,g=this-y,M=S.m(this,y);return M=($={},$[h]=M/12,$[c]=M,$[f]=M/3,$[o]=(g-m)/6048e5,$[a]=(g-m)/864e5,$[u]=g/n,$[s]=g/e,$[i]=g/t,$)[v]||g,d?M:S.a(M)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return S.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},y}(),x=_.prototype;return O.prototype=x,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",l]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=p,O.unix=function(t){return O(1e3*t)},O.en=D[M],O.Ls=D,O.p={},O}()},275:function(t,e,n){var content=n(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("45bc8474",content,!0,{sourceMap:!1})},277:function(t,e,n){"use strict";n(275)},278:function(t,e,n){var r=n(66)(!1);r.push([t.i,"li[data-v-22cac9eb]{display:flex;margin-bottom:20px}.create-at[data-v-22cac9eb]{display:inline-block;width:110px}",""]),t.exports=r},281:function(t,e,n){"use strict";n.r(e);var r=n(11),o=n(31),c=n(32),f=n(50),h=n(51),l=n(28),d=n(27),$=(n(68),n(87),n(15),n(114),n(29)),v=n(271),y=n.n(v);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var M=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},D=function(t){Object(f.a)(h,t);var e,n=m(h);function h(){return Object(o.a)(this,h),n.apply(this,arguments)}return Object(c.a)(h,[{key:"asyncData",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$microcms,r=e.params,t.next=3,n.get({endpoint:"blog/".concat(r.id)});case 3:return o=t.sent,t.abrupt("return",{contents:o});case 5:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)})},{key:"formatCreateAt",get:function(){return y()(this.contents.createdAt).format("YYYY/MM/DD")}}]),h}($.Vue),w=D=M([$.Component],D),O=(n(277),n(26)),component=Object(O.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.contents.title))]),t._v(" "),n("span",[t._v(t._s(t.formatCreateAt))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.contents.content)}}),t._v(" "),n("p",[n("nuxt-link",{attrs:{to:"/"}},[t._v("ホーム")])],1)])}),[],!1,null,"22cac9eb",null);e.default=component.exports}}]);