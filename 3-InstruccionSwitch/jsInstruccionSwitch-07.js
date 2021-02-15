//Estanguet Pablo 1H ej 07 switch.

/*Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste*/
function mostrar()
{
	var destinoElegido;
	destinoElegido = txtIdDestino.value;

	switch(destinoElegido)
	{
		case "Bariloche":
		alert("Oeste");
		break;
		case "Cataratas":
		alert("Norte");
		break;
		case "Mar del plata":
		alert("Este");
		break;
		case "Ushuaia":
		alert("Sur");
		break;
	}

}//FIN DE LA FUNCIÓN