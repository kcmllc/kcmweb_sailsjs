angular.module('kcmapp.strategy', ['ngRoute','toastr']).config(['$routeProvider', 
    function($routeProvider){
        $routeProvider.when('/strategy', {
            templateUrl: '/app/views/strategy.html', 
            controller: 'strategyCtrl'
        });
    }
])
.controller('strategyCtrl', function($scope, $http, toastr){
    $http.get('/strategy')
        .success(function(data){
            $scope.strategies = data;
    })
        .error(function(data){
            toastr.error(data, 'Strategy Not Updated!', 'Strategy Not Updated!');
    });
    $scope.update = function(strategy){
        $http.put('/strategy/'+strategy.ticker, strategy)
        .success(function(data){
            toastr.success('success', 'Strategy Updated!', 'Strategy Updated!');
            $http.get('/strategy')
            .success(function(data){
                $scope.strategies = data;
            })
            .error(function(data){
                alert(data);
            });
        })
        .error(function(data){
            toastr.error(data, 'Strategy Not Updated!', 'Strategy Not Updated!');
        });
    };
    $scope.create = function(strategy){
        $http.post('/strategy', strategy)
        .success(function(data){
            toastr.success('success', 'Strategy Updated!', 'Strategy Updated!');
            $http.get('/strategy')
            .success(function(data){
                $scope.strategies = data;
            })
            .error(function(data){
                alert(data);
            });
        })
        .error(function(data){
            toastr.error('Error', 'Strategy Not Updated!', 'Strategy Not Updated!');
        });
    };
});
// angular.bootstrap($('#strategy'), ['strategyApp'])


