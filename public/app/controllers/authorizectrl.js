'use strict';

module.exports = ['$scope', '$http', 'authToken',  function($scope, $http, authToken){
    $scope.login = {
        title: 'Login to Your Account',
        pass2: false,
        loginHelp: 'Register',
        button: 'Login'
    };
    $scope.register = {
        title: 'Create Your Account',
        pass2: true,
        loginHelp: 'Sing in',
        button: 'Register'
    };
    $scope.formLabel = $scope.login;
    $scope.swap = function() {
        if(!$scope.formLabel.pass2) {

            $scope.formLabel = $scope.register;
        } else {

            $scope.formLabel = $scope.login;
        }
    };


    $scope.submit = function (wisp) {
        $scope.error = '';

//TODO remade validation

        function isValid() {

            if (!$scope.email || !$scope.pass){
                $scope.error = 'Fill all filds';
                return false;
            } else if($scope.pass !== $scope.pass2) {
                $scope.error = 'Passwords should be the same';
                return false;
            } else {
                return true;
            }
        }

        var successCallback = function(data) {
          var data = data.data;
            $scope.complit = 'User registrated';
            authToken.setToken(data.token);

            console.log(data.token);
            setTimeout(function() {
                $('.in').removeClass('in');
               // $('.modal').css('display', 'none');
             //      $('#login-modal').css('display', 'none');
                $('body').removeAttr('class').removeAttr('style');
            }, 2000);

        };
        var errorCallback = function(error, status) {
            $scope.error = error.data;
            console.log(error);
        };

        if(wisp === "Register" && isValid()) {
            $http.post('http://localhost:3000/users/register',  {
                email: $scope.email,
                pass: $scope.pass,
                pass2: $scope.pass2
            }).then(successCallback, errorCallback)
        }

         var successCallbackLogin = function(data) {
            var data = data.data;
            $scope.complit = 'User logined';

            authToken.setToken(data.token);

            console.log(data.token);
            setTimeout(function() {
                $('.in').removeClass('in');
               // $('.modal').css('display', 'none');
             //      $('#login-modal').css('display', 'none');
                $('body').removeAttr('class').removeAttr('style');
            }, 2000);
        };
        if(wisp === "Login") {
            $http.post('http://localhost:3000/users/login',  {
                email: $scope.email,
                pass: $scope.pass,
            }).then(successCallbackLogin, errorCallback)
        }
    }
}];
