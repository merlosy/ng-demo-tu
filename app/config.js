(function() {
   'use strict';

   	/**
     *  Config module. Used for development environment
     *  @module constants
     */
   	angular.module('myapp.constants', []);

   	/**
   	 *	@namespace {object} APP
   	 *	@property {boolean} APP.debugActive Toggle angular logger display
   	 *	@property {string} APP.templatePrefix Prefix template injection (if required)
   	 *	@property {string} APP.apiPrefix Prefix all API calls
   	 *	@property {string} APP.apiVersion Append a version to the APP.apiPrefix string
   	 *	@readonly
   	 */
	angular.module('myapp.constants').constant('APP', {
		debugActive: true,

 		apiPrefix: 'http://localhost:2403'

	});

})();