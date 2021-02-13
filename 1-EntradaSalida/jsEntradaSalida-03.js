/*Estanguet Pablo 1H ej 02 Repaso if

ingresar el nombre y los datos requeridos para calcular el IMC , e informar a la persona si es:
Bajo peso
Peso normal
Preobesidad
Obesidad I
Obesidad II
Obesidad III
*/
function mostrar()
{
	var nombre;
	var peso;
	var altura;
	var indiceMasaCorporal;

	peso = parseFloat(peso);
	altura = parseFloat(altura);

	nombre = txtIdNombre.value;
	peso = prompt("Ingrese su peso");
	altura = prompt("Ingrese su altura");

	indiceMasaCorporal = peso / (altura * altura);

	if(indiceMasaCorporal < 18.4)
	{
		alert("Bajo Peso");
	}
	else
	{
		if(indiceMasaCorporal < 25)
		{
			console.log("Peso Normal");
		}
		else
		{
			if(indiceMasaCorporal < 30)
			{
				console.log("Preobesidad");
			}
			else
			{
				if(indiceMasaCorporal < 35)
				{
					console.log("Obesidad 1");
				}
				else
				{
					if(indiceMasaCorporal <40)
					{
						console.log("Obesidad 2");
					}
					else
					{
						console.log("Obesidad 3");
					}
				}
			}
		}
	}
}
/*cuarta vez que lo mando, pero funciono!!*/

/*Solucion
	Debemos lograr tomar un dato por 'ID'
	y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'

	var nombredelalumno;
    var edaddelalumno;
    
    nombredelalumno= document.getElementById('txtIdNombre').value;
	
	edaddelalumno=prompt("ingrese su edad")
	alert("usted se llama: "+nombredelalumno + " y tiene: "+edaddelalumno +" años");
*/
