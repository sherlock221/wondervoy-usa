wondervoy

    .controller("SendMessageCtrl", function ($rootScope,$window,$state,$stateParams,$scope,$log,AccountService,StorySev) {

        var storyId  =  $stateParams.id;
        $window.scrollTo(0,0);
        var stateName = $state.current.name;
        $scope.currentStateName = stateName.split('.')[0];

        $scope.isSubmit = false;

        $scope.close = function(){
            $state.go("story.showStory");
        }
         $scope.fm = {
             content : ""
         }

        $scope.send = function(){
            $scope.isSubmit = true;
            var receiverId = 1;
            AccountService.sendMessage(receiverId,$scope.fm.content).then(function(res){
                if(res.state == "0"){

                    $rootScope.alertSuccess(res.message);
                    $scope.close();

                }
                else{
                    $rootScope.alertError(res.message);

                }

                $scope.isSubmit = false;
            },function(err){
                $scope.isSubmit = false;

            });

        }

    });