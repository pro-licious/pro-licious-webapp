'use strict';

import angular from 'angular';
import angularUIRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import LoginCtrl from './login/login-controller';
import DashboardCtrl from './dashboard/dashboard-controller';
import '../styles/style.scss';
import './login/login.scss';
import './dashboard/dashboard.scss';
import './login/login.scss';

var app = angular.module('app', [angularUIRouter, uiBootstrap]);

app.config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: './app/login/login.html',
				controller: LoginCtrl,
				controllerAs: 'vm'
			})
			.state('dashboard', {
				url: '/dashboard',
				templateUrl: './app/dashboard/dashboard.html',
				controller: DashboardCtrl,
				controllerAs: 'vm'
			});

		$urlRouterProvider.otherwise('/login');
	}
]);
