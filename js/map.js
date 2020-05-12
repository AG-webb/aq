let lat = "51.505", lng = " -0.09";
lat = parseFloat(lat);
lng = parseFloat(lng);

// initialize the map
let mymap = L.map('map').setView([lat, lng], 14);
let myFilter = ['grayscale:100%','bright:110%',,'contrast:120%'];

L.tileLayer.colorFilter(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '',
    filter: myFilter
}
).addTo(mymap);
  
let marker = L.marker([lat, lng]).addTo(mymap);