require('./scss/style.scss');

import angular      from 'angular';  
import uiRouter     from 'angular-ui-router';  
import ngRedux      from 'ng-redux';

import AppComponent from './components/app.component';

// import our default styles for the whole application
import './scss/style.scss';

angular
.module('app', [
  uiRouter,
  ngRedux
])
.config(($locationProvider, $stateProvider, $urlRouterProvider, $ngReduxProvider) => {
    "ngInject";

    // Define our app routing, we will keep our layout inside the app component
    // The layout route will be abstract and it will hold all of our app views
    $stateProvider
        .state('app', {
            url: '',
            abstract: true,
            template: '<app></app>'
        })


    $urlRouterProvider.otherwise('/home');


    $ngReduxProvider.createStoreWith(RootReducer);
})
.component(
  'app', 
  AppComponent
);