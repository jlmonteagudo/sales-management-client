(function() {
    'use strict';

    angular
        .module('app.sale')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listSale',
                config: {
                    url: '/sale',
                    templateUrl: 'app/sale/views/list.html',
                    controller: 'SaleController',
                    controllerAs: 'vm',
                    title: 'List Sales',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-graduation-cap"></i> Sales'
                    }
                }
            },
            {
                state: 'createSale',
                config: {
                    url: '/sale/create',
                    templateUrl: 'app/sale/views/create.html',
                    controller: 'SaleController',
                    controllerAs: 'vm',
                    title: 'Create Sale'
                }
            },
            {
                state: 'viewSale',
                config: {
                    url: '/sale/:saleId',
                    templateUrl: 'app/sale/views/view.html',
                    controller: 'SaleController',
                    controllerAs: 'vm',
                    title: 'View Sale'
                }
            }
        ];
    }
})();
