j

navigator.geolocation.getCurrentPosition(showPosition, onError);

function showPosition(position) {
    document.body.innerHTML += "latitude is: " + position.coords.latitude;
    document.body.innerHTML += "longitude is: " + position.coords.longitude;
}

function onError(err) {
    document.body.innerHTML += "Could not get the position";
}


