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

            return defer.promise;
        }


        AccountService.getUserInfo = function(){
            var defer = $q.defer();
            $http.post(SERVER.url + "/account/userInfo", {

            })
            .success(function (res) {
                defer.resolve(res);
            })

            return defer.promise;
        }

        return  AccountService;

    });
