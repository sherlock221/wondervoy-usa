wondervoy

     .factory("MessageService",function($http,$q,SERVER){

        return {

            getList : function(){
                var defer =  $q.defer();
                $http.get(SERVER.url+"/list.json",{})
                    .success(function(result){

                        defer.resolve(result);
                    })
                    .error(function(err){
                        console.error("MessageService getList error");
                        defer.reject(err);
                    });
                    return  defer.promise;
            },

            mock : function(){
                var defer =  $q.defer();
                $http.post("http://10.10.68.13:8888/v1/user/login",{
                        "clientInfo": {
                            "version": "2.3.3",
                            "clientModel": "iphone 4s / mi 3 ",
                            "clientType": "android / ios / unknow",
                            "clientOs": " 4.3/ 6",
                            "cNet": "ctwap"
                        },
                        "style": "black",
                        "data": {
                            "account": "用户账号",
                            "pwd": "用户密码",
                            "app": "zhiliao"
                        }
                })
                    .success(function(result){
                        defer.resolve(result);
                    })
                    .error(function(err){
                        console.error("MessageService getList error");
                        defer.reject(err);
                    });
                return  defer.promise;

            }


        }


    });