var app=angular.module('MyApp', ['ui.router']);
app.config(function($stateProvider,$urlRouterProvider)
{
  $stateProvider
    .state('home',
    {
      url:'/',
      views:
      {
        'header':
        {
          templateUrl:"header.html"
        },
        'content':
        {
          templateUrl:"body.html",
          controller:"MoviesController"
        }
      }
    })
    .state('home.product',
    {
      url:'products/:id',
      views:
      {
        'content@':
        {
          templateUrl:"movie.html",
          controller:"SingleMovieController"
        }
      }
    })
  $urlRouterProvider.otherwise('/');
})