var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var Receipt = require('../modules/receipt');
var Ingradient = require('../modules/ingradient');
var OrderReceipt = require('../modules/orderreceipt');
/* GET home page. */
router.post('/', function(req, res, next) {
    var ingrads = req.body.data;
    var receipts = [];
    ingrads = ingrads.map(function(ing){
       return  ing._id;
    });

        //serching receiept from ingrads
    Ingradient.getIngrad(ingrads, function (err, receipt) {


        Receipt.getReceipt(receipt, function(err, receipts) {
            if (err) throw err;

          //  console.log(receipts);


            OrderReceipt.receiptSort(ingrads, receipts, function (err, result) {
                if (err) throw err;

                console.log(result);

                res.send(result);

            });

        })
    });

});

module.exports = router;