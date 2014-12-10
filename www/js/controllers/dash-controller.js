(function(){
  'use strict';

  angular.module('starter')

  .controller('DashCtrl', function($rootScope, $state, $scope, Note, User){

    Note.count().then(function(response){
      console.log('RESPONSE', response);
      $scope.count = response.data.count * 1;
    });

    $scope.logout = function(){
      User.logout().then(function(){
        $rootScope.rootuser = null;
        //console.log('ROOTSCOPE', $rootScope.rootuser);
        $state.go('tab.account');
        });
      };
  });

})();
