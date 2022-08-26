(function(){"use strict";var e={8971:function(e,r,t){var s=t(9242),n=t(3396),i=t(7139);const o=["href"];function a(e,r,t,s,a,d){const c=(0,n.up)("error-modal"),l=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[a.error?((0,n.wg)(),(0,n.j4)(c,{key:0,onClose:r[0]||(r[0]=e=>a.error=!1)},(0,n.Nv)({header:(0,n.w5)((()=>[(0,n._)("h2",null,(0,i.zw)(a.errorText),1)])),body:(0,n.w5)((()=>[])),_:2},[d.authorized?void 0:{name:"footer",fn:(0,n.w5)((()=>[(0,n._)("a",{href:a.authURL,class:"auth_button"},"Авторизоваться",8,o)]))}]),1024)):(0,n.kq)("",!0),(0,n.Wm)(l,{onError:r[1]||(r[1]=e=>d.setError(e))})],64)}t(6699);const d={class:"modal-backdrop"},c={class:"modal"},l={class:"modal-header"},u={class:"modal-body"},h={class:"modal-footer"};function p(e,r,t,s,i,o){return(0,n.wg)(),(0,n.iD)("div",d,[(0,n._)("div",c,[(0,n._)("header",l,[(0,n.WI)(e.$slots,"header",{},(()=>[(0,n._)("button",{type:"button",class:"btn-close",onClick:r[0]||(r[0]=(...e)=>o.close&&o.close(...e))},"x")]))]),(0,n._)("section",u,[(0,n.WI)(e.$slots,"body")]),(0,n._)("footer",h,[(0,n.WI)(e.$slots,"footer",{},(()=>[(0,n._)("button",{type:"button",class:"btn-green",onClick:r[1]||(r[1]=(...e)=>o.close&&o.close(...e))},"Close")]))])])])}var m={name:"ErrorModal",props:{errorText:{type:String,required:!0}},methods:{close(){this.$emit("close")}}},f=t(89);const g=(0,f.Z)(m,[["render",p]]);var _=g,v=t(65);const w="ADD_USER",y="REMOVE_USER",k="LOAD_USERS",F="STORE_APIKEY",b="AUTHORIZED",z="MY_SORTED_FRIENDS";var x=(0,v.MT)({state:{users:new Map,apiKey:"",authorized:!1,mySortedFriends:[]},getters:{getUserList(e){return Array.from(e.users.values()).sort(((e,r)=>e.name>r.name?1:-1))},getUserById:e=>r=>e.users.get(r),getMyFriendsById:e=>r=>Array.from(e.users.values()).filter((e=>e.friendList.includes(r))).sort(((e,r)=>e.name>r.name?1:-1)),getApiKey(e){return e.apiKey},getAuthorizedStatus(e){return e.authorized},getMySortedFriends(e){return e.mySortedFriends},getFriendById:e=>r=>e.mySortedFriends.find((e=>e.id===r))},mutations:{[w](e,r){e.users.set(r["id"],r["user"]),localStorage.setItem("userList",JSON.stringify(Array.from(e.users.entries())))},[y](e,r){e.users.delete(r),localStorage.setItem("userList",JSON.stringify(Array.from(e.users.entries())))},[k](e){const r=new Map(JSON.parse(localStorage.getItem("userList")));e.users=r},[F](e,r){e.apiKey=r},[b](e){e.authorized=!0},[z](e,r){e.mySortedFriends=r}},actions:{addUser({commit:e},r){e(w,r)},removeUser({commit:e},r){e(y,r)}},modules:{}});const $="https://nikgogolev.github.io/vk-friends-app",S=`https://oauth.vk.com/authorize?client_id=8228596&display=page&redirect_uri=${$}&scope=friends,photos,status,offline,groups,email&response_type=token&v=5.131&state=123456`,A="https://api.vk.com/method",R=50,D=150;var U={components:{ErrorModal:_},data(){return{authURL:S,error:!1,errorText:""}},methods:{setError(e){this.error=!0,this.errorText=e}},computed:{authorized(){return x.getters.getAuthorizedStatus}},created(){x.commit(k);const e=new URL(document.location).hash;if(e.includes("#access_token")){const r=e.substring(e.indexOf("#access_token=")+"#access_token=".length,e.indexOf("&expires_in"));x.commit(F,r),x.commit(b),this.error=!1}else this.setError("Вы не авторизованы. Авторизуйтесь, перейдя по ссылке")}};const E=(0,f.Z)(U,[["render",a]]);var O=E,C=t(5431);(0,C.z)("/vk-friends-app/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var T=t(2483);const K={key:0,class:"main_container"},q={class:"friend_list-container"},L={class:"spinner",id:"spinner"},I=(0,n._)("h3",null,"Идет построение списка друзей",-1),M=[I],j={class:"friend-list"},W={key:0},H={class:"user_list-container"},B={class:"user_list"},N={key:0,class:"header-sticky"};function P(e,r,t,i,o,a){const d=(0,n.up)("add-user-form"),c=(0,n.up)("friend-card"),l=(0,n.up)("user-card");return a.authorized?((0,n.wg)(),(0,n.iD)("div",K,[(0,n._)("div",q,[(0,n.Wm)(d,{onError:r[0]||(r[0]=e=>a.setError(e))}),a.userList.length?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:r[1]||(r[1]=(...e)=>a.calculate&&a.calculate(...e)),class:"calculate_button"}," Построить ")):(0,n.kq)("",!0),(0,n.wy)((0,n._)("div",L,M,512),[[s.F8,o.pending]]),(0,n._)("div",j,[o.mySortedFriends.length?((0,n.wg)(),(0,n.iD)("h2",W,"Список друзей")):(0,n.kq)("",!0),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.mySortedFriends,(e=>((0,n.wg)(),(0,n.j4)(c,{key:e.id,friend:e,brightness:(e.inFriendWithAmount-a.minFriends)*((o.maxBrightness-o.minBrightness)/(a.maxFriends-a.minFriends))+o.minBrightness},null,8,["friend","brightness"])))),128))])]),(0,n._)("div",H,[(0,n._)("div",B,[a.userList.length?((0,n.wg)(),(0,n.iD)("h2",N," Список пользователей ")):(0,n.kq)("",!0),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.userList,(e=>((0,n.wg)(),(0,n.j4)(l,{key:e.id,user:e,onUserRemoved:r[2]||(r[2]=e=>o.mySortedFriends=[])},null,8,["user"])))),128))])])])):(0,n.kq)("",!0)}function Y(e,r,t,i,o,a){const d=(0,n.up)("search-result");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=e=>o.searchText=e),onInput:r[1]||(r[1]=(...e)=>a.searchTimeOut&&a.searchTimeOut(...e)),class:"search-input",placeholder:"Введите имя пользователя или идентификатор"},null,544),[[s.nr,o.searchText]]),(0,n.Wm)(d,{addUser:a.addUser,searchResult:o.searchResult},null,8,["addUser","searchResult"]),o.searchResult.length?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:r[2]||(r[2]=(...e)=>a.search&&a.search(...e)),class:"more-button"}," Загрузить еще ")):(0,n.kq)("",!0)])}const Z={key:0};function V(e,r,t,s,i,o){const a=(0,n.up)("search-result-card");return(0,n.wg)(),(0,n.iD)(n.HY,null,[t.searchResult?.length?((0,n.wg)(),(0,n.iD)("h2",Z,"Результаты поиска")):(0,n.kq)("",!0),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.searchResult,(e=>((0,n.wg)(),(0,n.j4)(a,{key:e.id,user:e,onClick:r=>t.addUser(e)},null,8,["user","onClick"])))),128))],64)}const J={class:"result_card"},X=["src"],G={class:"result_card-name"};function Q(e,r,t,s,o,a){return(0,n.wg)(),(0,n.iD)("div",J,[(0,n._)("img",{src:t.user.photo_100,alt:"photo",class:"result_card-img"},null,8,X),(0,n._)("p",G,(0,i.zw)(t.user.first_name)+" "+(0,i.zw)(t.user.last_name),1)])}var ee={name:"SearchResultCard",props:{user:{type:Object,required:!0}}};const re=(0,f.Z)(ee,[["render",Q]]);var te=re,se={components:{SearchResultCard:te},name:"SearchResult",props:{searchResult:{type:[],required:!1},addUser:{type:Function,required:!0}}};const ne=(0,f.Z)(se,[["render",V]]);var ie=ne,oe=t(7535),ae={name:"AddUserForm",data(){return{searchText:"",searchResult:[],apiKey:""}},created(){this.apiKey=x.getters.getApiKey},methods:{async searchTimeOut(){this.timer&&(clearTimeout(this.timer),this.timer=null),this.timer=setTimeout((()=>{this.onInput()}),500)},async onInput(){try{const e=`${A}/users.search?q=${this.searchText}&access_token=${this.apiKey}&v=5.131`,r=await(0,oe.R)(e);if(r.response){const e=r.response.items.reduce(((e,r)=>e.concat([r.id])),[]).join(","),t=`${A}/users.get?user_ids=${e}&fields=photo_100,sex,bdate,is_friend&access_token=${this.apiKey}&v=5.131`,s=await(0,oe.R)(t);this.searchResult=s.response}r.error&&this.$emit("error",r.error.error_msg)}catch(e){this.$emit("error",e.message||e.statusText)}},async search(){try{const e=this.searchResult.length,r=`${A}/users.search?q=${this.searchText}&offset=${e}&access_token=${this.apiKey}&v=5.131`,t=await(0,oe.R)(r);if(t.response){const e=t.response.items.reduce(((e,r)=>e.concat([r.id])),[]).join(","),r=`${A}/users.get?user_ids=${e}&fields=photo_100,sex,bdate,is_friend&access_token=${this.apiKey}&v=5.131`,s=await(0,oe.R)(r);this.searchResult=[...this.searchResult,...s.response]}t.error&&this.$emit("error",t.error.error_msg)}catch(e){this.$emit("error",e.message||e.statusText)}},async addUser(e){try{const r=`${A}/friends.get?user_id=${e.id}&access_token=${this.apiKey}&v=5.131`,t=await(0,oe.R)(r);if(t.response){const r=t.response;x.commit(w,{id:e.id,user:{id:e.id,photo_100:e.photo_100,first_name:e.first_name,last_name:e.last_name,sex:e.sex,bdate:e.bdate,counters:{friends:r.count},friendList:r.items,isFriend:e.is_friend,inFriendWithAmount:0}})}t.error&&this.$emit("error",t.error.error_msg)}catch(r){this.$emit("error",r.message||r.statusText)}this.searchText="",this.searchResult=[]}},components:{SearchResult:ie}};const de=(0,f.Z)(ae,[["render",Y]]);var ce=de;const le={class:"user-card"},ue=["src"],he={class:"user-card-description"},pe={class:"user-card-description-header"},me={class:"user-card-description-text"};function fe(e,r,t,o,a,d){return(0,n.wg)(),(0,n.iD)("div",le,[(0,n._)("img",{src:t.user.photo_100,alt:"user photo",class:"user-card-img"},null,8,ue),(0,n._)("div",he,[(0,n._)("h2",pe,(0,i.zw)(t.user.first_name)+", "+(0,i.zw)(t.user.last_name),1),(0,n._)("p",me,(0,i.zw)(t.user.isFriend?"Is my friend":"Not my friend"),1)]),(0,n._)("button",{onClick:r[0]||(r[0]=(0,s.iM)((e=>d.removeUser(t.user["id"])),["stop"])),class:"user-card-delete_button"}," X ")])}var ge={name:"UserCard",methods:{removeUser(e){x.commit(y,e),this.$emit("userRemoved")}},props:{user:{type:Object,required:!0}}};const _e=(0,f.Z)(ge,[["render",fe]]);var ve=_e;const we=["src"],ye={class:"friend-card-description"},ke={class:"friend-card-description-header"},Fe={class:"friend-card-description-text"},be={class:"friend-card-description-text"},ze={class:"friend-card-description-text"},xe={class:"friend-card-description-text"},$e={class:"friend-card-description-text"};function Se(e,r,t,s,o,a){return(0,n.wg)(),(0,n.iD)("div",{class:"friend-card",onClick:r[0]||(r[0]=(...e)=>a.navigateToFriend&&a.navigateToFriend(...e)),style:(0,i.j5)({filter:`brightness(${t.brightness}%)`})},[(0,n._)("img",{src:t.friend.photo_100,alt:"friend photo",class:"friend-card-img"},null,8,we),(0,n._)("div",ye,[(0,n._)("h2",ke,(0,i.zw)(t.friend.first_name)+", "+(0,i.zw)(t.friend.last_name),1),(0,n._)("p",Fe," Sex: "+(0,i.zw)(1===t.friend.sex?"female":"male"),1),(0,n._)("p",be,"Age: "+(0,i.zw)(t.friend.bdate),1),(0,n._)("p",ze," Friends amount: "+(0,i.zw)(t.friend.counters?.friends),1),(0,n._)("p",xe,"ID: "+(0,i.zw)(t.friend.id),1),(0,n._)("p",$e,(0,i.zw)(t.friend["isFriend"]?"Is my friend":"Not my friend"),1)])],4)}var Ae={name:"FriendCard",methods:{navigateToFriend(){gr.push({name:"friend",params:{id:this.friend.id}})}},props:{friend:{type:Object,required:!0},brightness:{type:Number,required:!1}}};const Re=(0,f.Z)(Ae,[["render",Se]]);var De=Re,Ue=t(5452);const Ee={lines:13,length:38,width:17,radius:45,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-shrink",direction:1,color:"#000000",fadeColor:"transparent",top:"250%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"relative"};var Oe={name:"HomeView",created(){this.mySortedFriends=x.getters.getMySortedFriends,this.apiKey=x.getters.getApiKey},data(){return{minBrightness:R,maxBrightness:D,mySortedFriends:[],apiKey:"",pending:!1}},methods:{setError(e){this.$emit("error",e)},async calculate(){this.pending=!0;const e=document.getElementById("spinner");new Ue.$(Ee).spin(e);this.mySortedFriends=[];const r=x.getters.getUserList;let t=new Set;r.forEach((e=>{t=new Set([...t,...e.friendList])}));const s=[],n=[];t.forEach((e=>{s.push(`API.users.get({"user_ids":"${e}","fields": "bdate,sex,counters,photo_100"})`)}));while(s.length>0){const e=s.splice(0,25).join(","),r=`${A}/execute?code=return [${e}];&access_token=${this.apiKey}&v=5.131`,t=await(0,oe.R)(r);t.response&&t.response.forEach((e=>{e[0].deactivated||n.push(e[0])}))}const i=n.sort(((e,r)=>e.first_name+e.last_name>r.first_name+r.last_name?1:-1));i.forEach((e=>{e.inFriendWithAmount=0})),i.forEach((e=>{r.forEach((r=>{r.friendList.includes(e.id)&&e.inFriendWithAmount++}))})),this.mySortedFriends=i,x.commit(z,i),this.pending=!1}},computed:{averageFriends(){return this.mySortedFriends.reduce(((e,r)=>e+r.inFriendWithAmount),0)/this.mySortedFriends.length},minFriends(){const e=[...this.mySortedFriends].sort(((e,r)=>e.inFriendWithAmount-r.inFriendWithAmount));return e[0]?.inFriendWithAmount},maxFriends(){const e=[...this.mySortedFriends].sort(((e,r)=>e.inFriendWithAmount-r.inFriendWithAmount));return e[e.length-1]?.inFriendWithAmount},userList(){return x.getters.getUserList},authorized(){return x.getters.getAuthorizedStatus}},components:{AddUserForm:ce,UserCard:ve,FriendCard:De}};const Ce=(0,f.Z)(Oe,[["render",P]]);var Te=Ce;const Ke={key:0},qe=(0,n.Uk)("Назад"),Le=["src"],Ie={key:0},Me={class:"friend_view-friend_list"},je={key:1};function We(e,r,t,s,o,a){const d=(0,n.up)("router-link"),c=(0,n.up)("friend-card"),l=(0,n.up)("user-post");return a.authorized?((0,n.wg)(),(0,n.iD)("div",Ke,[(0,n.Wm)(d,{to:"/",class:"home_link"},{default:(0,n.w5)((()=>[qe])),_:1}),(0,n._)("h1",null,(0,i.zw)(a.friend?.first_name)+", "+(0,i.zw)(a.friend?.last_name),1),(0,n._)("img",{src:a.friend?.photo_100,alt:"friend photo"},null,8,Le),a.friendList.length?((0,n.wg)(),(0,n.iD)("h2",Ie,"Друзья")):(0,n.kq)("",!0),(0,n._)("div",Me,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.friendList,(e=>((0,n.wg)(),(0,n.j4)(c,{key:e.id,friend:e},null,8,["friend"])))),128))]),o.posts.length?((0,n.wg)(),(0,n.iD)("h2",je,"Посты")):(0,n.kq)("",!0),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(this.posts.filter((e=>"undefined"===typeof e.attachment||e.attachments.some((e=>"photo"===e.type)))),(e=>((0,n.wg)(),(0,n.iD)("div",{class:"friend-posts",key:e.id},[(0,n.Wm)(l,{post:e},null,8,["post"])])))),128)),o.posts.length?((0,n.wg)(),(0,n.iD)("button",{key:2,onClick:r[0]||(r[0]=(...e)=>a.getPosts&&a.getPosts(...e)),class:"more-button"}," Загрузить еще ")):(0,n.kq)("",!0)])):(0,n.kq)("",!0)}const He={class:"post_author"},Be={class:"post_date"},Ne={class:"rel_date"},Pe={class:"wall_post_text"},Ye={class:"post-attchments"},Ze={key:0,class:"post-photo"},Ve=["src"],Je={key:1,class:"post-video"},Xe=["src"],Ge={class:"post_icons"},Qe={class:"post_icons-group"},er=(0,n._)("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("g",{fill:"none","fill-rule":"evenodd"},[(0,n._)("path",{d:"M0 0h24v24H0z"}),(0,n._)("path",{d:"M16 4a5.95 5.95 0 0 0-3.89 1.7l-.12.11-.12-.11A5.96 5.96 0 0 0 7.73 4 5.73 5.73 0 0 0 2 9.72c0 3.08 1.13 4.55 6.18 8.54l2.69 2.1c.66.52 1.6.52 2.26 0l2.36-1.84.94-.74c4.53-3.64 5.57-5.1 5.57-8.06A5.73 5.73 0 0 0 16.27 4zm.27 1.8a3.93 3.93 0 0 1 3.93 3.92v.3c-.08 2.15-1.07 3.33-5.51 6.84l-2.67 2.08a.04.04 0 0 1-.04 0L9.6 17.1l-.87-.7C4.6 13.1 3.8 11.98 3.8 9.73A3.93 3.93 0 0 1 7.73 5.8c1.34 0 2.51.62 3.57 1.92a.9.9 0 0 0 1.4-.01c1.04-1.3 2.2-1.91 3.57-1.91z",fill:"currentColor","fill-rule":"nonzero"})])],-1),rr={class:"post_icons-group"},tr=(0,n._)("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("g",{fill:"none","fill-rule":"evenodd"},[(0,n._)("path",{d:"M0 0h24v24H0z"}),(0,n._)("path",{d:"M16.9 4H7.1c-1.15 0-1.73.11-2.35.44-.56.3-1 .75-1.31 1.31C3.11 6.37 3 6.95 3 8.1v5.8c0 1.15.11 1.73.44 2.35.3.56.75 1 1.31 1.31l.15.07c.51.25 1.04.35 1.95.37h.25v2.21c0 .44.17.85.47 1.16l.12.1c.64.55 1.6.52 2.21-.08L13.37 18h3.53c1.15 0 1.73-.11 2.35-.44.56-.3 1-.75 1.31-1.31.33-.62.44-1.2.44-2.35V8.1c0-1.15-.11-1.73-.44-2.35a3.17 3.17 0 0 0-1.31-1.31A4.51 4.51 0 0 0 16.9 4zM6.9 5.8h9.99c.88 0 1.18.06 1.5.23.25.13.44.32.57.57.17.32.23.62.23 1.5v6.16c-.02.61-.09.87-.23 1.14-.13.25-.32.44-.57.57-.32.17-.62.23-1.5.23h-4.02a.9.9 0 0 0-.51.26l-3.47 3.4V17.1c0-.5-.4-.9-.9-.9H6.74a2.3 2.3 0 0 1-1.14-.23 1.37 1.37 0 0 1-.57-.57c-.17-.32-.23-.62-.23-1.5V7.74c.02-.61.09-.87.23-1.14.13-.25.32-.44.57-.57.3-.16.58-.22 1.31-.23z",fill:"currentColor","fill-rule":"nonzero"})])],-1),sr={class:"post_icons-group"},nr=(0,n._)("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("g",{fill:"none","fill-rule":"evenodd"},[(0,n._)("path",{d:"M0 0h24v24H0z"}),(0,n._)("path",{d:"M12 3.73c-1.12.07-2 1-2 2.14v2.12h-.02a9.9 9.9 0 0 0-7.83 10.72.9.9 0 0 0 1.61.46l.19-.24a9.08 9.08 0 0 1 5.84-3.26l.2-.03.01 2.5a2.15 2.15 0 0 0 3.48 1.69l7.82-6.14a2.15 2.15 0 0 0 0-3.38l-7.82-6.13c-.38-.3-.85-.46-1.33-.46zm.15 1.79c.08 0 .15.03.22.07l7.82 6.14a.35.35 0 0 1 0 .55l-7.82 6.13a.35.35 0 0 1-.57-.28V14.7a.9.9 0 0 0-.92-.9h-.23l-.34.02c-2.28.14-4.4.98-6.12 2.36l-.17.15.02-.14a8.1 8.1 0 0 1 6.97-6.53.9.9 0 0 0 .79-.9V5.87c0-.2.16-.35.35-.35z",fill:"currentColor","fill-rule":"nonzero"})])],-1),ir={class:"post_icons-group"},or=(0,n._)("svg",{fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("g",{fill:"currentColor"},[(0,n._)("path",{d:"M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"}),(0,n._)("path",{"clip-rule":"evenodd",d:"M15.5 8c0-1-3-5-7.5-5S.5 7 .5 8s3 5 7.5 5 7.5-4 7.5-5zm-4 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z","fill-rule":"evenodd"})])],-1);function ar(e,r,t,s,o,a){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",He,[(0,n._)("h5",null,(0,i.zw)(e.author),1)]),(0,n._)("div",Be,[(0,n._)("span",Ne,(0,i.zw)(new Date(1e3*t.post.date).toLocaleString()),1)]),(0,n._)("div",Pe,(0,i.zw)(t.post.text),1),(0,n._)("div",Ye,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.post.attachments,((e,r)=>((0,n.wg)(),(0,n.iD)(n.HY,{key:r},[e.photo?((0,n.wg)(),(0,n.iD)("div",Ze,[(0,n._)("img",{src:e.photo.sizes[2].url,alt:"post photo"},null,8,Ve)])):(0,n.kq)("",!0),e.video?((0,n.wg)(),(0,n.iD)("div",Je,[(0,n._)("video",{src:e.video.url},null,8,Xe)])):(0,n.kq)("",!0)],64)))),128))]),(0,n._)("div",Ge,[(0,n._)("div",Qe,[er,(0,n._)("div",null,(0,i.zw)(t.post.likes.count),1)]),(0,n._)("div",rr,[tr,(0,n._)("div",null,(0,i.zw)(t.post.comments?.count),1)]),(0,n._)("div",sr,[nr,(0,n._)("div",null,(0,i.zw)(t.post.reposts?.count),1)]),(0,n._)("div",ir,[or,(0,n._)("div",null,(0,i.zw)(t.post.views?.count),1)])])],64)}var dr={name:"UserPost",props:{post:{type:Object,required:!0}}};const cr=(0,f.Z)(dr,[["render",ar]]);var lr=cr,ur={name:"FriendView",async created(){await this.getPosts()},computed:{id(){return this.$route.params.id},friendList(){return x.getters.getMyFriendsById(+this.$route.params.id)},friend(){return x.getters.getFriendById(+this.$route.params.id)},authorized(){return x.getters.getAuthorizedStatus}},data(){return{apiKey:"",posts:[]}},methods:{setError(e){this.$emit("error",e)},async getPosts(){try{this.apiKey=x.getters.getApiKey;const e=`${A}/wall.get?owner_id=${this.friend["id"]}&offset=${this.posts.length}&access_token=${this.apiKey}&v=5.131`,r=await(0,oe.R)(e);r.response&&(this.posts=[...this.posts,...r.response.items]),r.error&&this.$emit("error",r.error.error_msg)}catch(e){this.$emit("error",e.message||e.statusText)}}},watch:{async id(){this.$route.params["id"]&&(this.posts=[],await this.getPosts())}},components:{FriendCard:De,UserPost:lr}};const hr=(0,f.Z)(ur,[["render",We]]);var pr=hr;const mr=[{path:"/",name:"home",component:Te},{path:"/friend/:id",name:"friend",component:pr}],fr=(0,T.p7)({history:(0,T.PO)("/vk-friends-app/"),routes:mr});var gr=fr;(0,s.ri)(O).use(x).use(gr).mount("#app")}},r={};function t(s){var n=r[s];if(void 0!==n)return n.exports;var i=r[s]={exports:{}};return e[s](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(r,s,n,i){if(!s){var o=1/0;for(l=0;l<e.length;l++){s=e[l][0],n=e[l][1],i=e[l][2];for(var a=!0,d=0;d<s.length;d++)(!1&i||o>=i)&&Object.keys(t.O).every((function(e){return t.O[e](s[d])}))?s.splice(d--,1):(a=!1,i<o&&(o=i));if(a){e.splice(l--,1);var c=n();void 0!==c&&(r=c)}}return r}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[s,n,i]}}(),function(){t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,{a:r}),r}}(),function(){t.d=function(e,r){for(var s in r)t.o(r,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:r[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={143:0};t.O.j=function(r){return 0===e[r]};var r=function(r,s){var n,i,o=s[0],a=s[1],d=s[2],c=0;if(o.some((function(r){return 0!==e[r]}))){for(n in a)t.o(a,n)&&(t.m[n]=a[n]);if(d)var l=d(t)}for(r&&r(s);c<o.length;c++)i=o[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},s=self["webpackChunkvk_friends_app"]=self["webpackChunkvk_friends_app"]||[];s.forEach(r.bind(null,0)),s.push=r.bind(null,s.push.bind(s))}();var s=t.O(void 0,[998],(function(){return t(8971)}));s=t.O(s)})();
//# sourceMappingURL=app.9ab9c933.js.map