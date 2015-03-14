wondervoy

    .controller("InBoxCtrl", function ($rootScope,$state,$stateParams,$scope,$log,AccountService,StorySev) {
            console.log("inbox..");
        $scope.fm = {

        }





    })

.controller("ReviewCtrl", function ($rootScope,$state,$stateParams,$scope,$log,MessageService) {
    console.log("review..");

        $rootScope.navName = "review";
        $scope.fm = {

        }

        $scope.posts = [];

        MessageService.getMessage("2").then(function(res){
            $scope.posts = res.data.reviews;
        });


})
.controller("MessageDetailCtrl", function ($rootScope,$window,$state,$stateParams,$scope,$log,AccountService,MessageService) {
        $window.scrollTo(0,0);
        var sessionId = $stateParams.sessionId;
        $scope.userNameInbox = $stateParams.userName;
        $scope.fm = {
            sessionId : sessionId,
            size : 10,
            time :0,
            content :""
        }
        $scope.isSubmit = false;
        $scope.posts = [];

        MessageService.getChat($scope.fm).then(function(res){
            $scope.posts = res.data.chats;
        });


        $scope.sendMessage = function(){
            $scope.isSubmit = true;
            var temp =  $scope.fm.content;
            AccountService.sendMessage(sessionId,$scope.fm.content).then(function(res){
                console.log(res);

                $scope.posts.push({
                    chatTime: new Date().getTime(),
                    content: temp,
                    isReplay: 1,
                    sender: {firstName: "Ck1", lastName: "Zhang1", userId: $rootScope.user.userId,icon:$rootScope.user.userHead},
                    sessionId: 0
                })
                $scope.isSubmit = false;


            },function(){
                $scope.isSubmit = false;
            });

            $scope.fm.content = "";
        }


    })
    .controller("MessageCtrl", function ($rootScope,$state,$stateParams,$scope,$log,AccountService,MessageService) {
        console.log("message..");

        $rootScope.navName = "message";
        $scope.fm = {

        }

        $scope.posts = [];

        MessageService.getMessage("1").then(function(res){
            console.log(res.data.sessions);
            $scope.posts = res.data.sessions;
        });

        $scope.goDetail = function(post){
            $state.go("inbox.detail",{
                sessionId : post.latest.sessionId,
                userName :  post.latest.sender.firstName + " "+post.latest.sender.lastName
            })

            //数据
            post.unReadCount  = 0;
//            href="#/inbox/detail/{{post.latest.sessionId}}/{{post.latest.sender.firstName}}&nbsp;{{post.latest.sender.lastName}}"
        }
    });


