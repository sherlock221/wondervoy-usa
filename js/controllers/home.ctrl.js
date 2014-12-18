wondervoy

    .controller("HomeCtrl", function ($rootScope,$scope,$window,$log,$q,$timeout,MessageService) {

        //控制 loading
       $scope.isShow = false;

        //列表
        $scope.posts = [];
        //height
        $scope.style= {height: $window.innerWidth  / 2+'px'};




        //加载更多
        this.loadMore = function(){

            console.log("加载更多...");

            $scope.isShow = true;


                MessageService.getList()
                    .then(function(result){


                        $timeout(function(){

                            $scope.posts = $scope.posts.concat(result);
                            $scope.isShow = false;
                            console.log($scope.posts);

                        },2000);



                    },function(err){
                        $scope.isShow = false;
                        console.log(err);
                    });


        }

        //自动加载
        this.loadMore();

    });