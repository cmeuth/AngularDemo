'use strict';

eventsApp.controller('HeaderController',
    function HeaderController($scope, $location){
        $scope.isActive = function(viewLocation){
            return viewLocation === $location.path();
        }
    });