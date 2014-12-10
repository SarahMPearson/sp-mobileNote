/* jshint loopfunc:true, camelcase:false */

(function(){
  'use strict';

  angular.module('starter')
  .factory('Note', function($rootScope, $http, origin){

    function count(){
      return $http.get(origin + '/notes/count');
    }

    return {count:count};
  });
})();
