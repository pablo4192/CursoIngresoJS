//Estanguet Pablo 1H switch ej.10
/*
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/
function mostrar()
{
	var estacionIngresada 
	var destinoIngresado;

	estacionIngresada = txtIdEstacion.value;
	destinoIngresado = txtIdDestino.value;

	switch(estacionIngresada)
	{
		case "Invierno":
		switch(destinoIngresado)
		{
			case "Bariloche":
			alert("Se viaja");
			break;
			default:
			document.write("NO SE VIAJA");
		}
		break;
		case "Verano":
		switch(destinoIngresado)
		{
			case "Mar del plata":
			case "Cataratas":
			alert("Se viaja");
			break;
			default:
			document.write("NO SE VIAJA");
		}
		break;
		case "Otoño":
		alert("Se viaja");
		break;
		case "Primavera":
		switch(destinoIngresado)
		{
			case "Bariloche":
			document.write("NO SE VIAJA");
			break;
			default:
			alert("Se viaja");
		}
		break;
	}

}//FIN DE LA FUNCIÓN