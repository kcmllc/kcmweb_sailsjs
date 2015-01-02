angular.module('kcmapp.finintel', ['ngRoute','toastr']).config(['$routeProvider', 
    function($routeProvider){
        $routeProvider.when('/finintel', {
            templateUrl: '/app/views/finintel.html', 
            controller: 'finintelCtrl'
        });
    }
]).
controller('finintelCtrl', function ($scope, $compile, $http, toastr){

$scope.getTicker = function(){
    $http.post('/ticker/find?ticker='+ $scope.ticker)
        .success(function(data){
            $('#seekingalpha').html($compile("<feed summary='true' count='10' url='https://www.google.com/finance/company_news?q=NYSE:"+$scope.ticker+"&ei=F7RuVJCbEYjdqQGXt4GIDw&output=rss'"+"/>")($scope));
            // $scope.$apply();
            $scope.overview = data[0].overview[0];
            $scope.valuation = data[0].valuation[0];
            $scope.financials = data[0].financials[0];
            $scope.ownership = data[0].ownership[0];
            $scope.performance = data[0].performance[0];
            $scope.technicals = data[0].technicals[0];
            $http.get('http://www.knightcapllc.com/strategy/find?ticker=' + $scope.ticker)
                .success(function(data){
                    $scope.strategies = data;
                   })
                .error(function(data){
                    alert(data);
                });
        })
        .error(function(data){
            toastr.error('Ticker not found', 'Cannot find the requested ticker');
        });
    $http.post('/article/find?ticker='+ $scope.ticker)
        .success(function(data){
            $scope.articles = data;
        })
        .error(function(data){
            $scope.articles = "";
            toastr.error('No Articles', 'No news articles found for the requested ticker');
        });
    };

    $scope.update = function(strategy){
        $http.put('/strategy/'+strategy.ticker, strategy)
        .success(function(data){
            toastr.success('success', 'Strategy Updated!', 'Strategy Updated!')
        })
        .error(function(data){
            toastr.error('Error', 'Strategy Not Updated!', 'Strategy Not Updated!')
        })
    }
    $scope.create = function(strategy){
        $http.post('/strategy/'+strategy.ticker, strategy)
        .success(function(data){
            toastr.success('success', 'Strategy Updated!', 'Strategy Updated!')
        })
        .error(function(data){
            toastr.error('Error', 'Strategy Not Updated!', 'Strategy Not Updated!')
        })
    }
    $scope.addToWatchlist = function(strategy){
        $http.post('/tradier/'+ strategy.ticker)
        .success(function(data){
            toastr.success('success', 'Strategy Updated!', 'Strategy Updated!')
        })
        .error(function(data){
            toastr.error('Error', 'Strategy Not Updated!', 'Strategy Not Updated!')
        })
    }
    $scope.updateWatchlist = function(strategy){
        $http.post('/tradier/'+ strategy.ticker)
        .success(function(data){
            toastr.success('success', 'Strategy Updated!', 'Strategy Updated!')
        })
        .error(function(data){
            toastr.error('Error', 'Strategy Not Updated!', 'Strategy Not Updated!')
        })
    }
});
// angular.bootstrap($('#finintel'),['finintel'])

