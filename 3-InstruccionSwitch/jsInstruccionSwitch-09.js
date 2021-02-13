function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	alert(estacionIngresada);

}//FIN DE LA FUNCIÓN

/*
con if
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/

	/*var estacionDelAño;
	var destinoIngresado;
	var precioEstadiaBase;


	estacionDelAño = txtIdEstacion.value;
	destinoIngresado = txtIdDestino.value;

	precioEstadiaBase = 15;

	alert("el precio es " + precioEstadiaBase);

	descuentoAumento20porciento = precioEstadiaBase * 0.2;
	descuentoAumento10porciento = precioEstadiaBase * 0.1;

	precioBarilocheInvierno = precioEstadiaBase + descuentoAumento20porciento;

	precioCataratasCordobaInvierno = precioEstadiaBase - descuentoAumento10porciento;

	precioMardelplataInvierno = precioEstadiaBase - descuentoAumento20porciento;

	precioBarilocheVerano = precioEstadiaBase - descuentoAumento20porciento; 

	precioCordobaVerano = precioEstadiaBase + descuentoAumento10porciento;

	precioMardelplataVerano = precioEstadiaBase + descuentoAumento20porciento;

	precioOtoñoPrimavera = precioEstadiaBase + descuentoAumento10porciento;//bariloche, cataratas, Mardelplata / cordoba precio normal*/