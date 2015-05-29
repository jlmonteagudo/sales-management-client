(function() {
    'use strict';

    angular
        .module('app.customer')
        .factory('CustomerForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [
                {
                    key: 'name',
                    type: 'input',
                    templateOptions: {
                        label: 'Name:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'address',
                    type: 'input',
                    templateOptions: {
                        label: 'Address:',
                        disabled: disabled
                    }
                },
                {
                    key: 'state',
                    type: 'input',
                    templateOptions: {
                        label: 'State:',
                        disabled: disabled
                    }
                },
                {
                    key: 'country',
                    type: 'input',
                    templateOptions: {
                        label: 'Country:',
                        disabled: disabled
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
