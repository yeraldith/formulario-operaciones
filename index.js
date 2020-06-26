// const arrNumeros = [5, 2, 88, 66, 1, 0, 69];
var arrNumeros = [];
var button = document.getElementById("button");
button.addEventListener("click", agregarNumero);
var buttonBorrar = document.getElementById("buttonborrar");
buttonBorrar.addEventListener("click", limpiarLista);

function limpiarLista(e) {
  e.preventDefault();
  var limpiar = document.querySelectorAll(".borrarlista li");
  var borrarli = document.querySelectorAll(".borrar li");
  for (const i of limpiar) {
    i.parentNode.removeChild(i);
  }
   for (const itera of borrarli) {
     itera.parentNode.removeChild(itera);
   }
   arrNumeros=[];
}
function agregarNumero(e) {
  e.preventDefault();
  const numero = document.getElementById("numero").value;
  const lista = document.getElementById("lista");
  var mensaje = "";
  if (numero) {
    const li = document.createElement("li");
    li.classList.add("li");
    arrNumeros.push(parseInt(numero));
    li.appendChild(document.createTextNode(numero));
    lista.appendChild(li);
    lista.classList.add("lista");
  } else {
    mensaje = "Ingrese un Número";
  }
  const mensajeTexto = document.getElementById("texto");
  mensajeTexto.innerHTML = mensaje;
  document.getElementById("form").reset();
}

const select = document.getElementById("select");
select.addEventListener("change", seleccionarOperacion);

function seleccionarOperacion() {
  var arrResultadoOperaciones = [];
  const salida = document.getElementById("resultado");
  let resultado = document.createElement("li");
  resultado.classList.add("li");

  var valorSelect = select.value;
  var suma = 0;
  var borrarli = document.querySelectorAll(".borrar li");
  for (const itera of borrarli) {
    itera.parentNode.removeChild(itera);
  }
  if (arrNumeros.length > 0) {
    switch (valorSelect) {
      case "value2":
        arrResultadoOperaciones = arrNumeros
          .map((elemento) => elemento)
          .sort((a, b) => {
            return b - a;
          });
        mostrarLista(arrResultadoOperaciones);
        break;
      case "value3":
        arrResultadoOperaciones = arrNumeros
          .map((elemento) => elemento)
          .sort((a, b) => {
            return a - b;
          });
        mostrarLista(arrResultadoOperaciones);
        break;
      case "value4":
        for (const iterator of arrNumeros) {
          suma += iterator;
        }
        resultado.appendChild(document.createTextNode(suma));
        salida.appendChild(resultado);
        salida.classList.add("resultado");
        break;
      case "value5":
        for (const iterator of arrNumeros) {
          arrResultadoOperaciones.push(iterator * iterator);
        }
        mostrarLista(arrResultadoOperaciones);
        break;
    }
  } else {
    resultado.appendChild(
      document.createTextNode("Usted no ha ingresado datos")
    );
    salida.appendChild(resultado);
  }
}

function mostrarLista(arrResultadoOperaciones) {
  const salida = document.getElementById("resultado");
  for (const i of arrResultadoOperaciones) {
    let otroresultado = document.createElement("li");
    otroresultado.classList.add("li");
    otroresultado.appendChild(document.createTextNode(i));
    salida.appendChild(otroresultado);
    salida.classList.add("resultado");
  }
}


