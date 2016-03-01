var PersonalHomeController = (function(module,$,global){
	console.log(' ** Booting PersonalHomeController ** ');
	
	function _initController(appModule){
		console.log("Method Executing : PersonalHomeController.initController");
		appModule.controller("HomeController",['$scope',function($scope){
			
			$scope.clickElem = function(event){
				console.log('Method Executing :PersonalHomeController.clickElem');
				
			}
			
			$scope.loadDashBoard = function(){
				console.log("Method Executing:");
				
				
			}
			
			
		}]);
		
	}
	
	$.extend(module,{
		initController :_initController
		
	});
	return module;
	
}(PersonalHomeController || {},this.jQuery,this)); 