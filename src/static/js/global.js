(function ($) {
	var bd = (window.bigday = {});
	
	var initMaps = function ()
	{
		var el = $('#mapsHolder');
		
		if (el && GBrowserIsCompatible())
		{
			var map = new GMap2(el.get(0));
			
			var fcLatLng = new GLatLng(38.2997720, -122.6439860);
			var sheratonLatLng = new GLatLng(38.2307480, -122.6128900);
			var bwLatLng = new GLatLng(38.2483650, -122.6256590);
			var sfoLatLng = new GLatLng(37.6152230, -122.3899790);
			var oakLatLng = new GLatLng(37.7125281, -122.2130026);
			var stsLatLng = new GLatLng(38.5105557, -122.8055680);
			
			map.addOverlay(new GMarker(fcLatLng));
			map.addOverlay(new GMarker(sheratonLatLng));
			map.addOverlay(new GMarker(bwLatLng));
			map.addOverlay(new GMarker(sfoLatLng));
			map.addOverlay(new GMarker(oakLatLng));
			map.addOverlay(new GMarker(stsLatLng));
			
			map.setCenter(fcLatLng, 13);
	        map.setUIToDefault();
		}
	};
	
	$(document).ready(initMaps);
	$(document).unload(GUnload());

})(jQuery);