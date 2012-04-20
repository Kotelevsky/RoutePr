function loadPages() {
	var map = new YMaps.Map(document.getElementById('YMapsID'), {
		DOMMouseScroll : true
	});
	map.enableScrollZoom(true);
	map.addControl(new YMaps.Zoom());
	map.addControl(new YMaps.TypeControl());
	map.setCenter(new YMaps.GeoPoint(39.266666666666666, 51.72253333333333), 20, YMaps.MapType.SATELLITE);

	var placemark = new YMaps.Placemark(new YMaps.GeoPoint(39.266666666666666, 51.72253333333333), {
		draggable : 1

	});
	map.addOverlay(placemark);
}

