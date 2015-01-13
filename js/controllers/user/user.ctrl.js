wondervoy

    .controller("UserCtrl", function ($rootScope,$scope,$log,AccountService) {

        console.log("user...");

        $scope.userObj = "";


        var  loadUser = function(){
            AccountService.getUserInfo().then(function(res){
                $scope.userObj= res.data;
            });

        }


        //加载用户信息
        loadUser();
    });