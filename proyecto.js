//-----------------------------------------------------------
// 05125030 - Sergio Rolando Arévalo
// Proyecto Final
//-----------------------------------------------------------

//---------------------------
// Asignación de variables
//---------------------------

var precio_base = 2000; // Variable de precio base del seguro
 
//--------------------------------------------------------------------------------------------
// Unifique las variables de edad ya que tienen los mismos valores para asegurado y conyugue
//--------------------------------------------------------------------------------------------
var recargosEdad = {
    "18-24": 0.1,
    "25-49": 0.2,
    "50+": 0.3
};

var hijos_recargo = 0.2; // Variable para saber la cantidad de hijos

//--------------------------------------------------------------------------------------------
// Se Agrega una funcion para realizar el calculo de la edad para ambos asegurado y conyugue
//--------------------------------------------------------------------------------------------
function calcularRecargo(edad) {
    if (edad >= 18 && edad <= 24) return recargosEdad["18-24"];
    if (edad >= 25 && edad <= 49) return recargosEdad["25-49"];
    if (edad >= 50) return recargosEdad["50+"];
    return 0;
}
//--------------------------------------------------------------------------------------------
// Se Agrega una funcion para mostrar en un modal los calculos de la cotización
//--------------------------------------------------------------------------------------------
function mostrarModal(nombre, recargo_total_asegurado, recargo_total_conyuge, recargo_total_hijos, recargo_total, precio_final) {
    var modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.padding = "20px";
    modal.style.backgroundColor = "white";
    modal.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
    modal.style.zIndex = "1000";
    modal.style.textAlign = "center";
    modal.style.example="{-moz-text-decoration-line: underline;-moz-text-decoration-style: wavy;-moz-text-decoration-color: red;-webkit-text-decoration-line: underline;-webkit-text-decoration-style: wavy;-webkit-text-decoration-color: red;}";

    modal.innerHTML = `
        <h2>Cotización de Seguro</h2>
        <hr>
        <div class="row col-6" style="display: flex; justify-content: space-between;" >
            <p style="text-align: left;" ><strong>Para el asegurado:</strong></P>
            <p style="text-align: right;"> <strong>${nombre}</strong></p>
        </div>
        <div class="row col-6" style="display: flex; justify-content: space-between;" >
            <p style="text-align: left;" ><strong>Precio Base de Seguro:</strong></P>
            <p style="text-align: right;"><strong>Q.${precio_base.toFixed(2)}</strong></p>
        </div>
        <hr>
        <div class="row col-6" style="display: flex; justify-content: space-between;" >
            <p style="text-align: left;" ><strong>Recargo para el asegurado:</strong></P>
            <p style="text-align: right;"><strong>Q.${recargo_total_asegurado.toFixed(2)}</strong></p>
        </div>
        <div class="row col-6" style="display: flex; justify-content: space-between;" >
            <p style="text-align: left;" ><strong>Recargo para el cónyuge:</strong></P>
            <p style="text-align: right;"><strong>Q.${recargo_total_conyuge.toFixed(2)}</strong></p>
        </div>
        <div class="row col-6" style="display: flex; justify-content: space-between;" >
            <p style="text-align: left;" ><strong>Recargo por hijos:</strong></P>
            <p style="text-align: right;"><strong>Q.${recargo_total_hijos.toFixed(2)}</strong></p>
        </div>
        <hr>
        <div class="row col-6" style="display: flex; justify-content: space-between;" >
            <p style="text-align: left;" ><strong>Recargo total:</strong></P>
            <p style="text-align: right;"><strong>Q.${recargo_total.toFixed(2)}</strong></p>
        </div>
        <hr>
        <div class="row col-6" style="display: flex; justify-content: space-between;" >
            <p style="text-align: left;" ><strong>Precio final:</strong></P>
            <p style="text-align: right; text-decoration-style: double;"><strong>Q.${precio_final.toFixed(2)}</strong></p>
        </div>
        </div>
        <button onclick="document.body.removeChild(this.parentNode); iniciarCotizacion();">Continuar</button>
        <button onclick="document.body.removeChild(this.parentNode); alert('Gracias por cotizar.');">Salir</button>
    `;

    document.body.appendChild(modal);
}
//--------------------------------------------------------------------------------------------
// Se Agrega una funcion para realizar los calculos de las variables ingresadas
//--------------------------------------------------------------------------------------------
function iniciarCotizacion() {
    var nombre = prompt("Ingrese su nombre, por favor");
    var edad = parseInt(prompt("¿Cuántos años tiene? Ingrese solamente números "));
    var casado = prompt("¿Está casado actualmente? (si/no)").toUpperCase();
    var edad_conyuge = casado === "SI" ? parseInt(prompt("¿Qué edad tiene su esposo/a?")) : 0;
    var hijos = parseInt(prompt("Si tiene hijos indique la cantidad")) || 0;

    var recargo_total_asegurado = precio_base * calcularRecargo(edad);
    var recargo_total_conyuge = casado === "SI" ? precio_base * calcularRecargo(edad_conyuge) : 0;
    var recargo_total_hijos = hijos * (precio_base * hijos_recargo);

    var recargo_total = recargo_total_asegurado + recargo_total_conyuge + recargo_total_hijos;
    var precio_final = precio_base + recargo_total;

    mostrarModal(nombre, recargo_total_asegurado, recargo_total_conyuge, recargo_total_hijos, recargo_total, precio_final);
}
//--------------------------------------------------------------------------------------------
// Se vuelve a llamar a la funcion si se desea realizar otra cotización
//--------------------------------------------------------------------------------------------
iniciarCotizacion();
// fin del codigo