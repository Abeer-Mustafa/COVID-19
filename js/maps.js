
// Health Centers Map 

var userlat =0,userlang=0;
var map1 = L.map('map1').setView([34.802075,38.996815], 10);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 6,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1
}).addTo(map1);

L.circle([51.508, -0.11], 500, {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5
}).addTo(map1).bindPopup("I am a circle.");

L.polygon([
	[51.509, -0.08],
	[51.503, -0.06],
	[51.51, -0.047]
]).addTo(map1).bindPopup("I am a polygon.");

var usermarker = L.marker([34.802075,38.996815]).addTo(map1)
	.bindPopup("<b>   تم تحديد المكان     </b> .").openPopup();
var popup = L.popup();

function onMapClick(e) {
   	userlat = e.latlng.lat;
   	userlang=e.latlng.lng;
   	map1.removeLayer(usermarker);
 	usermarker = L.marker([e.latlng.lat,e.latlng.lng]).addTo(map1)
	.bindPopup("<b>   تم 	 المكان     </b> .").openPopup();
}
map1.on('click', onMapClick);


// Quarantine centers Map

var userlat =0,userlang=0;
var map2 = L.map('map2').setView([34.802075,38.996815], 10);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 6,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1
}).addTo(map2);

L.circle([51.508, -0.11], 500, {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5
}).addTo(map2).bindPopup("I am a circle.");

L.polygon([
	[51.509, -0.08],
	[51.503, -0.06],
	[51.51, -0.047]
]).addTo(map2).bindPopup("I am a polygon.");

var usermarker = L.marker([34.802075,38.996815]).addTo(map2)
	.bindPopup("<b>   تم تحديد المكان     </b> .").openPopup();
var popup = L.popup();

function onMapClick(e) {
   	userlat = e.latlng.lat;
   	userlang=e.latlng.lng;
   	map2.removeLayer(usermarker);
 	usermarker = L.marker([e.latlng.lat,e.latlng.lng]).addTo(map2)
	.bindPopup("<b>   تم 	 المكان     </b> .").openPopup();
}
map2.on('click', onMapClick);
