var HomeController =(function(module,$,global){
   console.log(" Booting HomeController");
   
   function _initController(appModule){
         appModule.controller("HomeController",['$scope','$http','$state',function($scope,$http,$state){
		   console.log("Method Executing Home Controller");
		   //var responsePromise = $http.get('home.htm');
           $scope.loginSubmit = function(){
        	   $scope.validateCredential();
             $state.go('dashboard.profile');

           };

           $scope.validateCredential = function(){
             console.log('Method Executing:HomeController.validateCredential');
             $http.get('home.htm');

           };





	   }]);
	   
	   
   }
	
	
   $.extend(module,{
	   initController:_initController
   });
   return module;
	
}(HomeController ||{},this.jQuery,this));

