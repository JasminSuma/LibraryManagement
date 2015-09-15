angular.module('librarymanagementApp').controller('booklistcontroller', function ($scope, $location, libraryService) {

    $scope.books = libraryService.list();

    $scope.deletebook = function (id) {
        if (confirm('Do you want to delete?')) {
            libraryService.deletebook(id);
        }
    }

    $scope.editbook = function (book) {
        $location.path('/EditBook/:param1').search({ param: book.id });;
    }

    $scope.viewdetail = function (book) {
        $location.path('/ViewBook/:param1').search({ param: book.id });;
    }
})