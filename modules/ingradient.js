var mongoose = require('mongoose');

var IngradientSchema = mongoose.Schema({
     ingradName: {
        type: String,
        index: true,
        lowercase: true
    },
    reciept_id: {
        type: String
    },
    imageUrl: {
        type: String
    }
});
var Ingradient = module.exports = mongoose.model('Ingradient', IngradientSchema);

module.exports.getIngrad = function(ingrad, callback) {
        console.log(ingrad);

   // db.collection.find( { _id : { $in : [1,2,3,4] } } );
        Ingradient.find({ _id : { $in : ingrad }},{reciept_id: true, _id: false}, function(err, doc) {
            if(err) throw err;

           doc = doc.map(function(rec) {
                return rec.reciept_id;
            });
           doc = doc.join(',').split(',').sort();
            for (var i = doc.length - 1; i > 0; i--) {
                if (doc[i] === doc[i - 1]) doc.splice( i, 1);
            }
/*
            var receipts = doc.reciept_id.split(',');
            console.log(receipts.length);*/

            callback(null, doc);
        })
};