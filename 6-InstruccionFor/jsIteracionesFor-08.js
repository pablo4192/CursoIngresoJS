function mostrar()
{
	var IdProducto;
	var tipoProducto;
	var origenProducto; 
	var cantidadVendida;
	var pesoDelPaquete;
	var fechaCompra;
	var precioUnitarioDolares;
	
	var precioTotalMargen30porciento;
	var precioCosto;

	var impuestoJaponMas3kg;
	var impuestoTongaChinaMas2kg;

	var acumuladorRecaudacionJapon;
	var acumuladorRecaudacionTonga;
	var acumuladorRecaudacionChina;

	var gananciaRecaudadaTonga;

	acumuladorRecaudacionJapon=0;
	acumuladorRecaudacionTonga=0;
	acumuladorRecaudacionChina=0;

	//var precioConMargen30porciento;
	
	var respuesta;
	var contadorCompras;

	respuesta="si";
	contadorCompras=0;

	while(respuesta=="si")
	{
		IdProducto=prompt("ingrese IdProducto (Entre 1 y 1000): ");
		IdProducto=parseInt(IdProducto);
		while(isNaN(IdProducto)==true || IdProducto<1 || IdProducto>1000)
		{
			IdProducto=prompt("ingrese IdProducto (Entre 1 y 1000): ");
			IdProducto=parseInt(IdProducto);
		}

		tipoProducto=prompt("ingrese tipo Producto (Drone - camara - Celular: ");
		while(isNaN(tipoProducto)==false || tipoProducto!="Drone" && tipoProducto!="camara" && tipoProducto!="Celular")
		{
			tipoProducto=prompt("ingrese Id Producto (Drone - camara - Celular: ");
		}

		origenProducto=prompt("ingrese origen Producto (China - Tonga - Japon): ");
		while(isNaN(origenProducto)==false || origenProducto!="China" && origenProducto!="Tonga" && origenProducto!="Japon")
		{
			origenProducto=prompt("ingrese origen Producto (China - Tonga - Japon): ");
		}

		cantidadVendida=prompt("ingrese cantidad Vendida : ");
		cantidadVendida=parseInt(cantidadVendida);
		while(isNaN(cantidadVendida)==true)
		{
			cantidadVendida=prompt("ingrese cantidad Vendida : ");
			cantidadVendida=parseInt(cantidadVendida);
		}

		pesoProducto=prompt("ingrese peso Producto: ");
		pesoProducto=parseInt(pesoProducto);
		while(isNaN(pesoProducto)==true)
		{
			pesoProducto=prompt("ingrese peso Producto: ");
			pesoProducto=parseInt(pesoProducto);
		}

		fechaCompra=prompt("ingrese fecha de compra: ");
		fechaCompra=parseInt(fechaCompra);

		precioUnitarioDolares=prompt("ingrese precio Unitario Dolares: ");
		precioUnitarioDolares=parseFloat(precioUnitarioDolares);
		while(isNaN(precioUnitarioDolares)==true)
		{
			precioUnitarioDolares=prompt("ingrese precio Unitario Dolares: ");
			precioUnitarioDolares=parseFloat(precioUnitarioDolares);
		}

		precioCosto=precioUnitarioDolares*cantidadVendida;

		switch(origenProducto)
		{
			case "Japon":
			if(pesoProducto>3)
			{
				impuestoJaponMas3kg=precioCosto*1.05;
				acumuladorRecaudacionJapon=acumuladorRecaudacionJapon+impuestoJaponMas3kg;
			}
			else
			{
				acumuladorRecaudacionJapon=acumuladorRecaudacionJapon+precioCosto;
			}
			break;
			case "China":
			if(pesoProducto>2)
			{
				impuestoTongaChinaMas2kg=precioCosto*1.1;	
				acumuladorRecaudacionChina=acumuladorRecaudacionChina+impuestoTongaChinaMas2kg;
			}
			else
			{
				acumuladorRecaudacionChina=acumuladorRecaudacionChina+precioCosto;
			}
			break;
			case "Tonga":
			if(pesoProducto>2)
			{
				impuestoTongaChinaMas2kg=precioCosto*1.1;	
				acumuladorRecaudacionTonga=acumuladorRecaudacionTonga+impuestoTongaChinaMas2kg;
			}
			else
			{
				acumuladorRecaudacionTonga=acumuladorRecaudacionTonga+precioCosto;
			}
			break;
		}

		
		contadorCompras++;
		respuesta=prompt("desea ingresar otro producto: ");
	}

	
	precioTotalMargen30porciento=(acumuladorRecaudacionJapon+acumuladorRecaudacionChina+acumuladorRecaudacionTonga)*1.3;

	gananciaRecaudadaTonga=acumuladorRecaudacionTonga*0.3;

	console.log("El total (ganancia) recaudado por la empresa por productos vendidos de tonga es: $" + gananciaRecaudadaTonga);
	//si llega a ser por el total bruto uso acumulador tonga con el 30% sumado
	document.write("el total bruto recaudado es por todos los productos vendidos: $" + precioTotalMargen30porciento);
	

}//FIN DE LA FUNCIÓN

/*Estanguet Pablo 1H parcialito 2

Una empresa que se dedica a la venta de productos tecnologicos, registra la siguiente informacion
de la cantidad de productos vendidos:

IdProducto (Entre 1 y 1000)
tipo (Drone - camara - Celular)
Origen (China - Tonga - Japon)
cantidad vendida por cada compra
peso en kg del paquete
Fecha de compra (alfanumerico)
precio unitario en dolares. 
Precio total: (el margen de ganancia para todos los productos es del 30%)//ok
Se calcula para cada venta los siguientes impuestos (en caso de que corresponda):
    Para los productos procedentes de Japon cuyo peso supere los 3 kg se le agrega un impuesto del 5% sobre el 
                    total de la compra.
    Para los productos procedentes de Tonga o China que superen los 2 kg, se le agrega un impuesto del 10% sobre el 
                    total de la compra.
    Para las demas combinaciones no aplica impuesto.
    
Se desea saber:
a) Total que recauda la empresa por productos vendidos procedentes de Tonga.//ok
b) Porcentaje de productos vendidos de cada tipo.   //hacer con acumulador, con cantidad!!
c) Cantidad de productos de China		---			// hacer con acumulador, con cantidad!!!
d) El pais que mas productos importa 	---			//con acumulador, con cantidad de productos!!
e) Fecha, peso y tipo de la compra mas cara.
f) Sumando cantidad de drones y celulares, que porcentaje del total de productos vendidos representan?
g) IdProducto y Origen del ultimo Drone ingresado.
*/
































/*Estanguet Pablo 1H parcialito.1

"super chino" :
Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
TipoDeStock("Pedido","sin stock", "con stock")
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)//ok

informar SOLO SI HAY 


a)  el NOMBRE del  mas barato de los elaborados//ok
b)  de los Productos nacionales con stock , el promedio de precio//ok
c)  el porcentaje de productos elaborados por sobre el total//ok
d)  De los tipos de stock , cual tiene mas productos nacionales//ok
*/


	/*var tipoProducto;
	var nombreProducto;
	var importeProducto;
	var tipoStock;
	var procedenciaProducto;
	var pesoProducto;

	var contadorProductos;

	var contadorSinStockNacional;
	var contadorPedidoNacional;

	var nombreMasBaratoElaborados;
	var contadorProductosElaborados;
	var precioMasBaratoElaborados;

	var promedioPrecioNacionalesStock;
	var acumuladorPrecioNacionalesStock;
	var contadorNacionalesStock;

	var porcentajeProductosElaborados;

	contadorProductos=0;
	acumuladorPrecioNacionalesStock=0;
	
	contadorNacionalesStock=0;
	contadorSinStockNacional=0;
	contadorPedidoNacional=0;

	contadorProductosElaborados=0;


	var respuesta;

	respuesta="si";

	while(respuesta=="si")
	{
		tipoProducto=prompt("ingrese tipo producto (limpieza , comestible , otros): ");
		while(isNaN(tipoProducto)==false || tipoProducto!="limpieza" && tipoProducto!="comestible" && tipoProducto!="otros")
		{
			tipoProducto=prompt("ingrese tipo producto (limpieza , comestible , otros): ");
		}

		nombreProducto=prompt("ingrese nombre producto: ");
		while(isNaN(nombreProducto)==false)
		{
			nombreProducto=prompt("ingrese nombre producto: ");
		}

		importeProducto=prompt("ingrese importe producto (no mayor a 1000 pesos:  ");
		importeProducto=parseFloat(importeProducto);
		while(isNaN(importeProducto)==true || importeProducto<0 || importeProducto>1000)
		{
			importeProducto=prompt("ingrese importe producto (no mayor a 1000 pesos:  ");
			importeProducto=parseFloat(importeProducto);
		}

		tipoStock=prompt("ingrese tipo stock (Pedido,sin stock, con stock): ");
		while(isNaN(tipoStock)==false || tipoStock!="Pedido" && tipoStock!="sin stock" && tipoStock!="con stock")
		{
			tipoStock=prompt("ingrese tipo producto (Pedido,sin stock, con stock): ");
		}

		procedenciaProducto=prompt("ingrese procedencia (importado, nacional, elaborado: ");
		while(isNaN(procedenciaProducto)==false || procedenciaProducto!="importado" && procedenciaProducto!="nacional" && procedenciaProducto!="elaborado")
		{
			procedenciaProducto=prompt("ingrese procedencia (importado, nacional, elaborado: ");
		}

		pesoProducto=prompt("ingrese peso (no mayor a 30 kilos):  ");
		pesoProducto=parseFloat(pesoProducto);
		while(isNaN(pesoProducto)==true || pesoProducto>30)
		{
			pesoProducto=prompt("ingrese peso (no mayor a 30 kilos):  ");
			pesoProducto=parseFloat(pesoProducto);
		}

		contadorProductos++;
		respuesta=prompt("desea ingresar mas productos?: ");

		if(procedenciaProducto=="elaborado")
		{
			if(contadorProductosElaborados==0 || importeProducto<precioMasBaratoElaborados)
			{
				precioMasBaratoElaborados=importeProducto;
				nombreMasBaratoElaborados=nombreProducto;
			}
			contadorProductosElaborados++;

		}
		
		switch(tipoStock)// hacerlo con procedencia???
		{
			case "Pedido":
			if(procedenciaProducto=="nacional")
			{
				contadorPedidoNacional++;
			}
			break;
			case "sin stock":
			if(procedenciaProducto=="nacional")
			{
				contadorSinStockNacional++;
			}
			break;
			case "con stock":
			if(procedenciaProducto=="nacional")
			{
				contadorNacionalesStock++;
				acumuladorPrecioNacionalesStock=acumuladorPrecioNacionalesStock+importeProducto;
			}
			break;

		}

	}

	if(contadorNacionalesStock>contadorSinStockNacional && contadorNacionalesStock>contadorPedidoNacional)
	{
		document.write("tipo con stock es el que tiene mas productos nacionales con: " + contadorNacionalesStock + "<br>");
	}
	else
	{
		if(contadorSinStockNacional>contadorPedidoNacional)
		{
			document.write("tipo sin stock es el que tiene mas productos nacionales con: " + contadorSinStockNacional + "<br>");
		}
		else
		{
			document.write("tipo pedido es el que tiene mas productos nacionales con: " + contadorPedidoNacional + "<br>");
		}
	}

	promedioPrecioNacionalesStock=acumuladorPrecioNacionalesStock/contadorNacionalesStock;
	porcentajeProductosElaborados=(contadorProductosElaborados/contadorProductos)*100;

	console.log("El producto mas barato de los elaborados es: " + nombreMasBaratoElaborados + ", y su precio es: " + precioMasBaratoElaborados);
	console.log("el promedio de precio de los nacionales con stock es: " + promedioPrecioNacionalesStock);
	document.write("el porcentaje de productos elaborados por sobre el total es: " + porcentajeProductosElaborados);*/