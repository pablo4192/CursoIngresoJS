/*Estanguet Pablo 1H ej 07 while.
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numeroIngresado;
	var contadorIteraciones;
	var acumulador;
	var respuesta;

	contadorIteraciones = 0;
	acumulador = 0;

	respuesta = "si";
	//respuesta = respuesta.toLowerCase();  //Por que no funciona el lower case??
	
	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseFloat(numeroIngresado);
		
		contadorIteraciones = contadorIteraciones + 1;
		acumulador = acumulador + numeroIngresado;

		respuesta = prompt("Desea ingresar otro numero?: ");
	}

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = acumulador / contadorIteraciones;

}//FIN DE LA FUNCIÓN