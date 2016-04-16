// (function(){
// 'use strict';


    /**
     * Created by Sai on 4/2/2016.
     */

    function geoFindMe() {
        var output = document.getElementById("out");

        // if (!navigator.geolocation){
        //     output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        //     return;
        // }

        function success(position) {
            var latitude  = position.coords.latitude;
            var longitude = position.coords.longitude;

            output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

            var data  = window.location("http://maps.googleapis.com/maps/api/geocode/json?latlng=" + vm.latitude + "," + vm.longitude + "&sensor=true");

            // img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
            // var img = new Image();

            output.appendChild(data.results[0].formatted_address);

            // var address = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude + "&sensor=true";
            // window.location = address;
        };

        function error() {
            output.innerHTML = "Unable to retrieve your location";
        };

        output.innerHTML = "<p>Locating…</p>";

        navigator.geolocation.getCurrentPosition(success, error);
    };

// })();
