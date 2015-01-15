wondervoy

    .controller("HomeCtrl", function ($rootScope,$scope,$window,$log,$q,$timeout,MessageService,$alert) {

        //控制 loading
       $scope.isShow = false;

        //列表
        $scope.posts = [];



        var scale = 720/1440;


        var w = $window.innerWidth;
        console.log(w);

        //height
        $scope.style= {height: $window.innerWidth  * scale+'px'};


        //加载更多
        this.loadMore = function(){

            console.log("加载更多...");

            $scope.isShow = true;


                MessageService.getList()
                    .then(function(res){
                        if(res.data){
                            //数据
                            var data = res.data.users;
                            $scope.posts = $scope.posts.concat(data);
                            $scope.isShow = false;
                            console.log($scope.posts);
                        }
                    },function(err){
                        $scope.isShow = false;
                        console.log(err);
                    });


        }

        //自动加载
        this.loadMore();



    });