var dropDownDirective =function(module,$,global){
	console.log("** Initializing dropDownDirective **");
	$el=angular.element;
	
	function _dropDownDirective(){
		
		 function _directiveCompile(tElement,tAttr,transclude){
			var _createList = $('<div class="menuTemplate hideMenu"></div>');
			    
			   // $(tElement).append(_createList);
			return {
		               pre:function preLink(scope,iElement,iAttrs,controller){
		
		               },
		               post:function (scope,iElement,iAttrs,controller){
		            	   $(iElement).on('mouseover mouseout', function(){
		            		   
		            		   _displayMenu(iAttrs.htmlcontent);  
		            	   });
		            	}
		         };
		
		     }
		
		     
		 
		 function _directiveController($scope,$element,$transclude){
		     	console.log("_directiveController " +$element);
		     }
		 
		 return {
		        restrict:"EAC",
		        replace:false,
		        transclude:false,
		        scope:{},
		        compile:_directiveCompile,
		        controller:_directiveController
		        //template:'<div class="menuTemplate"></div>',
		        
		  };
	}
	
	
	
	function _initDropDown(appName){
		appName.directive('dropDown',_dropDownDirective);
		
	}
	
	function _displayMenu(content){
		console.log("Method Executing:dropDownDirective._displayMenu");
		var _cacheMenu = $el('.menuTemplate');
		var _isVisible = $el('.menuTemplate').hasClass('showMenu');
		 if(_isVisible==false){
			 _cacheMenu.removeClass('hideMenu').addClass('showMenu');
			 _cacheMenu.load(content);
		}else{
			_cacheMenu.removeClass('showMenu').addClass('hideMenu');
		 }
	}
	
	
	
	
	
	
	$.extend(module,{
		initDropDown:_initDropDown
		
	});
	
	return module;
}(dropDownDirective || {},this.jQuery,this);