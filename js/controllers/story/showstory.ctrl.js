wondervoy
    .controller("ShowStoryCtrl", function ($rootScope,$stateParams,$state,$scope,$log,$window,StorySev) {
        console.log("showStory...");
        $window.scrollTo(0,0);
        var storyId  =  $stateParams.id;

        var stateName = $state.current.name;
        $scope.currentStateName = stateName.split('.')[0];

        $scope.isSendMg = false;

        $scope.commentSize = 10;

        $scope.closeStory = function(){
            $state.go($scope.currentStateName);
        }

        //故事结果
        $scope.story = "";


        $scope.sendMessage = function(){
            $state.go("story.showStory.sendMessage");
        }

        var loadList = function(storyId,commentSize,isRef){
            StorySev.findStoryDetail(storyId,commentSize).then(function(res){
                $scope.story = res.data.story;
                console.log(res);
            });
        }


        loadList(storyId,$scope.commentSize);

    });