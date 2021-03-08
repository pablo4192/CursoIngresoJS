function mostrar()
{
	var continentePais;
	var nombrePais;
	var cantidadHabitantesPais;
	var nivelPobrezaPais;
	var temperaturaMinimaRegistrada;

	var nombrePaisMenosHabitantes;
	var cantidadHabitantesMenorPais;
	var acumuladorHabitantesMenorPais;
	var banderaPaisMenosHabitantes;

	var promedioHabitantes;
	var acumuladorHabitantesIngresados;
	
	var contadorTemperaturasPares;
	var contadorTemperaturasImparesEuropa;

	var contadorPaisesMayor40Grados;
	var acumuladorHabitantesPaisesMayor40Grados;
	var promedioHabitantesPaisesMayor40Grados;

	var contadorPaisesAmericaMenor0Grados;

	var temperaturaMinimaPaisIngresada;
	var nombrePaisTemperaturaMinima;
	var banderaTemperaturaMinima;

	var continenteMayorCantidadHabitantes;
	var acumuladorHabitantesAmerica;
	var acumuladorHabitantesAsia;
	var acumuladorHabitantesEuropa;
	var acumuladorHabitantesAfrica;
	var acumuladorHabitantesOceania;

	var contadorPaisesIngresados;

	contadorPaisesIngresados=0;
	contadorTemperaturasPares=0;
	contadorTemperaturasImparesEuropa=0;
	contadorPaisesMayor40Grados=0;
	acumuladorPaisesMayor40Grados=0;
	contadorPaisesAmericaMenor0Grados=0;

	acumuladorHabitantesAmerica=0;
	acumuladorHabitantesAsia=0;
	acumuladorHabitantesEuropa=0;
	acumuladorHabitantesAfrica=0;
	acumuladorHabitantesOceania=0;

	acumuladorHabitantesMenorPais=0;
	banderaPaisMenosHabitantes=0;
	acumuladorHabitantesIngresados=0;
	banderaTemperaturaMinima=0;

	while(contadorPaisesIngresados<5)
	{
		continentePais=prompt("ingrese continente donde se encuentra el pais (america , asia , europa ,africa y oceania): ");
		while(isNaN(continentePais)==false || continentePais!="america" && continentePais!="asia" && continentePais!="europa" && continentePais!="africa" && continentePais!="oceania")
		{	
			continentePais=prompt("ingrese continente donde se encuentra el pais (america , asia , europa ,africa y oceania): ");
		}

		nombrePais=prompt("ingrese pais (solo texto): ");
		while(isNaN(nombrePais)==false)
		{	
			nombrePais=prompt("ingrese pais (solo texto): ");
		}

		cantidadHabitantesPais=prompt("ingrese cantidad de habitantes (en millones entre 1 y 7000): ");
		cantidadHabitantesPais=parseInt(cantidadHabitantesPais)
		while(isNaN(cantidadHabitantesPais)==true || cantidadHabitantesPais<1000000 || cantidadHabitantesPais>7000000000000000)
		{	
			cantidadHabitantesPais=prompt("ingrese cantidad de habitantes (en millones entre 1 y 7000): ");
			cantidadHabitantesPais=parseInt(cantidadHabitantesPais)
		}

		nivelPobrezaPais=prompt("ingrese nivel de pobreza del pais ((pobre, rico , muy rico) en europa no hay paises pobre): ");
		while(isNaN(nivelPobrezaPais)==false || nivelPobrezaPais!="pobre" && nivelPobrezaPais!="rico" && nivelPobrezaPais!="muy rico" || continentePais=="europa" && nivelPobrezaPais=="pobre")
		{	
			nivelPobrezaPais=prompt("ingrese nivel de pobreza del pais ((pobre, rico , muy rico) en europa no hay paises pobre): ");
		}

		temperaturaMinimaRegistrada=prompt("ingrese temperatura (entre -50 y 5): ");
		temperaturaMinimaRegistrada=parseInt(temperaturaMinimaRegistrada)
		while(isNaN(temperaturaMinimaRegistrada)==true || temperaturaMinimaRegistrada<-50 || temperaturaMinimaRegistrada>50)
		{	
			temperaturaMinimaRegistrada=prompt("ingrese temperatura (entre -50 y 5): ")
			temperaturaMinimaRegistrada=parseInt(temperaturaMinimaRegistrada)
		}

		contadorPaisesIngresados++;
		acumuladorHabitantesIngresados=acumuladorHabitantesIngresados+cantidadHabitantesPais;

		switch(continentePais)
		{
			case "america":
			acumuladorHabitantesAmerica=acumuladorHabitantesAmerica+cantidadHabitantesPais;
			break;
			case "asia":
			acumuladorHabitantesAsia=acumuladorHabitantesAsia+cantidadHabitantesPais;
			break;
			case "europa":
			acumuladorHabitantesEuropa=acumuladorHabitantesEuropa+cantidadHabitantesPais;
			break;
			case "africa":
			acumuladorHabitantesAfrica=acumuladorHabitantesAfrica+cantidadHabitantesPais;
			break;
			case "oceania":
			acumuladorHabitantesOceania=acumuladorHabitantesOceania+cantidadHabitantesPais;
			break;

		}


		if(temperaturaMinimaRegistrada %2==0)
		{
			contadorTemperaturasPares++;
		}
		else
		{
			if(temperaturaMinimaRegistrada %2==1 && continentePais=="europa")
			{
				contadorTemperaturasImparesEuropa++;
			}
		}

		if(banderaPaisMenosHabitantes==0 || cantidadHabitantesPais<cantidadHabitantesMenorPais)
		{
			cantidadHabitantesMenorPais=cantidadHabitantesPais;
			nombrePaisMenosHabitantes=nombrePais;
			banderaPaisMenosHabitantes++;
		}

		if(temperaturaMinimaRegistrada>40)
		{
			contadorPaisesMayor40Grados++;
			acumuladorHabitantesPaisesMayor40Grados=acumuladorHabitantesPaisesMayor40Grados+cantidadHabitantesPais;
		}
		else
		{
			if(temperaturaMinimaRegistrada<0)
			{
				contadorPaisesAmericaMenor0Grados++;
			}
		}

		if(banderaTemperaturaMinima==0 || temperaturaMinimaRegistrada<temperaturaMinimaPaisIngresada)
		{
			temperaturaMinimaPaisIngresada=temperaturaMinimaRegistrada;
			nombrePaisTemperaturaMinima=nombrePais;
		}

		if(acumuladorHabitantesAmerica>acumuladorHabitantesAsia && acumuladorHabitantesAmerica>acumuladorHabitantesEuropa && acumuladorHabitantesAmerica>acumuladorHabitantesAfrica && acumuladorHabitantesAmerica>acumuladorHabitantesOceania)
		{
			document.write("El continente con mas habitantes es america, con: " + acumuladorHabitantesAmerica + " habitantes" + "<br>");
		}
		else
		{
			if(acumuladorHabitantesAsia>acumuladorHabitantesEuropa && acumuladorHabitantesAsia>acumuladorHabitantesAfrica && acumuladorHabitantesAsia>acumuladorHabitantesOceania)
			{
				document.write("El continente con mas habitantes es asia, con: " + acumuladorHabitantesAsia + " habitantes" + "<br>");
			}
			else
			{
				if(acumuladorHabitantesEuropa>acumuladorHabitantesAfrica && acumuladorHabitantesEuropa>acumuladorHabitantesOceania)
				{
					document.write("El continente con mas habitantes es europa, con: " + acumuladorHabitantesEuropa + " habitantes" + "<br>");
				}
				else
				{
					if(acumuladorHabitantesAfrica>acumuladorHabitantesOceania)
					{
						document.write("El continente con mas habitantes es africa, con: " + acumuladorHabitantesAfrica + " habitantes" + "<br>");
					}
					else
					{
						document.write("El continente con mas habitantes es oceania, con: " + acumuladorHabitantesOceania + " habitantes" + "<br>");
					}
				}
			}
		}

	}

	promedioHabitantes=acumuladorHabitantesIngresados/contadorPaisesIngresados;
	promedioHabitantesPaisesMayor40Grados=acumuladorHabitantesPaisesMayor40Grados/contadorPaisesMayor40Grados;

	console.log("La cantidad de temperaturas pares es: " + contadorTemperaturasPares);
	console.log("La cantidad de temperaturas impares en europa es: " + contadorTemperaturasImparesEuropa);
	console.log("El pais con menos habitantes es: " + nombrePaisMenosHabitantes + ", con: " + cantidadHabitantesMenorPais);
	console.log("La cantidad de paises con mas de 40 grados es: " + contadorPaisesMayor40Grados);
	console.log("La cantidad de paises en america con temperaturaas menor a 0 grados es: " + contadorPaisesAmericaMenor0Grados);
	document.write("El promedio de habitantes entre los paises ingresados es: " + promedioHabitantes + "<br>");

	if(contadorPaisesMayor40Grados!=0)//arreglar
	{
		document.write("El promedio de habitantes de paises mayores a 40 grador es: " + promedioHabitantesPaisesMayor40Grados + "<br>");//arreglar	
	}
	else
	{
		document.write("no se ingresaron paises con temperaturas mayores a 40 grados" + "<br>");
	}
	
	if(contadorPaisesAmericaMenor0Grados!=0)//arreglar
	{
		document.write("El pais con menor temperatura es: " + nombrePaisMenosHabitantes + ", con" + temperaturaMinimaPaisIngresada + " grados" + "<br>");
	}
	else
	{
		document.write("no se ingresaron paises con temperaturas menores a 0 grados" + "<br>");
	}
	



}//FIN DE LA FUNCIÓN

/*Estanguet Pablo 1H. EJ paises

Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
a)La cantidad de temperaturas pares.//ok
b)la cantidad de temperaturas impares de europa//ok
c)El nombre del pais con menos habitantes//ok
d)la cantidad de paises que superan los 40 grados.//ok
e)la cantidad de paises de america que tienen menos de 0 grados .//ok
f)el promedio de habitantes entre los paises ingresados .///ok
g)el promedio de habitantes entre los paises que superan los 40 grados  //ok      
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. //ok
i) que continente tiene mas habitantes.//ok
*/