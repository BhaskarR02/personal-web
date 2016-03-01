var ApplicationLoginBoot = (function(module,$,global){
    "use strict";
	
	console.log("Booting Application Login");
    var getAppModule = ApplicationBoot.module;
    var module = angular.module(getAppModule,['ngRoute']);
        /*module.config(['$routeProvider',function($routeProvider,$locationProvider){
        	$routeProvider.when('/login',{
        		templateUrl:'login.jsp',
        		controller:'LoginController'
        	}).when('/signUp',{
        		templateUrl:'signUp.html',
        		controller:'SignUpController'
        	});
        	
        }]);*/
        
    
    
    
    Login.init();
    Login.submit();
    
    
    
    
    
        
	
	
	
	
	
}(ApplicationLoginBoot || {},this.jQuery,this));