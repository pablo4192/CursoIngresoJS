/*Estanguet Pablo 1H
Hola profes mando el tp3, recien hoy pude sentarme a practicar. Saludos! */

/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
   var temperatura;
   var FahrenheitCentigrados;

   temperatura = document.getElementById('txtIdTemperatura').value;
   
   temperatura = parseFloat(temperatura);

   FahrenheitCentigrados = (temperatura - 32) /1.8;
     

   alert(temperatura + " Grados Fahrenheit son " + FahrenheitCentigrados + " Grados Centigrados");
	 
}

function CentigradosFahrenheit () 
{
   var temperatura;
   var CentigradosFahrenheit;

   temperatura = document.getElementById('txtIdTemperatura').value;

   temperatura = parseFloat(temperatura);

   CentigradosFahrenheit = (temperatura * 1.8) + 32;

   document.write( temperatura + " Grados Centigrados son " + CentigradosFahrenheit + " Grados Fahrenheit");

	
}
