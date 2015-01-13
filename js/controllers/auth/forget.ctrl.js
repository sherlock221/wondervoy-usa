wondervoy

    .controller("ForgetCtrl", function ($rootScope,$scope,$state,$window,$log,$q,$timeout,AccountService,Util) {

        var stateName = $state.current.name;
        $scope.currentStateName = stateName.split('.')[0];
        console.log("auth  :  " + $scope.currentStateName);

        //关闭弹窗
        this.close = function () {
            $state.go($scope.currentStateName);
        };


    });