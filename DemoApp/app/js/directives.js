'use strict';

eventsApp.directive('mySample', function($compile){
   return{
       restrict: 'E',
       template: "<input type='text' class='form-control col-md-3' ng-model='sampleData' />{{sampleData}}<br />"
       //link: function(scope, element, attrs, controller){
       //    var markup = "<input type='text' class='form-control col-md-3' ng-model='sampleData' />{{sampleData}}<br />";
       //    angular.element(element).html($compile(markup)(scope));
       //}
   }
});