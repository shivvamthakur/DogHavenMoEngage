$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
        
    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });
    
	$("input").focus(function(){
		$(this).css("background-color","#EF820D"); });
	$("input").blur(function(){
		$(this).css("background-color","grey"); });
	$("input").blur(function(){
		$(this).css("color","black"); });
	$(".login").mouseenter(function(){
		$("#btn2").fadeIn();});
});

// <!-- MoEngage integration -->

  !function(e,n,i,t,a,r,o,d){var s=e[a]=e[a]||[];if(s.invoked=0,s.initialised>0||s.invoked>0)return console.error("MoEngage Web SDK initialised multiple times. Please integrate the Web SDK only once!"),!1;e.moengage_object=a;var l={},g=function n(i){return function(){for(var n=arguments.length,t=Array(n),a=0;a<n;a++)t[a]=arguments[a];(e.moengage_q=e.moengage_q||[]).push({f:i,a:t})}},u=["track_event","add_user_attribute","add_first_name","add_last_name","add_email","add_mobile","add_user_name","add_gender","add_birthday","destroy_session","add_unique_user_id","moe_events","call_web_push","track","location_type_attribute"],m={onsite:["getData","registerCallback"]};for(var c in u)l[u[c]]=g(u[c]);for(var v in m)for(var f in m[v])null==l[v]&&(l[v]={}),l[v][m[v][f]]=g(v+"."+m[v][f]);r=n.createElement(i),o=n.getElementsByTagName("head")[0],r.async=1,r.src=t,o.appendChild(r),e.moe=e.moe||function(){return(s.invoked=s.invoked+1,s.invoked>1)?(console.error("MoEngage Web SDK initialised multiple times. Please integrate the Web SDK only once!"),!1):(d=arguments.length<=0?void 0:arguments[0],l)},r.addEventListener("load",function(){if(d)return e[a]=e.moe(d),e[a].initialised=e[a].initialised+1||1,!0}),r.addEventListener("error",function(){return console.error("Moengage Web SDK loading failed."),!1})}(window,document,"script","https://cdn.moengage.com/webpush/moe_webSdk.min.latest.js","Moengage");


  Moengage = moe({
  app_id:"2877NHMD0TOHATHC6NNHDERW",
  debug_logs: 1
  });
  

//Submit Button
function Verify() {
  var userRef = "admin_web";
  var passRef = "admin";
  
  var user =  document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  if ( pass == passRef) {
    Moengage.add_unique_user_id(document.getElementById("username").value);
       window.open("../index.html")
      global
  } else {
  alert("It's seem you make a mistake...")
  }
};