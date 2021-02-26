/*Estanguet Pablo 1H Parcial 2020 ej.01*/
function mostrar()
{
	
	var contadorIteraciones;
	var tipoProducto;
	var precioProducto;
	var cantidad;
	var marca;
	var fabricante;
	
	var precioMinimoAlcohol;
	var cantidadAlcoholBarato;
	var fabricanteAlcoholBarato;
	
	var contadorAlcohol;
	var contadorJabon;
	var contadorBarbijo;
	
	var acumuladorCantidadAlcohol;
	var acumuladorCantidadJabon;
	var acumuladorCantidadBarbijo;

	var promedioCompra;

	contadorIteraciones = 0;
	
	contadorAlcohol = 0;
	contadorJabon = 0;
	contadorBarbijo = 0;

	acumuladorCantidadAlcohol = 0;
	acumuladorCantidadJabon = 0;
	acumuladorCantidadBarbijo = 0;

	while(contadorIteraciones <5)
	{
		tipoProducto = prompt("Ingrese un producto (barbijo, jabon, alcohol): ");
		while(isNaN(tipoProducto) == false || tipoProducto !="barbijo" && tipoProducto !="jabon" && tipoProducto !="alcohol")
		{
			tipoProducto = prompt("Error, Ingrese un producto valido (barbijo, jabon, alcohol): ");
		}
		
		precioProducto = prompt("Ingrese precio del producto (100 a 300): ");
		precioProducto = parseFloat(precioProducto);
		while(isNaN(precioProducto) == true || precioProducto <100 || precioProducto >300)
		{
			precioProducto = prompt("Error, Ingrese un precio valido (100 a 300):");
		}

		cantidad = prompt("Ingrese cantidad del producto (0 a 1000): ");
		cantidad = parseFloat(cantidad);
		while(isNaN(cantidad) == true || cantidad <0 || cantidad >1001)
		{
			cantidad = prompt("Error, Ingrese una cantidad valida (0 a 1000): ");
		}

		marca = prompt("Ingrese marca del producto: ");
		while(isNaN(marca) == false)
		{
			marca = prompt("Error, Ingrese una marca valida: ");
		}

		fabricante = prompt("Ingrese fabricante del producto: ");
		while(isNaN(fabricante) == false)
		{
			fabricante = prompt("Error, Ingrese un fabricante valido: ");
		}

		switch(tipoProducto)
		{
			case "alcohol":
			contadorAlcohol = contadorAlcohol + 1;
			acumuladorCantidadAlcohol = acumuladorCantidadAlcohol + cantidad;
			break;
			case "jabon":
			contadorJabon = contadorJabon + 1;
			acumuladorCantidadJabon = acumuladorCantidadJabon + cantidad;
			break;
			case "barbijo":
			contadorBarbijo = contadorBarbijo + 1;
			acumuladorCantidadBarbijo = acumuladorCantidadBarbijo +cantidad;
			break;
		}

			if(tipoProducto == "alcohol")
			{
				if(contadorAlcohol == 1 || precioProducto < precioMinimoAlcohol)
				{
					precioMinimoAlcohol = precioProducto;	
					cantidadAlcoholBarato = cantidad;
					fabricanteAlcoholBarato = fabricante; 
				}
			}
		

		contadorIteraciones = contadorIteraciones + 1;
	}//LISTO VALIDACION...

	if(acumuladorCantidadAlcohol > acumuladorCantidadJabon && acumuladorCantidadAlcohol > acumuladorCantidadBarbijo)
	{
		promedioCompra = "Alcohol es el producto con mas cantidad, promedio por compra: " + acumuladorCantidadAlcohol / contadorAlcohol;
	}
	else
	{
		if(acumuladorCantidadJabon > acumuladorCantidadAlcohol && acumuladorCantidadJabon > acumuladorCantidadBarbijo)
		{
			promedioCompra = "Jabon es el producto con mas cantidad, promedio por compra: " + acumuladorCantidadJabon / contadorJabon;
		}
		else
		{
			promedioCompra = "Barbijo es el producto con mas cantidad, promedio por compra: " + acumuladorCantidadBarbijo / contadorBarbijo;
		}
	}

	alert("Precio mas barato de alcohol: " + precioMinimoAlcohol + "-" + " cantidad alcohol mas barato: " + cantidadAlcoholBarato + "-" + " fabricante: " + fabricanteAlcoholBarato);
	document.write(promedioCompra + " - La cantidad acumulada de jabon es: " + acumuladorCantidadJabon + " unidades");	

 }//Fin de la funcion



/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio, /OK
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") , /OK
el precio (validar entre 100 y 300), /OK
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), /OK
la Marca y el fabricante. /OK
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante /OK
b) Del tipo con mas unidades, el promedio por compra /OK
c) Cuántas unidades de jabones hay en total /OK
*/