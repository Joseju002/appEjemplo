function obtenerUsuarios() {
    var nombre;
    var puntos;
    var fecha;

    var promise = $.ajax({
        type: 'POST',
        url: '/',

        //Lo que envío (en forma de JSON)
        data:JSON.stringify({nombre:nombre, puntos:puntos, fecha:fecha}),
        contentType: 'application/json;charset=UTF-8',
        dataType: 'json'
    });
    
    var objJSON = promise.data;
    
    promise.always(function (data) {
        var tabla = document.getElementById('tablaUsuarios');
        console.log(data);

        //Aqui ordenamos el objeto
        data.sort(function(a, b) {
            return b.puntos - a.puntos;
        });

        //Lo imprimimos en la tabla
        data.forEach(function (objJSON) {
            var fila = document.createElement('tr');
            var nombreTabla = document.createElement('td');
            var puntosTabla = document.createElement('td');
            var fechasTabla = document.createElement('td');

            nombreTabla.textContent = objJSON.nombre;
            puntosTabla.textContent = objJSON.puntos;
            fechasTabla.textContent = objJSON.fecha;

            fila.appendChild(nombreTabla);
            fila.appendChild(puntosTabla);
            fila.appendChild(fechasTabla);
            tabla.appendChild(fila);
        });
    });
}