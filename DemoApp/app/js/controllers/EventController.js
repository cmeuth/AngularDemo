'use strict';

eventsApp.controller('EventController', function EventController($scope, eventData, $routeParams, $route){

    //color does not show due to ngSanitize
    //$scope.snippet = '<span style="color:red;">hi there</span>';
    $scope.eventStyle = {'padding-left':'20px', 'padding-right': '20px'/*, 'color':'red'*/};
    $scope.sortorder = 'name';
    //Custom Properties on route.
    console.log($route.current.foo);
    console.log($route.current.params.bar);

    $scope.event = $route.current.locals.event;

    $scope.reload = function(){
        $route.reload();
    };

    $scope.upVoteSession = function(session){
        session.upVoteCount++;
    };

    $scope.downVoteSession = function(session){
        session.upVoteCount--;
    };

    $scope.scrollToSession = function(){
        $anchorScroll();
    }
});
