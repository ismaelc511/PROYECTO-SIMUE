
const div = document.querySelector("div.contendedor_formulario_crear")

window.addEventListener("load", ()=>{
	div.classList.add('contendedor_formulario_crear');
})
function mostrar_contenido(){
	div.classList.add('esconder');
}
function cancelar(){
	div.classList.remove('esconder');
};

let nombre = document.getElementById("nombre_producto").value;
let precio = document.getElementById("precio_producto").value;
let cantidad  = document.getElementById("cantidad_producto").value;
let listar = document.querySelector(".tabla")



function optenerDatos(nombre){
console.log("los datos recaudados son: " +nombre)
}

function listarProductos(){

}
