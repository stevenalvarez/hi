var getLocation = function() {
    var suc = function(p) {
        alert(p.coords.latitude + " " + p.coords.longitude);
    };
    var locFail = function() {
    };
    navigator.geolocation.getCurrentPosition(suc, locFail);
};

var beep = function() {
    navigator.notification.beep(2);
};

var vibrate = function() {
    navigator.notification.vibrate(0);
};

function check_network() {
    var networkState = navigator.network.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.NONE]     = 'No network connection';

    confirm('Connection type:\n ' + states[networkState]);
}

//funciones

$('#geolocalizacion').live('pageshow', function(event, ui) {
    navigator.geolocation.getCurrentPosition(
    function(position){
        var coords = position.coords;
        var latitude = coords.latitude; //x
        var longitude = coords.longitude; //y
        var src = "http://maps.google.com/maps/api/staticmap?center="+latitude+","+longitude+"&zoom=15&size=320x480&maptype=roadmap&key=AIzaSyBvLnXtnEnR1tea2mEXAYGhOXUgFEfm_Ig&sensor=true";
        document.getElementById('map').setAttribute('src',src);
    }, function(error){
        alert('código: '  + error.code    + '\n' +
              'mensaje: ' + error.message + '\n');
    });
});