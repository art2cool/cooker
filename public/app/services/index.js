'use strict';

var app = angular.module('MyApp');

app.service('transporter', require('./transporter'));
app.service('receipts', require('./receipts'));
app.service('authToken', require('./authtoken'));
app.service('authInterceptor', require('./authinspector'));
