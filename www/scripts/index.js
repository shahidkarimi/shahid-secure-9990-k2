// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints,
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );

        $.mobile.allowCrossDomainPages = true;

        admob.initAdmob("ca-app-pub-5083612526133102/5277560008","ca-app-pub-5083612526133102/6754293201");
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        admob.showBanner(admob.BannerSize.BANNER, admob.Position.BOTTOM_APP);
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();

function loadPage($p){
    alert('IN');
}