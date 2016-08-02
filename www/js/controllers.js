angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state) {
    $scope.doLogin = function(){
        //Normally hand off here to a LoginService of some kind and
        //manage success and failure
        $state.go('home');
    }
});