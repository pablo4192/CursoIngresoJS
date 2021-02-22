/*Estanguet Pablo 1H ej.04 while.
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("Ingrese un numero entre el 0 y 9 inclusives:");
	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado <0 || numeroIngresado >9)
	{
		numeroIngresado = prompt("Por favor Ingrese un numero entre 0 y 9 inclusives:");	
	}

	txtIdNumero.value = numeroIngresado;
	
}//FIN DE LA FUNCIÓN

/*var numeroIngresado;
	
	numeroIngresado = parseInt(numeroIngresado);
	
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	//while(!(numeroIngresado > -1 && numeroIngresado < 10)) lo niego, otra opcion, validacion con &&
	while(numeroIngresado <0 || numeroIngresado >9)
	{
		//
		numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	}
		txtIdNumero.value = numeroIngresado;*/