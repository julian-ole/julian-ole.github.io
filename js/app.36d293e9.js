(function(){var t={3558:function(t,e,i){"use strict";var a=i(6369),n=function(){var t=this,e=t._self._c;return e("main",[e("SwitchLanguage",{on:{"switch-language":t.onSwitchLanguage}}),e("AppCard",{attrs:{profile:t.profile}})],1)},s=[],r=function(){var t=this,e=t._self._c;return e("div",{class:t.classesCard,attrs:{"data-state":t.activeTab}},[e("app-header",{attrs:{avatar:t.profile.avatar,"full-name":t.profile.fullName,"job-title":t.profile.jobTitle}}),e("div",{staticClass:"card-main"},[e("app-about",{attrs:{active:"about"===t.activeTab,description:t.profile.description,socials:t.profile.socials}}),e("app-experience",{attrs:{active:"experience"===t.activeTab,experience:t.profile.experience}}),e("app-contact",{attrs:{active:"contact"===t.activeTab,contacts:t.profile.contacts}}),e("app-navigation",{on:{switch:t.onTabSwitch}})],1)],1)},c=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-header"},[e("div",{staticClass:"card-header__cover"}),e("img",{staticClass:"card-header__avatar",attrs:{src:t.avatar,alt:"avatar"}}),e("h1",{staticClass:"card-header__fullname"},[t._v(t._s(t.fullName))]),e("h2",{staticClass:"card-header__jobtitle"},[t._v(t._s(t.jobTitle))])])},l=[],u={props:{avatar:{type:String,required:!0},fullName:{type:String,required:!0},jobTitle:{type:String,required:!0}}},p=u,d=i(3736),v=(0,d.Z)(p,o,l,!1,null,null,null),f=v.exports,g=function(){var t=this,e=t._self._c;return e("div",{class:["card-section",{"is-active":t.active}],attrs:{id:"about"}},[e("div",{staticClass:"card-content"},[e("div",{staticClass:"card-subtitle"},[t._v("ABOUT")]),e("p",{staticClass:"card-desc"},[t._v(" "+t._s(t.description)+" ")])]),t.hasSocial?e("AppSocial",{attrs:{socials:t.socials}}):t._e()],1)},h=[],m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-social"},t._l(t.socials,(function(t){return e("a",{key:t.name,attrs:{href:t.link,target:"_blank"}},[e("img",{style:`${"github"===t.icon?"width: 20px":null}`,attrs:{src:i(7254)(`./${t.icon}.svg`)}})])})),0)},b=[],_={props:{socials:{type:Array,default:()=>[]}}},w=_,k=(0,d.Z)(w,m,b,!1,null,null,null),y=k.exports,C={components:{AppSocial:y},props:{active:{type:Boolean,default:!1},description:{type:String,required:!0},socials:{type:Array,default:()=>[]}},computed:{hasSocial(){return!!this.socials.length}}},x=C,A=(0,d.Z)(x,g,h,!1,null,null,null),T=A.exports,j=function(){var t=this,e=t._self._c;return e("div",{class:["card-section",{"is-active":t.active}],attrs:{id:"experience"}},[e("div",{staticClass:"card-content"},[e("div",{staticClass:"card-subtitle"},[t._v("WORK EXPERIENCE")]),t.hasExperience?e("div",{staticClass:"card-timeline"},t._l(t.experience,(function(i,a){return e("div",{key:a,staticClass:"card-item",attrs:{"data-year":i.year}},[e("div",{staticClass:"card-item-title"},[t._v(t._s(i.title))]),e("div",{staticClass:"card-item-desc"},[t._v(t._s(i.description))])])})),0):e("div",[t._v("Nothing yet.")])])])},E=[],O={props:{active:{type:Boolean,default:!1},experience:{type:Array,default:()=>[]}},computed:{hasExperience(){return!!this.experience.length}}},S=O,N=(0,d.Z)(S,j,E,!1,null,null,null),I=N.exports,L=function(){var t=this,e=t._self._c;return e("div",{class:["card-section",{"is-active":t.active}],attrs:{id:"contact"}},[e("div",{staticClass:"card-content"},[e("div",{staticClass:"card-subtitle"},[t._v("CONTACT")]),e("div",{staticClass:"card-contact-wrapper"},[e("div",{staticClass:"card-contact"},[e("img",{attrs:{src:i(186)}}),t._v(" "+t._s(t.contacts.address)+" ")]),e("div",{staticClass:"card-contact"},[e("img",{attrs:{src:i(9193)}}),t._v(" "+t._s(t.contacts.phone)+" ")]),e("div",{staticClass:"card-contact"},[e("img",{attrs:{src:i(7882)}}),t._v(" "+t._s(t.contacts.email)+" ")]),e("button",{staticClass:"contact-me"},[t._v("CONTACT ME VIA TELEGRAM")])])])])},R=[],U={props:{active:{type:Boolean,default:!1},contacts:{type:Object,required:!0}}},Z=U,B=(0,d.Z)(Z,L,R,!1,null,null,null),F=B.exports,P=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-buttons"},[e("button",{class:{"is-active":"about"===t.active},attrs:{"data-section":"#about"},on:{click:function(e){return t.onSwitchTab("about")}}},[t._v(" ABOUT ")]),e("button",{class:{"is-active":"experience"===t.active},attrs:{"data-section":"#experience"},on:{click:function(e){return t.onSwitchTab("experience")}}},[t._v(" EXPERIENCE ")]),e("button",{class:{"is-active":"contact"===t.active},attrs:{"data-section":"#contact"},on:{click:function(e){return t.onSwitchTab("contact")}}},[t._v(" CONTACT ")])])},M=[],Q={data(){return{active:"about"}},methods:{onSwitchTab(t){this.active=t,this.$emit("switch",t)}}},q=Q,$=(0,d.Z)(q,P,M,!1,null,null,null),J=$.exports,G={components:{AppHeader:f,AppAbout:T,AppExperience:I,AppContact:F,AppNavigation:J},props:{profile:{type:Object,required:!0}},data(){return{activeTab:"about"}},computed:{classesCard(){return{card:!0,"is-active":"experience"===this.activeTab||"contact"===this.activeTab}}},methods:{onTabSwitch(t){this.activeTab=t}}},H=G,D=(0,d.Z)(H,r,c,!1,null,null,null),X=D.exports,K=function(){var t=this,e=t._self._c;return e("button",{staticClass:"language-switch",on:{click:t.onClick}},[t._v(t._s(t.lang))])},V=[],W={data(){return{lang:"RU"}},created(){this.lang=window.localStorage.getItem("lang")||"RU"},watch:{lang(t){this.$emit("switch-language",t)}},methods:{onClick(){this.lang="EN"===this.lang?"RU":"EN",window.localStorage.setItem("lang",this.lang)}}},z=W,Y=(0,d.Z)(z,K,V,!1,null,null,null),tt=Y.exports,et=JSON.parse('{"N":{"avatar":"/images/avatar.jpg","fullName":"Юлия Тремиля","jobTitle":"QA Engineer","card-subtitle":"О СЕБЕ","description":"Я Junior QA специалист, со знанием английского языка.  Тестирую реальные проекты на платформе Utest, ищу постоянную работу в качестве QA инженера.  Я человек с творческими наклонностями и практическим складом ума. Прошла курс риск менеджмента для достижения лучших общих целей  на будущем месте работы.","socials":[{"name":"Facebook","link":"https://www.facebook.com/julie.olegovna","icon":"facebook"},{"name":"Github","link":"https://github.com/julian-ole","icon":"github"},{"name":"Instagram","link":"https://www.instagram.com/kot_julian/","icon":"instagram"},{"name":"LinkedIn","link":"https://www.linkedin.com/in/olegovna/","icon":"linkedin"}],"experience":[{"year":"2017","title":"Хостес","description":"Участие в выставках, фестивалях, конференциях, форумах (Лидеры России, ПМЭФ, конференция Сбербанк). "},{"year":"2018","title":"Гид в музее \\"FIFA 2018\\"","description":"Презентация экспонатов, проведение экскурсий на русском и английском языках"},{"year":"2019","title":"Отельный аниматор","description":"Спортивная и детская анимация в отелях Египта \\"Aladdin Beach Resort \\" и \\"Alf Leila wa Leila\\", общение с гостями, проведение развлекательной программы."},{"year":"2020","title":"Рекламная модель","description":"Рекламная съемка для отелей, тур.локаций, брендов одежды Египта."},{"year":"2022","title":"Инженер по качеству ПО","description":"Изучение основ тестирования, работа в Utest на фрилансе"}],"contacts":{"address":"Бали, Индонезия","phone":"+20 111 8085718","email":"yula22trem@yahoo.com"}}}'),it=JSON.parse('{"N":{"avatar":"/images/avatar.jpg","fullName":"Julia Tremilia","jobTitle":"QA Engineer","card-subtitle":"ABOUT","description":"English/Russian speaking QA engineer, so I test real projects with UTest platform and looking for permanent job in QA specialty. I am a creative person with a practical mind. Completed a risk management course to achieve better overall goals at a future job.","socials":[{"name":"Facebook","link":"https://www.facebook.com/julie.olegovna","icon":"facebook"},{"name":"Github","link":"https://github.com/julian-ole","icon":"github"},{"name":"Instagram","link":"https://www.instagram.com/kot_julian/","icon":"instagram"},{"name":"LinkedIn","link":"https://www.linkedin.com/in/olegovna/","icon":"linkedin"}],"experience":[{"year":"2017","title":"Hostess","description":"Participation in exhibitions, festivals, conferences, forums (Leaders of Russia, SPIEF, Sberbank conference)."},{"year":"2018","title":"Museum guide in \\"FIFA2018 Museum\\"","description":"Making presentation of exhibits, guid tours in Russian and English."},{"year":"2019","title":"Hotel animation","description":"Sports and children\'s animation in the hotels of Egypt \\"Aladdin Beach Resort\\" and \\"Alf Leila wa Leila\\", guest contact, entertainment program."},{"year":"2020","title":"Advertising model","description":"Advertising shooting for hotels, tourist locations, clothing brands in Egypt."},{"year":"2022","title":"QA engineer","description":"studing testing basis, freelance work with Utest"}],"contacts":{"address":"Bali, Indonesia","phone":"+20 111 8085718","email":"yula22trem@yahoo.com"}}}'),at={components:{AppCard:X,SwitchLanguage:tt},data:()=>({profile:null}),created(){this.profile=et.N},methods:{onSwitchLanguage(t){this.profile="EN"===t?it.N:et.N}}},nt=at,st=(0,d.Z)(nt,n,s,!1,null,null,null),rt=st.exports;a.ZP.config.productionTip=!1,new a.ZP({render:t=>t(rt)}).$mount("#app")},7254:function(t,e,i){var a={"./email.svg":7882,"./facebook.svg":3902,"./github.svg":8866,"./instagram.svg":673,"./linkedin.svg":8500,"./location.svg":186,"./phone.svg":9193};function n(t){var e=s(t);return i(e)}function s(t){if(!i.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=s,t.exports=n,n.id=7254},7882:function(t,e,i){"use strict";t.exports=i.p+"img/email.99888294.svg"},3902:function(t,e,i){"use strict";t.exports=i.p+"img/facebook.ea4c8d95.svg"},8866:function(t,e,i){"use strict";t.exports=i.p+"img/github.d4bcae61.svg"},673:function(t,e,i){"use strict";t.exports=i.p+"img/instagram.15875002.svg"},8500:function(t,e,i){"use strict";t.exports=i.p+"img/linkedin.4cbad18e.svg"},186:function(t,e,i){"use strict";t.exports=i.p+"img/location.b7ffd8d4.svg"},9193:function(t,e,i){"use strict";t.exports=i.p+"img/phone.0e77ae39.svg"}},e={};function i(a){var n=e[a];if(void 0!==n)return n.exports;var s=e[a]={exports:{}};return t[a](s,s.exports,i),s.exports}i.m=t,function(){var t=[];i.O=function(e,a,n,s){if(!a){var r=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],s=t[u][2];for(var c=!0,o=0;o<a.length;o++)(!1&s||r>=s)&&Object.keys(i.O).every((function(t){return i.O[t](a[o])}))?a.splice(o--,1):(c=!1,s<r&&(r=s));if(c){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[a,n,s]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.p="/"}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,s,r=a[0],c=a[1],o=a[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(n in c)i.o(c,n)&&(i.m[n]=c[n]);if(o)var u=o(i)}for(e&&e(a);l<r.length;l++)s=r[l],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(u)},a=self["webpackChunkprofile_card_ui"]=self["webpackChunkprofile_card_ui"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(3558)}));a=i.O(a)})();
//# sourceMappingURL=app.36d293e9.js.map