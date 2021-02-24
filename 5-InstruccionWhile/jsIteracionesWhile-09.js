/*Estanguet Pablo 1H ej.09 BIS while
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	var numeroIngresado;
	var numeroMaximoNegativo;
	var numeroMinimoPar;
	var respuesta;
	var banderaPrimerNumeroPar;
	var banderaPrimerNumeroNegativo;

	respuesta = "si";
	banderaprimerNumeroNegativo = "Este es el primer numero Negativo";
	banderaPrimerNumeroPar = "Este es el primer numero Par"; 

	while(respuesta == "si")
	{
			numeroIngresado = prompt("Ingrese un numero (puede ser positivo o negativo): ");
			numeroIngresado = parseInt(numeroIngresado);

			if(numeroIngresado <0)
			{
				if(banderaprimerNumeroNegativo == "Este es el primer numero Negativo" || numeroIngresado > numeroMaximoNegativo)
				{
					numeroMaximoNegativo = numeroIngresado;
				
					banderaprimerNumeroNegativo = "Ya no es el primer numero Negativo";
				}	
			
			}

			if(numeroIngresado %2 == 0)
			{
				if(banderaPrimerNumeroPar == "Este es el primer numero Par" || numeroIngresado < numeroMinimoPar)
				{
					numeroMinimoPar = numeroIngresado;
				
					banderaPrimerNumeroPar = "Ya no es el primer numero Par";	
				}	
			}
			
			respuesta = prompt("Desea ingresar otro numero?: ");
	}

	txtIdMaximo.value = numeroMaximoNegativo;
	txtIdMinimo.value = numeroMinimoPar;

}//FIN DE LA FUNCIÓN	
		
				
		
		
		/*if(banderaNumeroPar == "es el primer numero par" || numeroIngresado % 2 == 0)
		{
			numeroMinimoPar = numeroIngresado;
			bandera = "no es el primer numero";
		}*/
		
		
	





/*if(bandera == "es el primer numero")//opcion 1 puede estar bien.
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			bandera = "no es el primer numero";
		}
		else
		{
			if(numeroIngresado >numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			if(numeroIngresado <numeroMinimo);
			{
				numeroMinimo = numeroIngresado;
			}	
		}*/



	// declarar variables
	/*var bandera;
	var numeroIngresado;
	var numeroMaximo;//nunca inicializar
	var numeroMinimo;//""
	var respuesta;
	//iniciar variables
	
	respuesta='si';
	bandera="es el primer numero";


	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(bandera == "es el primer numero" || numeroIngresado >numeroMaximo)//Segunda opcion RECOMENDADA.
		{
			numeroMaximo = numeroIngresado;

			
		}		

		if(bandera= "es el primer numero" || numeroIngresado <numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
			bandera = "no es el primer numero";// cambio la bandera. (true/false)(0 , 1)
		}

		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;*/









	//Intento de ejercicio 9bis


	/*respuesta = "si";
	banderaPrimerNumeroNegativo = "es el primer numero negativo";
	banderaPrimerNumeroPar = "es el primer numero par"

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado <0)
		{
			if(banderaPrimerNumeroNegativo == "es el primer numero negativo" || numeroIngresado > numeroMaximoNegativo)
			{
				numeroMaximoNegativo = numeroIngresado;	
			}	
			banderaPrimerNumeroNegativo = "no es el primer numero negativo";
		}
		
		if(numeroIngresado % 2 == 0)
		{
			if(banderaPrimerNumeroPar == "es el primer numero par" || numeroIngresado < numeroMinimoPar)
			{
				numeroIngresado = numeroMinimoPar;
			}
			banderaPrimerNumeroPar = "no es el primer numero par";
		}

		respuesta = prompt("Desea Ingresar otro numero: ");

	}

	txtIdMaximo.value = numeroMaximoNegativo;
	txtIdMinimo.value = numeroMinimoPar;*/