var wondervoy = angular.module("wondervoy", [
    'ui.router',
    'ngAnimate',
    'mgcrea.ngStrap'
]);




//启动配置
wondervoy.run(function () {
    console.log("run....");
});


//设置路由
wondervoy.config(function ($stateProvider, $urlRouterProvider) {

    var auth = {
        url: "/auth",
        abstract: true,
        views: {
            'auth@': {
                templateUrl: "templates/auth/auth.html",
                controller: "AuthCtrl as auth"
            }
        }
    }

    var login ={
        url: "/login",
        templateUrl: "templates/auth/login.html",
        controller: "LoginCtrl as login"
    }

    var register = {
        url: "/register",
        templateUrl: "templates/auth/register.html",
        controller: "RegisterCtrl as register"
    }

    var registerEmail = {
        url: "/registerEmail",
        templateUrl: "templates/auth/register-email.html",
        controller: "RegisterCtrl as register"
    }

    /**
     * 首页
     * url  /home
     */
    $stateProvider.state("home", {
        url: "/home",
        templateUrl: "templates/home.html",
        controller: "HomeCtrl as home"
    });

    /**
     * 验证
     */
    $stateProvider.state("home.auth",auth);
    $stateProvider.state("home.auth.login",login);
    $stateProvider.state("home.auth.register",register);
    $stateProvider.state("home.auth.registerEmail",registerEmail);


    /**
     * 个人信息
     */
    $stateProvider.state("user", {
        url: "/user",
        templateUrl: "templates/user/user.html",
        controller: "UserCtrl as user"
    });


    /**
     * 发表故事
     */
    $stateProvider.state("user.sendStory", {
        url: "/sendStory",
        templateUrl: "templates/user/sendStory.html",
        controller: "SendStoryCtrl as sendStory"
    });


    //默认情况
    $urlRouterProvider.otherwise("/home");
});


//配置http 拦截器
wondervoy.config(function($httpProvider){
    $httpProvider.interceptors.push("AjaxInterceptors");
});


//常量配置
wondervoy.constant("SERVER", {
    url: "/wondervoy/data"
});
