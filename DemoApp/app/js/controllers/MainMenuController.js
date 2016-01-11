'use strict';

eventsApp.controller('MainMenuController',
    function MainMenuController($scope, $location, $controller){

        //All of the $location service functions are output.
        console.log('absUrl: ', $location.absUrl());
        console.log('protocol: ', $location.protocol());
        console.log('port: ', $location.port());
        console.log('host: ', $location.host());
        console.log('path: ', $location.path());
        console.log('search: ', $location.search());
        console.log('hash: ', $location.hash());
        console.log('url: ', $location.url());

        $scope.createEvent = function(){
            //$location.replace(); // Allows to switch to a new view without adding a history entry.
            $location.url('/newEvent');
        };

        angular.extend(this, $controller('HeaderController', {$scope: $scope}));
    });