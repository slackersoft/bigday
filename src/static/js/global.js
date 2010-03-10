(function ($) {
	var bd = (window.bigday = {});
	
	var marker = function (latlng, title, infoEl)
	{
		var m = new GMarker(latlng, {title: title});
		
		m.bindInfoWindow($(infoEl).get(0));
		
		return m
	}
	
	var initMaps = function ()
	{
		var el = $('#mapsHolder');
		
		if (el && GBrowserIsCompatible())
		{
			var map = new GMap2(el.get(0));
			
			var fcLatLng = new GLatLng(38.2997720, -122.6439860);
			
			map.addOverlay(marker(fcLatLng, "Flying Cloud Farm", "fcinfo"));
			map.addOverlay(marker(new GLatLng(38.2307480, -122.6128900), "Sheraton Petaluma", "sherinfo"));
			map.addOverlay(marker(new GLatLng(38.2483650, -122.6256590), "Best Western Petaluma", "bwinfo"));
			map.addOverlay(marker(new GLatLng(37.6152230, -122.3899790), "San Francisco International", "sfoinfo"));
			map.addOverlay(marker(new GLatLng(37.7125281, -122.2130026), "Oakland International", "oakinfo"));
			map.addOverlay(marker(new GLatLng(38.5105557, -122.8055680), "Sonoma International", "stsinfo"));
			
			map.setCenter(fcLatLng, 13);
	        map.setUIToDefault();
		}
	};
	
	$(document).ready(initMaps);
	$(document).unload(GUnload());

})(jQuery);