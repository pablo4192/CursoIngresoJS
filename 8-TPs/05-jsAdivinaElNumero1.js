/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 


function comenzar()
{
	numeroSecreto = Math.round(Math.random() *100);

		console.log(numeroSecreto);
	

}

function verificar()
{
	var numeroIngresado;
	var contadorIntentos;

	contadorIntentos = 0;//COMO HAGO PARA SUMAR ITERACIONES SIN USAR WHILE????
	
	numeroIngresado = txtIdNumero.value;
	numeroIngresado = parseInt(numeroIngresado);

	contadorIntentos = contadorIntentos + 1;	
	console.log(contadorIntentos);
	
	if(numeroIngresado == numeroSecreto)
	{
		alert("Usted es un ganador y tan solo en " + contadorIntentos + " intentos!!");
	
	}
	else
	{
		if(numeroIngresado > numeroSecreto)
			{
				alert("Se paso, pruebe un numero menor...");
				
			}
			else
			{
				if(numeroIngresado < numeroSecreto)
				{
					alert("Falta, pruebe un numero mayor...");
					
				}
			}

	}
	


		

	
	
	
		
		

}