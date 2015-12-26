var express = require('express');
var router = express.Router();

var Ingradient = require('../modules/ingradient');
/* GET home page. */
router.get('/', function(req, res, next) {
    Ingradient.find({}, {_id: true, 'ingradName': true, 'image': true}, function(err, ingradients) {
        if(err) throw err;

        res.send(ingradients);

    });
});

module.exports = router;
