(function(){
	'use strict';

	/**
     * Module utils validation.
     * @module validation/Date
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
     */
	angular.module('validation.string', []);
	

    /**
	 * 	vérifie le format date
     *  @function validationEqual 
     *  @type directive 
     */
	function validationEqual(){

		/**
		 * 	Directive controller
	     *  @function validationEqualLink 
	     *  @type link 
	     */
		function validationEqualLink(scope, element, attr, ctrl){

			function runCheck(ngModelValue){
    			var item = scope.$eval(attr.equal);
    			var validity;
        		
    			if ( item===ngModelValue ) {
		            validity = true;
		        }
		        else {
		        	validity = false;
		        }
		        ctrl.$setValidity('equal', validity);
		        // console.log("equal", (new Date(scope.dateAfter)).toString(), validity);
    		}

			function customValidator(ngModelValue) {
        		
        		scope.$watch(function(){ return scope.$eval(attr.dateAfter);}, 
        			function(newVal, oldVal){
        			if (angular.isDefined(newVal) && newVal!==oldVal ){
        				runCheck(ngModelValue);
        			}
        			
        		});

		        runCheck(ngModelValue);

		        return ngModelValue;
		    }

		    ctrl.$parsers.push(customValidator);
		}

        return {
            restrict: 'A',
            require: 'ngModel',
			link : validationEqualLink
        };
    }


    
	angular.module('validation.string')
		.directive('equal', validationEqual );

})();
