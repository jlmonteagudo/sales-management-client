(function() {
    'use strict';

    angular
        .module('app.product')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listProduct',
                config: {
                    url: '/product',
                    templateUrl: 'app/product/views/list.html',
                    controller: 'ProductController',
                    controllerAs: 'vm',
                    title: 'List Products',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-cubes"></i> Products'
                    }
                }
            },
            {
                state: 'createProduct',
                config: {
                    url: '/product/create',
                    templateUrl: 'app/product/views/create.html',
                    controller: 'ProductController',
                    controllerAs: 'vm',
                    title: 'Create Product'
                }
            },
            {
                state: 'viewProduct',
                config: {
                    url: '/product/:productId',
                    templateUrl: 'app/product/views/view.html',
                    controller: 'ProductController',
                    controllerAs: 'vm',
                    title: 'View Product'
                }
            },
            {
                state: 'editProduct',
                config: {
                    url: '/product/:productId/edit',
                    templateUrl: 'app/product/views/edit.html',
                    controller: 'ProductController',
                    controllerAs: 'vm',
                    title: 'Edit Product'
                }
            }
        ];
    }
})();
