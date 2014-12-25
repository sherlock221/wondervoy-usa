wondervoy

    .controller("RegisterCtrl", function ($rootScope,$scope,$state,$window,$log,$q,$timeout) {
        console.log("register..");
        var baseHome = $scope.currentStateName;
        $scope.post = {
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

        $scope.register = function(){
            alert("register email");
        }

    });