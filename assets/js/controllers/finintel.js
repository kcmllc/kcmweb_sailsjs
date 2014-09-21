var finintel = angular.module('finintel', ['toastr'])

finintel.controller('finintelCtrl', function ($scope, $http, toastr){

$scope.getTicker = function(){
    $http.post('/ticker/find?ticker='+ $scope.ticker)
        .success(function(data){

            $scope.overview = data[0].overview[0];
            $scope.valuation = data[0].valuation[0];
            $scope.financials = data[0].financials[0];
            $scope.ownership = data[0].ownership[0];
            $scope.performance = data[0].performance[0];
            $scope.technicals = data[0].technicals[0];
        })
        .error(function(data){
            toastr.error('Ticker not found', 'Cannot find the requested ticker')
        })
    $http.post('/article/find?ticker='+ $scope.ticker)
        .success(function(data){
            console.log(data);
            $scope.articles = data;
        })
        .error(function(data){
            $scope.articles = ""
            toastr.error('No Articles', 'No news articles found for the requested ticker')
        })
    }
})
angular.bootstrap($('#finintel'),['finintel'])

