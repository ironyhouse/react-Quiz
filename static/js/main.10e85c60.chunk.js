(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{24:function(e,t,n){e.exports={Drawer:"Drawer_Drawer__2Hk7U",close:"Drawer_close__3isxZ",active:"Drawer_active__RNOZq"}},28:function(e,t,n){e.exports={MenuToggle:"MenuToggle_MenuToggle__2HcaP",open:"MenuToggle_open__2Icod"}},31:function(e,t,n){e.exports={Quiz:"Quiz_Quiz__11ivb",QuizWrapper:"Quiz_QuizWrapper__1Is8H"}},32:function(e,t,n){e.exports={ActiveQuiz:"ActiveQuiz_ActiveQuiz__36bjY",Question:"ActiveQuiz_Question__2Eqva"}},33:function(e,t,n){e.exports={AnswerItem:"AnswerItem_AnswerItem__YP6rD",success:"AnswerItem_success__18SfQ",error:"AnswerItem_error__39HB3"}},34:function(e,t,n){e.exports={FinishedQuiz:"FinishedQuiz_FinishedQuiz__1_MBf",success:"FinishedQuiz_success__3bej5",error:"FinishedQuiz_error__Svmqo"}},35:function(e,t,n){e.exports={Button:"Button_Button__39-Cy",success:"Button_success__2xPN3",error:"Button_error__2R6tG",primary:"Button_primary__2N6op"}},36:function(e,t,n){e.exports={Loader:"Loader_Loader__xeCd-",center:"Loader_center__2Pok9"}},37:function(e,t,n){e.exports={Auth:"Auth_Auth__2JwaJ",AuthForm:"Auth_AuthForm__Tkxbd"}},38:function(e,t,n){e.exports={Input:"input_Input__1Ubtn",invalid:"input_invalid__1Hfdf"}},48:function(e,t,n){e.exports={Layout:"Layout_Layout__1Xoxy"}},50:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__KxeIy"}},51:function(e,t,n){e.exports={AnswersList:"AnswersList_AnswersList__3BHs0"}},52:function(e,t,n){e.exports={QuizList:"QuizList_QuizList__3uufD"}},54:function(e,t,n){e.exports={QuizCreator:"QuizCreator_QuizCreator__UEydJ"}},55:function(e,t,n){e.exports={Select:"Selecr_Select__366XR"}},58:function(e,t,n){e.exports=n(87)},63:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(22),o=n.n(i),u=(n(63),n(4)),c=n(5),s=n(8),l=n(7),p=n(48),m=n.n(p),d=n(6),h=n(28),v=n.n(h),f=function(e){var t=[v.a.MenuToggle,"fa"];return e.isOpen?(t.push("fa-times"),t.push(v.a.open)):t.push("fa-bars"),r.a.createElement("i",{className:t.join(" "),onClick:e.onToggle})},b=n(24),E=n.n(b),_=n(15),g=n(50),O=n.n(g),z=function(e){return r.a.createElement("div",{className:O.a.Backdrop,onClick:e.onClick})},y=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).clickHandler=function(){e.props.onClose()},e}return Object(c.a)(n,[{key:"renderLinks",value:function(e){var t=this;return e.map((function(e,n){return r.a.createElement("li",{key:n},r.a.createElement(_.c,{to:e.to,exact:e.exact,activeClassName:E.a.active,onClick:t.clickHandler},e.label))}))}},{key:"render",value:function(){var e=[E.a.Drawer];this.props.isOpen||e.push(E.a.close);var t=[{to:"/",label:"\u0421\u043f\u0438\u0441\u043e\u043a",exact:!0}];return this.props.isAuthenticated?(t.push({to:"/quiz-creator",label:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442",exact:!1}),t.push({to:"/logout",label:"\u0412\u044b\u0439\u0442\u0438",exact:!1})):t.push({to:"/auth",label:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",exact:!1}),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:e.join(" ")},r.a.createElement("ul",null,this.renderLinks(t))),this.props.isOpen?r.a.createElement(z,{onClick:this.props.onClose}):null)}}]),n}(a.Component),w=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={menu:!1},e.toggleMenuHandler=function(){e.setState({menu:!e.state.menu})},e.menuCloseHandler=function(){e.setState({menu:!1})},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:m.a.Layout},r.a.createElement(y,{isOpen:this.state.menu,onClose:this.menuCloseHandler,isAuthenticated:this.props.isAuthenticated}),r.a.createElement(f,{onToggle:this.toggleMenuHandler,isOpen:this.state.menu}),r.a.createElement("main",null,this.props.children))}}]),n}(a.Component);var C=Object(d.b)((function(e){return{isAuthenticated:!!e.auth.token}}))(w),j=n(3),k=n(31),Q=n.n(k),S=n(32),q=n.n(S),I=n(51),A=n.n(I),T=n(33),x=n.n(T),H=function(e){var t=[x.a.AnswerItem];return e.state&&t.push(x.a[e.state]),r.a.createElement("li",{className:t.join(" "),onClick:function(){return e.onAnswerClick(e.answer.id)}},e.answer.text)},U=function(e){return r.a.createElement("ul",{className:A.a.AnswersList},e.answers.map((function(t,n){return r.a.createElement(H,{ket:n,answer:t,onAnswerClick:e.onAnswerClick,state:e.state?e.state[t.id]:null})})))},N=function(e){return r.a.createElement("div",{className:q.a.ActiveQuiz},r.a.createElement("p",{className:q.a.Question},r.a.createElement("span",null,r.a.createElement("strong",null," ",e.answerNumber," "),e.question),r.a.createElement("small",null," ",e.answerNumber,"  \u0438\u0437 ",e.quizLength," ")),r.a.createElement(U,{state:e.state,answers:e.answers,onAnswerClick:e.onAnswerClick}))},F=n(34),L=n.n(F),M=n(35),D=n.n(M),R=function(e){var t=[D.a.Button,D.a[e.type]];return r.a.createElement("button",{onClick:e.onClick,className:t.join(" "),disabled:e.disabled},e.children)},Z=function(e){var t=Object.keys(e.results).reduce((function(t,n){return"success"===e.results[n]&&t++,t}),0);return r.a.createElement("div",{className:L.a.FinishedQuiz},r.a.createElement("ul",null,e.quiz.map((function(t,n){var a=["fa","errar"===e.results[t.id]?"fa-times":"fa-check",L.a[e.results[t.id]]];return r.a.createElement("li",{key:n},r.a.createElement("strong",null,n+1," "),t.question,r.a.createElement("i",{className:a.join(" ")}))}))),r.a.createElement("p",null,"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e ",t," \u0438\u0437 ",e.quiz.length),r.a.createElement("div",null,r.a.createElement(R,{onClick:e.onRetry,type:"primary"}," \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c "),r.a.createElement(_.b,{to:"/"},r.a.createElement(R,{type:"success"}," \u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432 "))))},B=n(36),V=n.n(B),P=function(e){return r.a.createElement("div",{className:V.a.center},r.a.createElement("div",{className:V.a.Loader},r.a.createElement("div",null),r.a.createElement("div",null)))},X=n(21),W=n(14),J=n.n(W),Y=n(17),G=n(18),K=n.n(G);function $(e){return{type:"FETCH_QUIZ_SUCCESS",quiz:e}}function ee(e){return{type:"FETCH_QUIZES_SUCCESS",quizes:e}}function te(e){return{type:"FETCH_QUIZES_ERROR",error:e}}function ne(e,t){return{type:"QUIZ_SET_STATE",answerState:e,results:t}}var ae=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchQuizById(this.props.match.params.id)}},{key:"componentWillMount",value:function(){this.props.retryQuiz()}},{key:"render",value:function(){return r.a.createElement("div",{className:Q.a.Quiz},r.a.createElement("div",{className:Q.a.QuizWrapper},r.a.createElement("h1",null,"\u041e\u0442\u0432\u0435\u0442\u044c\u0442\u0435 \u043d\u0430 \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b:"),this.props.loading||!this.props.quiz?r.a.createElement(P,null):this.props.isFinished?r.a.createElement(Z,{results:this.props.results,quiz:this.props.quiz,onRetry:this.props.retryQuiz}):r.a.createElement(N,{answers:this.props.quiz[this.props.activeQuestion].answers,question:this.props.quiz[this.props.activeQuestion].question,onAnswerClick:this.props.quizAnswerClick,quizLength:this.props.quiz.length,answerNumber:this.props.activeQuestion+1,state:this.props.answerState})))}}]),n}(a.Component);var re=Object(d.b)((function(e){return{loading:e.quiz.loading,results:e.quiz.results,isFinished:e.quiz.isFinished,activeQuestion:e.quiz.activeQuestion,answerState:e.quiz.answerState,quiz:e.quiz.quiz}}),(function(e){return{fetchQuizById:function(t){return e((n=t,function(){var e=Object(Y.a)(J.a.mark((function e(t){var a,r;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCH_QUIZES_START"}),e.prev=1,e.next=4,K.a.get("https://react-quiz-18cbc.firebaseio.com/quizes/".concat(n,".json"));case 4:a=e.sent,r=a.data,t($(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(te(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()));var n},quizAnswerClick:function(t){return e(function(e){return function(t,n){var a=n().quiz;if(a.answerState){var r=Object.keys(a.answerState)[0];if("success"===a.answerState[r])return}var i=a.quiz[a.activeQuestion],o=a.results;i.rightAnswerId===e?(o[i.id]||(o[i.id]="success"),t(ne(Object(X.a)({},e,"success"),o))):(o[i.id]="error",t(ne(Object(X.a)({},e,"error"),o)));var u=window.setTimeout((function(){!function(e){return e.activeQuestion+1===e.quiz.length}(a)?t({type:"QUIZ_NEXT_QUESTION",number:a.activeQuestion+1}):t({type:"FINISH_QUIZ"}),window.clearTimeout(u)}),500)}}(t))},retryQuiz:function(){return e({type:"QUIZ_RETRY"})}}}))(ae),ie=n(52),oe=n.n(ie),ue=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"renderQuizes",value:function(){return this.props.quizes.map((function(e){return r.a.createElement("li",{ket:e.id},r.a.createElement(_.c,{to:"/quiz/"+e.id},e.name))}))}},{key:"componentDidMount",value:function(){this.props.fetchQuizes()}},{key:"render",value:function(){return r.a.createElement("div",{className:oe.a.QuizList},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432"),this.props.loading&&0!==this.props.quizes.length?r.a.createElement(P,null):r.a.createElement("ul",null,this.renderQuizes())))}}]),n}(a.Component);var ce=Object(d.b)((function(e){return{quizes:e.quiz.quizes,loading:e.quiz.loading}}),(function(e){return{fetchQuizes:function(){return e(function(){var e=Object(Y.a)(J.a.mark((function e(t){var n,a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCH_QUIZES_START"}),e.prev=1,e.next=4,K.a.get("https://react-quiz-18cbc.firebaseio.com/quizes.json");case 4:n=e.sent,a=[],Object.keys(n.data).forEach((function(e,t){a.push({id:e,name:"\u0422\u0435\u0441\u0442 \u2116".concat(t+1)})})),t(ee(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t(te(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())}}}))(ue),se=n(1),le=n(37),pe=n.n(le),me=n(38),de=n.n(me);function he(e){var t=e.valid,n=e.touched,a=e.shouldValidate;return!t&&a&&n}var ve=function(e){var t=e.type||"text",n=[de.a.Input],a="".concat(t,"-").concat(Math.random());return he(e)&&n.push(de.a.invalid),r.a.createElement("div",{className:n.join(" ")},r.a.createElement("label",{htmlFor:""},e.label),r.a.createElement("input",{type:t,id:a,value:e.value,onChange:e.onChange}),he(e)?r.a.createElement("span",null,e.errorMessage||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0435\u0440\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"):null)},fe=n(53),be=n.n(fe);function Ee(e){return function(t){setTimeout((function(){t(_e())}),1e3*e)}}function _e(){return localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}}function ge(e){return{type:"AUTH_SUCCESS",token:e}}var Oe=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isFormValid:!1,formControls:{email:{value:"",type:"email",label:"Email",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 Email",valid:!1,touched:!1,validation:{required:!0,email:!0}},password:{value:"",type:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u041f\u0430\u0440\u043e\u043b\u044c",valid:!1,touched:!1,validation:{required:!0,minLength:6}}}},e.loginHandler=function(){e.props.auth(e.state.formControls.email.value,e.state.formControls.password.value,!0)},e.registerHandler=function(){e.props.auth(e.state.formControls.email.value,e.state.formControls.password.value,!1)},e.sabmitHandler=function(e){e.preventDefault()},e.onChangeHandler=function(t,n){var a=Object(se.a)({},e.state.formControls),r=Object(se.a)({},a[n]);r.value=t.target.value,r.touched=!0,r.valid=e.validateControl(r.value,r.validation),a[n]=r;var i=!0;Object.keys(a).forEach((function(e){i=a[e].valid&&i})),e.setState({formControls:a,isFormValid:i})},e}return Object(c.a)(n,[{key:"validateControl",value:function(e,t){if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),t.email&&(n=be.a.email(e)&&n),t.minLength&&(n=e.length>=t.minLength&&n),n}},{key:"renderInputs",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var a=e.state.formControls[t];return r.a.createElement(ve,{key:t+n,type:a.type,value:a.value,valid:a.valid,touched:a.touched,label:a.label,shouldValidate:!!a.validation,errorMessage:a.errorMessage,onChange:function(n){return e.onChangeHandler(n,t)}})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:pe.a.Auth},r.a.createElement("div",null,r.a.createElement("h1",null,"Auth"),r.a.createElement("form",{className:pe.a.AuthForm,onSabmit:this.sabmitHandler},this.renderInputs(),r.a.createElement(R,{type:"success",onClick:this.loginHandler,disabled:!this.state.isFormValid},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement(R,{type:"primary",onClick:this.registerHandler,disabled:!this.state.isFormValid},"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))))}}]),n}(a.Component);var ze=Object(d.b)(null,(function(e){return{auth:function(t,n,a){return e(function(e,t,n){return function(){var a=Object(Y.a)(J.a.mark((function a(r){var i,o,u,c,s;return J.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return i={email:e,password:t,returnSecureToken:!0},o="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB15rM6N_9En0qnoHle_cj-wpB3bL3TLTU",n&&(o="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB15rM6N_9En0qnoHle_cj-wpB3bL3TLTU"),a.next=5,K.a.post(o,i);case 5:u=a.sent,c=u.data,s=new Date((new Date).getTime()+1e3*c.expiresIn),localStorage.setItem("token",c.idToken),localStorage.setItem("userId",c.localId),localStorage.setItem("expirationDate",s),r(ge(c.idToken)),r(Ee(c.expiresIn));case 13:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(t,n,a))}}}))(Oe),ye=n(54),we=n.n(ye),Ce=n(55),je=n.n(Ce),ke=function(e){var t="".concat(e.label,"--").concat(Math.random);return r.a.createElement("div",{className:je.a.Select},r.a.createElement("label",{htmlFor:t},e.label),r.a.createElement("select",{id:t,value:e.value,onChange:e.onChange},e.options.map((function(e,t){return r.a.createElement("option",{value:e.value,key:e.value.key+t},e.text)}))))};function Qe(e,t){return Object(se.a)(Object(se.a)({},e),{},{validation:t,valid:!t,touched:!1,value:""})}function Se(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),n}function qe(e){var t=!0;for(var n in e)e.hasOwnProperty(n)&&(t=e[n].valid&&t);return t}var Ie=function(e){return e.children};function Ae(e){return Qe({label:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 ".concat(e),errorMessage:"\u0417\u043d\u0430\u0447\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",id:e},{required:!0})}function Te(){return{question:Qe({label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441",errorMessage:"\u0412\u043e\u043f\u0440\u043e\u0441 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"},{required:!0}),option1:Ae(1),option2:Ae(2),option3:Ae(3),option4:Ae(4)}}var xe=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isFormValid:!1,rightAnswerId:1,formControls:Te()},e.submitHandler=function(e){e.preventDefault()},e.addQuestionHandler=function(t){t.preventDefault();var n=e.state.formControls,a=n.question,r=n.option1,i=n.option2,o=n.option3,u=n.option4,c={question:a.value,id:e.props.quiz.length+1,rightAnswerId:e.state.rightAnswerId,answers:[{text:r.value,id:r.id},{text:i.value,id:i.id},{text:o.value,id:o.id},{text:u.value,id:u.id}]};e.props.createQuizQuestion(c),e.setState({isFormValid:!1,rightAnswerId:1,formControls:Te()})},e.createQuizHandler=function(t){t.preventDefault(),e.setState({quiz:[],isFormValid:!1,rightAnswerId:1,formControls:Te()}),e.props.finishCreateQuiz()},e.changeHandler=function(t,n){var a=Object(se.a)({},e.state.formControls),r=Object(se.a)({},a[n]);r.touched=!0,r.value=t,r.valid=Se(r.value,r.validation),a[n]=r,e.setState({formControls:a,isFormValid:qe(a)})},e.selectChangeHandler=function(t){e.setState({rightAnswerId:+t.target.value})},e}return Object(c.a)(n,[{key:"renderControls",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var a=e.state.formControls[t];return r.a.createElement(Ie,{key:t+n},r.a.createElement(ve,{label:a.label,value:a.value,valid:a.valid,shouldValidate:!!a.validation,touched:a.touched,errorMessage:a.errorMessage,onChange:function(n){return e.changeHandler(n.target.value,t)}}),0===n?r.a.createElement("hr",null):null)}))}},{key:"render",value:function(){var e=r.a.createElement(ke,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0435\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442",value:this.state.rightAnswerId,onChange:this.selectChangeHandler,options:[{text:1,value:1},{text:2,value:2},{text:3,value:3},{text:4,value:4}]});return r.a.createElement("div",{className:we.a.QuizCreator},r.a.createElement("div",null,r.a.createElement("h1",null,"QuizCreator"),r.a.createElement("form",{onSubmit:this.submitHandler},this.renderControls(),e,r.a.createElement(R,{type:"primary",onClick:this.addQuestionHandler,disabled:!this.state.isFormValid},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441"),r.a.createElement(R,{type:"success",onClick:this.createQuizHandler,disabled:0===this.props.quiz.length},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442"))))}}]),n}(a.Component);var He=Object(d.b)((function(e){return{quiz:e.create.quiz}}),(function(e){return{createQuizQuestion:function(t){return e(function(e){return{type:"CREATE_QUIZ_QUESTION",item:e}}(t))},finishCreateQuiz:function(){return e(function(){var e=Object(Y.a)(J.a.mark((function e(t,n){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.a.post("https://react-quiz-18cbc.firebaseio.com/quizes.json",n().create.quiz);case 2:t({type:"RESET_QUIZ_CREATION"});case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}}}))(xe),Ue=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.logout()}},{key:"render",value:function(){return r.a.createElement(j.a,{to:"/"})}}]),n}(a.Component);var Ne=Object(d.b)(null,(function(e){return{logout:function(){return e(_e())}}}))(Ue),Fe=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.autoLogin()}},{key:"render",value:function(){var e=r.a.createElement(j.d,null,r.a.createElement(j.b,{path:"/react-quiz",component:ce}),r.a.createElement(j.b,{path:"/auth",component:ze}),r.a.createElement(j.b,{path:"/quiz/:id",component:re}),r.a.createElement(j.b,{path:"/",exact:!0,component:ce}),r.a.createElement(j.a,{to:"/"}));return this.props.isAuthenticated&&(e=r.a.createElement(j.d,null,r.a.createElement(j.b,{path:"/react-quiz",component:ce}),r.a.createElement(j.b,{path:"/quiz-creator",component:He}),r.a.createElement(j.b,{path:"/quiz/:id",component:re}),r.a.createElement(j.b,{path:"/logout",component:Ne}),r.a.createElement(j.b,{path:"/",exact:!0,component:ce}),r.a.createElement(j.a,{to:"/"}))),r.a.createElement(C,null,e)}}]),n}(a.Component);var Le=Object(j.g)(Object(d.b)((function(e){return{isAuthenticated:!!e.auth.token}}),(function(e){return{autoLogin:function(){return e((function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));n<=new Date?e(_e()):(e(ge(t)),e(Ee((n.getTime()-new Date)/1e3)))}else e(_e())}))}}}))(Fe));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Me=n(16),De={token:null};var Re=n(57),Ze={quiz:[]};var Be={quizes:[],loading:!1,error:null,results:{},isFinished:!1,activeQuestion:0,answerState:null,quiz:null};var Ve=Object(Me.c)({quiz:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_QUIZES_START":return Object(se.a)(Object(se.a)({},e),{},{loading:!0});case"FETCH_QUIZES_SUCCESS":return Object(se.a)(Object(se.a)({},e),{},{loading:!1,quizes:t.quizes});case"FETCH_QUIZES_ERROR":return Object(se.a)(Object(se.a)({},e),{},{loading:!1,error:t.error});case"FETCH_QUIZ_SUCCESS":return Object(se.a)(Object(se.a)({},e),{},{loading:!1,quiz:t.quiz});case"QUIZ_SET_STATE":return Object(se.a)(Object(se.a)({},e),{},{answerState:t.answerState,results:t.results});case"FINISH_QUIZ":return Object(se.a)(Object(se.a)({},e),{},{isFinished:!0});case"QUIZ_NEXT_QUESTION":return Object(se.a)(Object(se.a)({},e),{},{answerState:null,activeQuestion:t.number});case"QUIZ_RETRY":return Object(se.a)(Object(se.a)({},e),{},{activeQuestion:0,answerState:null,isFinished:!1,results:{}});default:return e}},create:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_QUIZ_QUESTION":return Object(se.a)(Object(se.a)({},e),{},{quiz:[].concat(Object(Re.a)(e.quiz),[t.item])});case"RESET_QUIZ_CREATION":return Object(se.a)(Object(se.a)({},e),{},{quiz:[]});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_SUCCESS":return Object(se.a)(Object(se.a)({},e),{},{token:t.token});case"AUTH_LOGOUT":return Object(se.a)(Object(se.a)({},e),{},{token:null});default:return e}}}),Pe=n(56),Xe="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):Me.d,We=Object(Me.e)(Ve,Xe(Object(Me.a)(Pe.a))),Je=r.a.createElement(d.a,{store:We},r.a.createElement(r.a.StrictMode,null,r.a.createElement(_.a,null,r.a.createElement(Le,null))));o.a.render(Je,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.10e85c60.chunk.js.map