(function() {
    'use strict';

    angular
        .module('app.customer')
        .factory('Customer', Customer);

    Customer.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Customer($resource, API_BASE_URL) {

        var params = {
            customerId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/customer/:customerId';

        return $resource(API_URL, params, actions);

    }

})();
