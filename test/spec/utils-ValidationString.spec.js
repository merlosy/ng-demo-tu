(function () {
  'use strict';

  describe('module utils', function () {

  	beforeEach(module('validation.string'));

    describe('ValidationString Directive', function() {

    	var $scope, $rootScope, form;

    	beforeEach(inject(function( $compile, _$rootScope_){
    		// The injector unwraps the underscores (_) from around the parameter names when matching
            $rootScope = _$rootScope_;
    	    $scope = $rootScope.$new();

    		var element = angular.element([
                '<form name="form">',
                '<input type="password" ng-model="model.password" name="pass" />',
                '<input type="password" ng-model="model.passwordConfirm" name="passConf" equal="model.password" />',
                '</form>'
            ].join('') );

            $scope.model = { password: 'azerty', passwordConfirm: 'toto' };
            $compile(element)($scope);
            form = $scope.form;

    	}));

        it('doit valider l\'égalité du mot de passe, au changement de la confirmation', function() {
            form.passConf.$setViewValue('azerty');
            $scope.$digest();
            expect($scope.model.passwordConfirm).toEqual('azerty');
            expect(form.passConf.$valid).toBe(true);
        });

        it('ne doit pas valider l\'égalité du mot de passe, au changement de la confirmation', function() {
            form.passConf.$setViewValue('toto');
            $scope.$digest();
            expect($scope.model.passwordConfirm).toEqual('toto');
            expect(form.passConf.$valid).toBe(false);
        });

        it('doit valider l\'égalité du mot de passe, au changement du mot de passe', function() {
            form.pass.$setViewValue('toto');
            $scope.$digest();
            expect($scope.model.password).toEqual('toto');
            expect(form.passConf.$valid).toBe(true);
        });
    	
    });

  });

})();
