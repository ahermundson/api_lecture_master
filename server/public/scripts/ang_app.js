var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/dogs', {
            templateUrl: '/views/templates/dogs.html',
            controller: 'DogController',
            controllerAs: 'dog'
        })
        .when('/cats', {
            templateUrl: '/views/templates/cats.html',
            controller: 'CatController',
            controllerAs: 'cat'
        })
        .when('/pigs', {
            templateUrl: '/views/templates/pigs.html',
            controller: 'PigController',
            controllerAs: 'pig'
        })
        .when('/shelters', {
          templateUrl: 'views/templates/shelters.html',
          controller: 'ShelterController',
          controllerAs: 'shelter'
        })
        .otherwise({
            redirectTo: '/dogs'
        });
}]);
