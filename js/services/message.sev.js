wondervoy

     .factory("MessageService",function($http,$q,SERVER){

        return {

            getList : function(){
                var defer =  $q.defer();
                $http.post(SERVER.url+"/story/main",
                    {
                        index : 1,
                        size : 10
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