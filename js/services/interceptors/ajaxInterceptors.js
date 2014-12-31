wondervoy

    .factory("AjaxInterceptors",function($http,$q,SERVER){

        return {

            request : function(request){
                console.log("request",request);

                return request;
            },

            response : function(response){
                console.log("response",response);
                return response;
            }

        }

    });