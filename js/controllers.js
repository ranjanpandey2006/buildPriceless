angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('HomeCtrl',function($scope,$rootScope) {
/*
var mobile = {};
   var i = "http://api.pricecheckindia.com/feed/product/" + "mobile_phones/Samsung" + ".json?user=" + "laaptula" + "&key=" + "NADSGUVCVBRPRETN";
    console.log(i);
    $.ajax({
        type: "GET",
        url: i,
        dataType: "jsonp",
        cache: false,
        crossDomain: true,
        processData: false,
        success: function(e) {
          for(var j=0;j<e.product.length;j++){
            if(e.product[j].stores.length > 0){
              alert(e.product[j].stores[j].website);
              mobile.stores = e.product[j].stores;
            }
          }
             
        }
    })
*/
})
.controller('MobileCtrl',['$scope','$ionicLoading','appServices', function($scope,$ionicLoading,appServices) {

var mobileBrands = [];
$scope.brands = [];
  /*  var i = "http://api.pricecheckindia.com/feed/product/" + "mobile_phones"  + ".json?user=" + "laaptula" + "&key=" + "NADSGUVCVBRPRETN";
    console.log(i);
    $.ajax({
        type: "GET",
        url: i,
        dataType: "jsonp",
        cache: false,
        crossDomain: true,
        processData: false,
        success: function(e) {
            $scope.products = e.product;
            for (var i = 0; i < e.product.length; i++) {
              if(i<5)
              mobileBrands.push(e.product[i].brand);
            }
          //  $scope.brand = e.product[0].brand;
          //  $scope.model = e.product[0].model;
            //$scope.brands = ArrNoDupe(mobileBrands);
            
            $scope.brands = ["Apple","Mango","Banana","Grapes"];
            // $scope.apply($scope.brands);

             console.log("mb new - "+JSON.stringify($scope.brands));
             
        }
    })
  */
  //$scope.brands = ["Apple","Mango","Banana","Grapes"];
            // $scope.apply($scope.brands);

 //alert("aftr ajax");
  /*  var prom = $http({
        method: 'GET', 
        url: i,
        });
    prom.success(function(e) {
      $timeout(function() {
        alert(e);
            $scope.products = e.product;
            $scope.brand = e.product[0].brand;
            $scope.model = e.product[0].model;
      },0);
          
        });*/

    $ionicLoading.show({
      template: 'Please wait while loading ...'
    });
  
 appServices.getAllMobiles()
                    .success(function(e, status,response) {
                      
                        console.log("Success Change status--"+status+"--"+response);
                        $scope.products = e.product;

                        for (var i = 0; i < e.product.length; i++) {
                          if(e.product[i].stores !== 'undefined'){
                            mobileBrands.push(e.product[i].brand);
                          }
                        }
                        $scope.brands = ArrNoDupe(mobileBrands);
                        $ionicLoading.hide();
                        console.log("brands--"+JSON.stringify($scope.brands));
                    }).error(function(data, status,response) {
                        console.log("Error status"+status+""+response);
                       
                   });

  $scope.brandClicked = function(brand){
    alert(brand);
    $scope.brand = brand;
  }

}])

.controller('PlaylistCtrl', function($scope, $stateParams) {
});

function ArrNoDupe(a) {
    var temp = {};
    for (var i = 0; i < a.length; i++)
        temp[a[i]] = true;
    var r = [];
    for (var k in temp)
        r.push(k);
    return r;
}