var map;
var brooklyn = new google.maps.LatLng(25.079759,55.153062);

function initialize() {

  var styles = [
    {
		featureType: 'water',
		elementType: 'all',
		stylers: [
			{ hue: '#cdcdcd' },
			{ saturation: -100 },
			{ lightness: 18 },
			{ visibility: 'on' }
		]
	},{
		featureType: 'landscape',
		elementType: 'all',
		stylers: [
			{ hue: '#e8e8e8' },
			{ saturation: -100 },
			{ lightness: 18 },
			{ visibility: 'on' }
		]
	},{
		featureType: 'road',
		elementType: 'all',
		stylers: [
			{ hue: '#fdfdfd' },
			{ saturation: -100 },
			{ lightness: -1 },
			{ visibility: 'on' }
		]
	},{
		featureType: 'road.local',
		elementType: 'all',
		stylers: [
			{ hue: '#fdfdfd' },
			{ saturation: -100 },
			{ lightness: -1 },
			{ visibility: 'on' }
		]
	},{
		featureType: 'poi.park',
		elementType: 'all',
		stylers: [
			{ hue: '#c0c0c0' },
			{ saturation: -100 },
			{ lightness: -3 },
			{ visibility: 'on' }
		]
	},{
		featureType: 'poi',
		elementType: 'all',
		stylers: [
			{ hue: '#c0c0c0' },
			{ saturation: -100 },
			{ lightness: -3 },
			{ visibility: 'on' }
		]
	},{
		featureType: 'transit',
		elementType: 'all',
		stylers: [
			{ hue: '#ffffff' },
			{ saturation: -100 },
			{ lightness: -9 },
			{ visibility: 'on' }
		]
	}

  ];

  var mapOptions = {
    zoom:17,
    center: brooklyn,
    mapTypeControlOptions: {
       mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'bestfromgoogle']
    }
  };
  map = new google.maps.Map(document.getElementById("map_canvas"),
      mapOptions);

  var styledMapOptions = {
      name: "Union special medway"
  }

  var jayzMapType = new google.maps.StyledMapType(
      styles, styledMapOptions);

  map.mapTypes.set('bestfromgoogle', jayzMapType);
  map.setMapTypeId('bestfromgoogle');
  
  	var contentString = '<div id="content">'+
					'<h1 id="firstHeading" class="firstHeading">UNION SPECIAL MEDWAY JLT</h1>'+
					'<div id="bodyContent">'+
					'<p><br/>Jumeirah Bay Tower, Plot No. X-2, Office 207<br>Jumeirah Lake Tower, P.O. Box- 120964<br>Dubai, United Arab Emirates<br>Tel.: 00971 4 4531979<br>Fax: 00971 4 4531993<br><a href="mailto:sales@unionspecialmedway.com">sales@unionspecialmedway.com</a></p>'+
					'</div>'+
					'</div>';
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				
				var companyImage = new google.maps.MarkerImage('../images/nudge_pin_2.png',
					new google.maps.Size(50,61),
					new google.maps.Point(0,0),
					new google.maps.Point(28,55)
				);

				var companyShadow = new google.maps.MarkerImage('../images/nudge_pinShadow_2.png',
					new google.maps.Size(50,61),
					new google.maps.Point(0,0),
					new google.maps.Point(28,55));

				var companyPos = new google.maps.LatLng(25.079999,55.152632);

				var companyMarker = new google.maps.Marker({
					position: companyPos,
					map: map,
					icon: companyImage,
					shadow: companyShadow,
					title:"Union special medway",
					zIndex: 3});
				
				google.maps.event.addListener(companyMarker, 'click', function() {
					infowindow.open(map,companyMarker);
				});
				
}