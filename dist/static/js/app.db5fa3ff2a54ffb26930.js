webpackJsonp([5],{"3UQc":function(t,e){},"4EAT":function(t,e){},"GN+4":function(t,e){},"JV+u":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("//Fk"),r=n.n(o),s=n("7+uW"),i=new s.a,a={props:{headerTitle:{style:String}},data:function(){return{loginBtnShow:sessionStorage.loginBtnShow}},computed:{},methods:{changeTitle:function(){this.$emit("changeTitle","changeTitle")},changeSubTitle:function(){i.$emit("changeSubTitle","const subTitle")},signOutFun:function(){sessionStorage.userName&&(this.loginBtnShow=!1,this.$router.push({name:"login"}),this.$store.commit("changeUser"))}},created:function(){var t=this;i.$on("login",function(){t.loginBtnShow=!0})}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",{on:{click:t.changeTitle}},[t._v("This is header ---- "+t._s(t.headerTitle))]),t._v(" "),n("p",{on:{click:t.changeSubTitle}},[t._v("Header subTitle")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{exact:"",to:"/"}},[t._v("home")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/form"}},[t._v("form")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/img"}},[t._v("img")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/Slots"}},[t._v("Slots")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/products"}},[t._v("products")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/http"}},[t._v("http")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/Directives"}},[t._v("Directives")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/Filters"}},[t._v("Filters")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/Search"}},[t._v("Search")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/aboutUs"}},[t._v("aboutUs不需要登陆")])],1),t._v(" "),t.loginBtnShow?n("li",[n("a",{on:{click:function(e){t.signOutFun()}}},[t._v("Sign out")])]):t._e(),t._v(" "),n("br")])])},staticRenderFns:[]};var u=n("VU/8")(a,c,!1,function(t){n("bYVx")},"data-v-25c5ac08",null).exports,l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.NavlistFun.addRouters,function(e,o){return n("li",{key:o+t.NavlistFun.time},[n("router-link",{attrs:{to:e.path}},[t._v(t._s(e.name))])],1)}))])},staticRenderFns:[]};var d=n("VU/8")({computed:{NavlistFun:function(){return this.$store.getters.getRouter}}},l,!1,function(t){n("UsS8")},"data-v-1f7d1bf3",null).exports,m={props:{footerTitle:{style:String}},data:function(){return{pTitle:"footerTitle"}},created:function(){var t=this;i.$on("changeSubTitle",function(e){t.pTitle=e})}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("h2",[this._v("This is Footer ----"+this._s(this.footerTitle))]),this._v(" "),e("p",[this._v(this._s(this.pTitle))])])},staticRenderFns:[]};var p={components:{"app-header":u,"app-nav":d,"app-footer":n("VU/8")(m,h,!1,function(t){n("GN+4")},"data-v-ae26f910",null).exports},data:function(){return{nijias:[{name:"AA",content:"wow",show:"false"},{name:"BB",content:"wow",show:"false"},{name:"CC",content:"wow",show:"false"},{name:"DD",content:"wow",show:"false"},{name:"EE",content:"wow",show:"false"},{name:"FF",content:"wow",show:"false"}],title:"nijia title"}},computed:{navShow:function(){return"/Login"!==this.$route.path}},methods:{update:function(t){this.title=t}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("app-header",{attrs:{headerTitle:t.title},on:{changeTitle:function(e){t.update(e)}}}),t._v(" "),t.navShow?n("app-nav"):t._e(),t._v(" "),n("router-view"),t._v(" "),n("app-footer",{attrs:{footerTitle:t.title}})],1)},staticRenderFns:[]};var v=n("VU/8")(p,f,!1,function(t){n("om8S")},null,null).exports,_=n("/ocq"),g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"unfind"},[e("h1",[this._v("我是 404")])])}]};var b=[{path:"/DynamicRouterA",name:"DynamicRouterA",component:function(t){return n.e(2).then(function(){return t(n("/kgQ"))}.bind(null,n)).catch(n.oe)}},{path:"/DynamicRouterA2",name:"DynamicRouterA2",component:function(t){return n.e(2).then(function(){return t(n("ezm6"))}.bind(null,n)).catch(n.oe)}}],x=[{path:"/DynamicRouterB",name:"DynamicRouterB",component:function(t){return n.e(0).then(function(){return t(n("oal/"))}.bind(null,n)).catch(n.oe)}},{path:"/DynamicRouterB2",name:"DynamicRouterB2",component:function(t){return n.e(0).then(function(){return t(n("3h1k"))}.bind(null,n)).catch(n.oe)}}],k=[{path:"**",name:"page404",component:n("VU/8")(null,g,!1,function(t){n("3UQc")},"data-v-3614c8c9",null).exports}],R={data:function(){return{userName:"",passWords:""}},methods:{login:function(){var t=this;console.log({userName:this.userName,passWord:this.passWords}),this.userName===sessionStorage.userName?(console.log("已经登陆了！！！"),this.$router.push({name:"form"})):this.$http.post("/api/login",{userName:this.userName,passWord:this.passWords}).then(function(e){if("ok"===e.data.state){console.log("login:",e.data),sessionStorage.userName=t.userName,sessionStorage.passWord=t.passWords;var n=e.data.userRole;sessionStorage.userRole=e.data.userRole,sessionStorage.loginBtnShow=!0,"AdminA"===n?(t.$router.addRoutes(b),t.$router.addRoutes(k),t.$store.commit("addRoute",b)):"AdminB"===n?(t.$router.addRoutes(x),t.$router.addRoutes(k),t.$store.commit("addRoute",x)):t.$router.addRoutes(k),t.$store.commit("notRefreshed"),i.$emit("login"),t.$router.push({name:"home"})}})}}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"LoginCon"}},[n("p",[n("label",[t._v("账户："),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],attrs:{type:"text"},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}})])]),t._v(" "),n("p",[n("label",[t._v("密码："),n("input",{directives:[{name:"model",rawName:"v-model",value:t.passWords,expression:"passWords"}],attrs:{type:"password"},domProps:{value:t.passWords},on:{input:function(e){e.target.composing||(t.passWords=e.target.value)}}})])]),t._v(" "),n("p",[n("button",{on:{click:t.login}},[t._v("提交")])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v('\n         账户："AdminA" , 加载：加载：DynamicRouterA , DynamicRouterA2  路由\n    ')]),this._v(" "),e("p",[this._v('\n         账户："AdminB" , 加载：DynamicRouterB , DynamicRouterB2  路由\n    ')])])}]};var $=n("VU/8")(R,y,!1,function(t){n("hydp")},"data-v-242afadc",null).exports,w={data:function(){return{txt:"txtone"}},methods:{getParent:function(){console.log("ref--Parent:",this.$parent)}}},A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("I am formOne.")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.txt,expression:"txt"}],domProps:{value:t.txt},on:{input:function(e){e.target.composing||(t.txt=e.target.value)}}}),t._v(" "),n("button",{on:{click:t.getParent}},[t._v("我是子组件通过ref过去父组件信息")])])},staticRenderFns:[]},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("I am formTwo ")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.txt,expression:"txt"}],domProps:{value:t.txt},on:{input:function(e){e.target.composing||(t.txt=e.target.value)}}})])},staticRenderFns:[]},F={components:{"form-one":n("VU/8")(w,A,!1,null,null,null).exports,"form-two":n("VU/8")({data:function(){return{txt:"txttwo"}}},S,!1,null,null,null).exports},data:function(){return{component:"form-two"}},methods:{getChilrd:function(){console.log("ref--child:",this.$refs.one.txt),console.log("ref--child:",this.$refs)}}},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"formHelper"}},[t._t("title"),t._v(" "),n("h1",[t._v(" I am form helper")]),t._v(" "),t._t("text"),t._v(" "),n("div",[n("form-one",{ref:"one"}),t._v(" "),n("form-two",{ref:"two"}),t._v(" "),n("button",{on:{click:t.getChilrd}},[t._v("ref获取子组件的属性")])],1),t._v(" "),n("hr"),t._v(" "),n("keep-alive",[n(t.component,{tag:"component"})],1),t._v(" "),n("button",{on:{click:function(e){t.component="form-one"}}},[t._v("show form-one")]),t._v(" "),n("button",{on:{click:function(e){t.component="form-two"}}},[t._v("show form-two")])],2)},staticRenderFns:[]};var T=n("VU/8")(F,N,!1,function(t){n("kNZy")},"data-v-b11b5980",null).exports,U={components:{"form-helper":T},data:function(){return{form:{title:"",content:"",checkboxs:[],city:"上海"},cities:["北京","上海","重庆","天津","深圳"]}}},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"form"}},[n("h1",[t._v("form  相关的")]),t._v(" "),n("div",[n("label",[n("span",[t._v("title:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.form.title,expression:"form.title",modifiers:{lazy:!0}}],attrs:{type:"text",required:""},domProps:{value:t.form.title},on:{change:function(e){t.$set(t.form,"title",e.target.value)}}}),t._v(" "),n("p",[t._v("title:"+t._s(t.form.title))])])]),t._v(" "),n("div",[n("label",[n("span",[t._v("content:")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.content,expression:"form.content"}],domProps:{value:t.form.content},on:{input:function(e){e.target.composing||t.$set(t.form,"content",e.target.value)}}}),t._v(" "),n("p",[t._v("content:"+t._s(t.form.content))])])]),t._v(" "),n("div",[n("label",[n("span",[t._v("张三:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.form.checkboxs,expression:"form.checkboxs",modifiers:{lazy:!0}}],attrs:{type:"checkbox",value:"张三"},domProps:{checked:Array.isArray(t.form.checkboxs)?t._i(t.form.checkboxs,"张三")>-1:t.form.checkboxs},on:{change:function(e){var n=t.form.checkboxs,o=e.target,r=!!o.checked;if(Array.isArray(n)){var s=t._i(n,"张三");o.checked?s<0&&t.$set(t.form,"checkboxs",n.concat(["张三"])):s>-1&&t.$set(t.form,"checkboxs",n.slice(0,s).concat(n.slice(s+1)))}else t.$set(t.form,"checkboxs",r)}}})]),t._v(" "),n("label",[n("span",[t._v("李四:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.form.checkboxs,expression:"form.checkboxs",modifiers:{lazy:!0}}],attrs:{type:"checkbox",value:"李四"},domProps:{checked:Array.isArray(t.form.checkboxs)?t._i(t.form.checkboxs,"李四")>-1:t.form.checkboxs},on:{change:function(e){var n=t.form.checkboxs,o=e.target,r=!!o.checked;if(Array.isArray(n)){var s=t._i(n,"李四");o.checked?s<0&&t.$set(t.form,"checkboxs",n.concat(["李四"])):s>-1&&t.$set(t.form,"checkboxs",n.slice(0,s).concat(n.slice(s+1)))}else t.$set(t.form,"checkboxs",r)}}})]),t._v(" "),n("label",[n("span",[t._v("王五:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.form.checkboxs,expression:"form.checkboxs",modifiers:{lazy:!0}}],attrs:{type:"checkbox",value:"王五"},domProps:{checked:Array.isArray(t.form.checkboxs)?t._i(t.form.checkboxs,"王五")>-1:t.form.checkboxs},on:{change:function(e){var n=t.form.checkboxs,o=e.target,r=!!o.checked;if(Array.isArray(n)){var s=t._i(n,"王五");o.checked?s<0&&t.$set(t.form,"checkboxs",n.concat(["王五"])):s>-1&&t.$set(t.form,"checkboxs",n.slice(0,s).concat(n.slice(s+1)))}else t.$set(t.form,"checkboxs",r)}}})]),t._v(" "),n("p",[t._v("checkbox:")]),t._v(" "),n("ul",t._l(t.form.checkboxs,function(e,o){return n("li",{key:o},[t._v(t._s(e))])}))]),t._v(" "),n("div",[t._m(0),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.form.city,expression:"form.city"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.form,"city",e.target.multiple?n:n[0])}}},t._l(t.cities,function(e,o){return n("option",{key:o},[t._v(t._s(e))])})),t._v(" "),n("p",[t._v(t._s(t.form.city))])]),t._v(" "),n("hr"),t._v(" "),n("form-helper")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",[e("span",[this._v("直辖市：")])])}]};var P=n("VU/8")(U,E,!1,function(t){n("JV+u")},"data-v-22e550b4",null).exports,V={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{attrs:{src:"../static/images/"+t.Img+".jpg",alt:t.Img}}),t._v(" "),n("img",{attrs:{src:t.SrcImg,alt:t.Img}}),t._v(" "),n("button",{on:{click:t.imgAdd}},[t._v("img++")]),t._v(" "),n("button",{on:{click:t.imgReduce}},[t._v("img--")]),t._v(" "),n("p",[t._v(t._s(t.id))])])},staticRenderFns:[]};var D=n("VU/8")({data:function(){return{id:this.$route.params.id}},methods:{imgAdd:function(){this.id||(this.id=1),this.id<3?this.id++:this.id=1,this.$router.push({path:"/img/"+this.id})},imgReduce:function(){this.id>1?this.id--:this.id=3,this.$router.push({path:"/img/"+this.id})}},computed:{SrcImg:function(){return this.id?"../static/images/"+this.id+".jpg":"../static/images/1.jpg"},Img:function(){return this.id?this.id:"1"}}},V,!1,function(t){n("Uxzp")},"data-v-425b6636",null).exports,j={components:{"app-img":D}},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("img 组件容器")]),this._v(" "),e("router-view")],1)},staticRenderFns:[]},O=n("VU/8")(j,B,!1,null,null,null).exports,I={components:{"app-form-helper":T},name:"HelloWorld",data:function(){return{title:"Welcome to slotsVue",hTitle:"I am h2 form slots"}},methods:{greeting:function(){return"This is cool!"}}},W={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("p",[t._v(t._s(t.greeting()))]),t._v(" "),n("app-form-helper",[n("h2",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.hTitle))]),t._v(" "),n("p",{attrs:{slot:"text"},slot:"text"},[t._v(" I am p from slots")])])],1)},staticRenderFns:[]};var z=n("VU/8")(I,W,!1,function(t){n("4EAT")},"data-v-55ef7a82",null).exports,C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about"},[e("h1",[this._v("这是关于我们---不需要登陆")])])}]};var J=n("VU/8")(null,C,!1,function(t){n("hnfH")},null,null).exports,H={data:function(){return{persen:{name:"zhangsan",age:"20"}}},methods:{addAttrFun:function(){console.log("persen",this.persen),this.$set(this.persen,"class",4),console.log("persen后",this.persen)}}},G={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("我是 home--home")]),t._v(" "),n("hr"),t._v(" "),n("button",{on:{click:function(e){t.addAttrFun()}}},[t._v("data添加属性")])])},staticRenderFns:[]};var L=[{path:"/",name:"home",component:n("VU/8")(H,G,!1,function(t){n("XeA/")},"data-v-2cc84114",null).exports},{path:"/Login",name:"login",component:$},{path:"/aboutUs",name:"aboutus",meta:{notLogin:!0},component:J},{path:"/form",name:"form",component:P},{path:"/img",name:"img",component:O,children:[{path:"",name:"imgChildren",component:D},{path:":id",name:"imgChildren",component:D}]},{path:"/Slots",name:"Slots",component:z}],M={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"product-one"}},[n("h2",[t._v("this is product one")]),t._v(" "),n("ul",t._l(t.saleProducts,function(e,o){return n("li",{key:o},[n("span",[t._v(t._s(e.name)+":"+t._s(e.price))])])})),t._v(" "),n("button",{on:{click:function(e){t.reducePrice(4)}}},[t._v("reducePrice")])])},staticRenderFns:[]};var q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"product-two"}},[n("h2",[t._v("this is product two")]),t._v(" "),n("ul",t._l(t.saleProducts,function(e,o){return n("li",{key:o},[n("span",[t._v(t._s(e.name)+":"+t._s(e.price))])])}))])},staticRenderFns:[]};var Q={components:{"product-one":n("VU/8")({computed:{products:function(){return this.$store.state.product.products},saleProducts:function(){var t=this.$store.state.product.products.map(function(t){return{name:"----"+t.name+"-----",price:t.price/2}});return t}},methods:{reducePrice:function(t){this.$store.dispatch("reducePrice",t)}}},M,!1,function(t){n("g1dg")},"data-v-c7cb7154",null).exports,"product-two":n("VU/8")({computed:{products:function(){return this.$store.state.product.products},saleProducts:function(){return this.$store.getters.saleProducts}}},q,!1,function(t){n("bJpd")},"data-v-1bb76442",null).exports}},X={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"products"}},[e("product-one"),this._v(" "),e("product-two")],1)},staticRenderFns:[]};var Y=n("VU/8")(Q,X,!1,function(t){n("oMgr")},"data-v-4f0f02a0",null).exports,Z=Object({NODE_ENV:"production"}).API_ROOT,K={data:function(){return{postJson:"",getJson:""}},methods:{postFun:function(){var t=this;this.$http.post("/api/http",{userId:1}).then(function(e){t.postJson=e})},getFun:function(){this.$http.get("/api/http").then(function(t){return console.log(t.data)})},postRootFun:function(){this.$http.post(Z+"/root",{root:2}).then(function(t){return console.log("root:",t.data)})},getMockFun:function(){this.$http("/mock/get").then(function(t){return console.log(t.list)})}}},tt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("http 请求")]),t._v(" "),n("div",[n("button",{on:{click:t.postFun}},[t._v("从node中获取 post")]),t._v(" "),n("p",[t._v(t._s(t.postJson))]),t._v(" "),n("button",{on:{click:t.getFun}},[t._v("从node中获取 get")]),t._v(" "),n("p",[t._v(t._s(t.getJson))]),t._v(" "),n("button",{on:{click:t.postRootFun}},[t._v("从node中获取 EnvRoot")]),t._v(" "),n("hr"),t._v(" "),n("button",{on:{click:t.getMockFun}},[t._v("从mock中获取数据")])])])},staticRenderFns:[]};var et=[{path:"/products",name:"products",component:Y},{path:"/http",name:"http",component:n("VU/8")(K,tt,!1,function(t){n("hIQG")},"data-v-296a602f",null).exports},{path:"/Directives",name:"Directives",component:function(t){return n.e(3).then(function(){return t(n("oNn/"))}.bind(null,n)).catch(n.oe)}},{path:"/Filters",name:"Filters",component:function(t){return n.e(1).then(function(){return t(n("DlPZ"))}.bind(null,n)).catch(n.oe)}},{path:"/Search",name:"Search",component:function(t){return n.e(1).then(function(){return t(n("/KFX"))}.bind(null,n)).catch(n.oe)}}],nt=n("NYxO"),ot={state:{products:[{name:"荣耀1",price:"100"},{name:"荣耀2",price:"200"},{name:"荣耀3",price:"300"},{name:"荣耀4",price:"400"}]},getters:{saleProducts:function(t){var e=t.products.map(function(t){return{name:"----"+t.name+"-----",price:t.price/2}});return e}},mutations:{reducePrice:function(t,e){t.products.forEach(function(t){t.price-=e})}},actions:{reducePrice:function(t,e){setTimeout(function(){t.commit("reducePrice",e)},20)}}},rt=n("Gu7T"),st=n.n(rt),it={state:{refrrefreshesh:!0,addRouterObj:{time:(new Date).getTime(),addRouters:[]}},getters:{getRouter:function(t){return console.log("addRouterObj:",t.addRouterObj),t.addRouterObj},getRefresh:function(t){return t.refresh}},mutations:{addRoute:function(t,e){var n;console.log("stateuserRole:",e),t.refresh=!1,t.addRouterObj.addRouters=[],(n=t.addRouterObj.addRouters).push.apply(n,st()(e)),t.addRouterObj.time=(new Date).getTime(),console.log("state.addRouter:",t.addRouterObj)},notRefreshed:function(t){t.refresh=!1,t.isLoginyet=!0},changeUser:function(t){t.addRouterObj={time:(new Date).getTime(),addRouters:[]},t.refresh=!0}},actions:{}};s.a.use(nt.a);var at=new nt.a.Store({strict:!0,modules:{product:ot,user:{state:{status:""},mutations:{loginStatus:function(t,e){t.status=e}}},userRouter:it}});s.a.use(_.a);var ct=L.concat(et),ut=new _.a({routes:ct,mode:"history"}),lt=sessionStorage.userRole,dt=at.getters.getRefresh;lt&&dt&&("AdminA"===lt?(ut.addRoutes(b),ut.addRoutes(k),at.commit("addRoute",b)):"AdminB"===lt?(ut.addRoutes(x),ut.addRoutes(k),at.commit("addRoute",x)):ut.addRoutes(k),at.commit("notRefreshed")),ut.beforeEach(function(t,e,n){"login"===t.name?(sessionStorage.loginBtnShow&&(sessionStorage.clear(),window.location.reload()),n()):!0===t.meta.notLogin?n():sessionStorage.userName?t.name?n():ut.push({name:"page404"}):ut.push({name:"login"})});var mt=ut,ht=n("mtWM"),pt=n.n(ht);n("jHTG");pt.a.defaults.baseURL="http://localhost:3000/",pt.a.interceptors.request.use(function(t){return t.url=t.url.replace("/api",""),t},function(t){return r.a.reject(t)}),pt.a.interceptors.response.use(function(t){return t.data.serverRoot&&(t.data=t.data.serverRoot),t},function(t){return r.a.reject(t)}),s.a.prototype.$http=pt.a,s.a.directive("fontColor",{bind:function(t,e,n){t.style.color="red"}}),s.a.directive("dir",{bind:function(t,e,n){"w800"===e.value?(t.style.border="1px solid #000",t.style.width="800px"):(t.style.width="600px",t.style.border="1px solid #000"),"fs40"===e.arg&&(t.style.fontSize="40px")}}),s.a.filter("to-uppercase",function(t){return t.toUpperCase()}),new s.a({store:at,el:"#app",router:mt,components:{App:v},template:"<App/>"})},UsS8:function(t,e){},Uxzp:function(t,e){},"XeA/":function(t,e){},bJpd:function(t,e){},bYVx:function(t,e){},g1dg:function(t,e){},hIQG:function(t,e){},hnfH:function(t,e){},hydp:function(t,e){},jHTG:function(t,e,n){var o=n("zNUS");o.mock("http://localhost:3000/mock/get",{"list|1-10":[{"id|1-100.1-10":1,"name|2-7":!0}]}),o.mock("http://localhost:3000/login","post",(t,e)=>{console.log("req.body:",t.body);let n=JSON.parse(t.body).userName;return console.log("req.body:",t.body),"AdminA"===n?{state:"ok",userRole:"AdminA"}:"AdminB"===n?{state:"ok",userRole:"AdminB"}:{state:"ok",userRole:"member"}})},kNZy:function(t,e){},oMgr:function(t,e){},om8S:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.db5fa3ff2a54ffb26930.js.map