//Estanguet Pablo 1H = ej 10
/*Test
resultado = 9 EXCELENTE
resultado = 8 APROBO
resultado = 4 APROBO
resultado = 3 Vamos, la proxima se puede

*/
function mostrar()
{
	var resultado;
    
	resultado = Math.floor(Math.random() * 10);

    //Hardcodeo (prueba de escritorio)
    //resultado = 3;
	alert(resultado);

	if(resultado >8 )
	{
		alert("EXCELENTE");
	}

	else
	{
		if(resultado >3 )
		{
			alert("APROBADO");
		}
	else
	{
		alert("Vamos, la proxima se puede");
	}
	}

}//FIN DE LA FUNCIÓN
