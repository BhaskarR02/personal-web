$(document).ready(function(){
	
	//AppOverlay.create();
	var appOverlay = new AppOverlay();
	appOverlay.create();
	
	
});

/*var checkPassword = (function () {
	var password=document.getElementById("password").value;
	if(password.length >=6 && password.length <= 25){
	var checkPassWordCharacters=/^[a-zA-Z0-9~_&*%@$]*$/;
	if(checkPassWordCharacters.test(password)){
		return true;
    }
	else{
		$("label[for='password']").css({"color":"rgba(165, 3, 3, 1)"});
		if($("#password") .hasClass("selected")){
			$("#password").removeClass("selected");
		};
	}
}
	else{
		$("label[for='password']").css({"color":"rgba(165, 3, 3, 1)"});
		if($("#password") .hasClass("selected")){
			$("#password").removeClass("selected");
		};
		
	}
});
var UserValidation =(function(module,$,global){
	
	$.extend(module,{
		createCustomCheckBox :_createCustomCheckBox,
		checkPassword:_checkPassword
		
	});
	
	return module;
	
	
}(UserValidation || {},this.jQuery,this));*/


