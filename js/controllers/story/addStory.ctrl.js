wondervoy

    .controller("AddStoryCtrl", function ($rootScope,$state,$scope,$timeout,StorySev) {
        console.log("addStory");

        var stateName = $state.current.name;
        $scope.currentStateName = stateName.split('.')[0];


        //故事列表
        $scope.storys = [];
        //上传进度
        $scope.dynamic = "0%";

        //上传指示器
        $scope.isUpload = false;

        //是否上传第一张
        $scope.isFirst = true;

        //封面
        $scope.cover = "";

        //按钮锁定
        $scope.isPublish  = false;


        //上传
        $scope.isReload = false;

        $scope.reloadObj = "";


        $scope.coverMax = 20;
        $scope.coverCurrent = 0;
        $scope.storDescMax = 100;

        //检测封面变化
        $scope.$watch("cover.coverDesc",function(newVal,oldVal){
            if(!newVal){
                $scope.cover.coverDesc = "";
                $scope.coverCurrent = 0;
                return;
            }
               if(newVal.length  > $scope.coverMax){
                   $scope.cover.coverDesc = oldVal;
                   $scope.coverCurrent = oldVal.length;
                   return;
               }
            $scope.coverCurrent = newVal.length;
        });




        //重新上传图片
        $scope.$watch("reloadFile",function(mf){

            if(mf){
                $scope.isUpload = true;
                for (var i = 0; i < $scope.reloadFile.length; i++) {
                    var file = $scope.reloadFile[i];

                    StorySev.upload(file)
                        .progress(function(evt) {
                            var p  = parseInt(100.0 * evt.loaded / evt.total);
                            //console.log(p);
                            $scope.dynamic = p+"%";
                            if(p == 100){
                                $scope.dynamic = "loading..."
                            }
                        }).success(function(res, status, headers, config) {
                            if(res.state == "0"){
                                $scope.reloadObj.pic =   res.data.url;
                                $scope.closeReload();
                            }

                            $rootScope.alertSuccess(res.message);
                            $scope.isUpload = false;
                            $scope.dynamic =0+"%";
                        })
                        .error(function(){
                            $scope.isUpload = false;
                            $scope.dynamic =0+"%";
                        });
                }

            }



        });


        //上传图片
        $scope.$watch('myFiles', function(mf) {
            if(mf){
                $scope.isUpload = true;
                for (var i = 0; i < $scope.myFiles.length; i++) {
                    var file = $scope.myFiles[i];

                    StorySev.upload(file)
                        .progress(function(evt) {
                            var p  = parseInt(100.0 * evt.loaded / evt.total);
                            //console.log(p);
                            $scope.dynamic = p+"%";
                            if(p == 100){
                                $scope.dynamic = "loading..."
                            }
                        }).success(function(res, status, headers, config) {
                            if(res.state == "0"){
                                var storyObj = {
                                    pic : res.data.url,
                                    name : "0001"
                                };

                                if($scope.isFirst){
                                    $scope.cover = storyObj;
                                }
                                else{
                                    //添加到数组顶部
//                                $scope.storys.unshift(storyObj);
                                    console.log();
                                    $scope.storys.push(storyObj);
                                }

                                $scope.isFirst = false;
                            }

                            $rootScope.alertSuccess(res.message);
                            $scope.isUpload = false;
                            $scope.dynamic =0+"%";
                        })
                        .error(function(){
                            $scope.isUpload = false;
                            $scope.dynamic =0+"%";
                        });
                }

            }
        });

        $scope.showText = function(obj,isCover,index){
            console.log("show....");
            //添加watch 监听
            if(!isCover){
                obj.watch = $scope.$watch("storys["+index+"].desc",function(newVal,oldVal){
                    if(!newVal){
                        obj.desc = "";
                        obj.current = 0;
                        return;
                    }
                    if(newVal.length  > $scope.storDescMax){
                        obj.desc = oldVal;
                        obj.current = oldVal.length;
                        return;
                    }
                    obj.current = newVal.length;
                });
            }



            //显示text
            if(!obj.isShow){
                obj.isShow = true;
            }
        }

        $scope.hideText = function(obj){
            if(obj.watch){
                obj.watch();
            }
            console.log("hide....");
            //显示text
            obj.isShow = false;
        }

        $scope.reloadFn = function(obj){
            $scope.reloadObj = obj;
            $scope.isReload  = true;
        }

        //发表故事
        $scope.submitStory = function(){
            $scope.isPublish = true;
            var json = angular.toJson($scope.storys);
            StorySev.addStory($scope.cover.pic,$scope.cover.coverDesc,json)
                .then(function(res){
                    $rootScope.alertSuccess(res.message);
                    $scope.isPublish = false;
                    $timeout(function(){
                        $state.go("user");
                    },500);
                },function(err){
                    $scope.isPublish = false;
                });
        }

        $scope.closeReload = function(){
            $scope.isReload  = false;
        }




    });