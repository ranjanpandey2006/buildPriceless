angular.module('starter.services', [])
  .factory('appServices', ['$http', function($http) {
var appService = {};

appService.getAllMobiles = function() {
        
        return $http({
        method: 'GET', 
        url: 'http://api.pricecheckindia.com/feed/product/mobile_phones.json?user=laaptula&key=NADSGUVCVBRPRETN',
        dataType: "jsonp",
        cache: false,
        crossDomain: true
        });
    }

return appService;
 }]);