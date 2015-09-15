angular.module('librarymanagementApp').controller('detailbookviewcontroller', function ($scope, $location,$routeParams, libraryService) {

    var param1 = $routeParams.param;
    $scope.book = angular.copy(libraryService.getbookbyid(param1));
    
    $scope.closebook = function () {        
        $location.path('/');
    }
})