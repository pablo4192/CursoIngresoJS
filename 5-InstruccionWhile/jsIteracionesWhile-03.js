/*Estanguet Pablo 1H EJ. 03 while
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var contadorIteraciones;
	var claveIngresada;

	contadorIteraciones = 0;

	while(claveIngresada !="utn750" && contadorIteraciones <3)
	{
		claveIngresada = prompt("Ingrese su clave");
		contadorIteraciones = contadorIteraciones +1;
	}

	if(claveIngresada !="utn750" && contadorIteraciones >2)
	{
		alert("BLOQUEADO");
	}
	else
	{
		if(claveIngresada == "utn750")
		{
			alert("Ingreso al sistema");	
		}
			
	}
	
}//FIN DE LA FUNCIÓN
//Estructura Repetitiva
//Indeterminada: no se cuantas iteraciones voy a llevar a cabo.