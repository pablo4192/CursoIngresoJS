function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;
	
	var respuesta;

	var mayorTemperatura;
	var nombreMayorTemperatura;
	var banderaMayorTemperatura;

	var contadorMayoresViudos;
	var contadorHombresViudos;
	var contadorHombresSolteros;
	var contadorTerceraEdadMas38Grados;

	var acumuladorEdadHombresSolteros;
	var promedioEdadHombresSolteros;

	acumuladorEdadHombresSolteros=0;

	contadorMayoresViudos=0;
	contadorHombresViudos=0;
	contadorHombresSolteros=0;
	contadorTerceraEdadMas38Grados=0;

	banderaMayorTemperatura=0;

	respuesta="si";

	while(respuesta=="si")
	{
		nombre=prompt("ingrese su nombre: ");
		while(isNaN(nombre)==false)
		{
			nombre=prompt("ERROR, ingrese su nombre: ");
		}

		edad=prompt("ingrese su edad: ");
		edad=parseInt(edad);
		while(isNaN(edad)==true || edad<0)
		{
			edad=prompt("ERROR, ingrese su edad: ");
			edad=parseInt(edad);
		}

		sexo=prompt("ingrese su sexo: [f(para femenino) o m(para masculino)]: ");
		sexo=sexo.toLowerCase();
		while(isNaN(sexo)==false || sexo!="f" && sexo!="m")
		{
			sexo=prompt("ERROR, ingrese su sexo: [f(para femenino) o m(para masculino)]: ");
			sexo=sexo.toLowerCase();
		}

		estadoCivil=prompt("ingrese su estado civil (soltero, casado o viudo): ");
		while(isNaN(estadoCivil)==false || estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo")
		{
			estadoCivil=prompt("ERROR, ingrese su estado civil (soltero, casado o viudo): ")
		}

		temperaturaCorporal=prompt("ingrese su temperatura corporal: ");
		temperaturaCorporal=parseFloat(temperaturaCorporal);
		while(isNaN(temperaturaCorporal)==true || temperaturaCorporal<35 || temperaturaCorporal>40)
		{
			temperaturaCorporal=prompt("ERROR, vaya al medico ya mismo! o ingrese temperatura corporal:");
			temperaturaCorporal=parseFloat(temperaturaCorporal);
		}
		
		if(banderaMayorTemperatura==0 || temperaturaCorporal>mayorTemperatura)
		{
			mayorTemperatura=temperaturaCorporal;
			nombreMayorTemperatura=nombre;
			banderaMayorTemperatura++;
		}

		switch(estadoCivil)
		{
			case "soltero":
			if(sexo=="m")
			{
				contadorHombresSolteros++;
				acumuladorEdadHombresSolteros=acumuladorEdadHombresSolteros+edad;
			}
			break;
			case "viudo":
			if(sexo=="m")
			{
				contadorHombresViudos++;	
			}
			
			if(edad>17)
			{
				contadorMayoresViudos++;
			}
			break;
		}

		if(edad>60 && temperaturaCorporal>38)
		{
			contadorTerceraEdadMas38Grados++;
		}

		respuesta=prompt("Desea ingresar mas datos?: ");
	}

	promedioEdadHombresSolteros=acumuladorEdadHombresSolteros/contadorHombresSolteros;

	console.log("La persona con mas temperatura corporal es " + nombreMayorTemperatura + ", con " + mayorTemperatura + " grados");
	console.log("La cantidad de mayores de edad viudos es: " + contadorMayoresViudos);
	console.log("hay " + contadorHombresViudos + " hombres viudos y " + contadorHombresSolteros + " hombres solteros");
	document.write("La cantidad de personas de la tercera edad que tienen mas de 38 grados es: " + contadorTerceraEdadMas38Grados + "<br>");
	if(contadorHombresSolteros!=0)
	{
		document.write("El promedio de los hombres solteros es: " + promedioEdadHombresSolteros + "<br>");	
	}
	else
	{
		document.write("No se ingresaron hombres solteros" + "<br>");
	}
}


/* Estanguet Pablo 1H parcial 2020 ej.03

En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.//ok
b) Cuantos mayores de edad estan viudos.//ok
c) La cantidad de hombres que hay solteros o viudos.//ok
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura//ok
e) El promedio de edad entre los hombres solteros.//ok
*/