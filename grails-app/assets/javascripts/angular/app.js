var surveyModule = angular.module('ngbook', ['ngRoute', 'ui.bootstrap','ngResource']);
surveyModule.config([ '$routeProvider', '$httpProvider','$logProvider','$locationProvider',
                       function($routeProvider, $http, $logProvider,$locationProvider) {
	console.log("survey module config")
	$logProvider.debugEnabled(true);
	 // $locationProvider.html5Mode(true);
	
	console.log("surveyModule intialized")
	$routeProvider.when('/', {
		templateUrl :'/ngbook/index.html',
//		controller : 'indexController'
	}).otherwise({
			templateUrl :'/ngbook/index.html',
//			controller : 'indexController'
		});
}]);
