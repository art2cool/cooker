'use strict';

var app = angular.module('MyApp');

app.service('transporter', require('./transporter'));
app.service('receipts', require('./receipts'));