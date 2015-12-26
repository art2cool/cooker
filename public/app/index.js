require('angular');
require('./stylesheets/style.css');
require('angular-ui-router');

var MyApp = angular.module('MyApp', ['ui.router']);

require('./controllers/index.js');
require('./directives/index.js');
require('./services/index.js');
require('./app.config.js');
