var mongoose = require('mongoose');

var ReceiptSchema = mongoose.Schema({
    title: {
        type: String,
        index: true,
        lowercase: true
    },
    body: {
        type: String
    },
    author: {
        type: String,
        index: true
    },
    timeLog: {
        type: Number,
        index: true
    },
    type: {
        type: String,
        lowercase: true,
        index: true
    },
    ingradients: {
        type: Array
    }
});
var Receipt = module.exports = mongoose.model('Receipt', ReceiptSchema);

module.exports.getReceipt = function(receipt, callback) {
    Receipt.find({ _id : { $in : receipt }}, function(err, receipts) {
        if(err) throw err;

        callback(null, receipts);
    });
};