var AppBoot =(function(module,$,global){
	console.log(" ** Booting Application Main File");
	
	var appModule = angular.module("personalWeb",['ui.router']);
	
	/*Configuring the routers*/
	
	
	/*appModule.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
		console.log("Method Executing :AppBoot.config");
		$routeProvider
		.when('/dashboard',{
			templateUrl:'js/templates/dashboard.html',
			controller:"DashBoardController"
		})
		.otherwise({
			templateUrl:'js/templates/home.html',
			controller:'HomeController'
			
		});
		
	}]);*/
appModule.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
		console.log("Method Executing :AppBoot.config");
		 $stateProvider
		 .state('home',{
		 	url:'/home',
		 	templateUrl:'js/templates/home.html'
		 })
		 .state('dashboard',{
		 	url:'/dashboard',
		 	templateUrl:'js/templates/dashboard.html',
		 	controller:'DashBoardController'
		 }).
		 state('dashboard.profile',{
		 	url:'/profile',
		 	templateUrl:'js/templates/profile.html'

		 })
		 .state('dashboard.health',{
		 	url:'/health',
		 	templateUrl:'js/templates/health.html'
		 })
		 .state('dashboard.activity',{
		 	url:'/activity',
		 	templateUrl:'js/templates/activity.html'
		 })
		 .state('dashboard.subscription',{
		 	url:'/subscription',
		 	templateUrl:'js/templates/subscription.html'
		 })
		 .state('dashboard.reports',{
		 	url:'/reports',
		 	templateUrl:'js/templates/reports.html'
		 })
		 .state('dashboard.happening',{
		 	url:'/happening',
		 	templateUrl:'js/templates/happening.html'
		 })
		 .state('dashboard.expenditure',{
		 	url:'/expenditure',
		 	templateUrl:'js/templates/expenditure.html'
		 });
		 $urlRouterProvider.otherwise('/home');
		/*.when('/dashboard',{
			templateUrl:'js/templates/dashboard.html',
			controller:"DashBoardController"
		})
		.otherwise({
			templateUrl:'js/templates/home.html',
			controller:'HomeController'
			
		});*/
		
	}]);
	 
	
	
	
	// Initialize controllers & services
	
	/* Initializing DashboardController */
    HomeController.initController(appModule);
	DashBoardController.initController(appModule);
	DashHeaderController.initController(appModule);
	DashContentController.initController(appModule);
	DashBoardFooterController.initController(appModule);
	   /*appModule.controller("DashBoardController",['$scope',function($scope){
		   
	   }]);*/
    /* DashBoardController initializing end here*/
	   
	   
	/* Initializing HomeController  */
	//HomeController.initController(appModule);
	   /*appModule.controller("HomeController",['$scope',function($scope){
		   
	   }]);*/
	   
	   /* HomeController initializing end here*/
	
	/*PersonalHomeController.initController(appModule);*/
	
	
	
	
	
	
	
	$.extend(module,{
		
	});
	
	return module;
	
	
	
}(AppBoot ||{},this.jQuery,this))