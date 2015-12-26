'use strict';

module.exports = ['$scope', 'transporter', '$http', function($scope, transporter, $http) {

    var successCallback = function(data) {
        $scope.ingratiatesDB = data.data;
    };
    var errorCallback = function(error, status) {
        console.log(error);
    };

    $http.get('http://localhost:3000/ingratiates').then(successCallback, errorCallback);

   /* $scope.
        var ingratiatesDB = [
        {
            ingradName: 'butter',
            image: 'butter-on-dish.JPG',
            reciept_id: ["5676ade0aec4d7b365e06264", "5676ade0aec4d7b365e06266"]
        },{
            ingradName: 'olive-oil',
            image: 'olive-oil.JPG',
            reciept_id: ["5676ade0aec4d7b365e06263"]
        },{
            ingradName: 'tamato',
            image: 'tamato.jpg',
            reciept_id: []
        },{
            ingradName: 'cooking-oil',
            image: 'cooking-oil.JPG',
            reciept_id: ["5676ade0aec4d7b365e06262","5676ade0aec4d7b365e06265"]
        },{
            ingradName: 'milk',
            image: 'glass-of-milk.JPG ',
            reciept_id: ["5676ade0aec4d7b365e06266", "5676ade0aec4d7b365e06264", "5676ade0aec4d7b365e06264"]
        },{
            ingradName: 'onions',
            image: 'onions.JPG',
            reciept_id: ["5676ade0aec4d7b365e06262", "5676ade0aec4d7b365e06263"]
        },{
            ingradName: 'eggs',
            image: 'eggs.JPG ',
            reciept_id: ["5676ade0aec4d7b365e06262","5676ade0aec4d7b365e06264", "5676ade0aec4d7b365e06265"]
        },{
            ingradName: 'lemon',
            image: 'lemon-09.JPG',
            reciept_id: ["5676ade0aec4d7b365e06267", "5676ade0aec4d7b365e06266"]
        },{
            ingradName: 'potato',
            image: 'potato.JPG',
            reciept_id: ["5676ade0aec4d7b365e06263"]
        },{
            ingradName: 'flour',
            image: 'Flour_lz.JPG',
            reciept_id: ["5676ade0aec4d7b365e06265", "5676ade0aec4d7b365e06264", "5676ade0aec4d7b365e06263"]
        },{
            ingradName: 'mushroom',
            image: 'mushroom.JPG',
            reciept_id: []
        },{
            ingradName: 'spaghetti',
            image: 'spaghetti.JPG',
            reciept_id: ["5676ade0aec4d7b365e06263"]
        }
     ];
    for(var i = 0; i < ingratiatesDB.length; i++) {
        db.ingradients.insert(ingratiatesDB[i]);
    }*/

    $scope.add = function(ingrad) {
        transporter.setIngrad(ingrad);
    }
}];
