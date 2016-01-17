(function(){
	'use strict';

	/**
     * Home module.
     * @module home
     */
	angular.module('myapp.home', []);

	/**
     *  @function MainController
     *  @param {object} $scope controller scope
     *  @param {service} AuthService manages access control within the application
     */
    function HomeController(){

    }

    angular.module('myapp')
        .controller('HomeController', ['$scope',  HomeController]);

})();