'use strict';

module.exports = ['$scope', 'transporter', '$log', function($scope, transporter, $log){

    $scope.ingratiates = transporter.getIngradiates();
    $log.info(transporter.getIngradiates());

    $scope.remove = function (ingrad) {
        transporter.removeIngrad(ingrad);
    };

}];