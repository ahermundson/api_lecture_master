myApp.controller("PigController", ["$scope", "$http", function($scope, $http) {
  console.log("in the pig controller");
  var key = '6db86c485d507a52d3db67b39cf0930c';
  var baseURL = 'http://api.petfinder.com/';

  $scope.getRandomPet = function() {
    var query = baseURL + 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=pig';
    query += '&output=basic';
    query += '&format=json';

    console.log('query: ', query);

    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(function(response) {
      $scope.pet = response.data.petfinder.pet;

    });
  }
  $scope.getRandomPet();
}]);
