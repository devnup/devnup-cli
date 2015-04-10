angular.module('app', [
  'ngRoute',
  'com.devnup.rest',
  'com.devnup.alert'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './app/views/hello.html',
        controller: 'HelloWorldController'
      })
      .otherwise('/');
  })
  .run(function ($rest, $alert) {

    // Configure rest template
    $rest.config({
      base: 'https://api.devnup.com',
      cache: false
    });

    // Configure alerts
    $alert.config({

      preloader: {
        auto: true,
        image: 'assets/img/loader.gif'
      },

      loading: {
        auto: true,
        image: 'assets/img/loader.gif',
        style: {
          width: 50,
          height: 50
        }
      }
    });
  });