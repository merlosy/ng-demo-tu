(function(){
	'use strict';

	angular.module('register', [
		'user.services'
	]);

	function RegisterController($scope, $location, UserService){

		$scope.register = register;
		$scope.user = {};

		// ----- private

		function register(isValid){
			if (!isValid) return;

			UserService.register($scope.user).then(function(data){
				$location.url('/');
			});
		}

	}

	angular.module('register')
		.controller('RegisterController', RegisterController);

})();