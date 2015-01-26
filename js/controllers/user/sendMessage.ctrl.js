wondervoy

    .controller("SendMessageCtrl", function ($rootScope,$state,$stateParams,$scope,$log,AccountService,StorySev) {

        var storyId  =  $stateParams.id;

        var stateName = $state.current.name;
        $scope.currentStateName = stateName.split('.')[0];

        $scope.isSubmit = false;

        $scope.close = function(){
            $state.go($scope.currentStateName);
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