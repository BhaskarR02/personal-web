var WebBoot = (function(module,$,global){
	
	console.log("Personal WebBoot");
	
	// Detect Browser
	var browser ="";
	 var userAgent = navigator.userAgent;
	 var browsers ={
			 chrome:/chrome/i,
			 safari:/safari/i,
			 firefox:/firefox/i,
			 ie:/internet explorer/i
	         }
	 for (var key in browsers){
		 if(browsers[key].test(userAgent)){
			browser =key;
		 }
		 else browser='unknown';
	 }   // Detect browser end here
	 
	 // Detect window resizing
	 
	 
	window.onresize = getWindowSize; // Add view_* class to body tag
	window.onload = getWindowSize;   // Add relevant view class to body
	
	function getWindowSize(){
		console.log('Method Executing :getWindowSize');
		var getWindowWidth = window.innerWidth;
		var responsiveClass ="";
		if(getWindowWidth<=540 && getWindowWidth>0){
			responsiveClass = "view_small";
		}
		else if(getWindowWidth<960 && getWindowWidth >541){
			responsiveClass ="view_medium";
			}
		else if(getWindowWidth >= 960){
			responsiveClass = "view_large";
		}
		else {
			responsiveClass = "view_large";
		}
		
		document.getElementsByTagName('body')[0].classList.remove('view_small');
		document.getElementsByTagName('body')[0].classList.remove('view_medium');
		document.getElementsByTagName('body')[0].classList.remove('view_large');
		document.getElementsByTagName('body')[0].classList.add(responsiveClass);
	}
	
	//Window resizing end here		 
	 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*$.extend(module,{
	  	
	  	
		
	});*/
	return module;
}(WebBoot || {} , this.jQuery,this));