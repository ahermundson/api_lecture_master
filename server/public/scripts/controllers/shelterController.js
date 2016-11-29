myApp.controller("ShelterController", ["$scope", "$http", function($scope, $http) {
  console.log("in the shelter controller");
  var key = '6db86c485d507a52d3db67b39cf0930c';
  var baseURL = 'http://api.petfinder.com/';


  $scope.getShelters = function() {
    var query = baseURL + 'shelter.find';
    query += '?key=' + key;
    query += '&location=55417';
    query += '&output=basic';
    query += '&format=json';

    console.log('query: ', query);

    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(function(response) {
      $scope.shelters = response.data.petfinder.shelters.shelter;
      console.log($scope.shelters);
    });
  }
  $scope.getShelters();
}]);
