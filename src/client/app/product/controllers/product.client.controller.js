(function () {
    'use strict';

    angular
        .module('app.product')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Product',
        'TableSettings',
        'ProductForm'];
    /* @ngInject */
    function ProductController(logger,
        $stateParams,
        $location,
        Product,
        TableSettings,
        ProductForm) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Product);
        vm.product = {};

        vm.setFormFields = function(disabled) {
            vm.formFields = ProductForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new Product object
            var product = new Product(vm.product);

            // Redirect after save
            product.$save(function(response) {
                logger.success('Product created');
                $location.path('product/' + response.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Product
        vm.remove = function(product) {

            if (product) {
                product = Product.get({productId:product.id}, function() {
                    product.$remove(function() {
                        logger.success('Product deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.product.$remove(function() {
                    logger.success('Product deleted');
                    $location.path('/product');
                });
            }

        };

        // Update existing Product
        vm.update = function() {
            var product = vm.product;

            product.$update(function() {
                logger.success('Product updated');
                $location.path('product/' + product.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewProduct = function() {
            vm.product = Product.get({productId: $stateParams.productId});
            vm.setFormFields(true);
        };

        vm.toEditProduct = function() {
            vm.product = Product.get({productId: $stateParams.productId});
            vm.setFormFields(false);
        };

        activate();

        function activate() {
            //logger.info('Activated Product View');
        }
    }

})();
