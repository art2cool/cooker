module.exports = ['authToken', function(authToken) {
  return {
    request: function (config) {
      var token = authToken.getToken();

      console.log('hello from isnpector')
      if(token)
        config.headers.authorization = 'Bearer ' + token;
      return config;
    },
    response: function (response) {
      console.log(response.config)
      return response;
    }
  }
}];
