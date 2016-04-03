/**
 * Created by Sai on 4/2/2016.
 */

'use strict';

(function(){
    angular
        .module('app')
        .controller('findmeController', findmeController);

    findmeController.$inject = ['$scope', '$http'];
    function findmeController($scope, $http){

        var vm = this;
        vm.Title = "Addvrywhere";
        vm.isCurrentAddress = isCurrentAddress;
        vm.hideForm = true;
        activate();

        function activate(){
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(success,error);
            }
            // navigator.geolocation.getCurrentPosition(success, error);

            function success(position){
                $scope.$apply(function(){
                    vm.latitude  = position.coords.latitude;
                    vm.longitude = position.coords.longitude;

                    $http.get("http://maps.googleapis.com/maps/api/geocode/json?latlng=" + vm.latitude + "," + vm.longitude + "&sensor=true")
                        .success(successAPICall)
                        .error(errorCall);
                });

                function successAPICall(data){
                    vm.data = data;
                    vm.formattedaddress = data.results[0].formatted_address;
                }
                function errorCall(){

                }
                // vm.img = "https://maps.googleapis.com/maps/api/staticmap?center=" + vm.latitude + "," + vm.longitude + "&zoom=13&size=300x300&sensor=false";
            }

            function error(){

            }
        }

        function isCurrentAddress(){
            vm.hideForm=false;
        }

    }


})();
