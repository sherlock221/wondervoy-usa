wondervoy

    .controller("AuthCtrl", function ($rootScope, $scope, $state, $window, $log, $q, $timeout,$sce) {
        var stateName = $state.current.name;
        $scope.currentStateName = stateName.split('.')[0];
        console.log("auth  :  " + $scope.currentStateName);


        //关闭弹窗
        this.close = function () {
            $state.go($scope.currentStateName);
        };


        //跳到注册
        this.jumpRegister = function () {
            $state.go($scope.currentStateName + ".auth.register");
        }
        //跳到登录
        this.jumpLogin = function () {
            $state.go($scope.currentStateName + ".auth.login");
        }


        //跳到email 注册
        this.jumpRegisterEmail = function () {
            $state.go($scope.currentStateName + ".auth.registerEmail");
        }


    });