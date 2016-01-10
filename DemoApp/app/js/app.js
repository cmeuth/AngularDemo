'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngRoute'])
    .config(function($routeProvider){
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
        $routeProvider.when('/eventDetails',
            {
                templateUrl: 'templates/EventDetails.html',
                controller: 'EventDetails.html'
            });
        $routeProvider.when('/events',
            {
                templateUrl: 'templates/EventList.html',
                controller: 'EventListController'
            });
        $routeProvider.when('/filter', {
            templateUrl: 'templates/FilterSample.html',
            controller: 'FilterSampleController'
        });
        $routeProvider.when('/newEvent', {
            templateUrl: 'templates/NewEvent.html',
            controller: 'EditEventController'
        });
        $routeProvider.when('/locale', {
            templateUrl: 'templates/LocaleSample.html',
            controller: 'LocaleSampleController'
        });
        $routeProvider.when('/newEvent', {
            templateUrl: 'templates/NewEvent.html',
            controller: 'EditEventController'
        });
    })
    .factory('myCache', function($cacheFactory){
        return $cacheFactory('myCache', {capacity:3});
    });
