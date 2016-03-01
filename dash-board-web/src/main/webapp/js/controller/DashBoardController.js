var DashBoardController =(function(module,$,global){
   console.log(" Booting DashBoardController");
   
   function _initController(appModule){
         appModule.controller("DashBoardController",['$scope',function($scope){
		   
	   }]);
	   
	   
   }
	
	
   $.extend(module,{
	   initController:_initController
   });
   return module;
	
}(DashBoardController ||{},this.jQuery,this));

