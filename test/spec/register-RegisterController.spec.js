(function () {
  'use strict';

  describe('module register', function () {

  	beforeEach(module('myapp'));

    describe('RegisterController', function() {

    	var controller, scope, $rootScope, 
        UserService, location,
    		$q, $timeout;

    	beforeEach(inject(function( $controller, _$rootScope_, _$q_, _$timeout_){
    		// The injector unwraps the underscores (_) from around the parameter names when matching
    		$rootScope = _$rootScope_;
        $timeout = _$timeout_;
    		$q = _$q_;

    		scope = $rootScope.$new();

    		UserService = jasmine.createSpyObj('UserService', ['register']);
    		UserService.register.and.returnValue($q.when({}));

        location = jasmine.createSpyObj('$location', ['url']);
        location.url.and.returnValue($q.when({}));

    		controller = $controller('RegisterController', {
    			'$scope' : scope, 
          'UserService' : UserService,
    			'$location' : location,
    			// 'Person' : Person,
    			'$q' : $q
    		});

    	}));

      it('doit être défini', function () {
        expect(controller).toBeDefined();
      });
 
      it('doit contenir la fonction register', function () {
        expect(scope.register).toBeDefined();
      });

      it('ne doit pas appeler le service UserService.register', function () {
        scope.user = {};
        scope.register(false);
        expect(UserService.register).not.toHaveBeenCalled();
      });

      it('doit appeler le service UserService.register', function () {
        scope.register(true);
        expect(UserService.register).toHaveBeenCalled();
      });

      it('doit appeler le service UserService.register', function () {
        scope.register(true);
        expect(UserService.register).toHaveBeenCalled();
      });

      it('doit appeler le service UserService.register et location.url', function () {
        scope.register(true);
        expect(UserService.register).toHaveBeenCalled();
        // $httpBackend.flush();
        $timeout.flush();
        expect(location.url).toHaveBeenCalled();
      });

    	
    });

  });

})();
