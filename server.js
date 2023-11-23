//Para que pueda leer ficheros HTML
var fs = require("fs");

//Librerías y recursos
const express = require('express');
const app = express();

//Puerto indicado en una variable aparte
const port = process.env.PORT || 3000;

//Para que acceda a todo el contenido de la carpeta public
app.use(express.static('public'));

//Funcion GET
app.get('/', (req, res) => {
    var contenido = fs.readFileSync("./public/index.html");
    res.setHeader("Content-type", "text/html");
    response.send(contenido);
});

//Funcion POST
app.post('/', function(req, res){
    var objJSON = [{"nombre":"Paco",
                    "puntos": "1200",
                    "fecha": "22/09/2023"},
                    {"nombre":"Juan",
                    "puntos": "1100",
                    "fecha": "25/09/2023"},
                    {"nombre":"Jose",
                    "puntos": "1500",
                    "fecha": "28/09/2023"},
                    {"nombre":"Daniel",
                    "puntos": "1400",
                    "fecha": "01/10/2023"},
                    {"nombre":"Miguel",
                    "puntos": "1300",
                    "fecha": "05/10/2023"}];
    res.send(objJSON);
});

//Función MAIN
app.listen (port, () => {
    console.log('Aplicación en escucha en el puerto ' + port);
});