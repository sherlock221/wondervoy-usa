wondervoy

    .controller("RegisterCtrl", function ($rootScope,$scope,$state,$window,$log,$q,$timeout,AccountService) {
        console.log("register..");
        var baseHome = $scope.currentStateName;
        $scope.isSubmit = false;

        $scope.fm = {
            lastName : "",
            firstName :"",
            email : "",
            password : "",
            passwordAgain : ""
        }

        $rootScope.authMsg ={
            msg : "<span>Already an Wondervoy member?&nbsp;&nbsp;&nbsp;</span>",
            urlName : "Login",
            url  : "jumpLogin();"
        }


        this.registerUser = function(){

            $scope.isSubmit= true;

            AccountService.register($scope.fm.firstName,$scope.fm.lastName,$scope.fm.email,$scope.fm.password).then(function(res){
                if(res.state == 0){
                    $rootScope.alertSuccess(res.message);
                    $state.go("home.auth.login");
                }
                else{
                    $rootScope.alertError(res.message);
                }

                $scope.isSubmit= false;
            },function(err){
                $scope.isSubmit= false;
            });


        }

    });