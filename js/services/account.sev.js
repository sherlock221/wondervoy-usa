wondervoy

    .factory("AccountService", function ($http, $q, SERVER) {


        var AccountService = {};

        AccountService.login = function (email, password, source) {
            var defer = $q.defer();
            $http.post(SERVER.url + "/account/signin", {
                    email: email,
                    password: password,
                    source: "web"
            })
            .success(function (res) {
                defer.resolve(res);
            })
                .error(function(err){
                    defer.reject(err);
                });

            return defer.promise;
        }

        AccountService.register = function (firstName,lastName,email,password, source) {
            var defer = $q.defer();
            $http.post(SERVER.url + "/account/signup", {
                    firstName : firstName,
                    lastName : lastName,
                    email: email,
                    password: password,
                    source: "web"

            })
                .success(function (res) {
                    defer.resolve(res);
                })
                .error(function(err){
                    defer.reject(err);
                });

            return defer.promise;
        }

        AccountService.getUserInfo = function(userId){
            var defer = $q.defer();
            $http.post(SERVER.url + "/user/userInfo", {
                userId : userId
            })
            .success(function (res) {
                defer.resolve(res);
            })

            return defer.promise;
        }

        //修改密码
        AccountService.updatePass = function(oldPass,newPass){
            var defer = $q.defer();
            $http.post(SERVER.url + "/account/changePasswd", {
                newpasswd : newPass,
                oldpasswd : oldPass
            })
                .success(function (res) {
                    defer.resolve(res);
                })
            return defer.promise;
        }

        //修改个人信息
        AccountService.updateUserInfo  = function(newInfo){
            var defer = $q.defer();
            $http.post(SERVER.url + "/user/updateUserInfo", {
                newInfo : newInfo
            })
                .success(function (res) {
                    defer.resolve(res);
                })
            return defer.promise;
        }

        //修改技能信息
        AccountService.updateUserSkills  = function(newSkills){
            var defer = $q.defer();
            $http.post(SERVER.url + "/user/updateUserSkills", {
                newSkills : newSkills
            })
                .success(function (res) {
                    defer.resolve(res);
                })
            return defer.promise;
        }
        return  AccountService;

    });
