webpackJsonp([3],{"00r1":function(t,e,i){"use strict";function n(t){i("gpcz")}Object.defineProperty(e,"__esModule",{value:!0});var a=i("Xxa5"),s=i.n(a),o=i("exGp"),r=i.n(o),c=i("ISPS"),l=i("budC"),d=i("pNK0"),u=i("mdS2"),h=i("gyMJ"),v={name:"",data:function(){return{data:[],hotRank:!1,title:"",updateTime:0,content:"",noImg:!0,loading:!0}},filters:{setTime:function(t){return Object(d.b)(t)}},activated:function(){this.pageId=this.$route.params.id,this.switchFunction(this.pageId)},methods:{switchFunction:function(t){switch(t){case"anchorHours":this.title="24小时榜",this.content="popular",this.hotRank=!0,this._getDjToplistHours();break;case"newcomer":this.title="新人榜",this.content="popular",this.hotRank=!0,this._getDjToplistNewComers();break;case"pay":this.title="付费精品榜",this.hotRank=!0,this.noImg=!1,this._getDjTopListPay();break;case"programHours":this.title="24小时新人榜",this._getDjProgramTopHours();break;default:this.returnPage()}},_getDjToplistHours:function(){var t=this;return r()(s.a.mark(function e(){var i,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.djToplistHoursFn();case 2:i=e.sent,n=i.data,200===n.code&&(t.updateTime=n.data.updateTime,t.data=n.data.list,t.loading=!1);case 5:case"end":return e.stop()}},e,t)}))()},_getDjToplistNewComers:function(){var t=this;return r()(s.a.mark(function e(){var i,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.djToplistNewComersFn();case 2:i=e.sent,n=i.data,200===n.code&&(t.updateTime=n.data.updateTime,t.data=n.data.list,t.loading=!1);case 5:case"end":return e.stop()}},e,t)}))()},_getDjProgramTopHours:function(){var t=this;return r()(s.a.mark(function e(){var i,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.djProgramTopHoursFn();case 2:i=e.sent,n=i.data,200===n.code&&(t.data=n.data.list,t.updateTime=n.data.updateTime,t.loading=!1);case 5:case"end":return e.stop()}},e,t)}))()},_getDjTopListPay:function(){var t=this;return r()(s.a.mark(function e(){var i,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.djToplistPaysFn();case 2:i=e.sent,n=i.data,200===n.code&&(t.data=n.data.list,t.updateTime=n.data.updateTime,t.loading=!1);case 5:case"end":return e.stop()}},e,t)}))()},returnPage:function(){this.$router.go(-1)}},deactivated:function(){this.pageId="",this.title="",this.data=[],this.updateTime=15463008e5,this.content="",this.hotRank=!1,this.noImg=!0,this.loading=!0},components:{djTopConDetail:c.a,publicCon:l.a,pageLoading:u.a}},m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pd23"},[i("dj-top-con-detail",{staticClass:"titleFixed",on:{returnPage:t.returnPage}},[i("span",{staticClass:"text"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[i("h1",{staticClass:"update"},[t._v("更新时间: "+t._s(t._f("setTime")(t.updateTime)))]),t._v(" "),i("public-con",{attrs:{data:t.data,type:"rank",hotRank:t.hotRank,content:t.content,noImg:t.noImg}})],1),t._v(" "),i("page-loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]})],1)},f=[],p={render:m,staticRenderFns:f},g=p,_=i("VU/8"),C=n,b=_(v,g,!1,C,"data-v-8dabe91a",null);e.default=b.exports},CjYO:function(t,e){},"FU+j":function(t,e,i){"use strict";function n(t){i("yRHm")}Object.defineProperty(e,"__esModule",{value:!0});var a=i("ISPS"),s={name:"",data:function(){return{cover:"0.2",listFixed:!1,coverFixed:!1,position:!0,top:"0rem",opacity:1,$title:""}},props:{title:{type:String},name:{type:String},coverImgUrl:{type:String}},methods:{returnPage:function(){this.$router.go(-1)},scrollList:function(t){var e=this.$el.scrollTop;this.cover=e/1e3+.3,this.opacity=1-e/500,this.cover>.6?(this.cover=.6,this.opacity=.4):(this.cover=e/1e3+.3,this.opacity=1-e/500),e>=282?(this.$title=this.name,this.listFixed=!0,this.coverFixed=!0,this.position=!1,this.top="7.8rem"):(this.$title=this.title,this.listFixed=!1,this.coverFixed=!1,this.position=!0,this.top="0")}},components:{detailNav:a.a}},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper",on:{scroll:t.scrollList}},[i("detail-nav",{staticClass:"fixed pd23",staticStyle:{color:"#fff"},on:{returnPage:t.returnPage}},[i("span",{staticClass:"text"},[t._v(t._s(t.$title))])]),t._v(" "),i("div",{staticClass:"container-top",class:{coverFixed:t.coverFixed,position:t.position},style:{backgroundImage:"url("+t.coverImgUrl+")"}},[i("div",{staticClass:"cover",style:{backgroundColor:"rgba(0, 0, 0, "+t.cover+")"}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.listFixed,expression:"!listFixed"}],staticClass:"data",style:{opacity:t.opacity}},[t._t("data",[t._v("上半部区域")])],2)]),t._v(" "),i("div",{class:{listFixed:t.listFixed}},[t._t("nav-list",[t._v("这里显示吸顶标签行")])],2),t._v(" "),i("div",{staticClass:"container-bottom",style:{marginTop:t.top}},[t._t("bottom",[t._v("下边展示音乐列表")])],2),t._v(" "),t._t("slider",[t._v("这里是显示下方滑块")])],2)},r=[],c={render:o,staticRenderFns:r},l=c,d=i("VU/8"),u=n,h=d(s,l,!1,u,"data-v-47dc57ac",null);e.default=h.exports},JB5g:function(t,e){},JKiR:function(t,e){},RsMb:function(t,e){},XMhb:function(t,e,i){"use strict";function n(t){i("JB5g")}Object.defineProperty(e,"__esModule",{value:!0});var a=i("Xxa5"),s=i.n(a),o=i("exGp"),r=i.n(o),c=i("ISPS"),l=i("budC"),d=i("pNK0"),u=i("mdS2"),h=i("gyMJ"),v={name:"",data:function(){return{data:[],title:"",loading:!0}},filters:{setTime:function(t){return Object(d.b)(t)}},activated:function(){this.pageId=this.$route.params.id,this.title=this.$route.params.title,this._getClassRecommend(this.pageId)},methods:{_getClassRecommend:function(t){var e=this;return r()(s.a.mark(function i(){var n,a,o,r;return s.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,h.a.djClassificationInfoFn(t);case 2:n=i.sent,a=n.data,o=a.code,r=a.djRadios,200===o&&(e.data=r,e.loading=!1);case 7:case"end":return i.stop()}},i,e)}))()},returnPage:function(){this.$router.go(-1)}},deactivated:function(){this.pageId="",this.data=[],this.title="",this.loading=!0},components:{djTopConDetail:c.a,publicCon:l.a,pageLoading:u.a}},m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pd23"},[i("dj-top-con-detail",{staticClass:"titleFixed",on:{returnPage:t.returnPage}},[i("span",{staticClass:"text"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[i("public-con",{attrs:{data:t.data}})],1),t._v(" "),i("page-loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]})],1)},f=[],p={render:m,staticRenderFns:f},g=p,_=i("VU/8"),C=n,b=_(v,g,!1,C,"data-v-310a1369",null);e.default=b.exports},YH6u:function(t,e){},a7MF:function(t,e){},gpcz:function(t,e){},u3Wn:function(t,e,i){"use strict";function n(t){return document.body.contains(t)}function a(){r&&r.$destroy(),r=new(u.a.extend(P))({el:document.createElement("div"),propsData:{lazyRender:!1}}),r.$on("input",function(t){r.value=t})}function s(t){return m.i?Promise.resolve():new Promise(function(e,i){r&&n(r.$el)||a(),Object(d.a)(r,s.currentOptions,t,{resolve:e,reject:i})})}function o(t){i("YH6u")}var r,c=i("bOdI"),l=i.n(c),d=(i("nsZj"),i("02pT"),i("T2s0"),i("1H7Z"),i("hW8u"),i("WpgC"),i("3IMD"),i("RsMb"),i("CjYO"),i("JKiR"),i("RfZZ")),u=i("7+uW"),h=i("AA6R"),v=i.n(h),m=i("o69Z"),f=i("V+2B"),p=i("CsZI"),g=i("SSsa"),_=i("1SJR"),C=Object(m.b)("goods-action"),b=C[0],w=C[1],x=b({mixins:[Object(_.b)("vanGoodsAction")],props:{safeAreaInsetBottom:{type:Boolean,default:!0}},render:function(){return(0,arguments[0])("div",{class:w({unfit:!this.safeAreaInsetBottom})},[this.slots()])}}),y=i("n8HW"),j=Object(m.b)("goods-action-button"),S=j[0],T=j[1],F=S({mixins:[Object(_.a)("vanGoodsAction")],props:Object(d.a)({},y.c,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean}),computed:{isFirst:function(){var t=this.parent&&this.parent.children[this.index-1];return!t||t.$options.name!==this.$options.name},isLast:function(){var t=this.parent&&this.parent.children[this.index+1];return!t||t.$options.name!==this.$options.name}},methods:{onClick:function(t){this.$emit("click",t),Object(y.b)(this.$router,this)}},render:function(){return(0,arguments[0])(g.a,{class:T([{first:this.isFirst,last:this.isLast},this.type]),attrs:{size:"large",type:this.type,icon:this.icon,color:this.color,loading:this.loading,disabled:this.disabled},on:{click:this.onClick}},[this.slots()||this.text])}}),I=Object(m.b)("dialog"),B=I[0],k=I[1],O=I[2],P=B({mixins:[Object(p.a)()],props:{title:String,theme:String,width:[Number,String],message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,overlay:{type:Boolean,default:!0},allowHtml:{type:Boolean,default:!0},transition:{type:String,default:"van-dialog-bounce"},showConfirmButton:{type:Boolean,default:!0},closeOnPopstate:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var e=this;this.$emit(t),this.value&&(this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,function(i){!1!==i&&e.loading[t]&&e.onClose(t),e.loading.confirm=!1,e.loading.cancel=!1})):this.onClose(t))},onClose:function(t){this.close(),this.callback&&this.callback(t)},onOpened:function(){this.$emit("opened")},onClosed:function(){this.$emit("closed")},genRoundButtons:function(){var t=this,e=this.$createElement;return e(x,{class:k("footer")},[this.showCancelButton&&e(F,{attrs:{size:"large",type:"warning",text:this.cancelButtonText||O("cancel"),color:this.cancelButtonColor,loading:this.loading.cancel},class:k("cancel"),on:{click:function(){t.handleAction("cancel")}}}),this.showConfirmButton&&e(F,{attrs:{size:"large",type:"danger",text:this.confirmButtonText||O("confirm"),color:this.confirmButtonColor,loading:this.loading.confirm},class:k("confirm"),on:{click:function(){t.handleAction("confirm")}}})])},genButtons:function(){var t,e=this,i=this.$createElement,n=this.showCancelButton&&this.showConfirmButton;return i("div",{class:[f.c,k("footer")]},[this.showCancelButton&&i(g.a,{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||O("cancel")},class:k("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){e.handleAction("cancel")}}}),this.showConfirmButton&&i(g.a,{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||O("confirm")},class:[k("confirm"),(t={},t[f.a]=n,t)],style:{color:this.confirmButtonColor},on:{click:function(){e.handleAction("confirm")}}})])},genContent:function(t,e){var i=this.$createElement;if(e)return i("div",{class:k("content")},[e]);var n=this.message,a=this.messageAlign;if(n){var s,o,r={class:k("message",(s={"has-title":t},s[a]=a,s)),domProps:(o={},o[this.allowHtml?"innerHTML":"textContent"]=n,o)};return i("div",{class:k("content",{isolated:!t})},[i("div",v()([{},r]))])}}},render:function(){var t=arguments[0];if(this.shouldRender){var e=this.message,i=this.slots(),n=this.slots("title")||this.title,a=n&&t("div",{class:k("header",{isolated:!e&&!i})},[n]);return t("transition",{attrs:{name:this.transition},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[t("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||e},class:[k([this.theme]),this.className],style:{width:Object(m.a)(this.width)}},[a,this.genContent(n,i),"round-button"===this.theme?this.genRoundButtons():this.genButtons()])])}}});s.defaultOptions={value:!0,title:"",width:"",theme:null,message:"",overlay:!0,className:"",allowHtml:!0,lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1,callback:function(t){r["confirm"===t?"resolve":"reject"](t)}},s.alert=s,s.confirm=function(t){return s(Object(d.a)({showCancelButton:!0},t))},s.close=function(){r&&(r.value=!1)},s.setDefaultOptions=function(t){Object(d.a)(s.currentOptions,t)},s.resetDefaultOptions=function(){s.currentOptions=Object(d.a)({},s.defaultOptions)},s.resetDefaultOptions(),s.install=function(){u.a.use(P)},s.Component=P,u.a.prototype.$dialog=s;var D=s,$=(i("eqfM"),i("/QYm")),N=i("gyMJ"),R={data:function(){return{drawer:!1,direction:"btt",show:!1,homePlaylist:[{icon:"sliderxiazai",text:"下载"},{icon:"sliderfenxiang",text:"分享"},{icon:"sliderbianji",text:"编辑歌单信息"},{icon:"slidericonfont-shanchu",text:"删除"}],homeFavoritelist:[{icon:"sliderxiazai",text:"下载"},{icon:"sliderfenxiang",text:"分享"},{icon:"slidericonfont-shanchu",text:"删除"}],djDetail:[{icon:"sliderxiazai",text:"下载"},{icon:"sliderpinglun",text:"评论"},{icon:"sliderfenxiang",text:"分享"},{icon:"sliderjubao",text:"举报"}]}},props:{title:{type:String},author:{type:String},imgUrl:{type:String},id:{type:Number},homePlaylistSlider:{type:Boolean,default:!1},homeFavoritelistSlider:{type:Boolean,default:!1},djDetailList:{type:Boolean,default:!1}},computed:{data:function(){return this.homePlaylistSlider?this.homePlaylist:this.homeFavoritelistSlider?this.homeFavoritelist:this.djDetailList?this.djDetail:[]},size:function(){return 10*this.data.length+"%"}},methods:{deleteItem:function(t){var e=this;this.drawer=!1,this.$dialog.confirm({message:"确认删除此歌单吗？"}).then(function(i){e.homeFavoritelistSlider?e._cancelPlayList(t):e._deleteCreatedList(t)}).catch(function(t){e.drawer=!1})},_cancelPlayList:function(t){N.a.addOrDeletePlaylistFn(2,t).then(function(t){200===t.data.code&&Object($.a)({position:"bottom",message:"已删除"})}).catch(function(t){console.log(t)})},_deleteCreatedList:function(t){N.a.deletePlaylistFn(t).then(function(t){200===t.data.code&&Object($.a)({position:"bottom",message:"已删除"})}).catch(function(t){console.log(t)})},commentsItem:function(t){var e=t,i=this.title,n=this.author,a=this.imgUrl;this.$router.push({name:"comments",params:{djId:e,imgUrl:a,title:i,author:n}})},showSlider:function(){console.log("kkk"),this.drawer=!0},itemHandle:function(t,e){switch(t){case"删除":this.deleteItem(e);break;case"评论":this.commentsItem(e)}}},components:l()({},D.Component.name,D.Component)},L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-action-sheet",{staticClass:"van-ellipsis",attrs:{title:t.title},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("div",t._l(t.data,function(e,n){return i("p",{key:n,staticClass:"item pd23 border-bottom"},[i("a",{staticClass:"cover",on:{click:function(i){return t.itemHandle(e.text,t.id)}}}),t._v(" "),i("i",{staticClass:"slider",class:e.icon}),t._v("\n        "+t._s(e.text)+"\n      ")])}),0)])],1)},U=[],H={render:L,staticRenderFns:U},z=H,M=i("VU/8"),A=o,E=M(R,z,!1,A,null,null);e.a=E.exports},vynH:function(t,e,i){"use strict";function n(t){i("yrzZ")}var a={name:"",props:{active:{type:String,default:"second"},count:{type:Number},firstNav:{type:String},secondNav:{type:String}},methods:{changeToFirst:function(){this.$emit("changeToFirst")},changeToSecond:function(){this.$emit("changeToSecond")}}},s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title"},[i("div",{staticClass:"content",on:{click:t.changeToFirst}},[i("span",{staticClass:"under-line",class:{active:"first"===t.active}},[t._v(t._s(t.firstNav))])]),t._v(" "),i("div",{staticClass:"content",on:{click:t.changeToSecond}},[i("span",{staticClass:"under-line",class:{active:"second"===t.active}},[t._v(t._s(t.secondNav))]),t._v(" "),i("span",{staticClass:"num"},[t._v(t._s(t.count))])])])},o=[],r={render:s,staticRenderFns:o},c=r,l=i("VU/8"),d=n,u=l(a,c,!1,d,"data-v-a462d982",null);e.a=u.exports},yRHm:function(t,e){},yrzZ:function(t,e){},zb28:function(t,e,i){"use strict";function n(t){i("a7MF")}Object.defineProperty(e,"__esModule",{value:!0});var a=i("Dd8w"),s=i.n(a),o=i("NYxO"),r=i("pNK0"),c=i("FU+j"),l=i("vynH"),d=i("C1C0"),u=i("mdS2"),h=i("u3Wn"),v=i("gyMJ"),m={name:"",data:function(){return{djProgramData:[],djDetail:!1,coverImgUrl:"",count:0,name:"",subscription:0,active:"second",avatarUrl:"",detailName:"",category:"",desc:"",loading:!0,title:"电台",subed:!1,ridId:0,itemId:0}},computed:s()({},Object(o.c)({audioSong:"AUDIO_ING_SONG"})),activated:function(){this.loading=!0,this.coverImgUrl="",this.count=0,this.name="",this.active="second";var t=this.$route.params;if(!t.ridId)return void this.$router.go(-1);this.ridId=t.ridId;var e=this.ridId;this._getDjProgramInfo(e),this._getDjDetailInfo(e)},filters:{setCount:function(t){return Object(r.c)(t)}},methods:s()({_getDjProgramInfo:function(t){var e=this;v.a.djProgramFn(t,30,0,!1).then(function(t){var i=t.data;200===i.code&&(e.count=i.count,e.djProgramData=i.programs,e.loading=!1)})},_getDjDetailInfo:function(t){var e=this;v.a.djDetailFn(t).then(function(t){var i=t.data;200===i.code&&(e.name=i.djRadio.name,e.coverImgUrl=i.djRadio.picUrl+"?param=300y300",e.subscription=i.djRadio.subCount,e.avatarUrl=i.djRadio.dj.avatarUrl+"?param=100y100",e.desc=i.djRadio.desc,e.detailName=i.djRadio.dj.nickname,e.category=i.djRadio.category,e.subed=i.djRadio.subed)})},addDj:function(){var t=this;v.a.djSubFn(this.ridId,1).then(function(e){var i=e.data;200===i.code&&(t.subed=!0,console.log(i))})},showSlider:function(t){console.log(this.$refs),this.title="电台节目："+this.name,this.djDetail=!0,this.itemId=t,this.$refs.slider.showSlider()},deleteDj:function(){var t=this;v.a.djSubFn(this.ridId,0).then(function(e){var i=e.data;200===i.code&&(console.log(i),t.subed=!1)})},changeToFirst:function(){this.active="first"},changeToSecond:function(){this.active="second"},setAudioList:function(t,e){this.selectPlay({list:this.djProgramData,index:e})}},Object(o.b)(["selectPlay"])),components:{detailPage:c.default,changeNav:l.a,songList:d.a,pageLoading:u.a,slider:h.a}},f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("detail-page",{attrs:{title:t.title,name:t.name,coverImgUrl:t.coverImgUrl}},[i("div",{attrs:{slot:"data"},slot:"data"},[i("div",[i("div",{staticClass:"name"},[t._v(t._s(t.name))]),t._v(" "),i("div",{staticClass:"num"},[t._v(t._s(t._f("setCount")(t.subscription))+"人已订阅")])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.subed,expression:"!subed"}],staticClass:"subscription",on:{click:function(e){return e.preventDefault(),t.addDj(e)}}},[i("svg",{staticClass:"icon",attrs:{t:"1571198266501",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1753",width:"14",height:"14"}},[i("path",{attrs:{d:"M737.792 910.6944a57.2416 57.2416 0 0 1-26.7264-6.656l-197.5296-103.8336-197.5296 103.8336a57.2416 57.2416 0 0 1-83.0464-60.3648l37.6832-220.16L110.848 467.968a57.2928 57.2928 0 0 1 31.744-97.6896L363.52 338.2272 462.1824 138.24a56.832 56.832 0 0 1 51.2-31.8976 56.9344 56.9344 0 0 1 51.2 31.8976l98.7648 200.1408 220.8256 32.0512A57.2928 57.2928 0 0 1 916.48 467.968l-159.7952 155.7504 37.7344 220.16a57.3952 57.3952 0 0 1-56.32 67.0208zM159.8464 430.08l155.2896 151.3984a57.2416 57.2416 0 0 1 16.4352 50.688l-36.6592 213.5552 192-100.9152a57.088 57.088 0 0 1 53.2992 0L732.16 845.7216l-36.6592-213.76a57.344 57.344 0 0 1 16.4352-50.688L867.2768 430.08l-214.6304-31.1808a57.2928 57.2928 0 0 1-43.1104-31.3344l-96-194.56-96 194.56a57.2416 57.2416 0 0 1-43.1104 31.3344z m715.6736 1.024zM509.7984 165.2736z",fill:"#ffffff","p-id":"1754"}})]),t._v("订阅\n    ")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.subed,expression:"subed"}],staticClass:"subscription1",on:{click:function(e){return e.preventDefault(),t.deleteDj(e)}}},[i("svg",{staticClass:"icon",attrs:{t:"1571203188806",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2523",width:"14",height:"14"}},[i("path",{attrs:{d:"M926.037333 224.256c-22.016-22.016-57.685333-22.016-79.701333 0L384.853333 685.738667 179.370667 480.256c-22.016-22.016-57.685333-22.016-79.701334 0-22.016 22.016-22.016 57.685333 0 79.701333l239.786667 239.786667c12.458667 12.458667 29.184 17.749333 45.397333 16.213333 16.213333 1.536 32.938667-3.754667 45.397334-16.213333l495.786666-495.786667c22.016-22.016 22.016-57.685333 0-79.701333z",fill:"#ffffff","p-id":"2524"}})]),t._v("已订阅\n    ")])]),t._v(" "),i("change-nav",{attrs:{slot:"nav-list",active:t.active,count:t.count,firstNav:"详情",secondNav:"节目"},on:{changeToSecond:t.changeToSecond,changeToFirst:t.changeToFirst},slot:"nav-list"}),t._v(" "),i("div",{attrs:{slot:"bottom"},slot:"bottom"},[i("div",{directives:[{name:"show",rawName:"v-show",value:"second"===t.active,expression:"active==='second'"}],staticClass:"song-list"},[i("page-loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[i("h1",{staticClass:"sum-num pd23"},[t._v("共"+t._s(t.count)+"期")]),t._v(" "),t._l(t.djProgramData,function(e,n){return i("song-list",{key:n,staticClass:"pd23",attrs:{songName:e.name,num:t.djProgramData.length-n,createTime:e.createTime,listenerCount:e.listenerCount,duration:e.duration,twoLine:!0,itemId:e.id,type:"djList",nowSong:e.id===t.audioSong.id},on:{showSlider:t.showSlider,beginSong:function(i){return t.setAudioList(e,n)}}})})],2)],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"first"===t.active,expression:"active==='first'"}],staticClass:"detail pd23"},[i("h1",{staticClass:"anchor"},[t._v("主播")]),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"img-info"},[i("img",{attrs:{src:t.avatarUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"artist"},[i("p",{staticClass:"name"},[t._v(t._s(t.detailName))]),t._v(" "),i("p",{staticClass:"dec"},[t._v("网易音乐人")])])]),t._v(" "),i("h1",{staticClass:"dj-content"},[t._v("电台内容简介")]),t._v(" "),i("div",{staticClass:"class"},[i("span",[t._v("分类")]),t._v(" "),i("span",{staticClass:"tag"},[t._v(t._s(t.category))])]),t._v(" "),i("p",{staticClass:"text"},[t._v(t._s(t.desc))])])]),t._v(" "),i("slider",{ref:"slider",attrs:{slot:"slider",title:t.title,author:t.name,imgUrl:t.coverImgUrl,id:t.itemId,djDetailList:t.djDetail},slot:"slider"})],1)},p=[],g={render:f,staticRenderFns:p},_=g,C=i("VU/8"),b=n,w=C(m,_,!1,b,"data-v-641e863b",null);e.default=w.exports}});
//# sourceMappingURL=3.7cf9545b26953352acfe.js.map