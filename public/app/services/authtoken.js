module.exports = function ($window) {

  var storage = $window.localStorage;
  var cashedToken;
  var userToken = 'userToken';

  var authToken = {
    setToken: function(token) {
      cashedToken = token;
      storage.setItem (userToken, token);
    },
    getToken: function () {
      if(!cashedToken)
        cashedToken = storage.getItem(userToken);

      return cashedToken;
    },
    isAuthenticated: function() {
      return !!authToken.getToken();
    },
    removeToken: function () {
      cashedToken = null;
      storage.removeItem(userToken);
    }
  }
  return authToken;
}
