var map;
var marker;
function initMap(){
	map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 44.5645, lng: -123.2620},
	zoom: 13
});
$.getJSON('./markers.json', function(data) {         
	console.log(data);
	for (var i in data){
		console.log(data[i]);
		marker = new google.maps.Marker({
			position: {lat: data[i].lat, lng: data[i].lng},
			map: map,
			title: 'Hello world!'
		});

		console.log(marker);
	}
});
}
google.maps.event.addDomListener(window, 'load', initMap);
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function (position) {
		initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		map.setCenter(initialLocation);
	});
}
