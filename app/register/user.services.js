(function(){
	'use strict';

	angular.module('user.services', []);

	function UserService($http, APP){
		var services = {
			register : register
		};
		return services;

		// ----- private

		function register(user){
			return $http.post(APP.apiPrefix+'/people', user).then(function(response){
				return response.data;
			});
		}
	}

	angular.module('user.services')
		.factory('UserService', UserService);

})();