wondervoy

    .controller("LoginCtrl", function ($rootScope,$scope,$state,$window,$log,$q,$timeout,AccountService,Util) {

        console.log("login ...");

        $rootScope.authMsg ={
            msg : "Don’T have an account?&nbsp;&nbsp;&nbsp;",
            urlName : "Sign up",
            url  : "jumpRegister();"
        }

        $scope.email = "920825209@qq.com";
        $scope.password = "dasdasd";

        //登录
        this.loginUser = function(){
            var email =  $scope.email;
            var password =  $scope.password;

            AccountService.login(email,password)
                .then(function(res){
                    if(res.state == 0){
                        //设置 token
                        $window.sessionStorage.token = res.data.session;

                       var user = {
                            userName : res.data.userName,
                            userHead : res.data.userHead
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

                });
        }

    });