// Load the GeoJSON data 
let geoData = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';


// Create a map object.
let myMap = L.map("map", {
    center: [0, 0],
    zoom: 2,
});

// Add the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Create function for depth colour 
function getColor(depth) {
    return depth > 90 ? '#ff0000' :
        depth > 70 ? '#ff8000' :
        depth > 50 ? '#ffbf00' :
        depth > 30 ? '#ffff00' :
        depth > 10 ? '#bfff00' :
        '#00ff00';
};

// Create a function for the marker size based on magnitude of earthquake 
function markerSize(magnitude) {
    return magnitude * 4 ; // Adjust the factor for circle size
}; 

// Get the data with d3. 
d3.json(geoData).then(function (data) {
    // Define a colour scale based on earthquake depth
    function styleInfo(feature){
        return {
            fillOpacity: 0.75,
            color: 'black', // Set the border colour 
            weight: 0.2,
            fillColor: getColor(feature.geometry.coordinates[2]),// Set circle color according to depth 
            radius: markerSize(feature.properties.mag) // Set circle size according to mag
         };
     }

     // Create geoJSON layer for styling and creating markers 
    L.geoJson(data, {
        // We turn each feature into a circleMarker on the map.
        pointToLayer: function (feature, latlng) {
          return L.circleMarker(latlng);
        },
        style: styleInfo, 
        onEachFeature: function (feature, layer) {
            layer.bindPopup(`<h2>${feature.properties.place}</h2> <hr> 
            <h3><b> Date and Time: </b> ${new Date(feature.properties.time)} </h3>
            <h3><b> Magnitude: </b> ${feature.properties.mag}</h3>
            <h3><b> Depth of Earthquake: </b> ${feature.geometry.coordinates[2]} </h3> 
            <h3><b> Coordinates: </b> [${feature.geometry.coordinates[1]}, ${feature.geometry.coordinates[0]}] </h3>`).addTo(myMap);
      }}).addTo(myMap); 
 
    // Set up a legend.
    let legend = L.control({ position: "bottomright" });
    legend.onAdd = function () {
        let div = L.DomUtil.create("div", "info legend");
        let depths = [-10, 10, 30, 50, 70, 90];
        let labels = [];
        
        div.innerHTML = "<h3>Depth of Earthquake</h3>";

        for (let i = 0; i < depths.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(depths[i] + 1) + '"></i> ' +
                depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+');
        }

        return div;
    };

    // Adding the legend to the map
    legend.addTo(myMap);
});
