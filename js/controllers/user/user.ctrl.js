wondervoy

    .controller("UserCtrl", function ($rootScope,$stateParams,$scope,$log,AccountService,$window,StorySev) {
        var myId  =  $rootScope.user.userId;
        console.log("user...");

        $window.scrollTo(0,0);

        $scope.userObj = "";

        $scope.pageSize = 10;

        $scope.storys = [];

        $scope.isExpand = false;

        //控制 loading
        $scope.isShow = false;


        var  loadUser = function(userId){
            AccountService.getUserInfo(userId).then(function(res){
                $scope.userObj= res.data;
            });

        }

        var loadUserStory = function(storyId,userId){

            if(!userId)
                userId = myId


            StorySev.findUserStorys(storyId,$scope.pageSize,userId).then(function(res){

                if(res.data.storys.length  > 0){
                        $scope.storys = $scope.storys.concat(res.data.storys);

                }
                else{
                    $rootScope.alertInfo("您没有故事啦!");
                }
                $scope.isShow = false;

            }).then(function(){
                    $scope.isShow = false;
                });
        }


        $scope.refreshUserStorys = function(){
            $scope.storys = [];
            loadUserStory(0);
        };

        $scope.loadMore = function(){
            $scope.isShow = true;
            var lastData = $scope.storys[$scope.storys.length - 1]
            loadUserStory(lastData.storyId,myId);
        }



        //加载用户信息
        loadUser(myId);

        //加载故事列表
        loadUserStory(0);
    });