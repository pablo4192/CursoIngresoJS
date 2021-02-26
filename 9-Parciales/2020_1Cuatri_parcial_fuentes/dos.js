//Estanguet Pablo 1H Parcial 2020 ej.02
function mostrar()
{
  var tipoProducto;
  var cantidadBolsas;
  var precioPorBolsa;
  var respuesta;
  var porcentaje15PorCiento;
  var porcentaje25PorCiento;

  respuesta = "si";

	while(respuesta == "si")
   {
  		tipoProducto = prompt("Ingrese un producto (arena, cal, cemento): ");
  		while(isNaN(tipoProducto) == false || tipoProducto != "arena" && tipoProducto != "cal" && tipoProducto != "cemento")
  		{
  			tipoProducto = prompt("Error, Reingrese producto (arena, cal, cemento)");
  		}
 	
  		cantidadBolsas = prompt("Ingrese cantidad de bolsas: ");
  		cantidadBolsas = parseInt(cantidadBolsas);
  		while(isNaN(cantidadBolsas) == true)
  		{
  			cantidadBolsas = prompt("Error, Reingrese cantidad de bolsas: ");
  			cantidadBolsas = parseInt(cantidadBolsas);
  		}

  		precioPorBolsa = prompt("Ingrese precio: ");
  		precioPorBolsa = parseFloat(precioPorBolsa);
  		while(isNaN(precioPorBolsa) == true || precioPorBolsa <0)
  		{
  			precioPorBolsa = prompt("Error, Reingrese precio: ");
  			precioPorBolsa = parseFloat(precioPorBolsa);
  		}

		 respuesta = prompt("Desea Ingresar otro producto: ");
	}

	porcentaje15PorCiento = precioPorBolsa * 0.15;
	porcentaje25PorCiento = precioPorBolsa * 0.25;

	


}
 
/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento") /OK
Cantidad de bolsas, /OK
Precio por bolsa (más de cero ), /OK

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/