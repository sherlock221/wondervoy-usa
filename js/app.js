var  wondervoy = angular.module("wondervoy",[
    'ui.router',
    'ui.bootstrap'
]);



//启动配置
wondervoy.run(function(){

    console.log("run....");
});



//设置路由
wondervoy.config(function($stateProvider,$urlRouterProvider){

    /**
     * 首页
     * url  /home
     */
    $stateProvider.state("home",{
        url : "/home",
        templateUrl : "templates/home.html",
        controller : "HomeCtrl as home"
    });



    //默认情况
    $urlRouterProvider.otherwise("/home");

});

//常量配置
wondervoy.constant("SERVER",{
    url : "/wondervoy/data"
});
