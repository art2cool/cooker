'use strict';

module.exports = ['$scope', 'transporter', '$http', 'receipts', function($scope, transporter, $http, receipts) {
    $scope.loads = function() {
        $scope.ingratiates = transporter.getIngradiates();

        var successCallback = function(data) {
            console.log(data.data);
            $scope.receiptsToCook = data.data;
        };
        var errorCallback = function(error, status) {
            console.log(error);
        };

        $http.post('http://localhost:3000/receipts', {data: $scope.ingratiates}).then(successCallback, errorCallback);

/*
 $scope.receiptsToCook = receipts.getReceipt();
         console.log($scope.receiptsToCook);
        console.log(receipts.getReceipt());*/
    };
    $scope.Minutes = function (time) {
        var d = new Date(time);
        return d.getMinutes();
    }
}];

