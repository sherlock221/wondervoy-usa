wondervoy

    .controller("LoginCtrl", function ($rootScope,$scope,$state,$window,$log,$q,$timeout,AccountService,Util) {

        console.log("login ...");

        $scope.isSubmit = false;


        $rootScope.authMsg ={
            msg : "Don’T have an account?&nbsp;&nbsp;&nbsp;",
            urlName : "Sign up",
            url  : "jumpRegister();"
        }

        $scope.email = "";
        $scope.password = "";

        //登录
        this.loginUser = function(){
            var email =  $scope.email;
            var password =  $scope.password;

            $scope.isSubmit = true;

            AccountService.login(email,password)
                .then(function(res){
                    if(res.state == 0){
                        //设置 token
                        $window.sessionStorage.token = res.data.session;

                       var user = {
                            userName : res.data.userInfo.firstName + res.data.userInfo.lastName,
                            userHead : res.data.icon,
                            userId   : res.data.userInfo.userId
                        }


                        Util.setSgObj("user",user);

                        //设置user
                        $rootScope.user = user;


                        $rootScope.alertSuccess(res.message);
                        $state.go("home");
                    }
                    else{
                        $rootScope.alertError(res.message);
                    }

                    $scope.isSubmit = false;

                },function(err){
                    $scope.isSubmit = false;
                });
        }

    });