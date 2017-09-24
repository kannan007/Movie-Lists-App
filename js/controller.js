var app=angular.module('MyApp');
app.controller('MoviesController', ['$scope','MovieService',function($scope,MovieService)
{
	$scope.Movies=MovieService.getMovies();
	$scope.moviegenre="action";
	$scope.GenreLists=["action","adventure","biography","comedy","crime","drama","mystery","scifi","history","sport","thriller"];
	$scope.moviegenre="";
}]);
app.controller('SingleMovieController',['$scope','$stateParams','MovieService',function($scope,$stateParams,MovieService)
{
	$scope.Movie=MovieService.getMovie($stateParams.id-1);
}])