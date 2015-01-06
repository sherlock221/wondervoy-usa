wondervoy

    .factory("AccountService", function ($http, $q, SERVER) {


        var AccountService = {};

        AccountService.login = function (email, password, source) {
            var defer = $q.defer();
            $http.post(SERVER.url + "/account/signin.json", {
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
            $http.post(SERVER.url + "/account/signup.json", {
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


        return  AccountService;

    });
