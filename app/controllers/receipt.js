'use strict';

module.exports = ['$scope', 'transporter', 'receipts', function($scope, transporter, receipts) {
    $scope.ingratiates = transporter.getIngradiates();
    $scope.loads = function() {
        $scope.receiptsToCook = receipts.getReceipt();
        console.log($scope.receiptsToCook );
       // console.log(receipts.getReceipt());
    }
}];

