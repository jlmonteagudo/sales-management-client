(function () {
    'use strict';

    angular
        .module('app.customer')
        .controller('CustomerController', CustomerController);

    CustomerController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Customer',
        'TableSettings',
        'CustomerForm'];
    /* @ngInject */
    function CustomerController(logger,
        $stateParams,
        $location,
        Customer,
        TableSettings,
        CustomerForm) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Customer);
        vm.customer = {};

        vm.setFormFields = function(disabled) {
            vm.formFields = CustomerForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new Customer object
            var customer = new Customer(vm.customer);

            // Redirect after save
            customer.$save(function(response) {
                logger.success('Customer created');
                $location.path('customer/' + response.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Customer
        vm.remove = function(customer) {

            if (customer) {
                customer = Customer.get({customerId:customer.id}, function() {
                    customer.$remove(function() {
                        logger.success('Customer deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.customer.$remove(function() {
                    logger.success('Customer deleted');
                    $location.path('/customer');
                });
            }

        };

        // Update existing Customer
        vm.update = function() {
            var customer = vm.customer;

            customer.$update(function() {
                logger.success('Customer updated');
                $location.path('customer/' + customer.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewCustomer = function() {
            vm.customer = Customer.get({customerId: $stateParams.customerId});
            vm.setFormFields(true);
        };

        vm.toEditCustomer = function() {
            vm.customer = Customer.get({customerId: $stateParams.customerId});
            vm.setFormFields(false);
        };

        activate();

        function activate() {
            //logger.info('Activated Customer View');
        }
    }

})();
