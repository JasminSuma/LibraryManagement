var LibraryApp = angular.module('librarymanagementApp', ['ngRoute']);

LibraryApp.config(function ($routeProvider) {
    $routeProvider
    .when('/',
    {
        templateUrl: 'Pages/EntryBooks.html',
        controller: 'entrybookcontroller'
    })
    .when('/EditBook/:param1',
    {
        templateUrl: 'Pages/EditBook.html',
        controller: 'editbookcontroller'

    })
    .when('/ViewBook/:param1',
    {
        templateUrl: 'Pages/DeatilBookView.html',
        controller: 'detailbookviewcontroller'

    })
    .otherwise({ redirectTo: '/' });
});