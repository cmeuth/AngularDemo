'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngRoute'])
    .config(function($routeProvider, $locationProvider){
        $routeProvider.when('/cache',
            {
                templateUrl: 'templates/CacheSample.html',
                controller: 'CacheSampleController'
            });
        $routeProvider.when('/compile',
            {
                templateUrl: 'templates/CompileSample.html',
                controller: 'EventListController'
            });
        $routeProvider.when('/editProfile',
            {
                templateUrl: 'templates/EditProfile.html',
                controller: 'EditProfileController'
            });
        $routeProvider.when('/events',
            {
                templateUrl: 'templates/EventList.html',
                controller: 'EventListController'
            });
        $routeProvider.when('/event/:eventId',
            {
                foo: 'bar',
                templateUrl: 'templates/EventDetails.html',
                controller: 'EventController',
                resolve: {
                    event: function($route, eventData){
                        return eventData.getEvent($route.current.pathParams.eventId).$promise;
                    }
                }
            });
        $routeProvider.when('/filter', {
            templateUrl: 'templates/FilterSample.html',
            controller: 'FilterSampleController'
        });
        $routeProvider.when('/locale', {
            templateUrl: 'templates/LocaleSample.html',
            controller: 'LocaleSampleController'
        });
        $routeProvider.when('/newEvent', {
            templateUrl: 'templates/NewEvent.html',
            controller: 'EditEventController'
        });
        $routeProvider.when('/sampleDirective', {
            templateUrl: 'templates/SampleDirective.html',
            controller: 'SampleDirectiveController'
        });
        $routeProvider.when('/directiveController', {
            templateUrl: 'templates/DirectiveControllerSample.html',
            //controller: 'SampleDirectiveController'
        });
        $routeProvider.otherwise({
            redirectTo: '/events'
        });

        $locationProvider.html5Mode(true);
    })
    .factory('myCache', function($cacheFactory){
        return $cacheFactory('myCache', {capacity:3});
    });
