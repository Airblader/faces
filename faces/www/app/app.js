angular.module( 'faces', [ 'ionic' ] )

  .run( function( $ionicPlatform ) {
    $ionicPlatform.ready( function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if( window.cordova && window.cordova.plugins.Keyboard ) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar( true );
      }
      if( window.StatusBar ) {
        StatusBar.styleDefault();
      }
    } );

  } )

  .config( function( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( "/main" );

    $stateProvider.state( "main", {
      url: "/main",
      templateUrl: "app/main/main.html"
    } );
  } );
