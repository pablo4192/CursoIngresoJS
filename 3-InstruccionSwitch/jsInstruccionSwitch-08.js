//Estanguet Pablo 1H ej. 08 switch
/*Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/
function mostrar()
{
	var destinoIngresado; 
	destinoIngresado =txtIdDestino.value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
		alert("Hace FRIO");
		break;
		case "Mar del plata":
		case "Cataratas":
		alert("Hace CALOR");
		break;
	}

}//FIN DE LA FUNCIÓN