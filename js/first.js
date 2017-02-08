
var firstApp = angular.module('firstApp', []);
firstApp.controller('FirstController', function($scope) {
    $scope.first = 'First name';
    $scope.last = 'Last name';
    $scope.heading = 'Message: ';
    $scope.updateMessage = function() {
        $scope.message = 'Hello ' + $scope.first.toUpperCase() +' '+ $scope.last.toUpperCase() + '!';
    };
});
