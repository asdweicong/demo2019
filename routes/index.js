var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/clickMe', function (req, res, next) {
    var name = req.query.name
    var servicex = require('../public/service/servicex')
    var result = {data: servicex.getData(name)};
    res.send(result);
});

module.exports = router;
