/**
 * 
 */
var DialogService = (function(module, $, global) {
    "use strict";
    var mergedOptions;

    var ad = angular.module('myDialogModule', []);
    var $el = angular.element;
    var dialogWindow = "";

    

    ad.provider('myDialog', function() {
        this.name = 'Default';
        this.setName = function(name) {
            this.name = name;
        };


        var defaultConfig = this.defaultConfig = {
            overlayClass: 'DialogOverlayDefault',
            headerText: "dd",
            headerClass: "dialogHeaderDefault",
            dialogContent: "dialogBodyDefault",
            footerClass: "dialogFooterDefault",
            width: '40%',
            height: '40%',
            //defaulTemplate: '<div class="defaultTemplate"></div>',
            loadingText: "Loading"
        };

        this.setDefaultConfig = function(newDefaultConfig) {
            angular.extend(defaultConfig, newDefaultConfig);
        };

        this.$get = ['$document', '$window', '$rootScope','$controller','$q','$http','$templateCache','$compile','$timeout',
                     function($document, $window, $rootScope,$controller,$q,$http,$templateCache,$compile,$timeout) {

            var privateMethods = {


                _createDialogWindow: function(configOptions) {

                    //Check for buttons

                    var footer = "";
                    var hasButtons = configOptions.buttons;
                    if (hasButtons != "" && $.isArray(hasButtons)) {
                        var _getButtons = (privateMethods._createButtons(hasButtons));
                        footer = ('<div class="amex-dialogFooter ' + configOptions.footerClass + '">' + _getButtons + '</div>');
                    }
                    
                    
                    
                         dialogWindow = $el('<div id="dialogOverlay" class="' + configOptions.overlayClass + ' dialogOverlay grow"></div>' +
                                 '<div class="dialogWrapper grow">' +
                                 '<header class="' + configOptions.headerClass + ' amex-DialogHeaderDefault">' +
                                 '<span class="headerInfo">' + configOptions.headerText + '</span>' +
                                 '<span class="sprite-small sprite-closeLink-white pull-right">' +
                                 '</header>' +
                                 '<div class="amex-DialogBodyDefault">' + configOptions.template + '</div>' + footer +
                                 '</div>');
                    

                    $document.off('click').on('click', "#dialogOverlay", function() {
                        publicMethods.close($el(dialogWindow)); // 
                    });
                   
                    privateMethods._resolveDialogWindow(configOptions);
                    
                     return dialogWindow;
                },
                
                _resolveDialogWindow :function(configOptions){ 
                	var scope = angular.isObject(configOptions.scope)?configOptions.scope.$new() :$rootScope.$new();
                	var getController =configOptions.controller;
                	if(getController && (angular.isString(getController))){
                		var controllerInstance =$controller(getController,angular.extend(configOptions,{
                			$scope:scope
                		}));
                		//dialogWindow.data('dialogControllerController', controllerInstance);
                	}
                	 $timeout(function () {
                         $compile(dialogWindow)(scope);
                   });
                	
                },

                _createButtons: function(buttonOptions) {
                    var _buttonWrapper = $el('<div class="dialogfooter"></div>');
                    var _buttonString = "";
                    if (buttonOptions.length >= 1) {
                        for (var i = 0, j = buttonOptions.length; i < j; i++) {
                            _buttonString = $el('<button type="button" class="' + buttonOptions[i].classes + '">' + buttonOptions[i].text + '</button>');
                            _buttonWrapper.append(_buttonString);
                        }
                     }
                    return _buttonWrapper.html();
                },

                _closeDialog: function(elem) {
                    elem.remove();
                },

                _getDefaults: function() {
                              return defaultConfig;
                             },

                // This will always position the box to the center of page
                 _dialogPos: function(configOptions) {
                    var positionObject = [];
                    var _getWindow = $el($window);
                    var _h = _getWindow.height();
                    var _w = _getWindow.width();

                    var _getDialogWidth = parseInt(configOptions.width);
                    var _getDialogHeight = parseInt(configOptions.height);
                    var _setWidth = _w * (_getDialogWidth / 100);
                    var _setHeight = _h * (_getDialogHeight / 100);
                    var _setLeft = (_w / 2) - (_setWidth / 2);
                    var _setTop = (_h / 2) - (_setHeight / 2);
                    positionObject.push({
                        width: configOptions.width,
                        height: configOptions.height,
                        left: _setLeft,
                        top: _setTop
                    });
                    return positionObject[0];
                },
                _loader: function(mergedOptions) {
                     if (mergedOptions.loading) { // If loading Option is present
                        var loadingIcon = "";
                        if (mergedOptions.loading == true) {
                            loadingIcon = "<span class='loadingAnim'>Loading</span>";
                        } else if (angular.isString(mergedOptions.loading)) {
                            loadingIcon = '<span class="loadingAnim"><img src = "' + mergedOptions.loading + '"></span>';
                        }
                        var template = "";
                        template = '<div>' + loadingIcon + '</div>';
                        return template;
                    }
                },
                _getTemplate:function(tem,defObject){
                	
                	if(tem.template){
                		return tem.template;
                	}
                	if(tem.templateUrl){
                		return $http.get(tem.templateUrl, (defObject || {})).then(function(response) {
                            return response.data || '';
                        });
                	}
                	
                },
                _checkKeys:function(configOptions){
                	if(configOptions.template && configOptions.templateUrl){
                		throw new Error('Key:template & key:templateUrl cannot exist together');
                	    return false;
                	}
                	if(configOptions.template == undefined && configOptions.templateUrl == undefined){
                		throw new Error('Should have atleast one key');
                		return false;
                	}
                	else{
                		return true;
                	}
                	
                	
                }
            };


            var publicMethods = {
            	
            	reposition:function(configOptions){
            		
            		 var _getPositions = privateMethods._dialogPos(mergedOptions); // Get screen parameters
                     $el('.dialogWrapper').css({
                         'width': _getPositions['width'],
                         'left': _getPositions['left'],
                         'top': _getPositions['top'],
                         'height': _getPositions['height']
                     }); // Add css to inside modal box to position it


                     // Calculating height for container 
                     var modalBodyHeight = $el('.dialogWrapper').height() - ($el('.amex-DialogHeaderDefault').outerHeight() + $el('.amex-dialogFooter').outerHeight());
                     $el('.amex-DialogBodyDefault').css({
                         'height': modalBodyHeight
                     });
            		
            		
            		
            	},	
            		
                open: function(configOptions) {
                	console.log($templateCache);
                	var checkKey = privateMethods._checkKeys(configOptions);
                	if(checkKey){
                	var findTemplate;
                	$q.all({
                		findTemplate:privateMethods._getTemplate(configOptions)
                	}).then(function(dialogParam){
                		
                	
                		
                    mergedOptions = angular.copy(defaultConfig);
                    angular.extend(mergedOptions, configOptions);
                         mergedOptions.template=dialogParam.findTemplate;  
                    
                    
                    if (!mergedOptions.template) { // Check mergedOption have template key
                        mergedOptions.template = privateMethods._loader(mergedOptions);
                    }
                    
                    var _getWindow = privateMethods._createDialogWindow(mergedOptions);
                    $el('body').append(_getWindow); // Append the dialog window including overlay to body
                    publicMethods.reposition(mergedOptions);
                    $(window).resize(function(){
                    	publicMethods.reposition(mergedOptions);
                    });
                    return true;
                		});
                	}
                },
                
                close: function(target) {
                    target.removeClass('grow').addClass('shrink');
                    setTimeout(function() {
                        privateMethods._closeDialog(dialogWindow);
                    }, 500); //500 since we have a transition to take place in .5s
                },
                updateDialog: function(updateOptions) {
                	var checkTemplate =privateMethods._checkKeys(updateOptions);
                	if(checkTemplate){
                    $el('.amex-DialogBodyDefault').empty();
                    var updateTemplate;
                    $q.all({
                    	updateTemplate:privateMethods._getTemplate(updateOptions)
                	}).then(function(dialogParam){
                		$el('.amex-DialogBodyDefault').append(dialogParam.updateTemplate);
                		privateMethods._resolveDialogWindow(updateOptions);
                	});
                   }
                },
                showLoading: function(){
                    mergedOptions
                }
            };
            return publicMethods;

        }];
    });

    $.extend(module, {

    });
    return module;


}(DialogService || {}, this.jQuery, this));
