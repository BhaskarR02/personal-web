var Carousel =(function(module,$,global){
	"use strict";
	
	function _directiveCompile(){
		
		}
		
	function _directiveController(){
		}	
	
	
	
	function _initCarousel(){
		
		
		
		
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
	
	
	
	
	
	
	
	
	$.extend(module,{
		initCarousel:_initCarousel
		
		});
		
		return module;
	
	
	
	
	}(Carousel || {},this.jQuery,this));