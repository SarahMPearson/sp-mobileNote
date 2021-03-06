(function(){
  'use strict';

  angular.module('starter')

  .controller('FriendsCtrl', function($scope, Friends){
    $scope.friends = Friends.all();
  })

  .controller('FriendDetailCtrl', function($scope, $stateParams, Friends){
    $scope.friend = Friends.get($stateParams.friendId);
  });

})();
