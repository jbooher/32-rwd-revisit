let lat = 0;
let lon = 0;

navigator.geolocation.getCurrentPosition(function(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;

  const map = new google.maps.Map(document.querySelector('.mapDiv'), {
    center: { lat: lat, lng: lon},
    zoom: 12,
    disableDefaultUI: true
    });

  let marker = new google.maps.Marker({ position: { lat: 34.747874, lng: -92.264993}, map: map, title: 'The Iron Yard' });

  let infoWindow = new google.maps.InfoWindow({ content: `<h1>The Iron Yard</h1>` });

  marker.addListener('click',
    function() {
      if (infoWindow.getMap()) {
        infoWindow.close();
      }
      else {
        infoWindow.open(map, marker);
      }
    });
});
