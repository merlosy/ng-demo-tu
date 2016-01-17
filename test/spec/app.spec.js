(function () {
  'use strict';

  describe('module app', function () {

  	beforeEach(module('myapp'));

    describe('MainController', function() {

    	var controller, scope, $rootScope, 
    		$q;

    	beforeEach(inject(function( $controller, _$rootScope_, _$q_){
    		// The injector unwraps the underscores (_) from around the parameter names when matching
    		$rootScope = _$rootScope_;
    		$q = _$q_;

    		scope = $rootScope.$new();

    		// ContactsService = jasmine.createSpyObj('ContactsService', ['save', 'query', 'update', 'delete']);
    		// ContactsService.query.and.returnValue($q.when({}));
      //   ContactsService.save.and.returnValue($q.when({}));
      //   ContactsService.update.and.returnValue($q.when({}));
    		// ContactsService.delete.and.returnValue($q.when({}));

    		controller = $controller('MainController', {
    			'$scope' : scope, 
    			// 'ContactsService' : ContactsService,
    			// 'Person' : Person,
    			'$q' : $q
    		});

    	}));

      it('doit être défini', function () {
        expect(controller).toBeDefined();
      });
 
      it('doit définir isEmpty', function () {
        expect(scope.isEmpty).toBeDefined();
        var s = '';
        expect(scope.isEmpty(s)).toBeTruthy();

      });

    	
    });

  });

})();
