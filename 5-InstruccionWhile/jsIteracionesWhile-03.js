/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;//HACER LA VALIDACION DE TRES VECES
	claveIngresada = prompt("ingrese el número clave.");
	var i;

	i = 0;

	while(claveIngresada !="utn750" && i >2)
	{
		claveIngresada = prompt("Error. Reingrese clave.");

	}

	alert("Ingrerso al sistema");
	
}//FIN DE LA FUNCIÓN
//Estructura Repetitiva
//Indeterminada: no se cuantas iteraciones voy a llevar a cabo.