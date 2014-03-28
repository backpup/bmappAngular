'use strict';


// Declare app level module which depends on filters, and services
var bmApp = angular.module('bmApp', ['ngAnimate', 'ngResource']);

bmApp.config(function($interpolateProvider){
	$interpolateProvider
	.startSymbol('[[').endSymbol(']]');
});