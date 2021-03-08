function mostrar()
{
	var tipoMascota;
	var tipoPelaje;
	var edadMascota;
	var nombreMascota;
	var razaMascota;
	var pesoMascota;
	var estadoClinico;
	var temperaturaCorporal;
	var respuesta;

	var banderaPerroMasPesado;
	var perroConMasPeso;
	var nombrePerroConMasPeso;

	var contadorMascotas;
	var contadorPerros;
	var contadorGatos;
	var contadorOtraCosa;

	var contadorMascotasEnfermas;
	var porcentajeMascotasEnfermas;

	var ultimoNombreOtraCosa;

	var sinPeloConMenorTemperatura;
	var nombreSinPeloMenorTemperatura;
	var banderaSinPeloMenorTemperatura;

	var acumuladorTemperaturaPerros;
	var acumuladorTemperaturaGatos;
	var acumuladorTemperaturaOtraCosa;

	var promedioMayorTemperaturaPerros;
	var promedioMayorTemperaturaGatos;
	var promedioMayorTemperaturaOtraCosa;

	var porcentajeGatosPerros;

	var contadorMascotasInternadas;
	var contadorMascotasEnAdopcion;

	var acumuladorPesoTotalMascotas;
	var promedioPesoTotalMascotas;

	var pesoGatoMasLiviano;
	var nombreGatoMasLiviano;
	var razaGatoMasLiviano;

	acumuladorPesoTotalMascotas=0;

	contadorMascotasEnfermas=0;
	contadorMascotasInternadas=0;
	contadorMascotasEnAdopcion=0;

	acumuladorTemperaturaPerros=0;
	acumuladorTemperaturaGatos=0;
	acumuladorTemperaturaOtraCosa=0;

	banderaSinPeloMenorTemperatura=0;

	contadorMascotas=0;
	contadorPerros=0;
	contadorGatos=0;
	contadorOtraCosa=0;

	banderaPerroMasPesado=0;

	respuesta="si";

	while(respuesta=="si")
	{
		tipoMascota=prompt("ingrese tipo mascota (gato, perro, otra cosa): ");
		while(isNaN(tipoMascota)==false || tipoMascota!="perro" && tipoMascota!="gato" && tipoMascota!="otra cosa")
		{
			tipoMascota=prompt("ingrese tipo mascota (gato, perro, otra cosa): ");
		}

		tipoPelaje=prompt("ingrese tipo pelaje mascota (corto, largo , sin pelo): ");
		while(isNaN(tipoPelaje)==false || tipoPelaje!="corto" && tipoPelaje!="largo" && tipoPelaje!="sin pelo")
		{
			tipoPelaje=prompt("ingrese tipo pelaje mascota (corto, largo , sin pelo): ");
		}

		edadMascota=prompt("ingrese edad mascota: ");
		edadMascota=parseInt(edadMascota);
		while(isNaN(edadMascota)==true || edadMascota<0)
		{
			edadMascota=prompt("ingrese edad mascota (texto): ");
			edadMascota=parseInt(edadMascota);
		}

		nombreMascota=prompt("ingrese nombre mascota (texto): ");
		while(isNaN(nombreMascota)==false)
		{
			nombreMascota=prompt("ingrese nombre mascota: ");
		}

		razaMascota=prompt("ingrese raza mascota: ");
		while(isNaN(razaMascota)==false)
		{
			razaMascota=prompt("ingrese raza mascota: ");
		}

		pesoMascota=prompt("ingrese peso mascota (texto): ");
		pesoMascota=parseInt(pesoMascota);
		while(isNaN(pesoMascota)==true || pesoMascota<0)
		{
			pesoMascota=prompt("ingrese peso mascota: ");
			pesoMascota=parseInt(pesoMascota);
		}

		estadoClinico=prompt("ingrese estado Clinico mascota (enfermo,internado o adopcion: ");
		while(isNaN(estadoClinico)==false || estadoClinico!="enfermo" && estadoClinico!="internado" && estadoClinico!="adopcion")
		{
			estadoClinico=prompt("ingrese estado Clinico mascota (enfermo,internado o adopcion: ");
		}

		temperaturaCorporal=prompt("ingrese temperatura mascota: ");
		temperaturaCorporal=parseInt(temperaturaCorporal);
		while(isNaN(temperaturaCorporal)==true || temperaturaCorporal<0)
		{
			temperaturaCorporal=prompt("ingrese temperatura mascota: ");
			temperaturaCorporal=parseInt(temperaturaCorporal);
		}

		acumuladorPesoTotalMascotas=acumuladorPesoTotalMascotas+pesoMascota;
		contadorMascotas++;
		respuesta=prompt("desea ingresar mas datos?: ");

		switch(tipoMascota)
		{
			case "perro":
			if(banderaPerroMasPesado==0 || pesoMascota>perroConMasPeso)
			{
				perroConMasPeso=pesoMascota;
				nombrePerroConMasPeso=nombreMascota;
				banderaPerroMasPesado++;
			}
			acumuladorTemperaturaPerros=acumuladorTemperaturaPerros+temperaturaCorporal;
			contadorPerros++;
			break;
			case "gato":
			if(tipoPelaje=="sin pelo")
			{
				if(contadorGatos==0 || pesoMascota<pesoGatoMasLiviano)
				{
					pesoGatoMasLiviano=pesoMascota;
					nombreGatoMasLiviano=nombreMascota;
					razaGatoMasLiviano=razaMascota;
				}
			}
			acumuladorTemperaturaGatos=acumuladorTemperaturaGatos+temperaturaCorporal;
			contadorGatos++;
			break;
			case "otra cosa":
			ultimoNombreOtraCosa=nombreMascota;
			acumuladorTemperaturaOtraCosa=acumuladorTemperaturaOtraCosa+temperaturaCorporal;
			contadorOtraCosa++;
			break;
		}

		if(estadoClinico=="enfermo")
		{
			contadorMascotasEnfermas++;
		}
		else
		{
			if(estadoClinico=="internado")
			{
				contadorMascotasInternadas++;
			}
			else
			{
				contadorMascotasEnAdopcion++;
			}
		}

		if(tipoPelaje=="sin pelo")
		{
			if(banderaSinPeloMenorTemperatura==0 || temperaturaCorporal<sinPeloConMenorTemperatura)
			{
				sinPeloConMenorTemperatura=temperaturaCorporal;
				nombreSinPeloMenorTemperatura=nombreMascota;
				banderaSinPeloMenorTemperatura++;
			}
		}
	}

	porcentajeMascotasEnfermas=(contadorMascotasEnfermas*100)/contadorMascotas;

	promedioMayorTemperaturaPerros=acumuladorTemperaturaPerros/contadorPerros;
	promedioMayorTemperaturaGatos=acumuladorTemperaturaGatos/contadorGatos;
	promedioMayorTemperaturaOtraCosa=acumuladorTemperaturaOtraCosa/contadorOtraCosa;

	promedioPesoTotalMascotas=acumuladorPesoTotalMascotas/contadorMascotas;

	porcentajeGatosPerros=((contadorPerros+contadorGatos)*100)/contadorMascotas;

	if(contadorPerros!=0)
	{
		console.log("El perro mas pesado es " + nombrePerroConMasPeso + ", y su peso es: " + perroConMasPeso + " kg");	
	}
	else
	{
		console.log("No se ingresaron perros");
	}
	
	console.log("el porcentaje de mascotas enfermas es: " + porcentajeMascotasEnfermas);
	console.log("La ultima mascota del tipo otra cosa se llama: " + ultimoNombreOtraCosa);
	console.log("El animal sin pelo con menor temperatura es: " + nombreSinPeloMenorTemperatura + ", con " + sinPeloConMenorTemperatura + " grados" );

	if(promedioMayorTemperaturaPerros>promedioMayorTemperaturaGatos && promedioMayorTemperaturaPerros>promedioMayorTemperaturaOtraCosa)
	{
		document.write("Perros tiene el mayor promedio de temperatura con: " + promedioMayorTemperaturaPerros);
	}
	else
	{
		if(promedioMayorTemperaturaPerros>promedioMayorTemperaturaOtraCosa)
		{
			document.write("Gatos tiene el mayor promedio de temperatura con: " + promedioMayorTemperaturaGatos);
		}
		else
		{
			document.write("oTRA COSA tiene el mayor promedio de temperatura con: " + promedioMayorTemperaturaOtraCosa + "<br>");
		}
	}

	document.write("El porcentaje de perros y gatos por sobre el total es: " + porcentajeGatosPerros + "<br>");

	if(contadorMascotasEnfermas<contadorMascotasInternadas && contadorMascotasEnfermas<contadorMascotasEnAdopcion)
	{
		document.write("Enfermos tiene menor cantidad de mascotas: " + contadorMascotasEnfermas + "<br>");
	}
	else
	{
		if(contadorMascotasInternadas<contadorMascotasEnAdopcion)
		{
			document.write("Internadas tiene menor cantidad de mascotas: " + contadorMascotasInternadas + "<br>");
		}
		else
		{
			document.write("En adopcion tiene menor cantidad de mascotas: " + contadorMascotasEnAdopcion + "<br>");
		}
	}

	document.write("El promedio total de kg por sobre todas las mascotas es: " + promedioPesoTotalMascotas + "<br>");

	document.write("El gato sin pelo mas liviano es: " + nombreGatoMasLiviano + ", su peso es: " + pesoGatoMasLiviano + ", y su raza es: " + razaGatoMasLiviano + " <br>");
}//FIN DE LA FUNCIÓN

/*Estanguet Pablo 1H ej. animales

Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado//ok
b)El porcentaje de enfermos sobre el total de mascotas//ok
c)El nombre de la ultima mascota de tipo "otra cosa"//ok
d)El animal sin pelo con menor temperatura corporal//ok
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal//ok
f)Sumando gatos y perros que porcentaje del total de mascotas son?//ok
g)Que estado clinico tiene la menor cantidad de mascotas//ok       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas //ok
i)El nombre y raza del gato sin pelos mas liviano//ok
*/












/*Estanguet Pablo 1H. FOR EJ.07

al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados
*/

	/*var numeroIngresado;
	var contadorDivisores;
	var i;

	contadorDivisores = 0;

	numeroIngresado = prompt("Ingrese un número: ");
	numeroIngresado = parseInt(numeroIngresado);


	for (i=0; i< numeroIngresado+1 ; i++) 
	{
		if (numeroIngresado % i==0) 
		{
			contadorDivisores++;
			document.write(i + "<br>");
		}

	}
	document.write("La cantidad de números divisores es " + contadorDivisores  + "<br>");*/



	
	


	



