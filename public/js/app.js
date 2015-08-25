var app = angular.module('voteApp', ['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/main/home");

  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: './views/main.html'
    })
    .state('main.home', {
      url: '/home',
      templateUrl: './views/main.home.html',
      controller: 'HomeCtrl'
    })
    .state('admin', {
      templateUrl: './views/admin.html',
      controller: 'AdminCtrl'
    })
    .state('main.comments', {
      url: '/comments/:billId',
      templateUrl: './views/main.comments.html',
      controller: 'CommentsCtrl',
      resolve: {
        bill: function(commentsService, $stateParams) {
          return commentsService.getComments($stateParams.billId);
        }
      }
    });
});
