var didi = angular.module("garba",[])
{
    function gaucheCtrl($scope)
    {
        $scope.ingredients=[
            {"nom":"piment","prix":50},
            {"nom":"tomate","prix":25},
            {"nom":"oignon","prix":25},
            {"nom":"huile","prix":0},
            {"nom":"posson","prix":400},
            {"nom":"attieké","prix":100},
            {"nom":"mayonnaise","prix":50},
            {"nom":"coca-cola","prix":50},
            {"nom":"eau","prix":50}
        ];

    }
}