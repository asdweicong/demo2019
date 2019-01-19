var interfaces = require('../repository/interfaces')

var premiumDataCandidate = [];

var service = {
    premiumTrial: function (data) {
        if (premiumDataCandidate.length == 0) {
            setTimeout(function () {
                interfaces.post(premiumDataCandidate[-1])
                premiumDataCandidate = []
            }, 1000)
        }
        if (premiumDataCandidate.length != 0) {
            premiumDataCandidate.push(data)
        } else {

        }
    }
}

module.exports = service;
