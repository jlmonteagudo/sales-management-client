(function() {
    'use strict';

    angular
        .module('app.product')
        .factory('Product', Product);

    Product.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Product($resource, API_BASE_URL) {

        var params = {
            productId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/product/:productId';

        return $resource(API_URL, params, actions);

    }

})();
