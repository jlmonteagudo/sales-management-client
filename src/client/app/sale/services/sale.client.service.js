(function() {
    'use strict';

    angular
        .module('app.sale')
        .factory('Sale', Sale);

    Sale.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Sale($resource, API_BASE_URL) {

        var params = {
            saleId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/sale/:saleId';

        return $resource(API_URL, params, actions);

    }

})();
