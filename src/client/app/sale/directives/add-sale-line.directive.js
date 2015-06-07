(function() {
    'use strict';

    angular
        .module('app.sale')
        .directive('addSaleLine', AddSaleLine);

    AddSaleLine.$inject = ['$modal'];
    /* @ngInject */
    function AddSaleLine($modal) {
        var directive = {
            restrict: 'A',
            scope: {
                sale: '='
            },
            link: linkFunc($modal)
        };

        return directive;
    }

    function linkFunc($modal) {
        return function(scope, el, attr, ctrl) {

            el.bind('click', function() {

                var modalInstance = $modal.open({
                    templateUrl: 'app/sale/directives/add-sale-line.html',
                    controller: ModalInstanceController
                });

                modalInstance.result.then(function(saleLine) {
                    scope.sale.lines.push(saleLine);
                });

            });

        };
    }

    var ModalInstanceController = ['$scope',
    '$modalInstance',
    'SaleLineForm',
    'Product',
    function($scope, $modalInstance, SaleLineForm, Product) {

        $scope.saleLine = {};
        $scope.formFields = SaleLineForm.getFormFields(false);
        $scope.products = [];

        $scope.create = function() {
            $modalInstance.close($scope.saleLine);
        };

        $scope.cancel = function() {
            $modalInstance.dismiss();
        };

        $scope.refreshProducts = function(search) {

            var requestParams = {};
            requestParams.limit = 10;
            requestParams.sort = 'description ASC';
            requestParams.where = {
                'description': {
                    'contains': search
                }
            };

            Product.get(requestParams, function(response) {
                $scope.products = response.results;
            });

        };

        $scope.setPrice = function() {
            if ($scope.saleLine.product) {
                $scope.saleLine.price = $scope.saleLine.product.price;
            }
        };

    }];

})();
