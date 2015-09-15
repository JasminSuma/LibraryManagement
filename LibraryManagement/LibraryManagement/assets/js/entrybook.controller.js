angular.module('librarymanagementApp').controller('entrybookcontroller', function ($scope, libraryService) {

    $scope.books = libraryService.list();

    $scope.savebook = function () {
        if ($scope.book != null) {
            if (confirm('Do you want to create?')) {
                libraryService.savebook($scope.book);
                $scope.book = {};
            }
        }
    }

    $scope.closebook = function () {
        libraryService.closebook($scope.book);
        $scope.book = {};
    }
})