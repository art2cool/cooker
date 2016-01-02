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

router.get('/:ingrad', function(req, res, next) {
    console.log(req.params.ingrad);
    Ingradient.find({"ingradName":{ '$regex':'.*' + req.params.ingrad + '*.' }}, {_id: true, 'ingradName': true, 'image': true}, function(err, ingrad) {
        if(err) throw err;

        res.send(ingrad);

    });
});


module.exports = router;
