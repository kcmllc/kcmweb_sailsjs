angular.module('kcmapp', ['ngRoute','feeds', 'kcmapp.finintel', 'kcmapp.strategy']).config(['$routeProvider', 
    function($routeProvider){
        $routeProvider.when('/', {
            // templateUrl: '/app/views/index.html', 
            controller: 'indexCtrl'
        });
    }
]).controller('indexCtrl', function (feedService, feedDirective){
    $http.get('/watchlist')
    .success(function(data){
       $scope.watchlists = data; 
    });
});