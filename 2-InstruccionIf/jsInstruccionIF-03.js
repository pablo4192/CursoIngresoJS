//Estanguet Pablo 1H = ejercicio 3
function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad > 17)//(edad >= 18)
	{
		alert("Usted es mayor de edad");
	}

	else//if(edad <= 18)//Usar else(sin condicion)
	{
		alert("Usted es menor de edad");
	}

}//FIN DE LA FUNCIÓN