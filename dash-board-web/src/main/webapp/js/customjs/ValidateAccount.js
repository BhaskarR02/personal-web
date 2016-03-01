var ValidateAccount = (function(module,$,global){
	
	function _createCustomCheckBox(checkBoxName){
		
		
	}
	function _checkPassword(){
		console.log("Method Executing :ValidateAccount.checkPassword");
			var password=document.getElementById("password").value;
			
			if(password.length >=8 && password.length <= 12){
			var checkPassWordCharacters=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/;
			if(checkPassWordCharacters.test(password)){
				console.log(password);
				_showSuccess("password","Password validation sucessful","successClass");
				return true;
		    }
			else{
				_showError("password","Must be an alphanumeric","errorClass");
				return false;
			}
		}
			else{
				_showError("password","Must be between 8 & 12 characters","errorClass");
				return false;
				
			}
		};
	
	function _showError(errorField,errorMsg,errorClass){
		console.log("Method Executing :ValidateAccount.showError");
		this.errorField = errorField;
		$("#"+errorField).addClass("errorFieldHighlight");
		var showError = $("label[for='"+errorField+"']");
		$(showError).text("");
		$(showError).text(errorMsg).addClass("errorClass");
	}
	
	function _showSuccess(successField,successMsg,successClass){
		console.log("Method Executing :ValidateAccount.showSuccess");
		this.successField =successField;
		$("#"+successField).removeClass("errorFieldHighlight");
		var showSucces  = $("label[for='"+successField+"']");
		$(showSucces).text("");
		$(showSucces).text(successMsg).addClass("successClass");
		
	}
	
	function _validateEmail(){
		console.log("Method Executing :ValidateAccount.validateEmail");
		var email = document.getElementById("email").value;
		var emailId = document.getElementById("email").id;
		console.log(emailId);
		 var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		    if(re.test(email)){
		    	$("label[for='"+emailId+"']").text("");
		    	$("#"+emailId).removeClass("errorFieldHighlight");
		    }
		    else{
		    	_showError(emailId,"Enter valid email","errorClass");
		    }
		
	}
	
	function _confirmPassword(parentField,confirmFieldId){
		console.log("Method Executing :ValidateAccount.confirmPassword");
		if($("#"+parentField).val()!=$("#"+confirmFieldId).val()){
			_showError(confirmFieldId,"Must must match","errorClass");
		}
		else{
			_showSuccess(confirmFieldId,"","");
		}
		
	}
	$.extend(module,{
		
		checkPassword:_checkPassword,
		createCustomCheckBox :_createCustomCheckBox,
		showError:_showError,
		validateEmail:_validateEmail,
		confirmPassword:_confirmPassword
		
	});
	
	return module;
	
	
}(ValidateAccount || {},this.jQuery,this));