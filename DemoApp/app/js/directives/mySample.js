'use strict';

eventsApp.directive('mySample', function($compile){
    return{
        restrict: 'E',
        template: "<div class='col-md-3'><input type='text' class='form-control' ng-model='sampleData' />{{sampleData}}<br /></div>",
        scope: {

        } // Isolate Scope. This allows for each instance of this directive to work in an independent scope.
    }
});