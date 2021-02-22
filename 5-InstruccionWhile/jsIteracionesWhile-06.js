/*Estanguet Pablo 1H ej.06 while.
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/

function mostrar()
{
	var contadorIteraciones;
	var acumulador;
	var numeroIngresado;

	contadorIteraciones = 0;
	acumulador = 0;
	
	while(contadorIteraciones <5)
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseFloat(numeroIngresado);
		contadorIteraciones = contadorIteraciones + 1;
		acumulador = acumulador + numeroIngresado;
	}

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = acumulador / contadorIteraciones;

}//FIN DE LA FUNCIÓN