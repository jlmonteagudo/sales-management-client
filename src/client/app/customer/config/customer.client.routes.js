(function() {
    'use strict';

    angular
        .module('app.customer')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listCustomer',
                config: {
                    url: '/customer',
                    templateUrl: 'app/customer/views/list.html',
                    controller: 'CustomerController',
                    controllerAs: 'vm',
                    title: 'List Customers',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-user"></i> Customers'
                    }
                }
            },
            {
                state: 'createCustomer',
                config: {
                    url: '/customer/create',
                    templateUrl: 'app/customer/views/create.html',
                    controller: 'CustomerController',
                    controllerAs: 'vm',
                    title: 'Create Customer'
                }
            },
            {
                state: 'viewCustomer',
                config: {
                    url: '/customer/:customerId',
                    templateUrl: 'app/customer/views/view.html',
                    controller: 'CustomerController',
                    controllerAs: 'vm',
                    title: 'View Customer'
                }
            },
            {
                state: 'editCustomer',
                config: {
                    url: '/customer/:customerId/edit',
                    templateUrl: 'app/customer/views/edit.html',
                    controller: 'CustomerController',
                    controllerAs: 'vm',
                    title: 'Edit Customer'
                }
            }
        ];
    }
})();
