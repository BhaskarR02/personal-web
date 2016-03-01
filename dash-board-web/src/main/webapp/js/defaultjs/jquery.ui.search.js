// JavaScript Document
(function(){
	"use strict";
	console.log("Initializing Search");
	
	$.widget('ui.amexselect',{
		options:{
			dataSourceType:"",
			dataSource:"",
			minKey:"" || 1,
			classList :""
			
			},
		_create :function(){
			console.log("Method Executing : search.create");
			var self = this;
			var o = self.options;
			var $elem = self.element;
			_getPosition($elem);
			
			
			},
		_init:function(){
			console.log("Init");
			var self = this;
			var o = self.options;
			var $elem = self.element;
			$elem.on('keyup',function(){
				   var query = $elem.val();
					_getData(o.dataSourceType,o.dataSource,query);
				});
			},
			_createContainer:function(){
				console.log("Container");
			var outerContainer = document.createElement("div").classList.add("amex-search");	
			
			  },
			  
			 _getData :function(dataSourceType,dataSource,data){
				  if(dataSourceType === "ajax"){
					  $.ajax({
						  type:"POST",
						   data:data,
						   url:dataSource,
						   success: function(){
							   },
							   onerror:function(){
								   
								   }
						  
						  });
					  }
					  else if(dataSourceType === "local"){
						  var _getDataSource = dataSource;
						  for(var i = 0,j=dataSource.length;i<j;i++){
							  
							  }
						  }
					  
				 
				 
				 
				 },
			_getPosition:function(element){
				console.log("Get position");
				var $elemPosition  = element.position();
				var left = $elemPosition.left;
				var top = $elemPosition.top;
				var tempObject = {
					left:left,
					top:top
					
					};
				return tempObject;
				}	
		
		
		
		
		
		});
	
	
	
	
	}(window.jQuery));