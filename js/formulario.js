// Problema resuelto por Michell Iván Cázares Martínez.
// Línea 16 del formulario.html: El formulario en html no tiene un id
// Línea 8 y 9: Cambiar el nombre de la variable del evento de la función del onsubmit
// Línea 9: Añadirle el preventDefault
// Línea 61: modificar "added" por "add"
// Línea 33 del formulario.html: El div de la lista invitados no cuenta con un id, se le añadió "lista-de-invitados"
// Cambié el valor de los elementos option en el html
// Eliminé los if de la nacionalidad, no son necesarios
// Utilicé el DOM para definir los elementos del formulario


let formulario = document.querySelector("#form");
let txtName = document.getElementById("txtName");
let txtAge = document.getElementById("txtAge");
let nationality = document.getElementById("nationality");
let name = false;
let age = false;

formulario.onsubmit = function (event) {
  event.preventDefault();
  console.log(txtName.value.trim());

  if (txtName.value == "") {
    txtName.classList.add("error");
    name = false;
  } else {
    name = true;
    txtName.classList.remove("error");
  }

  if (txtAge.value < 18 || txtAge.value > 120) {
    txtAge.classList.add("error");
    age = false;
  } else {
    age = true;
    txtAge.classList.remove("error");
  }

  if (name && age) {
    txtName.classList.remove("error");
    txtAge.classList.remove("error");
    agregarInvitado(txtName.value, txtAge.value, nationality.value);
  }

}

var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
botonBorrar.style.display = "none";
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  var lista = document.getElementById("lista-de-invitados")
  var elementoLista = document.createElement("div")
  elementoLista.classList.add("elemento-lista")
  lista.appendChild(elementoLista)

  var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
  var espacio = document.createElement("br")
  spanNombre.textContent = "Nombre: "
  inputNombre.value = nombre

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span")
    var inputNombre = document.createElement("input")
    var espacio = document.createElement("br")
    spanNombre.textContent = descripcion + ": "
    inputNombre.value = valor
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)


  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  var corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
}