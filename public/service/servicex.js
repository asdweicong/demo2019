var log = require('../log/log')
var localStorage = require('../repository/localStorage')
var interfaces = require('../repository/interfaces')

var premiumDataCandidate = [];

var service = {

    getData: function (name) {


        log.logToConsole(name)
        log.logToRemote(name)
        return localStorage.getItem(name);


    },

    premiumTrial: function (data) {

        if (premiumDataCandidate.length == 0) {
            setTimeout(function () {
                interfaces.post(premiumDataCandidate[-1])
                premiumDataCandidate = []
            }, 3000)
        }
        if (premiumDataCandidate.length != 0) {
            premiumDataCandidate.push(data)
        } else {

        }


    },

    validateInputService: function (key) {
        var result;
        if (key == '' && key != '0') {
            result = false;
        } else {
            result = true;
        }
        log.logToConsole(result)
        log.logToRemote(result)
        return result;
    },

}

module.exports = service;
