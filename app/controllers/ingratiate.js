'use strict';

module.exports = ['$scope', 'transporter', function($scope, transporter) {
    $scope.ingratiatesDB = [
        {
            ingradName: 'butter',
            image: 'butter-on-dish.JPG'
        },{
            ingradName: 'olive-oil',
            image: 'olive-oil.JPG'
        },{
            ingradName: 'tamato',
            image: 'tamato.jpg'
        },{
            ingradName: 'cooking-oil',
            image: 'cooking-oil.JPG'
        },{
            ingradName: 'milk',
            image: 'glass-of-milk.JPG '
        },{
            ingradName: 'onions',
            image: 'onions.JPG'
        },{
            ingradName: 'eggs',
            image: 'eggs.JPG '
        },{
            ingradName: 'lemon',
            image: 'lemon-09.JPG'
        },{
            ingradName: 'potato',
            image: 'potato.JPG'
        },{
            ingradName: 'flour',
            image: 'Flour_lz.JPG'
        },{
            ingradName: 'mushroom',
            image: 'mushroom.JPG'
        },{
            ingradName: 'spaghetti',
            image: 'spaghetti.JPG'
        }
     ];


    $scope.add = function(ingrad) {
        transporter.setIngrad(ingrad);
    }
}];
