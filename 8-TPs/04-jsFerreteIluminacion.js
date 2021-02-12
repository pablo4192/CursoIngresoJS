// Estanguet Pablo 1H ej 04 A,B
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	//declaracion de variable
	var precio;
	var cantidad;
	var marca;
	//var descuento??	
	//inicializacion de la variable
	precio = 35;
	//lectura de variables
	cantidad = txtIdCantidad.value;
	marca = Marca.value;
	precioFinal = cantidad * precio; 
	
	cantidad = parseInt(cantidad);

	txtIdprecioDescuento.value = precioFinal;



	descuento6oMas = precio * 0.5;
	precioConDescuento6oMas = precio - descuento6oMas;

	descuento5Argentina = precio * 0.4;
	precioConDescuentoArgentina = precio - descuento5Argentina;

	descuento30porciento = precio * 0.3;
	precioConDescuentoDel30 = precio - descuento30porciento;

	descuento25porciento = precio * 0.25;
	precioConDescuentoDel25 = precio - descuento25porciento;

	descuento20porciento = precio *0.2;
	precioConDescuentoDel20 = precio - descuento20porciento;

	if(cantidad >5)
	{
		txtIdprecioDescuento.value = precioConDescuento6oMas * cantidad;		
	}

	if(cantidad == 5)
	{
		if(marca == "ArgentinaLuz")
		{
			txtIdprecioDescuento.value = precioConDescuentoArgentina * cantidad;
		}
	else
	{
		txtIdprecioDescuento.value = precioConDescuentoDel30 * cantidad;
	}	
	}

	if(cantidad == 4)
	{
		if(marca == "FelipeLamparas" || marca == "ArgentinaLuz")
		{
			txtIdprecioDescuento.value = precioConDescuentoDel25 * cantidad;
		}
	else
	{
		txtIdprecioDescuento.value = precioConDescuentoDel20 * cantidad;
	}
	}

}