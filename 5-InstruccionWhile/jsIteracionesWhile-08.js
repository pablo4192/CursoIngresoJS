/*Estanguet Pablo 1H ej.08 while.
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	var contadorIteraciones;
	var acumuladorPositivos;
	var acumuladorNegativos;
	var respuesta;

	contadorIteraciones = 0;
	acumuladorPositivos = 0;
	acumuladorNegativos = 1;
	respuesta = "si";

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero (puede ser negativo o positivo): ");
		numeroIngresado = parseFloat(numeroIngresado);

		if(numeroIngresado <0)
		{
			acumuladorNegativos = acumuladorNegativos * numeroIngresado;
		}
		else
		{
			if(numeroIngresado >0)
			{
				acumuladorPositivos = acumuladorPositivos + numeroIngresado;
			}
		}

		contadorIteraciones = contadorIteraciones + 1;
		respuesta = prompt("Desea ingresar otro numero?: ");
	}

	txtIdSuma.value = acumuladorPositivos;
	txtIdProducto.value = acumuladorNegativos;

}//FIN DE LA FUNCIÓN

































/*
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;*/