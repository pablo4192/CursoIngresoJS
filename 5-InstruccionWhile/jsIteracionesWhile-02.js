/*mayores que 10 y menores 20 (incluisive en ambos casos)
Estanguet Pablo 1H ej.02 while
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var contadorIteraciones;

	contadorIteraciones = 10;

	while(contadorIteraciones >0)
	{
		console.log(contadorIteraciones);	
		contadorIteraciones = contadorIteraciones - 1;
	}

}//FIN DE LA FUNCIÓN
	
	/*Estructura logica del programa
	//repetir
		//pedir un numero
		//evaluar si el numero cumple la condicion
			//si se cumpole: cuento
			
	//muestro cuantos cumplen la condicion*/


	/*
	Estanguet Pablo 1H ej.01 while repaso.
 	Ingresar 5 numeros, y determinar la cantidad de numeros que son mayores que 10 y menores 20 (incluisive en ambos casos) 
	

	var contadorIteraciones;
	var numeroIngresado;
	var contadorCondicion10al20;

	contadorIteraciones = 0;
	contadorCondicion10al20 = 0;

	while(contadorIteraciones < 5)
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado >9 && numeroIngresado <21)
		{
			contadorCondicion10al20 = contadorCondicion10al20 +1;
			//contadorCondicion10al20++;

		}
		
		contadorIteraciones= contadorIteraciones + 1;// o contadorIteraciones++;
		
	}

	alert("La cantidad de numeros que estan entre 10 y 20 son: " + contadorCondicion10al20);
	*/


	/*
	Estanguet Pablo 1H ej.02 Repaso.
    Mismo ejercicio, pero no se cuantos numeros se ingresan. (Lo decide el usuario). Mostrar tambien el promedio de los numeros que cumplen la condicion.

	var numeroIngresado;
	var contadorIteraciones;
	var acumuladorNumeros10al20;
	var respuesta;
	
	respuesta = "si";
	contadorIteraciones = 0;
	acumuladorNumeros10al20 = 0;
	
	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);
		
		if(numeroIngresado >9 && numeroIngresado <21)
		{
			acumuladorNumeros10al20 = acumuladorNumeros10al20 + numeroIngresado;
			contadorIteraciones = contadorIteraciones + 1;	
		}
		else
		{
			console.log("Numeros fuera de la condicion: " + numeroIngresado);
		}
		
		respuesta = prompt("Desea Ingresar otro numero? ");
	}

		alert("El promedio es: " + acumuladorNumeros10al20 / contadorIteraciones);
	*/