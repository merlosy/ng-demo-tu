(function () {
  'use strict';

  describe('module register', function () {

  	beforeEach(module('myapp'));

    describe('UserService', function() {

    	var $rootScope, 
        UserService, 
    		$q, $httpBackend;
      var API_URL = 'http://localhost:2403/people';

    	beforeEach(function(){

        inject(function( _UserService_, _$rootScope_, _$httpBackend_, _$q_){
      		// The injector unwraps the underscores (_) from around the parameter names when matching
      		UserService = _UserService_;
          $rootScope = _$rootScope_;
          $httpBackend = _$httpBackend_;
      		$q = _$q_;
    	  });

      }); 

      afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
      });

      it('doit définir le service UserService', function() {
        expect(UserService).toBeDefined();
      });

      it('doit définir le service UserService.register', function() {
        expect(UserService.register).toBeDefined();
      });

      it('register() doit appeler le WS', function() {
        var dataContent = null;
        var user = {
          nom:'Jacques',
          prenom: 'Dupont',
          email: 'jacques.dupont@test.com',
          password: 'azerty'
        };
 
        $httpBackend.expectPOST(API_URL).respond(function() {
          return [201, {}, {}];
        });

        UserService.register(user, function(data){
          dataContent = data;
        });

        $httpBackend.flush();
      });
    	
    });

  });

})();
