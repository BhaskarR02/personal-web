var DashHeaderController =(function(module,$,global){
	console.log(" ** Initiating DashHeaderController **");

	 function _initController(appModule){
	 		  console.log("Method Executing : DashHeaderController.initController");
	 		  appModule.controller("DashHeaderController",['$scope',function($scope){



	 		  }]);

	 }
     $.extend(module, {
       initController:_initController

     });
     
     return module;
     



}(DashHeaderController || {},this.jQuery,this));

