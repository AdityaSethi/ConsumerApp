'use strict';


// Modules creation
angular.module('app.controllers', []);
angular.module('app.services', []);
angular.module('app.directives', []);

var consumerapp = angular.module('consumerApp', ['ngRoute','app.controllers', 'app.services', 'app.directives'])
  .config(function ($routeProvider) {
    $routeProvider
    	.when('/landingPage', {
    		templateUrl: 'partials/landingPage.html', controller: 'LandingPageCtrl'
    	})
  		.otherwise({
  			redirectTo: '/landingPage'
  		});
});
