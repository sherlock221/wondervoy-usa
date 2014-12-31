wondervoy

    .factory("AccountService",function($http,$q,SERVER){


        var AccountService = {};

        AccountService.login = function(email,password,source){

                $http.post(SERVER.url+"/account/signin",{
                    params : {
                        email : email,
                        password : password,
                        source  : "web"
                     }
                })
                    .success(function(res){
                       alert(res);
                    })

                    .error(function(err){
                        alert("网络错误!");
                    });

        }


            return  AccountService;

    });
