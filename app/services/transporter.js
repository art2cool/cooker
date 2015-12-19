module.exports = function () {
    var ingratiates = [];

    return {
        setIngrad: function(ingrad) {
            if(0 > ingratiates.indexOf(ingrad)) {
                ingratiates.push(ingrad);
            }
        },
        getIngradiates: function () {
            return ingratiates;
        },
        removeIngrad: function(ingrad) {
            var ingradName = ingrad.ingradName;

            for(var i = 0; i < ingratiates.length; i++) {
                if(ingradName === ingratiates[i].ingradName) {
                    ingratiates.splice(i,1);
                    break;
                }
            }

        }
    }
};