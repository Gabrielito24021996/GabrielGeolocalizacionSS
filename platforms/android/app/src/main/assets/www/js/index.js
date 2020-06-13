var map;
var casa= {lat:-1.67438, lng:-78.63232};
var udla= {lat:-0.167708,lng:-78.472802};
function iniciarMap(){

    alert("Tu ruta es entre: " + '\n' +
        "Casa= Lat:-1.67438, Lng:-78.63232" + '\n' +
        "udla= Lat:-0.167708,Lng:-78.472802")

    var map = new google.maps.Map(document.getElementById('map'),{
        zoom:7,
        center: casa,
    });
    var marker = new google.maps.Marker({
        position: casa,
        map: map
    });
    var marker = new google.maps.Marker({
        position: udla,
        map: map
    });

    var distancia=[casa,udla]
    var trazo = new google.maps.Polygon({path:distancia,strokeColor:"#0000000",strokeOpacity:0.8,strokeWeight:3});
    trazo.setMap(map);

    alert("Tiempo: 3 h 9 min" + '\n'+
        "Distancia: 212 km")
}