// Estanguet Pablo 1H TP 04 Completo.

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
	var precio;
	var cantidad;
	var marca;
	var precioConDescuento;
	//var ingresosBrutos;
	var precioSiDescuento;
	var descuento//asignarle valor: descuento/100

	precio = 35;
	
	cantidad = parseInt(cantidad);

	cantidad = txtIdCantidad.value;
	marca = Marca.value;
	precioFinal = precio * cantidad;
	txtIdprecioDescuento.value = precioFinal;
	
	porcentaje50 = precio * 0.5;
	porcentaje40 = precio * 0.4;
	porcentaje30 = precio * 0.3;
	porcentaje25 = precio * 0.25;
	porcentaje20 = precio * 0.2;
	porcentaje15 = precio * 0.15;
	porcentaje10 = precio * 0.10;
	porcentaje5 = precio * 0.05;

	/*switch(cantidad)
	{
		case 5:
			switch(marca)
			{
				case "ArgentinaLuz":
					//descuento = 40;
				break;
				default:
					//descuento = 30;
				break;

			}
			break;
			
			case 4:
			switch(marca)
			{
				case "ArgentinaLuz":
				case "FelipeLamparas":
					//descuento = 25;
					break;
					default:
					//descuento = 20;
					break;
			}
			break;

			case 3:
			//
			break;
			default:
				if(cantidad >5)
				{
					//descuento = 50;
				}

			break;*///Otra posibilidad con switch

			/*if(marca == "ArgentinaLuz")una posibilidad con if
			{
				txtIdprecioDescuento.value = (precio - porcentaje40) * cantidad;
			}
			else
			{
				txtIdprecioDescuento.value = (precio - porcentaje30) * cantidad;
			}*/


		break;
	}




	if(cantidad >5)
	{
		txtIdprecioDescuento.value = (precio - porcentaje50) * cantidad;
	}
	else
	{
		if(cantidad == 5)
		{
			if(marca == "ArgentinaLuz")
			{
				txtIdprecioDescuento.value = (precio - porcentaje40) * cantidad;
			}
			else
			{
				txtIdprecioDescuento.value = (precio - porcentaje30) * cantidad;
			}
			
		}
	}//else
	if(cantidad == 4)
	{
		if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
		{
			txtIdprecioDescuento.value = (precio - porcentaje25) * cantidad;
		}
		else
		{
			txtIdprecioDescuento.value = (precio - porcentaje20) * cantidad;	
		}
	}
	if(cantidad == 3)
	{
		if(marca == "ArgentinaLuz")
		{
			txtIdprecioDescuento.value = (precio - porcentaje15) * cantidad;
		}
		else
		{
			if(marca == "FelipeLamparas")
			{
				txtIdprecioDescuento.value = (precio - porcentaje10) * cantidad;
			}
			else
			{
				txtIdprecioDescuento.value = (precio - porcentaje5) * cantidad; 
			}
		}
	}

	precioConDescuento = txtIdprecioDescuento.value;
	precioConDescuento = parseFloat(precioConDescuento);
	porcentajeIngresosBrutos = precioConDescuento * 0.1;
 	ingresosBrutos = precioConDescuento + porcentajeIngresosBrutos;

	if(precioConDescuento >120)
	{
		txtIdprecioDescuento.value = ingresosBrutos;
		alert("IIBB usted pago: " + porcentajeIngresosBrutos);
	}
}