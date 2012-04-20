var marker;
var contentString;

function loadMarker(myLatlng, map) {
	
	marker = new google.maps.Marker({
		position : myLatlng,
		map : map,
		draggable : true,
		title : 'Uluru (Ayers Rock)'
	});
	
	contentString = '<input type="Button" value=true onclick="onClickMe()"}/>';

	var infowindow = new google.maps.InfoWindow({
		content : contentString
	});
	
	
	
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map, marker);
	});

	google.maps.event.addListener(marker, 'draggble', function() {
		myLatlng = marker.getPosition();
	});
	
	map.addOverlay(marker);
	
}

function loadPages() {
	var myLatlng = new google.maps.LatLng(51.72253333333333, 39.266666666666666);

	var myOptions = {
		zoom : 20,
		center : myLatlng,
		mapTypeId : google.maps.MapTypeId.SATELLITE
	}

	var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

	loadMarker(myLatlng, map);
}

