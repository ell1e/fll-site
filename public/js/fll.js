fllloader = function(stuff) {
if($.browser.msie) {
	$(document).ready(stuff);
}
else {
	window.onload = stuff;
}
}

fllloader(function() { Nifty("ul#nav a","none transparent");$("ul#nav a").dropShadow({top:-1});$("div.content_border").dropShadow({top:-1,left:3});Nifty("div.lang_list");if($('#langform').length>0){$("#langform").validate({submitHandler:function(form){if(form.preview.checked){window.open("","preview","width=1000,height=800,toolbar=0");form.action="/preview";form.target="preview";}
else{form.action="/submit";form.target="_self";}
form.submit();}});$('#captcha-spacer').prepend('<input name="captcha_session" type="hidden" value="3122"/><img id="captcha-image" src="http://captchator.com/captcha/image/3122"/>');}});
window.onresize=function(){$("ul#nav a").redrawShadow();$("div.content_border").redrawShadow();}
