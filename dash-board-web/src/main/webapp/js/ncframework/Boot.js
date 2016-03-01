var Boot = function(module) {
    //"use strict";
    var objAppVersion = navigator.appVersion;
    var objAgent = navigator.userAgent;
    var objBrowserName = navigator.appName;
    var objFullVersion = '' + parseFloat(navigator.appVersion);
    var operatingSystem = navigator.platform;
    var resolution ='';

    if ((objAgent.indexOf("Chrome") != -1)) {
        objBrowserName = "chrome";
    } else if ((objOffsetVersion = objAgent.indexOf("MSIE")) != -1) {
        alert("ie");
    	objbrowserName = "ie";
        objfullVersion = objAgent.substring(objOffsetVersion + 5);
        objbrowserName=objbrowserName+objfullVersion;
    } else if ((objOffsetVersion = objAgent.indexOf("Firefox")) != -1) {
        objbrowserName = "Firefox";
    } else if ((objOffsetVersion = objAgent.indexOf("Safari")) != -1) {
        objbrowserName = "Safari";
        objfullVersion = objAgent.substring(objOffsetVersion + 7);
    }
    
    if(window.screen.width>=320 && window.screen.width <=800){
    	resolution="mobile";
    }else if(window.screen.width>=801 && window.screen.width <=1279){
    	resolution="tablet";
    }
    else if(window.screen.width>=1280){
    	resolution="desktop";
    }
    


    $('body').attr('class', '' + objBrowserName + ' ' + operatingSystem + ' '+resolution+'');
}(Boot || {});