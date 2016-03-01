var AngularException =(function(module,$,global){
	console.log("Defining all angular exceptions");
	
	function _conflictingAttributes(message){
		console.log("Method Executing: AngularException.conflictingAttributes");
		this.message = message;
	}
	
	
	
	
	$.extend(module,{
		conflictingAttributes:_conflictingAttributes
		
		
	});
	return module;
}(AngularException || {},this.jQuery,this));