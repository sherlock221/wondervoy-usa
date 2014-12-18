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
            }



        }


    });