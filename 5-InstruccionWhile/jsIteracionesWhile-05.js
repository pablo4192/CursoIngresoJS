/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	sexoIngresado = sexoIngresado.toLowerCase() //standarizar la entrada a minuscula
												//toUperCase()
	while(sexoIngresado !="f" && sexoIngresado !="m")
	{
		sexoIngresado = prompt("Reingrese .");	//Dentro de la validacion solo se programa el reingreso y cantidad de veces del loop	
	}

	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN