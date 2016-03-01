// JavaScript Document
var AppOverlay = (function(module,$,global){
	"use strict";
	function _init(){}
	
	function _create(modal){
		console.log("Method Executing : AppOverlay.create");
		var createOverlay = document.createElement("div");
		 createOverlay.id ="overlayDiv";
		 createOverlay.className="overlay";
		 
		 var modalBox = _createModal();
		 $(createOverlay).html(modalBox);
		$(createOverlay).appendTo('body');
		
		}
	function _createModal(){
		console.log("Method Executing : AppOverlay.createModal");
		var createModal = document.createElement("div");
		var modalMessage = document.createElement("div");
		var progressElement = document.createElement("div");
		
		createModal.id= "modal";
		createModal.className="modal";
		
		modalMessage.id="modalMessage";
		modalMessage.className="modalMessage";
		
		progressElement.id="appProgress";
		progressElement.className="appProgress";
		var progressBar = _createProgress();
		$(progressElement).html(progressBar);
		
		$(createModal).append(modalMessage);
		$(createModal).append(progressElement);
		
		return createModal;
		
		
		
		
		}
		function _createProgress(){
			console.log("Method Executing : AppOverlay.createProgress");
			var progress =document.createElement("progress");
			progress .value="0";
			progress.max="100";
			return progress;
						
			}
		
			setInterval(function _updateProgress(ajaxUrl){
				console.log("Method Executing : AppOverlay.updateProgress");
				$.ajax({
					type:"POST",
					//url:ajaxUrl+".htm",
					data:"",
					success: function(response){
						},
					error:function(response){
						}	
					});
				
				},3000);
		
		function _startOverlay(){
			console.log("Method Executing : AppOverlay.startOverlay");
			 _init();
			}
		
		function _stopOverlay(){
			console.log("Method Executing : AppOverlay.stopOverlay");
		}
			$.extend(module,{
				create:_create,
				startOverlay:_startOverlay,
				//updateProgress:_updateProgress
				});
				return module;
	
	}(AppOverlay || {},this.jQuery,this));