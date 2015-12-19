module.exports = ['transporter', function(transporter) {
    var receipts = [
        {
            ingradName: 'apple',
            products: ['juice','pie']
        },
        {
            ingradName: 'milk',
            products: ['omelet', 'pie']
        },
         {
            ingradName: 'cacao',
            products: ['chocolate', 'pie']
        },
        {
            ingradName: 'eggs',
            products: ['cotleta', 'balomy']
        },
        {
            ingradName: 'flour',
            products: ['omelet', 'pie', 'chocolate', 'cotleta']
        }

    ];
    var preperations = [
        {
            product: 'cotleta',
            preperation: 'Melt oleo with Worcestershire sauce, onion and garlic powder. Stir until combined. Add cereals and pretzels. Stir together gently until cereals and pretzels are coated. Bake in 250° oven for 20 to 25 minutes or until crispy. Divide into 4 equal servings of 145 calories each.'
        },
        {
            product: 'balomy',
            preperation: 'spinach, washed and stems removed strawberries, washed, stems removed and halved medium mushrooms, sliced slivered almonds, toasted light brown sugar sugar vinegar'
        },
        {
            product: 'pie',
            preperation: 'Sift together in top of double boiler, sugar, flour, gelatin and salt. Add light cream; whisk until well combined. Place over simmering water; add egg yolks. Continue whisking until mixture starts to thicken. Remove from double boiler and beat until smooth. Stir in rum and 1 teaspoon vanilla. Stir in sour cream; beat until smooth. Place in refrigerator until mixture starts to set, 20 minutes. Watch so it does not get too thick. '
        },
        {
            product: 'omelet',
            preperation: 'People are more concerned than ever about making the right choices when it comes to eating. Once primarily concerned with weight and calories, now consumers want to know more about what they are putting into their bodies'
        },
        {
            product: 'chocolate',
            preperation: 'Combine cream cheese and brown sugar, mixing at medium speed with electric mixer until well blended. Add eggs, one at a time, mixing well after each. Blend in chocolate, milk, and vanilla extract; pour over crust. Bake at 325° for 35 minutes. Combine sour cream and 2 tablespoons granulated sugar; carefully spread over cheesecake. Bake at 425° for 10 minutes. Loosen cake from rim of pan. Cool before removing rim of pan. Chill. Garnish with mint candies.'
        },
        {
            product: 'juice',
            preperation: 'Line bottom of crust with banana slices; pour custard over and refrigerate at least 4 hours. Just before serving, top with whipped cream, confectioners sugar and 1/2 teaspoon vanilla.'
        }
    ];
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
                    var product = preperations[j].product;

                    if(receipt === product) {
                        cooking.push(preperations[j]);
                    }
                }
            }

            return cooking;
        }
    }
}];