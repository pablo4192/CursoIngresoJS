//Estanguet Pablo 1H = ej 4
function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

    /*if(edad > 12)
    {
    	if(edad < 18)
    	{
    		alert("es adolescente");
    	}
    }BIEN TAMBIEN*/

	if(edad > 12 && edad < 18)
	{
		alert("Es adolescente");
	}//BIEN forma correcta para este ejercicio


	/*if(edad >=13)MAL
	if(edad <=17)	
	{
		alert("Usted es un adolescente");
	}*/


}//FIN DE LA FUNCIÓN