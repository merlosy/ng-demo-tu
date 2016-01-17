(function () {
  'use strict';

  describe('module home', function () {

  	beforeEach(module('myapp'));

    describe('HomeController', function() {

    	var controller, scope, $rootScope, 
    		$q;

    	beforeEach(inject(function( $controller, _$rootScope_, _$q_){
    		// The injector unwraps the underscores (_) from around the parameter names when matching
    		$rootScope = _$rootScope_;
    		$q = _$q_;

    		scope = $rootScope.$new();

    		controller = $controller('HomeController', {
    			'$scope' : scope,
    			'$q' : $q
    		});

    	}));

      it('doit être défini', function () {
        expect(controller).toBeDefined();
      });
    	
    });

  });

})();
