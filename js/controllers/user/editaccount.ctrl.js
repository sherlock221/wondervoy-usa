wondervoy

    .controller("EditAccountCtrl", function ($rootScope,$state,$stateParams,$scope,$log,AccountService,StorySev) {
            console.log("account..");


        var stateName = $state.current.name;
        $scope.currentStateName = stateName.split('.')[0];

        $scope.fm = {
            oldPass : "",
            newPass : "",
            newPassAgain : ""
        }

        $scope.isSubmit = false;


        $scope.close = function(){
             $state.go($scope.currentStateName);
        }

        $scope.updatePass = function(){
            console.log("update..");


            var oPass = $scope.fm.oldPass;
            var nPass = $scope.fm.newPass;
            var nPassAgain = $scope.fm.newPassAgain;

            if(nPass != nPassAgain){
                $rootScope.alertError("新密码与确认密码不一致!");
                return;
            }
            else if(oPass == nPass){
                $rootScope.alertError("新密码与旧密码相同!");
                return;
            }

            $scope.isSubmit = true;

            AccountService.updatePass(oPass,nPass).then(function(res){
                console.log(res);
                $scope.isSubmit = false;

                if(res.state == "0"){
                    $state.go("home.auth.login");
                }
                else{
                }

                $rootScope.alertSuccess(res.message);

            },function(err){
                $scope.isSubmit = false;
            });


        }
    });