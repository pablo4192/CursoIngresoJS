/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	
	numeroIngresado = parseInt(numeroIngresado);
	
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	//while(!(numeroIngresado > -1 && numeroIngresado < 10)) lo niego, otra opcion, validacion con &&
	while(numeroIngresado <0 || numeroIngresado >9)
	{
		//
		numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	}
		txtIdNumero.value = numeroIngresado;
	
	
}//FIN DE LA FUNCIÓN