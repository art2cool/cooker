module.exports =['$compile', function($compile){
        return {
            restrict: 'E',
            template: '<button type="button" class="btn btn-info"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> add </button>',
            link: function (scope, element, attrs) {
                element.bind('click', function () {
                  console.log('click');
                  			angular.element(document.getElementById('space-for-buttons')).parent().prepend($compile('<add-ingrads></add-ingrads>')(scope));
                })

             }
        }
    }];
