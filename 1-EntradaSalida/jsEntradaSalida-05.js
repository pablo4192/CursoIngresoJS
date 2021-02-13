/*
1-con if
pedir a una persoan que fue de vaciones , la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento
hata 80km/h= lento
hasta 100= buen ritmo
hasta 120= ahi de la ley
mas = eso no se hace

2- con if
ingresar el nombre y los datos requeridos para calcular el IMC , e informar a la persona si es:
Bajo peso
Peso normal
Preobesidad
Obesidad I
Obesidad II
Obesidad III
3-con if
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/
/*
Estanguet Pablo 1H ej.01 repaso if
*/
function mostrar()
{	
	var distancia;
	var tiempo;
	var velocidad;

	distancia = txtIdNombre.value;
	tiempo = txtIdEdad.value;

	distancia = parseFloat(distancia);
	tiempo = parseFloat(tiempo);

	velocidad = distancia / tiempo;

	if(velocidad < 60)
	{
		alert("muy lento");
	}
	else
	{
		if(velocidad <81)
		{
			alert("lento");
		}
		else
		{
			if(velocidad <101)
			{
				alert("Buen ritmo");
			}
			else
			{
				if(velocidad <121)
				{
					alert("Ahi de la ley");
				}
				else
				{
					alert("Eso no se hace");
				}
			}
		}
	}
}

/*Pablo Estanguet 1H
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años"
	var nombre;
	var apellido;
	var edad;

	nombre = document.getElementById('txtIdNombre').value;
    //apellido = document.getElementsByTagName('txtIdNombre').value;
	edad = document.getElementById('txtIdEdad').value;
	apellido = prompt("ingrese su apellido");
	alert("usted se llama "+nombre + apellido + " y tiene " + edad + " años");*/

//me sale nombre y apellido todo junto
//reinicie la compu y pude enviar! saludos