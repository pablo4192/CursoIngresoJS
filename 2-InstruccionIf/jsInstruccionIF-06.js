//Estanguet Pablo 1H = ej 06
function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad > 17)
	{
		alert("Usted es mayor de edad");
	}
	else
	{
		if(edad >12 && edad <18)
		{
			alert("Usted es un adolescente");
		}
	else
	    {
	    alert("Usted es un niño");
	    }
	}

}//FIN DE LA FUNCIÓN

/*if(condicion1)
{
	sentencia1
}
else
{
	if(condicion2)
		{
		sentencia2
		}
}
else
{
	sentencia3
}*/



