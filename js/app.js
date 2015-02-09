var wondervoy = angular.module("wondervoy", [
    'ui.router',
    'ngAnimate',
    'mgcrea.ngStrap',
    "angularFileUpload"
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

    var forget = {
        url: "/forget",
        views: {
            'auth@': {
                templateUrl: "templates/auth/forgetPassWord.html",
                controller: "ForgetCtrl as forget"
            }
        }
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
    $stateProvider.state("home.forget",forget);


    /**
     * 个人信息
     */
    $stateProvider.state("user", {
        url: "/user",
        templateUrl: "templates/user/user.html",
        controller: "UserCtrl as userCl"
    });



    /**
     * 故事主体
     */
    $stateProvider.state("story", {
        url: "/story",
        templateUrl: "templates/story/story.html",
        abstract: true
    })


    /**
     * 发表故事
     */
    $stateProvider.state("story.addStory", {
        url: "/addStory",
        templateUrl: "templates/story/addStory.html"

    })


    /**
     * 显示故事
     */
    $stateProvider.state("story.showStory", {
        url: "/showStory/:id",
        templateUrl: "templates/story/showStory.html",
        controller: "ShowStoryCtrl"
    });


    /**
     * 修改个人信息
     */
    $stateProvider.state("user.editProfile",{
        url : "/editProfile",
        templateUrl: "templates/user/editProfile.html",
        controller: "EditProfileCtrl"
    });

    /**
     * 修改账户信息
     */
    $stateProvider.state("user.editAccount",{
        url : "/editAccount",
        templateUrl: "templates/user/editAccount.html",
        controller: "EditAccountCtrl"
    });


    $stateProvider.state("user.sendMessage",{
        url : "/sendMessage",
        templateUrl: "templates/user/sendMessage.html",
        controller: "SendMessageCtrl"
    });

    $stateProvider.state("story.showStory.sendMessage",{
        url : "/sendMessage",
        templateUrl: "templates/user/sendMessage.html",
        controller: "SendMessageCtrl"
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

//    url: "/wondervoy-usa/data"
    //线上地址
//    url: "http://123.57.75.45:8080/voy"
    url: "/voy"
});
