wondervoy

     .factory("MessageService",function($http,$q,SERVER){

        return {

            getList : function(page){
                var defer =  $q.defer();
                $http.post(SERVER.url+"/story/main",
                    {
                        page : page,
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
            },

            //获得未读消息
            getMessageCount : function(){
                var defer =  $q.defer();
                $http.post(SERVER.url+"/message/count",
                    {

                    })
                    .success(function(result){
                        defer.resolve(result);
                    })
                    .error(function(err){
                        defer.reject(err);
                    });
                return  defer.promise
            },
            /**
             * 获得消息
             * @param type  1标识获取消息  2标识获取review
             * @returns {promise|*|promise|promise}
             */
            getMessage : function(type){
                var defer =  $q.defer();
                $http.post(SERVER.url+"/message/countDetail",
                    {
                        type : type
                    })
                    .success(function(result){
                        defer.resolve(result);
                    })
                    .error(function(err){
                        defer.reject(err);
                    });
                return  defer.promise
            },

            /**
             * 获得chat
             * @param type
             * @returns {promise|*|promise|promise}
             */
            getChat : function(obj){
                var defer =  $q.defer();
                $http.post(SERVER.url+"/message/chats",
                    {
                        sessionId : obj.sessionId,
                        time : obj.time,
                        size : obj.size
                    })
                    .success(function(result){
                        defer.resolve(result);
                    })
                    .error(function(err){
                        defer.reject(err);
                    });
                return  defer.promise
            }

        }


    });