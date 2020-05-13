let lat = "40.177200", lng = "44.503490";
lat = parseFloat(lat);
lng = parseFloat(lng);

// initialize the map
let mymap = L.map('map').setView([lat, lng], 17);
L.tileLayer.grayscale(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: ''
}
).addTo(mymap);

// Map marker
let icon = L.icon({
    iconUrl: '../src/img/marker-icon.svg',
    iconSize:     [32, 40], // size of the icon
    iconAnchor:   [32, 40], // point of the icon which will correspond to marker's location
});
L.marker([lat, lng], {icon: icon}).addTo(mymap).bindPopup('Aquaelle');

