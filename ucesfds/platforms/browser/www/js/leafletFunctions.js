function addPointLinePoly() {
	// add a point
	L.marker([51.5, -0.09]).addTo(mymap).bindPopup("I am a point");
	// add a line
	var polyline = L.polyline([
		[51.508, -0.13],
        [51.503, -0.11],
        [51.5, -0.095]
        ],
        {
          color: 'red',
          opacity: 0.7,
          lineJoin: 'round'
         }).addTo(mymap).bindPopup("I am a line.");
	// add a polygon with 3 end points (i.e. a triangle)
	var myPolygon = L.polygon([
	[51.509, -0.08],
	[51.503, -0.06],
	[51.51, -0.047]
	],{
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5
	}).addTo(mymap).bindPopup("I am a polygon.");
}
addPointLinePoly();