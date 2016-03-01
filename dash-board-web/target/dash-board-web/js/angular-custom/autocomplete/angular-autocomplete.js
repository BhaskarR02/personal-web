
/*shoppingApp.controller("search",['$scope',function($scope){
	
	
}]).directive('search',function(){
	return{
		 restrict:'AEC',
		 replace:true,
		 template:"<input type='text' class='' id='searchBox'>"
	};
});*/
var angularAutocomplete = (function(module,$,global){
	
	/*function _init(){*/
		var _getNgApp = document.getElementsByTagName("html").item(0).getAttribute("data-ng-app");
		var _createModule = angular.module(_getNgApp,[]);
		_createModule.controller("autocomplete",['$scope',function($scope){
			$scope.inputText ="";
			
		}]).directive('autocomplete',['$http',function($http){
			return{
				 restrict:'AEC',
				 replace:false,
				 scope:{
					 "url":"@url",
					 "localData":"@localData",
					 "minLengthUse":"@minlength"	 
				 },
				 template:'<div><input type = "text"  placeholder = "{{placeholder}}" ng-keyup="keyPressed($event)" ng-model="searchStr" ng-model="searchStr"/>'+
				 +'</div>',
				 controller:function($scope,$element,$attrs){
					 
					  $scope.currentIndex = null;
					  $scope.searching = false;
					  $scope.minLength = 3;
					  
					 $scope.keyPressed = function(event){
					 console.log("Executing angular controller and event key is ",event.which);
					 if(!(event.which ==38 ||event.which ==40 || event.which ==13)){
						 if(!$scope.searchStr || $scope.searchStr ==""){
							 $scope.showDropdown = false;
						 }else{
							 if($scope.searchStr.length > $scope.minLength){
								 console.log("Searching keyword ",$scope.searchStr);
								 $scope.showDropdown = true;
								 $scope.currentIndex = -1;
								 $scope.result = [];
								 $scope.searching = true;
								 $scope.searchTimer = setTimeout(function(){
									 $scope.searchTimerComplete($scope.searchStr)
								 },$scope.pause);
							 }
							 
						 }
						 
					 }
					 else{
						 event.preventDefault();
					 }
				 }// End of key pressed
					 
				//Start of searchTimerComplete
					$scope.searchTimerComplete=function(str){
						console.log("Method in angular-autocomplete:searchTimerComplete");
					   if(str.length > $scope.minLength){
						   
					   }
					}; 
						
				 },
				 compile:function(element,attr){
					if(document.getElementById(attr.id).hasAttribute("url") && document.getElementById(attr.id).hasAttribute("localData")){
						 throw new AngularException.conflictingAttributes("Element cannot have multiple data source.")
					 }
					 else{
						 var _getDataSource;
						 if(document.getElementById(attr.id).hasAttribute("url")){
							 $http.get(attr.url).success(function(response){
								 _getDataSource = response;
							});
						}
						 else{
							 _getDataSource = attr.localData;
						 }
					} 
					
					 
					 
					 
					 
					 
					 
					 
					 
					 // look for data source on compilation of directive.
					 
					/* var _getDropDownClass;
					 var dropDownList;
					 var _createDropDownList;
					 console.log(attr.setclass);
					 if(attr.setclass =='undefined' || attr.setclass == null){
						 _getDropDownClass = 'autoCompleteList';
					}
					 else{
						 _getDropDownClass=attr.setclass;
					}
					var _getElementWidth = $(element).width();
					
					$http.get(attr.url).success(function(data){
						angular.forEach(data,function(data){
							dropDownList += "<li value = '"+(data.brandId)+"'>"+(data.brandName)+"</li>";
						});
						 _createDropDownList = $("<ul class ='"+_getDropDownClass+"' style='width:"+_getElementWidth+"px'>" +dropDownList+"</ul>");
						$(_createDropDownList).hide().appendTo($("#angular_comp"));
					});
					
					var linkFunction= function($scope,element,attr){
							
							$scope.suggestions=[];
							$scope.selectedTags = [];
							$scope.selectedIndex = -1;
							$(element).on('click',this,function(){
								if($(_createDropDownList).is(":visible")){
									$(_createDropDownList).css({'display':"none"});
								}
								else{
									$(_createDropDownList).css({"display":"block"});
								}
								
							});
							};
							 
						
					 return linkFunction;*/
				 }
				// template:"<input type='text' class='' id ='angular_autoComp_input'  placeholder='{{placeholder}}' style =''>",
				 
					 
					 
				 
			};
		}]);
		
	/*}*/
	
	$.extend(module,{
		//init:_init
	});
}(angularAutocomplete ||{},this.jQuery,this));
