(this["webpackJsonpreact-instagram-clone"]=this["webpackJsonpreact-instagram-clone"]||[]).push([[0],{240:function(e,t,a){e.exports=a(458)},245:function(e,t,a){},246:function(e,t,a){},282:function(e,t,a){},285:function(e,t,a){},286:function(e,t,a){},287:function(e,t,a){},458:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(29),o=a.n(r),c=(a(245),a(18)),l=a(19),i=a(21),m=a(20),u=(a(246),a(60)),d=a(15),p=a(7),E=a(74),h=a.n(E);a(251),a(253),a(254);h.a.initializeApp({apiKey:"AIzaSyA5dllPi6RVVfRkPGHHNn9A8YbBc5iGc5o",authDomain:"react-instagram-clone-e4dd8.firebaseapp.com",databaseURL:"https://react-instagram-clone-e4dd8.firebaseio.com",projectId:"react-instagram-clone-e4dd8",storageBucket:"react-instagram-clone-e4dd8.appspot.com",messagingSenderId:"434481422975",appId:"1:434481422975:web:05536aa59ebd4ff586954a"});var g=h.a.firestore(),f=h.a.auth(),b=h.a.storage(),v=function(e){return function(t){g.collection("posts").doc(e).collection("comments").orderBy("createdAt","desc").onSnapshot((function(e){var a=[];e.docs.map((function(e){return a.push(e.data())})),t({type:"SET_COMMENTS",payload:a})}))}},y=function(e,t){return function(a){a({type:"SET_LOADING"}),g.collection("posts").doc(e).collection("comments").add({comment:t.comment,username:t.username,createdAt:(new Date).toISOString()}).then((function(){a({type:"CLEAR_LOADING"})}))}},N=a(107),w=a(100),O=a.n(w),_=a(109),S={postComment:y},j=Object(d.b)((function(e){return{user:e.user}}),S)((function(e){var t=Object(n.useState)(""),a=Object(_.a)(t,2),r=a[0],o=a[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement("form",{action:"",onSubmit:function(t){t.preventDefault(),e.postComment(e.id,{comment:r,username:e.user.name}),setTimeout((function(){o("")}),500)},className:"d-flex"},s.a.createElement("input",{type:"text",placeholder:"Add comment",className:"form-control",value:r,onChange:function(e){o(e.target.value)},required:!0}),s.a.createElement("button",{className:"btn btn-md border"},"Comment")))})),x=a(23),k=a(463),C=a(464),L=a(238),A=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={comments:[],liked:!1},e.like=function(){e.props.likePost(e.props.post.id,e.props.user.name),e.setState({liked:!0})},e.unlike=function(){e.props.unlikePost(e.props.post.id,e.props.user.name),e.setState({liked:!1})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.collection("posts").doc(this.props.post.id).collection("comments").orderBy("createdAt","desc").onSnapshot((function(t){var a=[];t.docs.map((function(e){return a.push(e.data())})),e.setState({comments:a})})),g.doc("posts/".concat(this.props.post.id)).get().then((function(t){t.exists&&g.collection("likes").where("name","==",e.props.user.name).where("postId","==",e.props.post.id).limit(1).get().then((function(t){t.empty||e.setState({liked:!0})}))}))}},{key:"render",value:function(){var e=this.props.post,t=e.id,a=e.username,n=e.caption,r=e.imageUrl,o=e.createdAt,c=e.likeCount,l=e.uid,i=this.state.comments,m=0===i.length?s.a.createElement("p",{className:"lead text-primary"},"No comments yet!"):s.a.createElement(s.a.Fragment,null,i.length>3?s.a.createElement(x.b,{to:"/post/".concat(t)},s.a.createElement("p",{className:"text-primary"},"View all ",i.length," comments")):s.a.createElement("p",null),i.slice(0,3).map((function(e,t){return s.a.createElement("p",{key:t,className:"post__text"},s.a.createElement("strong",null,e.username," "),e.comment)})));return s.a.createElement("div",{className:"post"},s.a.createElement("div",{className:"post__header"},s.a.createElement("div",{className:"d-flex align-items-center"},s.a.createElement("img",{className:"avatar",src:"https://www.w3schools.com/howto/img_avatar.png",alt:"avatar"}),s.a.createElement("p",{className:"mx-4"},s.a.createElement("strong",null,a))),l===this.props.user.uid?s.a.createElement(k.a,{as:C.a,title:".."},s.a.createElement(L.a.Item,{eventKey:"1"},"Edit"),s.a.createElement(L.a.Item,{eventKey:"2"},"Delete ")):null),s.a.createElement("img",{src:r,alt:"",className:"post__image"}),s.a.createElement("div",{className:"post__footer"},this.state.liked?s.a.createElement("button",{className:"btn",disabled:this.props.ui.loading,onClick:this.unlike},s.a.createElement(u.b,{size:32,className:"icon",color:"red"})):s.a.createElement("button",{className:"btn",disabled:this.props.ui.loading,onClick:this.like},s.a.createElement(u.a,{size:32,className:"icon"})),s.a.createElement("p",null,s.a.createElement("strong",null,c," likes")),s.a.createElement("p",{className:"post__text mb-0"},s.a.createElement(N.a,{color:"orangered",className:"mt-0 mb-1"}),s.a.createElement("strong",null,a)," ",n),m,s.a.createElement("p",{className:"post__time"},O()(o).startOf("day").fromNow())),s.a.createElement("hr",{className:"mt-4"}),s.a.createElement("div",{className:"comments"},s.a.createElement(j,{id:this.props.post.id})))}}]),a}(n.Component),P={getComments:v,likePost:function(e,t){return function(a){a({type:"SET_LOADING"}),g.doc("posts/".concat(e)).get().then((function(n){if(n.exists){var s=n.data().likeCount;g.collection("likes").add({name:t,postId:e}).then((function(){g.doc("posts/".concat(e)).update({likeCount:s+1}),a({type:"CLEAR_LOADING"})}))}})).catch((function(e){return console.log(e)}))}},unlikePost:function(e,t){return function(a){a({type:"SET_LOADING"}),g.doc("posts/".concat(e)).get().then((function(n){if(n.exists){var s=n.data().likeCount;g.collection("likes").where("name","==",t).where("postId","==",e).get().then((function(t){t.forEach((function(t){g.doc("/likes/".concat(t.id)).delete().then((function(){g.doc("posts/".concat(e)).update({likeCount:s-1}),a({type:"CLEAR_LOADING"})}))}))}))}})).catch((function(e){return console.log(e)}))}}},R=Object(d.b)((function(e){return{data:e.data,user:e.user,ui:e.ui}}),P)(A),T=a(49),D=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getPosts()}},{key:"render",value:function(){var e=this.props.data.posts,t=null===e?s.a.createElement("div",{className:"col-md-12 mx-auto pt-5 mt-5 loading"},s.a.createElement(T.BeatLoader,{size:50,color:"#007BFF"})):0===e.length?s.a.createElement("h1",{className:"display-5 mt-4 mb-2 text-center"},"No posts yet !!!"):e.map((function(e){return s.a.createElement(R,{key:e.id,post:e})}));return s.a.createElement("div",{className:"col-md-7 col-sm-12"},t)}}]),a}(n.Component),I={getPosts:function(){return function(e){g.collection("posts").orderBy("createdAt","desc").onSnapshot((function(t){var a=[];t.docs.map((function(e){return a.push(Object(p.a)({id:e.id},e.data())),e})),e({type:"SET_POSTS",payload:a})}))}}},U=Object(d.b)((function(e){return{data:e.data}}),I)(D),G=(a(282),a(229)),B=function(){return function(e){e({type:"CLEAR_ERROR"})}},z={logout:function(){return function(e){f.signOut().then((function(){e({type:"LOGOUT_USER"})})).catch((function(e){return console.log(e)}))}}},F=Object(d.b)((function(e){return{user:e.user}}),z)((function(e){var t=e.user.authenticated?s.a.createElement("div",{className:"d-flex"},s.a.createElement(x.b,{className:"d-flex",to:"/profile",title:e.user.name},s.a.createElement("img",{className:"avatar profile",src:"https://www.w3schools.com/howto/img_avatar.png",alt:"avatar"}),s.a.createElement("h4",{className:"mt-2 ml-2"},e.user.name)),s.a.createElement(x.b,{to:"/"},s.a.createElement(G.a,{title:"Logout",onClick:e.logout,size:32,className:"text-danger ml-2"}))):null;return s.a.createElement("div",{className:"app__header pl-md-4"},s.a.createElement("div",{className:"col-md-10 col-12 mx-auto d-flex justify-content-between"},s.a.createElement(x.b,{to:"/"},s.a.createElement("img",{src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"Instagram",className:"app__headerImage "})),t))})),W={authenticated:!1,name:"",bio:"",address:"",website:"",uid:"",error:""},q={posts:null,post:null,comments:[],liked:!1,userPosts:null,userLikedPosts:null},K=a(230),M=a(50),H={loading:!1},V=[K.a],X=Object(M.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_USER":return Object(p.a)(Object(p.a)({},e),{},{authenticated:!0},t.payload);case"LOGOUT_USER":return Object(p.a)({},W);case"SET_ERROR":return Object(p.a)(Object(p.a)({},e),{},{error:t.payload});case"CLEAR_ERROR":return Object(p.a)(Object(p.a)({},e),{},{error:""});default:return Object(p.a)({},e)}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POSTS":return Object(p.a)(Object(p.a)({},e),{},{posts:t.payload});case"SET_POST":return Object(p.a)(Object(p.a)({},e),{},{post:t.payload});case"SET_COMMENTS":return Object(p.a)(Object(p.a)({},e),{},{comments:t.payload});case"SET_LIKED":case"SET_UNLIKED":return Object(p.a)(Object(p.a)({},e),{},{liked:!0});case"SET_USERPOSTS":return Object(p.a)(Object(p.a)({},e),{},{userPosts:t.payload});case"SET_USERLIKEDPOSTS":return Object(p.a)(Object(p.a)({},e),{},{userLikedPosts:t.payload});default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADING":return Object(p.a)(Object(p.a)({},e),{},{loading:!0});case"CLEAR_LOADING":return Object(p.a)(Object(p.a)({},e),{},{loading:!1});default:return e}}}),J=Object(M.e)(X,{},Object(M.d)(M.a.apply(void 0,V),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),Y={caption:"",progress:0,image:null,showProgressBar:!1},Q=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state=Object(p.a)({},Y),e.handleChange=function(t){"caption"===t.target.name&&e.setState({caption:t.target.value}),"image"===t.target.name&&e.setState({image:t.target.files[0]})},e.handleSubmit=function(t){t.preventDefault(),J.dispatch({type:"SET_LOADING"}),e.setState({showProgressBar:!0}),b.ref("images/".concat(e.state.image.name)).put(e.state.image).on("state_changed",(function(t){var a=Math.round(t.bytesTransferred/t.totalBytes*100);e.setState({progress:a})}),(function(e){console.log(e)}),(function(){b.ref("images").child(e.state.image.name).getDownloadURL().then((function(t){return g.collection("posts").add({createdAt:(new Date).toISOString(),caption:e.state.caption,imageUrl:t,username:e.props.user.name,uid:e.props.user.uid,likeCount:0})})).then((function(){e.setState(Y),J.dispatch({type:"CLEAR_LOADING"})}))}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.ui.loading;return s.a.createElement("div",{className:"mt-3"},s.a.createElement("form",{action:"",onSubmit:this.handleSubmit,className:" d-flex align-items-center"},s.a.createElement("input",{className:"form-control mr-2",type:"text",placeholder:"Enter caption...",name:"caption",value:this.state.caption,onChange:this.handleChange,required:!0}),s.a.createElement("input",{type:"file",name:"image",id:"",className:"form-control-file mx-2",onChange:this.handleChange,required:!0}),s.a.createElement("button",{disabled:e,type:"submit",className:"btn btn-md btn-primary px-3"},e?"Posting":"Post")),this.state.showProgressBar&&s.a.createElement("progress",{className:"progress-bar w-100 mt-3 bg-primary",value:this.state.progress,max:"100"}))}}]),a}(n.Component),Z=Object(d.b)((function(e){return{user:e.user,ui:e.ui}}))(Q),$=a(231),ee=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(F,null),s.a.createElement("div",{className:"row d-flex justify-content-center container mx-auto"},s.a.createElement(Z,null),s.a.createElement(U,null),s.a.createElement($.a,{className:"mt-4 pt-3",url:"https://www.instagram.com/p/B-H24ezgjdT/",maxWidth:320,hideCaption:!1,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){},onSuccess:function(){},onAfterRender:function(){},onFailure:function(){}})))},te=a(12),ae=a(41),ne=(a(285),a(108)),se=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={email:"",name:"",password:""},e.handleChange=function(t){e.setState(Object(ae.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUpWithEmailPassword(e.state)},e}return Object(l.a)(a,[{key:"componentWillUnmount",value:function(){this.props.clearError()}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.name,n=e.password,r=this.props.user.error,o=this.props.ui.loading;return s.a.createElement("div",{className:"row  d-flex flex-column"},s.a.createElement("div",{className:"col-sm-5 mx-auto auth-form text-center mb-0"},s.a.createElement("div",{className:"signup__header"},s.a.createElement("img",{src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"Instagram",className:"signup__image mb-3"}),s.a.createElement("p",{className:"lead"},"Sign up to see photos and videos from your friends."),s.a.createElement("button",{className:"btn btn-block btn-primary mb-3"},s.a.createElement(ne.a,{className:"mr-1"})," Log in with Google"),s.a.createElement("div",{className:"line mb-3"},s.a.createElement("div",{className:"single-line"}),s.a.createElement("div",{className:"lead or"},"OR"),s.a.createElement("div",{className:"single-line"}))),r&&s.a.createElement("p",{className:"lead text-danger"},r),s.a.createElement("form",{action:"",onSubmit:this.handleSubmit},s.a.createElement("input",{type:"email",placeholder:"Email",className:"form-control my-3",name:"email",onChange:this.handleChange,value:t,required:!0}),s.a.createElement("input",{type:"text",placeholder:"Username",className:"form-control my-3",name:"name",onChange:this.handleChange,value:a,required:!0}),s.a.createElement("input",{type:"password",placeholder:"Password",className:"form-control",name:"password",onChange:this.handleChange,value:n,required:!0}),s.a.createElement("button",{className:"btn btn-block btn-primary my-3",disabled:o},o?"Signing up":"Sign up")),s.a.createElement("div",{className:"footer__text mt-4"},s.a.createElement("p",{className:"lead"},"By signing up, you agree to our"," ",s.a.createElement("strong",null,"Terms , Data Policy and Cookies Policy .")))),s.a.createElement("div",{className:"col-sm-5 mx-auto auth-form text-center py-2 pt-3 mt-3"},s.a.createElement("p",{className:"lead"},"Have an account? ",s.a.createElement(x.b,{to:"/login"},"Log in"))))}}]),a}(n.Component),re={signUpWithEmailPassword:function(e){return function(t){t({type:"CLEAR_ERROR"}),t({type:"SET_LOADING"}),f.createUserWithEmailAndPassword(e.email,e.password).then((function(a){g.doc("users/".concat(a.user.uid)).set({name:e.name,address:"",bio:"",website:""}).then((function(){t({type:"CREATE_USER",payload:{uid:a.user.uid,name:e.name,address:"",bio:"",website:""}}),t({type:"CLEAR_LOADING"})}))})).catch((function(e){t({type:"SET_ERROR",payload:e.message}),t({type:"CLEAR_LOADING"})}))}},clearError:B},oe=Object(d.b)((function(e){return{user:e.user,ui:e.ui}}),re)(se),ce=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(ae.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signinWithEmail(e.state)},e}return Object(l.a)(a,[{key:"componentWillUnmount",value:function(){this.props.clearError()}},{key:"render",value:function(){var e=this.props.user.error,t=this.props.ui.loading;return s.a.createElement("div",{className:"row d-flex flex-column"},s.a.createElement("div",{className:"col-sm-5 mx-auto auth-form text-center mb-0"},s.a.createElement("div",{className:"signup__header"},s.a.createElement("img",{src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"Instagram",className:"signup__image mb-3"})),e&&s.a.createElement("p",{className:"lead text-danger"},e),s.a.createElement("form",{action:"",onSubmit:this.handleSubmit},s.a.createElement("input",{type:"email",placeholder:"Email",className:"form-control my-3",name:"email",value:this.state.email,required:!0,onChange:this.handleChange}),s.a.createElement("input",{type:"password",placeholder:"Password",className:"form-control",name:"password",value:this.state.password,required:!0,onChange:this.handleChange}),s.a.createElement("button",{className:"btn btn-block btn-primary my-3",disabled:t},t?"Logging in":"Log in")),s.a.createElement("div",{className:"line mb-2"},s.a.createElement("div",{className:"single-line"}),s.a.createElement("div",{className:"lead or"},"OR"),s.a.createElement("div",{className:"single-line"})),s.a.createElement("button",{className:"btn btn-block mb-2 text-primary",style:{fontSize:"1.4rem"}},s.a.createElement(ne.a,{className:"mr-1"})," Log in with Google"),s.a.createElement(x.b,{to:"/reset",className:"\r text-secondary"},"Forgot password?")),s.a.createElement("div",{className:"col-sm-5 mx-auto auth-form text-center py-2 pt-3 mt-3"},s.a.createElement("p",{className:"lead"},"Don't have an account? ",s.a.createElement(x.b,{to:"/signup"},"Sign up"))))}}]),a}(n.Component),le={signinWithEmail:function(e){return function(t){t({type:"CLEAR_ERROR"}),t({type:"SET_LOADING"}),f.signInWithEmailAndPassword(e.email,e.password).then((function(e){t({type:"CREATE_USER",payload:{email:e.user.email,displayName:e.user.displayName}}),t({type:"CLEAR_LOADING"})})).catch((function(e){t({type:"SET_ERROR",payload:e.message}),t({type:"CLEAR_LOADING"})}))}},clearError:B},ie=Object(d.b)((function(e){return{user:e.user,ui:e.ui}}),le)(ce),me=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"row d-flex flex-column"},s.a.createElement("div",{className:"col-sm-5 mx-auto auth-form text-center mb-0"},s.a.createElement("div",{className:"signup__header"},s.a.createElement("img",{src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"Instagram",className:"signup__image mb-3"})),s.a.createElement("form",{action:""},s.a.createElement("input",{type:"email",placeholder:"Email",className:"form-control my-3",name:"email"}),s.a.createElement("button",{className:"btn btn-block btn-primary my-3"},"Send email"))),s.a.createElement("div",{className:"col-sm-5 mx-auto auth-form text-center py-2 pt-3 mt-3"},s.a.createElement("p",{className:"lead"},"Wanna go back login page? ",s.a.createElement(x.b,{to:"/signup"},"Log in"))))}}]),a}(n.Component),ue=(a(286),a(154)),de=a(234),pe=a(465),Ee=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={name:"",website:"",address:"",bio:"",category:"yourPosts",show:!1},e.handleChange=function(t){e.setState(Object(ae.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a={name:e.state.name,bio:e.state.bio,website:e.state.website,address:e.state.address};e.props.editUserDetails(a,e.props.user.uid),e.setState({show:e.props.ui.loading})},e.mapUserDetailsToState=function(t){e.setState({bio:t.bio,website:t.website,address:t.address,name:t.name})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(){this.props.getUserPosts(this.props.user.uid)}},{key:"componentDidMount",value:function(){this.props.getUserPosts(this.props.user.uid),this.props.getUserLikedPosts(this.props.user.name),this.mapUserDetailsToState(this.props.user)}},{key:"render",value:function(){var e,t=this,a=this.props.ui.loading,n=this.props.data.userPosts,r=this.props.data.userLikedPosts,o=null===n?s.a.createElement("div",{className:"col-md-12 mx-auto pt-5 mt-5 loading"},s.a.createElement(T.BeatLoader,{size:50,color:"#007BFF"})):0===n.length?s.a.createElement("h1",{className:"display-5 mt-4 mb-2 text-center"},"No posts yet !!!"):n.map((function(e){return s.a.createElement(R,{key:e.id,post:e})})),c=null===r?s.a.createElement("div",{className:"col-md-12 mx-auto pt-5 mt-5 loading"},s.a.createElement(T.BeatLoader,{size:50,color:"#007BFF"})):0===r.length?s.a.createElement("h1",{className:"display-5 mt-4 mb-2 text-center"},"No posts yet !!!"):r.map((function(e){return s.a.createElement(R,{key:e.id,post:e})}));return"yourPosts"===this.state.category&&(e=s.a.createElement("div",{className:"col-md-10 mx-auto"},o)),"yourSavedPosts"===this.state.category&&(e=s.a.createElement("div",{className:"col-md-10 mx-auto"},"Saved Posts")),"yourLikedPosts"===this.state.category&&(e=s.a.createElement("div",{className:"col-md-10 mx-auto"},c)),s.a.createElement(s.a.Fragment,null,s.a.createElement(pe.a,{size:"sm",show:this.state.show,onHide:function(){return t.setState({show:!1})},centered:!0},s.a.createElement(pe.a.Header,null,s.a.createElement(pe.a.Title,{id:"example-modal-sizes-title-sm"},"Edit Profile")),s.a.createElement(pe.a.Body,null,s.a.createElement("form",{action:"",onSubmit:this.handleSubmit},s.a.createElement("input",{type:"text",placeholder:"Display name",className:"form-control my-3",name:"name",value:this.state.name,required:!0,onChange:this.handleChange}),s.a.createElement("input",{type:"text",placeholder:"Address",className:"form-control my-3",name:"address",value:this.state.address,required:!0,onChange:this.handleChange}),s.a.createElement("input",{type:"text",placeholder:"Website",className:"form-control my-3",name:"website",value:this.state.website,required:!0,onChange:this.handleChange}),s.a.createElement("textarea",{type:"text",placeholder:"Bio",className:"form-control my-3",name:"bio",value:this.state.bio,onChange:this.handleChange}),s.a.createElement("button",{className:"btn btn-block btn-primary my-3",disabled:a},a?"Updating":"Update")))),s.a.createElement(F,null),s.a.createElement("div",{className:"row mt-5 d-flex justify-content-center"},s.a.createElement("div",{className:"col-sm-3  text-center"},s.a.createElement("div",{className:" mx-auto"},s.a.createElement("img",{className:"profile__image rounded-circle mx-auto",src:"https://www.w3schools.com/howto/img_avatar.png",alt:"avatar"}))),s.a.createElement("div",{className:"col-sm-5 mt-md-0 ml-5 mt-5"},s.a.createElement("div",{className:"profile__details"},s.a.createElement("div",{className:"username d-flex align-items-center"},s.a.createElement("h2",{className:"mb-0"},this.props.user.name),s.a.createElement("button",{onClick:function(){return t.setState({show:!0})},className:"btn border ml-3"},"Edit Profile")),s.a.createElement("div",{className:"profile__info mt-4 d-flex"},s.a.createElement("div",{className:"profile__posts  mr-4"},s.a.createElement("h3",null,s.a.createElement("span",{className:"font-weight-bold"},"155")," posts")),s.a.createElement("div",{className:"profile__following mr-4"},s.a.createElement("h3",null,s.a.createElement("span",{className:"font-weight-bold"},"255")," following")),s.a.createElement("div",{className:"profile__follwer mr-4"},s.a.createElement("h3",null,s.a.createElement("span",{className:"font-weight-bold"},"120")," follower"))),s.a.createElement("div",{className:"profile__bio"},s.a.createElement("p",{className:"h4 mt-4 font-weight-light"},s.a.createElement(ue.b,{className:"mr-2",style:{fontSize:"1.6rem"}}),s.a.createElement("span",{className:"font-weight-bold r"},"Bio:")," ",this.props.user.bio)),s.a.createElement("div",{className:"profile__address"},s.a.createElement("p",{className:"h4 mt-4 font-weight-light"},s.a.createElement(ue.a,{className:"mr-2",style:{fontSize:"1.6rem"}}),s.a.createElement("span",{className:"font-weight-bold"},"Address:")," ",this.props.user.address)),s.a.createElement("div",{className:"profile__website"},s.a.createElement("p",{className:"h4 mt-4 font-weight-light"},s.a.createElement(de.a,{className:"mr-2",style:{fontSize:"1.6rem"}}),s.a.createElement("span",{className:"font-weight-bold"},"Website:")," ",this.props.user.website))))),s.a.createElement("div",{className:"row mt-4"},s.a.createElement("div",{className:"col-md-10  mx-auto"},s.a.createElement("div",{className:"nav justify-content-center"},s.a.createElement("li",{onClick:function(){return t.setState({category:"yourPosts"})},className:"nav-item"},s.a.createElement("span",{to:"yourPosts",className:"yourPosts"===this.state.category?"active nav-link":"nav-link"},"Your Posts")),s.a.createElement("li",{onClick:function(){return t.setState({category:"yourSavedPosts"})},className:"nav-item"},s.a.createElement("span",{to:"yourSavedPosts",className:"yourSavedPosts"===this.state.category?"active nav-link":"nav-link"},"Saved Posts")),s.a.createElement("li",{onClick:function(){return t.setState({category:"yourLikedPosts"})},className:"nav-item"},s.a.createElement("span",{to:"yourLikedPosts",className:"yourLikedPosts"===this.state.category?"active nav-link":"nav-link"},"Liked Posts")))),s.a.createElement("div",{className:"col-md-8 mt-4 mx-auto"},e)))}}]),a}(n.Component),he={editUserDetails:function(e,t){return function(a){a({type:"SET_LOADING"}),g.doc("users/".concat(t)).get().then((function(n){n.exists&&g.doc("users/".concat(t)).update({name:e.name,website:e.website,address:e.address,bio:e.bio}).then((function(){a({type:"CREATE_USER",payload:{uid:t,name:e.name,website:e.website,address:e.address,bio:e.bio}}),a({type:"CLEAR_LOADING"})}))})).catch((function(e){a({type:"CLEAR_LOADING"}),console.log(e)}))}},getUserPosts:function(e){return function(t){g.collection("posts").where("uid","==",e).get().then((function(e){var a=[];e.forEach((function(e){a.push(Object(p.a)({id:e.id},e.data()))})),t({type:"SET_USERPOSTS",payload:a})}))}},getUserLikedPosts:function(e){return function(t){g.collection("likes").where("name","==",e).onSnapshot((function(e){var a=[];e.docs.map((function(e){g.doc("posts/".concat(e.data().postId)).get().then((function(e){a.push(Object(p.a)({id:e.id},e.data()))}))})),t({type:"SET_USERLIKEDPOSTS",payload:a})}))}}},ge=Object(d.b)((function(e){return{user:e.user,ui:e.ui,data:e.data}}),he)(Ee),fe=(a(287),{getSinglePost:function(e){return function(t){g.collection("posts").onSnapshot((function(a){a.docs.find((function(a){a.id===e&&t({type:"SET_POST",payload:a.data()})}))}))}},getComments:v,postComment:y}),be=Object(d.b)((function(e){return{data:e.data,post:e.data.post,user:e.user}}),fe)((function(e){var t=Object(n.useState)(null),a=Object(_.a)(t,2),r=a[0],o=a[1];Object(n.useEffect)((function(){var t=e.location.pathname.split("/");o(t[t.length-1]),r&&(e.getSinglePost(r),e.getComments(r))}),[r]);var c=e.data.comments,l=0===c.length?s.a.createElement("p",{className:"lead text-primary"},"No comments yet!"):c.map((function(e,t){return s.a.createElement("p",{key:t,className:"post__text"},s.a.createElement("strong",null,e.username," "),e.comment)})),i=null===e.post?s.a.createElement("div",{className:"col-md-12 mx-auto pt-5 mt-5 loading"},s.a.createElement(T.BeatLoader,{size:50,color:"#007BFF"})):s.a.createElement("div",{className:"post"},s.a.createElement("div",{className:"post__header"},s.a.createElement("div",{className:"d-flex align-items-center"},s.a.createElement("img",{className:"avatar",src:"https://www.w3schools.com/howto/img_avatar.png",alt:"avatar"}),s.a.createElement("p",{className:"mx-4"},s.a.createElement("strong",null,e.post.username))),e.post.uid===e.user.uid?s.a.createElement(k.a,{as:C.a,title:".."},s.a.createElement(L.a.Item,{eventKey:"1"},"Edit"),s.a.createElement(L.a.Item,{eventKey:"2"},"Delete ")):null),s.a.createElement("img",{src:e.post.imageUrl,alt:"",className:"post__image"}),s.a.createElement("div",{className:"post__footer"},s.a.createElement(u.a,{size:32,className:"icon"}),s.a.createElement(u.b,{size:32,className:"icon",color:"red"}),s.a.createElement("p",null,s.a.createElement("strong",null,"8122 likes")),s.a.createElement("p",{className:"post__text mb-3"},s.a.createElement(N.a,{color:"orangered",className:"mt-0"}),s.a.createElement("strong",null,e.post.username)," ",e.post.caption),l,s.a.createElement("p",{className:"post__time"},O()(e.post.createdAt).startOf("day").fromNow())),s.a.createElement("hr",{className:"mt-4"}),s.a.createElement("div",{className:"comments"},s.a.createElement(j,{id:r})));return s.a.createElement(s.a.Fragment,null,s.a.createElement(F,null),i)})),ve=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={authenticated:!1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.onAuthStateChanged((function(t){t?(e.setState({authenticated:!0}),g.doc("users/".concat(t.uid)).get().then((function(e){J.dispatch({type:"CREATE_USER",payload:{uid:t.uid,name:e.data().name,bio:e.data().bio,address:e.data().address,website:e.data().website}})}))):e.setState({authenticated:!1})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"app"},s.a.createElement(x.a,null,s.a.createElement(te.b,{exact:!0,path:"/",render:function(){return e.state.authenticated?s.a.createElement(ee,null):s.a.createElement(te.a,{to:"/login"})}}),s.a.createElement(te.b,{exact:!0,path:"/signup",render:function(){return e.state.authenticated?s.a.createElement(te.a,{to:"/"}):s.a.createElement(oe,null)}}),s.a.createElement(te.b,{exact:!0,path:"/login",render:function(){return e.state.authenticated?s.a.createElement(te.a,{to:"/"}):s.a.createElement(ie,null)}}),s.a.createElement(te.b,{exact:!0,path:"/profile",component:ge}),s.a.createElement(te.b,{exact:!0,path:"/reset",component:me}),s.a.createElement(te.b,{exact:!0,path:"/post/:id",component:be})))}}]),a}(n.Component),ye=(a(288),a(235)),Ne=a(236);function we(e){var t=e.children;return Object(Ne.isLoaded)(ye.auth)?t:"Loading"}o.a.render(s.a.createElement(d.a,{store:J},s.a.createElement(we,null,s.a.createElement(ve,null))),document.getElementById("root"))}},[[240,1,2]]]);
//# sourceMappingURL=main.ba4dd133.chunk.js.map