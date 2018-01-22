i
var cars = [{oem:'honda', model:'accord'}, {oem:'toyota', model:'camry'}, {oem:'mazda', model:'mazda6'}];

cars.forEach(function (car) {
    document.body.innerHTML = car + "<br>";
})

