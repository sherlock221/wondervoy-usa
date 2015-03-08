wondervoy

    .controller("InBoxCtrl", function ($rootScope,$state,$stateParams,$scope,$log,AccountService,StorySev) {
            console.log("inbox..");
        $scope.fm = {

        }





    })

.controller("ReviewCtrl", function ($rootScope,$state,$stateParams,$scope,$log,AccountService,StorySev) {
    console.log("review..");

        $rootScope.navName = "review";
    $scope.fm = {

    }




})
    .controller("MessageCtrl", function ($rootScope,$state,$stateParams,$scope,$log,AccountService,StorySev) {
        console.log("message..");

        $rootScope.navName = "message";
        $scope.fm = {

        }




    });


