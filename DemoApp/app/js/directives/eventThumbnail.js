'use strict';

eventsApp.directive('eventThumbnail', function(){
    return{
        restrict: 'E',
        replace: true, // Removes invalid html
        templateUrl: '/templates/directives/eventThumbnail.html',
        scope: {
            event: '=event'
        }
    }
});