'use strict';

eventsApp.directive('upvote', function(){
    return{
        restrict: 'E', // E, A, C, M : Element, Attribute, Class, Comment
        replace: true, // Removes invalid html
        templateUrl: '/templates/directives/upvote.html',
        scope: {
            upvote: "&",
            downvote: "&",
            count: "=" // Use '=' in reference to an integer. Use '@' in reference to a string. String must be evaluated in html.
        }
    }
});