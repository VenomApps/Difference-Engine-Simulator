var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.when('/',{
    templateUrl: 'routes/home.html'
  }).when('/about',{
    templateUrl: 'routes/about.html'
  });
});
