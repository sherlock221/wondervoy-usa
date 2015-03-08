wondervoy

    .controller("TabsCtrl", function ($scope,$state) {

        var stateName = $state.current.name;
        $scope.currentStateName = stateName.split('.')[0];

        console.log($scope.currentStateName);

        $scope.tabs = [
            {
                "name" : "Edit profile",
                "id"   : "editProfile",
                "url"  : "#/editProfile"
            },
            {
                "name" : "Your stories",
                 id : "user",
                "url"  : "#/user"
            },
            {
                "name" : "Inbox",
                "id"   : "inbox",
                "url"  : "#/inbox/list"
            }

        ];

    });