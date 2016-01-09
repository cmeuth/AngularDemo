'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData){
        $scope.eventStyle = {'padding-left':'20px', 'padding-right': '20px'/*, 'color':'red'*/};

        $scope.saveEvent = function(event, newEventForm){
            if(newEventForm.$valid){
                eventData.save(event)
                    .$promise
                    .then(function(response) {
                        console.log(event);
                        console.log('success', response);
                    })
                    .catch(function(response) {
                        console.log('failure', response);
                    });
            }
        }

        $scope.cancelEdit = function(){
            window.location = '/#/events';
        }
    }
);