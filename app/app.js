(function(){
	'use strict';

    /**
     *  Application main module.
     *  @module app
     *  @requires ui.router
     *  @requires ui.bootstrap
     *  @requires ngSanitize
     *  @requires constants
     *  @requires home
     *  @requires contacts
     *  @requires security
     */
	angular.module('myapp', [
        // vendor modules
        'ngRoute',
        "ngMessages",
       // "ngAnimate",
        // application modules
        'myapp.constants',
        'register',
        'myapp.home',
        'validation.string'
    ]);

    /**
     *  @function AppConfig
     *  @param $logProvider Angular provider
     *  @param $routeProvider Angular route manager
     *  @param {object} APP project configuration
     */
    function AppConfig($logProvider, $routeProvider, APP) {

        $logProvider.debugEnabled(APP.debugActive);

        $routeProvider.when('/', {
            templateUrl: 'home/home.html'
        })
        .when('/register', {
            templateUrl: 'register/registration-form.html',
            controller: 'RegisterController',
        })
        .otherwise({
            redirectTo: '/'
        });

    }


    /**
     *  @function MainController
     *  @param {object} $scope controller scope
     */
    function MainController($scope){

        $scope.isEmpty = isEmpty;
        $scope.message = "Présentation TU AngularJS";

        // ----- private

        function isEmpty(str) {
            return angular.isUndefined(str) || str===null || str==='' ;
        };

    }

    angular.module('myapp')
        .config(AppConfig)
        .controller('MainController',  MainController);

})();
