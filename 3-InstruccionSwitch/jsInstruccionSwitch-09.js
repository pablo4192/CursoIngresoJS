//Estanguet Pablo 1H switch ej.09
/*
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/
function mostrar()
{
	var destinoIngresado;
	var estacionDelAño;
	var precioEstadiaBase;
	
	destinoIngresado = txtIdDestino.value;
	estacionDelAño = txtIdEstacion.value;
	precioEstadiaBase = 15000;

	aumentoDescuento20porciento = precioEstadiaBase * 0.2;
	aumentoDescuento10porciento = precioEstadiaBase * 0.1;

	aumento20porciento = precioEstadiaBase + aumentoDescuento20porciento;
	aumento10porciento = precioEstadiaBase + aumentoDescuento10porciento;
	descuento20porciento = precioEstadiaBase - aumentoDescuento20porciento;
	descuento10porciento = precioEstadiaBase - aumentoDescuento10porciento;

	switch(estacionDelAño)
	{
		case "Invierno":
		switch(destinoIngresado)
		{
			case "Bariloche":
			alert("El precio con aumento del 20% es: " + aumento20porciento);
			break;
			case "Mar del plata":
			alert("El precio con descuento del 20% es: " + descuento20porciento);
			default:
			alert("El precio con descuento del 10% es: " + descuento10porciento);
		}
		break;

		case "Verano":
		switch(destinoIngresado)
		{
			case "Bariloche":
			alert("El precio con descuento del 20% es: " + descuento20porciento);
			break;
			case "Mar del plata":
			alert("El precio con un aumento del 20% es: " + aumento20porciento);
			break;
			default:
			alert("El precio con un aumento del 10% es: " + aumento10porciento);
		}
		break;

		case "Otoño":
		case "Primavera":
		switch(destinoIngresado)
		{
			case "Cordoba":
			alert("El precio es: " + precioEstadiaBase);
			break;
			default:
			alert("El precio con un aumento del 10% es: " + aumento10porciento);
		}
		break;
	}
}//FIN DE LA FUNCIÓN

	/*Estanguet Pablo 1H ej.03 Repaso if 
	con if
	una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

	en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

	en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

	en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
	*/	

 /*	var estacionDelAño;
	var destinoIngresado;
	var precioEstadiaBase;
	
	estacionDelAño = txtIdEstacion.value;
	destinoIngresado = txtIdDestino.value;
	precioEstadiaBase = 15000;

	descuentoAumento20porciento = precioEstadiaBase * 0.2;
	descuentoAumento10porciento = precioEstadiaBase * 0.1;

	precioBarilocheInvierno = precioEstadiaBase + descuentoAumento20porciento;

	precioCataratasCordobaInvierno = precioEstadiaBase - descuentoAumento10porciento;

	precioMardelplataInvierno = precioEstadiaBase - descuentoAumento20porciento;

	precioBarilocheVerano = precioEstadiaBase - descuentoAumento20porciento; 

	precioCataratasCordobaVerano = precioEstadiaBase + descuentoAumento10porciento;

	precioMardelplataVerano = precioEstadiaBase + descuentoAumento20porciento;

	precioOtoñoPrimavera = precioEstadiaBase + descuentoAumento10porciento;

	if(estacionDelAño == "Invierno")
	{
		if(destinoIngresado == "Bariloche")
		{
			alert("El precio con un aumento del 20% es: " + precioBarilocheInvierno);
		}
		else
		{
			if(destinoIngresado == "Cataratas" || destinoIngresado == "Cordoba")
			{
				alert("El precio con un aumento del 10% es: " + precioCataratasCordobaInvierno);
			}
			else
			{
				alert("El precio con un descuento del 20% es: " + precioMardelplataInvierno);
			}
		}
	}

	if(estacionDelAño == "Verano")
	{
		if(destinoIngresado == "Bariloche")
		{
			alert("El precio con un descuento del 20% es: " + precioBarilocheVerano);
		}
		else
		{
			if(destinoIngresado == "Cataratas" || destinoIngresado == "Cordoba")
			{
				alert("El precio con un aumento del 10% es: " + precioCataratasCordobaVerano);
			}
			else
			{
				alert("El precio con un aumento del 20% es: " + precioMardelplataVerano);
			}
		}
	}

	if(estacionDelAño == "Otoño" || estacionDelAño == "Primavera")
	{
		if(destinoIngresado == "Cordoba")
		{
			alert("El precio es " + precioEstadiaBase);
		}
		else
		{
			alert("El precio con un aumento del 10% es: " + precioOtoñoPrimavera);
		}
	}
*/

/*	var precioBarilocheInvierno;
	var precioCataratasCordobaInvierno;
	var precioMardelplataInvierno;
	var precioBarilocheVerano;
	var precioCataratasCordobaVerano;
	var precioMardelplataVerano;
	var precioOtoñoPrimavera;
	var descuentoAumento20porciento;
	var descuentoAumento10porciento;
*/

//alert("el precio es " + precioEstadiaBase);
//console.log(estacionDelAño + " " + destinoIngresado);