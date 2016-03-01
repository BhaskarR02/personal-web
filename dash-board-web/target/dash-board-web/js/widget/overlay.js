(function($,undefined){
	$.widget("vas.overlay",{
		
	options:{
		backgroundColor:"1F1E1E",
		
	},
	_create:function(){
		console.log("Method Executing : Overlay.create");
		var overlayDiv = document.createElement("div");
		overlayDiv.id="appOverlay";
		overlayDiv.className ="overlay";
		
		
	},
	_createModalBox:function(){
		console.log("Method Executing : Overlay.createModalBox");
		var modalBox= document.createElement("div");
		modalBox.id="modalBox";
		modalBox.className ="modalBox";
		modalBox.append(_createModalBox());
		modalBox.append(_createProgressBar());
		return modalBox;
		
	},
	
	_createModalText:function(){
		console.log("Method Executing :Overlay.createModalText");
		var modalText = document.createElement("div");
		modalText.id = "modalText";
		modalText.className="modalText";
		return modalText;
		
	},
	
	_createProgressBar:function(){
		console.log("Method Executing :Overlay.createProgressBar");
		var progress = document.createElement("progress");
		progress.value="0";
		progress.max="100";
		return progress;
	},
	_updateProgressBar:function(){
		
	}
	
	});
	
	
})(jQuery);