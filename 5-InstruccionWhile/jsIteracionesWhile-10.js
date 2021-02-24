/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
10- De los negativos el mas grande y de los pares el minimo*/

//while(isNaN(numeroIngresado)) //valida si no es un numero (poner dentro del while con prompt para reingresar un numero, parsear)
function mostrar()
{
	var numeroIngresado;
	var acumuladorNumerosNegativos;
	var acumuladorNumerosPositivos;
	var contadorIteracionesNumerosPositivos;
	var contadorIteracionesNumerosNegativos;
	var contadorIteracionesCeros;
	var contadorIteracionesNumerosPar;
	var respuesta;
	//var numeroMaximoNegativo; en este ejercicio se usa el contador como bandera              
	//var NumeroMinimoPar; hacer un if en los pares, iteracion==0 es el primer par/ iteracion==0 || numeroIngresado<numeroMinimoPar

	acumuladorNumerosNegativos = 0;
	acumuladorNumerosPositivos = 0;
	contadorIteracionesNumerosPositivos = 0;
	contadorIteracionesNumerosNegativos = 0;
	contadorIteracionesCeros = 0;
	contadorIteracionesNumerosPar = 0;
	respuesta = "si";

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero (positivo, negativo o bien el numero 0): ");
		numeroIngresado = parseFloat(numeroIngresado);

		if(numeroIngresado <0)//SI SON NUMEROS NEGATIVOS.. ENTRA
		{
/*va afuera*/if(numeroIngresado %2 == 0)//SI SON NUMEROS NEGATIVOS PARES.. ENTRA
			{
				contadorIteracionesNumerosPar = contadorIteracionesNumerosPar + 1;	
				acumuladorNumerosNegativos = acumuladorNumerosNegativos + numeroIngresado;
				contadorIteracionesNumerosNegativos = contadorIteracionesNumerosNegativos + 1;				
			}//SIGUE EN NEGATIVO, SALE DE LOS NEGATIVOS PARES

			else//SI NO, SI SON NUMEROS NEGATIVOS IMPARES O 0.. ENTRA*
			{
				if(numeroIngresado == 0)//SI ES 0.. ENTRA  (if para >0 y else para el 0) 
				{
					contadorIteracionesCeros = contadorIteracionesCeros + 1;
				}//SALE DEL 0	
			
			
			acumuladorNumerosNegativos = acumuladorNumerosNegativos + numeroIngresado;//SUMA CUANDO SON NEGATIVOS IMPARES*
			contadorIteracionesNumerosNegativos = contadorIteracionesNumerosNegativos + 1;
			}
		
		}
		
		else//SI NO, SON NUMEROS POSITIVOS.. ENTRA
		{
			if(numeroIngresado %2 == 0)//SI SON PARES POSITIVOS..ENTRA
			{
				contadorIteracionesNumerosPar = contadorIteracionesNumerosPar + 1;
				acumuladorNumerosPositivos = acumuladorNumerosPositivos + numeroIngresado;
				contadorIteracionesNumerosPositivos = contadorIteracionesNumerosPositivos + 1;				
			}//SALE, SI ES POSITIVO IMPAR.. SUMA

			acumuladorNumerosPositivos = acumuladorNumerosPositivos + numeroIngresado;
			contadorIteracionesNumerosPositivos = contadorIteracionesNumerosPositivos + 1;
		}


		respuesta = prompt("Desea ingresar otro numero?: ");
	}


}//FIN DE LA FUNCIÓN


//declarar contadores y variables 
	/*var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;

	respuesta="si";

	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}//fin del while

	document.write("la suma de negativos es :"+sumaNegativos);*/