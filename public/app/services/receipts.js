module.exports = ['transporter', function(transporter) {

 /*   var preperations = [
        {
            title: 'cotleta',
            author: 'Ira Paskiv',
            timeLog: 900000,
            type: 'meat',
            body: 'Melt oleo with Worcestershire sauce, onion and garlic powder. Stir until combined. Add cereals and pretzels. Stir together gently until cereals and pretzels are coated. Bake in 250° oven for 20 to 25 minutes or until crispy. Divide into 4 equal servings of 145 calories each.',
            ingradients: ["567817fa5483555d870b29d3", "567817fa5483555d870b29d5", "567817fa5483555d870b29d6"]

        },
        {
            title: 'balomy',
            timeLog: 800000,
            author: 'Ira Paskiv',
            type: 'meat',
            body: 'spinach, washed and stems removed strawberries, washed, stems removed and halved medium mushrooms, sliced slivered almonds, toasted light brown sugar sugar vinegar',
            ingradients: ["567817fa5483555d870b29d1", "567817fa5483555d870b29d5", "567817fa5483555d870b29d8", "567817fa5483555d870b29db", "567817fa5483555d870b29d9"]
        },
        {
            title: 'pie',
            timeLog: 500000,
            author: 'Anna Paskiv',
            type: 'desert',
            body: 'Sift together in top of double boiler, sugar, flour, gelatin and salt. Add light cream; whisk until well combined. Place over simmering water; add egg yolks. Continue whisking until mixture starts to thicken. Remove from double boiler and beat until smooth. Stir in rum and 1 teaspoon vanilla. Stir in sour cream; beat until smooth. Place in refrigerator until mixture starts to set, 20 minutes. Watch so it does not get too thick. ',
            ingradients: ["567817fa5483555d870b29d0", "567817fa5483555d870b29d4", "567817fa5483555d870b29d6", "567817fa5483555d870b29d9"]
        },
        {
            title: 'omelet',
            timeLog: 300000,
            author: 'Ira Paskiv',
            type: 'breakfast',
            body: 'People are more concerned than ever about making the right choices when it comes to eating. Once primarily concerned with weight and calories, now consumers want to know more about what they are putting into their bodies',
            ingradients: ["567817fa5483555d870b29d3", "567817fa5483555d870b29d6", "567817fa5483555d870b29d9"]
        },
        {
            title: 'chocolate',
            timeLog: 900000,
            type: 'desert',
            author: 'Anna Paskiv',
            body: 'Combine cream cheese and brown sugar, mixing at medium speed with electric mixer until well blended. Add eggs, one at a time, mixing well after each. Blend in chocolate, milk, and vanilla extract; pour over crust. Bake at 325° for 35 minutes. Combine sour cream and 2 tablespoons granulated sugar; carefully spread over cheesecake. Bake at 425° for 10 minutes. Loosen cake from rim of pan. Cool before removing rim of pan. Chill. Garnish with mint candies.',
            ingradients: ["567817fa5483555d870b29d0", "567817fa5483555d870b29d4", "567817fa5483555d870b29d6", "567817fa5483555d870b29d9"]
        },
        {
            title: 'juice',
            timeLog: 100000,
            type: 'breakfast',
            author: 'Vova Paskiv',
            body: 'Line bottom of crust with banana slices; pour custard over and refrigerate at least 4 hours. Just before serving, top with whipped cream, confectioners sugar and 1/2 teaspoon vanilla.',
            ingradients: ["567817fa5483555d870b29d7", "567817fa5483555d870b29d2"]
        }
    ];

    for(var i = 0; i < preperations.length; i++) {
        db.receipts.insert(preperations[i]);
    }*/
    return {
        getReceipt: function() {
            var receiptToCook = [];
            var cooking = [];
            var ingratiates = transporter.getIngradiates();

            for(var i = 0; i < ingratiates.length; i++) {
                var ingrad = ingratiates[i].ingradName;
                for(var j = 0; j < receipts.length; j++) {
                    var ingradName = receipts[j].ingradName;
                    if(ingrad === ingradName) {
                        receiptToCook.push(receipts[j].products);
                    }
                }
            }

            receiptToCook = receiptToCook.join(',').split(',').sort();

            for (var i = receiptToCook.length - 1; i > 0; i--) {
                if (receiptToCook[i] === receiptToCook[i - 1]) receiptToCook.splice( i, 1);
            }
            for (var i = 0; i < receiptToCook.length; i++) {
                var receipt = receiptToCook[i];
                for (var j = 0; j < preperations.length; j++) {
                    var product = preperations[j].title;

                    if(receipt === product) {
                        cooking.push(preperations[j]);
                    }
                }
            }

            return cooking;
        }
    }
}];