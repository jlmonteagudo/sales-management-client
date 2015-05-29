(function () {
    'use strict';

    angular
        .module('app.sale')
        .controller('SaleController', SaleController);

    SaleController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Sale',
        'TableSettings',
        'Customer'];
    /* @ngInject */
    function SaleController(logger,
        $stateParams,
        $location,
        Sale,
        TableSettings,
        Customer) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Sale);
        vm.sale = {};
        vm.sale.lines = [];

        vm.create = function() {
            // Create new Sale object
            var sale = new Sale(vm.sale);

            // Redirect after save
            sale.$save(function(response) {
                logger.success('Sale created');
                $location.path('sale/' + response.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Sale
        vm.remove = function(sale) {

            if (sale) {
                sale = Sale.get({saleId:sale.id}, function() {
                    sale.$remove(function() {
                        logger.success('Sale deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.sale.$remove(function() {
                    logger.success('Sale deleted');
                    $location.path('/sale');
                });
            }

        };

        vm.toViewSale = function() {
            vm.sale = Sale.get({saleId: $stateParams.saleId});
        };

        vm.refreshCustomers = function(search) {

            var requestParams = {};
            requestParams.limit = 10;
            requestParams.sort = 'name ASC';
            requestParams.where = {
                'name': {
                    'contains': search
                }
            };

            Customer.get(requestParams, function(response) {
                vm.customers = response.results;
            });
        };

        activate();

        function activate() {
            //logger.info('Activated Sale View');
        }
    }

})();
