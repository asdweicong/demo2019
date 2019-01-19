var log = require('../log/log')

var storage = {
    getItem: function (key) {
        var result = key + parseInt(Math.random() * 1000000);
        log.logToConsole(result)
        log.logToRemote(result)
        return result;
    }
}

module.exports = storage;
