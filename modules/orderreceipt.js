module.exports.receiptSort = function (ingrad, receipts, callback) {

    for(var i = 0; i < receipts.length; i++) {
        var sorts = 0;

        for(var j = 0; j < ingrad.length; j++) {

            if(0 > receipts[i].ingradients.indexOf(ingrad[j])) sorts++;

        }
        receipts[i].ingradients.push(sorts);
    }

    receipts.sort(function(a,b) {
        if(a.ingradients[a.ingradients.length-1] > b.ingradients[b.ingradients.length-1]){
            return 1
        } else {
            return -1
        }
    });

    for(var i = 0; i < receipts.length; i++) {
        receipts[i].ingradients.splice(receipts[i].ingradients.length-1, 1);
    }

callback(null, receipts);
};