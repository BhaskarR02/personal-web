// JavaScript Document
var Login = (function(module,$,global){
	"use strict";
    console.log("Initializing Login Facilities");
	function _init(){
		console.log("Method Executing :Login.init");
		$(".headerSelector").on('click',function(){
			$(".loginSelector").each(function(){
				var getSelectedOption = $(this);
				if(getSelectedOption.hasClass('libHidden')){
						getSelectedOption.removeClass('libHidden').addClass();
					}
					else{
						getSelectedOption.addClass('libHidden');
						}
				});
			});
		
		}
	
	function _submitLogin(){
		console.log("Method Executing:Login.submitLogin");
		$("input#login").on('click',function(){
			var _getUserId = document.getElementById("userName").value; 
			var _getPassword = document.getElementById("userPassword").value;
			$.ajax({
				type:"POST",
				url:"loginSubmit.html",
				traditional:true,
				data:({userId:_getUserId,
					   userPassword:_getPassword}),
				success:function(){
				},
				error: function(response) {
				      console.log(response);
				      }  
				
				
			});
			
		})
		
		
	}
	
	
	
	
	$.extend(module,{
		init:_init,
		submit:_submitLogin
		
		
		});
		
		return module;
	
	
	}(Login || {} ,this.jQuery,this))