//'use strict';
//var fs = require('fs');

eventsApp.factory('eventData', function($resource){
   var resource = $resource('/data/event/:id', {id: '@id'}, {"getAll": {method: "GET", isArray: true}});
   return {
       getEvent: function (eventId) {
           return resource.get({id: eventId});
       },
       save: function (event) {
           event.id = 522;
           return resource.save(event);
       },
       getAllEvents: function(){
           return resource.query();
       }
    };
});