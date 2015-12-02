var map;
function initMap(){
	map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: -34.397, lng: 150.644},
	zoom: 8
});
}
google.maps.event.addDomListener(window, 'load', initMap);
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function (position) {
		initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		map.setCenter(initialLocation);
	});
}
