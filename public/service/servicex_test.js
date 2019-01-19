var service = require('./servicex');
var assert = require('assert');

var testCase = {
    testValidateInputService: function () {
        assert(service.validateInputService(0), true);
        assert(service.validateInputService(0), true);
        assert(service.validateInputService(''), false);
    }
};

testCase.testValidateInputService();
