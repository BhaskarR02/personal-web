var DashContentController =(function(module,$,global){
	console.log(" ** Initiating DashContentController **");
     var moduleName="";

	 function _initController(appModule){
	 		  console.log("Method Executing : DashContentController.initController");
	 		  moduleName = appModule;
	 		  appModule.controller("DashContentController",['$scope',function(){



	 		  }]);

	
// Route for left asides

     /*appModule.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
     	console.log(' Configuring route for main content');
        $routeProvider
        .when('/profile',{
        	templateUrl:'js/templates/profile.html',
        	controller:''
			})
        .$.when('/health',{
        	templateUrl:'js/templates/health.html',
        	controleer:''
        });
        
        

     }]);*/












	 }




     $.extend(module, {
       initController:_initController

     });
     
     return module;
     



}(DashContentController || {},this.jQuery,this));

