angular.module('demo', [])
    .controller('WelcomeController', function($scope) {
        $scope.greeting = 'Welcome!';
    })
    .controller('gaucheCtrl', function ($scope,$rootScope) {
        $scope.ingredients = [
            {"nom":"piment","prix":50},
            {"nom":"tomate","prix":25},
            {"nom":"oignon","prix":25},
            {"nom":"huile","prix":0},
            {"nom":"poisson","prix":400},
            {"nom":"attieké","prix":100},
            {"nom":"mayonnaise","prix":50},
            {"nom":"coca-cola","prix":300},
            {"nom":"eau","prix":50}
        ];
        $rootScope.totalcmde = 0;
        $rootScope.ingredientcmde = [];
    })
    .controller('droitCtrl',function ($scope) {
        $scope.numerocomde = 500;
    })
;

function milieuCtrl($scope) {

}



function piedCtrl($scope) {

}