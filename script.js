let h2 = document.querySelector('h2');

function sucess(pos){
  console.log(pos, pos.coords.latitude,pos.coords.longitude);
  h2.textContent = `Latitude:${pos.coords.latitude} - Longitude:${pos.coords.longitude}`;
}

function error(err){
  console.log(err);
}

var watcherID = navigator.geolocation.watchPosition(sucess, error, {
  enableHighAccuracy: true, maximumAge: 900000});
