wondervoy

    .controller("LoginCtrl", function ($rootScope,$scope,$window,$log,$q,$timeout) {

        console.log("login ...");

        $rootScope.authMsg ={
            msg : "Don’T have an account?&nbsp;&nbsp;&nbsp;",
            urlName : "Sign up",
            url  : "jumpRegister();"
        }

    });