(function ($) {
	var bd = (window.bigday = {});
	
	bd.markers = {};
	
	var marker = function (latlng, title, infoEl)
	{
		var m = new GMarker(latlng, {title: title});
		m.bindInfoWindow($(infoEl).get(0));
		
		bd.markers[infoEl] = m;
		
		return m;
	};
	
	var mapLinkClick = function (evt)
	{
		if (!bd.map)
		{
			return;
		}
		
		var mark = bd.markers[evt.target.rel];
		
		if (mark)
		{
			bd.map.panTo(mark.getLatLng());
			GEvent.trigger(mark, 'click');
		}
	};
	
	var initMaps = function ()
	{
		if (!GBrowserIsCompatible())
		{
			return;
		}
		
		var el = $('#mapsHolder');
		
		if (el)
		{
			var map = (bd.map = new GMap2(el.get(0)));

			map.addOverlay(marker(new GLatLng(38.2997720, -122.6439860), "Flying Cloud Farm", "#fcinfo"));
			map.addOverlay(marker(new GLatLng(38.2307480, -122.6128900), "Sheraton Petaluma", "#sherinfo"));
			map.addOverlay(marker(new GLatLng(38.2483650, -122.6256590), "Best Western Petaluma", "#bwinfo"));
			map.addOverlay(marker(new GLatLng(37.6152230, -122.3899790), "San Francisco International", "#sfoinfo"));
			map.addOverlay(marker(new GLatLng(37.7125281, -122.2130026), "Oakland International", "#oakinfo"));
			map.addOverlay(marker(new GLatLng(38.5105557, -122.8055680), "Sonoma County Airport", "#stsinfo"));
			
			if (location.pathname === '/bigday/details.py')
			{
				map.setCenter(new GLatLng(38.2664890, -122.6335144), 12);
			}
			else if (location.pathname === '/bigday/getthere.py')
			{
				map.setCenter(new GLatLng(38.1086276, -122.4755859), 8);
			}
	        map.setUIToDefault();
		}
		
		$('a.maplink').click(mapLinkClick);
	};
	
	$(document).ready(initMaps);
	$(document).unload(GUnload());

})(jQuery);