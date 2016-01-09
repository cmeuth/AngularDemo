'use strict';

eventsApp.controller('EventController', function EventController($scope, eventData, $anchorScroll){

    //color does not show due to ngSanitize
    $scope.snippet = '<span style="color:red;">hi there</span>';
    $scope.eventStyle = {'padding-left':'20px', 'padding-right': '20px'/*, 'color':'red'*/};
    $scope.sortorder = 'name';

    $scope.event = eventData.getEvent()
        .$promise
        .then( function(event) {
                $scope.event = event;
                console.log(event);
            })
        .catch( function(response){
                console.log(response);
            }
        );

    $scope.upVoteSession = function(session){
        session.upVoteCount++;
    }

    $scope.downVoteSession = function(session){
        session.upVoteCount--;
    }

    $scope.scrollToSession = function(){
        $anchorScroll();
    }
});
