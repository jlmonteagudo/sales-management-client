(function() {
    'use strict';

    angular
        .module('app.sale')
        .factory('SaleLineForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [
                {
                    key: 'quantity',
                    type: 'input',
                    templateOptions: {
                        label: 'Quantity:',
                        disabled: disabled,
                        type: 'number',
                        required: true
                    }
                },
                {
                    key: 'price',
                    type: 'input',
                    templateOptions: {
                        label: 'Price:',
                        disabled: disabled,
                        type: 'number',
                        required: true
                    }
                }
            ];

            return fields;

        };

        var service = {
            getFormFields: getFormFields
        };

        return service;

    }

})();
