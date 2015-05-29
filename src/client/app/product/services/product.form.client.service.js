(function() {
    'use strict';

    angular
        .module('app.product')
        .factory('ProductForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [
                {
                    key: 'description',
                    type: 'input',
                    templateOptions: {
                        label: 'Description:',
                        disabled: disabled,
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
