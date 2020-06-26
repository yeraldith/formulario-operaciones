
// const arrNumeros = [5,2,88,66,1,0,69];
const arrNumeros=[];
var button = document.getElementById("button");

button.addEventListener("click", agregarNumero);

function agregarNumero(e) {
  e.preventDefault();
  const numero = document.getElementById("numero").value;
  const tr = document.getElementById("lista");
  var mensaje = "";
  if (numero) {
    const li = document.createElement("li");
    li.classList.add("li");
    arrNumeros.push(parseInt(numero));
    li.appendChild(document.createTextNode(numero));
    tr.appendChild(li);
  } else {
    mensaje = "Ingrese un Número";
  }
  const mensajeTexto = document.getElementById("texto");
  mensajeTexto.innerHTML = mensaje;
  function limpiar(numero) {
    numero.innerHTML = "";
  }
}

const select = document.getElementById("select");

select.addEventListener("change", seleccionarOperacion);

function seleccionarOperacion() {
  var valorSelect = select.value;
  const salida = document.getElementById("resultado");
  var valor = [];
  var total = 0;
  let resultado = document.createElement("li");
  if (arrNumeros.length>0) {
    switch (valorSelect) {
      case "value2":
        valor = arrNumeros
          .map((elemento) => elemento)
          .sort((a, b) => {
            return b-a;
          });
        resultado.appendChild(document.createTextNode(valor));
        salida.appendChild(resultado);
        break;
      case "value3":
        valor = arrNumeros
          .map((elemento) => elemento)
          .sort((a, b) => {
            return a - b;
          });
        resultado.appendChild(document.createTextNode(valor));
        salida.appendChild(resultado);
        break;
      case "value4":
        for (const iterator of arrNumeros) {
          total += iterator;
        }
        resultado.appendChild(document.createTextNode(total));
        salida.appendChild(resultado);
        break;
      case "value5":
        for (const iterator of arrNumeros) {
          valor.push(iterator * iterator);
        }
        resultado.appendChild(document.createTextNode(valor));
        salida.appendChild(resultado);
        break;
    }
  } else {
     resultado.appendChild(document.createTextNode("Usted no ha ingresado datos"));
     salida.appendChild(resultado);
  }
}
