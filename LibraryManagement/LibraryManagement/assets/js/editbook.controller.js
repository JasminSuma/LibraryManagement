angular.module('librarymanagementApp').controller('editbookcontroller', function ($scope, $location, $routeParams, libraryService) {

    var param1 = $routeParams.param;
    $scope.book = angular.copy(libraryService.getbookbyid(param1));

    $scope.closebook = function () {
        $location.path('/');
    }

    $scope.editbook = function () {
        if ($scope.book.id != null && $scope.book.bookname != null) {
            if (confirm('Do you want to edit?')) {
                libraryService.savebook($scope.book);
                $location.path('/'); 
            }
        }
    }
})