//'use strict';
//var fs = require('fs');

eventsApp.factory('eventData', function($resource){
   var resource = $resource('/data/event/:id', {id: '@id'});
   return {
       getEvent: function () {
           return resource.get({id: 1});
       },
       save: function (event, count) {
           event.id = 522;
           return resource.save(event);
       },
       getAllEvents: function(){
           return resource.query();
       }
    };
});