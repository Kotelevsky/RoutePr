//
//
function ClassControll() {
	
	var centerPosition = new google.maps.LatLng(51.72253333333333, 39.266666666666666);
	var zoom = 20;
	var optionsMap = {
		zoom : zoom,
		center : centerPosition,
		mapTypeId : google.maps.MapTypeId.SATELLITE
	};
	var map = new google.maps.Map(document.getElementById('map_canvas'), optionsMap);
	var arrayMarker = new Array();
	var flag = true;
	
	this.LoadPages = function() {
		var position = new google.maps.LatLng(51.72253333333333, 39.266666666666666);
		dragMarker(position);
	};
	
	var dragMarker = function(position) {
		var markerTmp;
		
		marker = new google.maps.Marker({
			position : position,
			map : map,
			draggable : true,
			title : 'Change title' // change title
		});
		
		contentString = "Редактирование положения остановки на карте. <br />" +
			"Переместите остановку в то место где вы считаете<br /> правельным.";
		var infowindow = new google.maps.InfoWindow({
			content : contentString
		});
				
		google.maps.event.addListener(marker, 'dragstart', function() {
			if (flag) {
				flag = false;
				markerTmp = addMarker(marker.position);
			}
		});
		
		google.maps.event.addListener(marker, 'dragend', function() {
			if (!flag) {
				if (confirm("Хотите изменить положение?")) {
					flag = true;
					dialog();
					marker.setPosition(markerTmp.getPosition());
					delMarker(markerTmp);
					markerTmp = null;
				} else {
					flag = true;
					marker.setPosition(markerTmp.getPosition());
					delMarker(markerTmp);
					markerTmp = null;
				}
			}
		});
		
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map, marker);
		});
		
		arrayMarker.push(marker);
	};
	
	var addMarker = function(position) {
		var marker = new google.maps.Marker({
			position : position,
			map : map,
			draggable : false
		});
		return marker;
	};
	
	var delMarker = function(marker) {
		marker.setMap(null);
	};
	
	var dialog = function() {
		
		$(function() {

			$( "#dialog:ui-dialog" ).dialog( "destroy" );
		
			$( "#dialog-modal" ).dialog({
				height: 240,
				width: 300,
				modal: true
			});
		});
	};
		
}
