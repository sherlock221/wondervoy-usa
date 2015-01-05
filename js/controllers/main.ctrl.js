wondervoy

    .controller("MainCtrl", function ($rootScope, $state,$window,$scope, $alert,$sce,Util) {



        //全局用户
        $rootScope.user =  Util.getSgObj("user");


//        this.showUserInfo = function(){
//            $scope.isShowUserInfo = true;
//            console.log("mosue enter");
//        }

        //全局提示框
        $rootScope.$watch("httpError",function(temp){
            if(temp){
                 var type = temp.type || info;
                    $alert(
                        {
                            title: ""+temp.title,
                            content:temp.content,
                            placement: 'top',
                            type: type,
                            keyboard: true,
                            show: true,
                            duration : 2.3
                        });
                }
        });


        $rootScope.alertSuccess = function(content){
                var httpError = {
                    content : content,
                    title : "success",
                    status : 200,
                    type : "success"
                }
                $rootScope.httpError = httpError;
        }

        $rootScope.alertInfo = function(content){
            var httpError = {
                content : content,
                title : "info",
                status : 200,
                type : "info"
            }
            $rootScope.httpError = httpError;
        }

        $rootScope.alertWarn = function(content){
            var httpError = {
                content : content,
                title : "warning",
                status : 200,
                type : "warning"
            }
            $rootScope.httpError = httpError;
        }

        $rootScope.alertError = function(content){
            var httpError = {
                content : content,
                title : "error",
                status : 200,
                type : "danger"
            }
            $rootScope.httpError = httpError;
        }


        //缩放比例
        var scale = 2;
//        $scope.banner_height = $window.innerWidth  / 2;
//        console.log( $scope.win_height);

        //登出
        $rootScope.loginOut = function(){
            Util.remove("user");
            $rootScope.user = null;

            //发送登出链接
            $state.go("home");
        }

    });