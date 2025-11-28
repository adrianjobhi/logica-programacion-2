const txtNum1 = document.getElementById("num1");
const alertResultado = document.getElementById("resultado");
const btnEnviar = document.getElementById("btnEnviar");

//Función para validaciones
function validarNumero(valor) {
  if (valor.trim().length === 0){ //valida si el campo esta vacío o si tiene espacios
    return false;
  }//if (valor.length === 0)

  if (isNaN(valor)){ //Valida si es número
    return false;
  } // if (isNaN(valor)

  return true;
}
//Activación del botón
btnEnviar.addEventListener("click", function (event) {
  event.preventDefault();

  //mantiene las validaciones desactivadas
  txtNum1.style.border = "";
  alertResultado.style.display="none";
  alertResultado.innerHTML = "";
  let esValido = true;

  // Si no es valido manda un alert y pinta el borde del input en rojo
  if (!validarNumero(txtNum1.value)) {
    txtNum1.style.border = "solid medium red";
    alertResultado.className = "alert alert-danger";
    alertResultado.style.display="block";
    alertResultado.innerHTML ="Por favor, ingresa solo números.";
    return;
  }// if (!validarNumero(txtNum1.value))

  //Conversión
  const celsius = Number(txtNum1.value);
  const fahrenheit = (celsius * 9/5) + 32;
  const kelvin = celsius + 273.15;

  //Muestra los resultados de la convsersión
  alertResultado.className = "alert alert-primary";
  alertResultado.style.display="block";
  alertResultado.innerHTML =
  ` <p class="mb-0"><strong>Temperatura en grados Kelvin:</strong> ${kelvin.toFixed(2)} K</p>
    <p class="mb-1"><strong>Temperatura en grados Fahrenheit:</strong> ${fahrenheit.toFixed(2)} °F</p>`;
});