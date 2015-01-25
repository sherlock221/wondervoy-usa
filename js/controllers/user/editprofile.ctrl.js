wondervoy

    .controller("EditProfileCtrl", function ($rootScope,$state,$stateParams,$scope,$log,AccountService,StorySev) {
            console.log("edit..");

        var stateName = $state.current.name;
        $scope.currentStateName = stateName.split('.')[0];

        $scope.fm = {

        }

        $scope.isSubmit = false;

        $scope.close = function(){
            $state.go($scope.currentStateName);
        }
    });