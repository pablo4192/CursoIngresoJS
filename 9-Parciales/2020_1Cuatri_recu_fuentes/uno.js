/*
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca 
el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante //ok 
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra.//ok
c) Cuántas unidades de Barbijos se compraron en total
*/
function mostrar()
{
	var tipoProducto;
	var precio;
	var cantidadUnidades;
	var marca;
	var fabricante;

	var precioMasCaroJabones;
	var cantidadUnidadesMasCaroJabones;
	var fabricanteMasCaroJabones;

	var contadorBarbijo;
	var contadorJabon;
	var contadorAlcohol;
	var acumuladorBarbijo;
	var acumuladorJabon;
	var acumuladorAlcohol;
	var promedioBarbijo;
	var promedioJabon;
	var promedioAlcohol;

	var contadorProductos;

	contadorProductos=0;
	contadorBarbijo=0;
	contadorJabon=0;
	contadorAlcohol=0;
	acumuladorBarbijo=0;
	acumuladorJabon=0;
	acumuladorAlcohol=0;

	while(contadorProductos<5)
	{
		tipoProducto=prompt("ingrese tipo Producto: ");
		while(isNaN(tipoProducto)==false || tipoProducto!="barbijo" && tipoProducto!="jabón" && tipoProducto!="alcohol")
		{
			tipoProducto=prompt("ingrese tipo Producto: ");
		}

		precio=prompt("ingrese precio: ");
		precio=parseFloat(precio);
		while(isNaN(precio)==true || precio<100 || precio>300)
		{
			precio=prompt("ingrese precio: ");
			precio=parseFloat(precio);
		}
	
		cantidadUnidades=prompt("ingrese cantidad Unidades: ");
		cantidadUnidades=parseInt(cantidadUnidades);
		while(isNaN(cantidadUnidades)==true || cantidadUnidades<1 || cantidadUnidades>1000)
		{
			cantidadUnidades=prompt("ingrese cantidad Unidades: ");
			cantidadUnidades=parseInt(cantidadUnidades);
		}

		marca=prompt("ingrese marca Producto: ");
		while(isNaN(marca)==false)
		{
			marca=prompt("ingrese marca Producto: ");
		}

		fabricante=prompt("ingrese fabricante Producto: ");
		while(isNaN(fabricante)==false)
		{
			fabricante=prompt("ingrese fabricante Producto: ");
		}
		//a) Del más caro de los jabones, la cantidad de unidades y el fabricante
		switch(tipoProducto)
		{
			case "barbijo":
			acumuladorBarbijo+=cantidadUnidades;
			contadorBarbijo++;
			break;
			case "jabón":
			if(contadorJabon==0 || precio>precioMasCaroJabones)
			{
				precioMasCaroJabones=precio;
				fabricanteMasCaroJabones=fabricante;
				cantidadUnidadesMasCaroJabones=cantidadUnidades;
			}
			acumuladorJabon+=cantidadUnidades;
			contadorJabon++;
			break;
			case "alcohol":
			acumuladorAlcohol+=cantidadUnidades;
			contadorAlcohol++;
			break;
		}

		

		contadorProductos++;

	}

	if(contadorJabon!=0)
	{
		document.write("La cantidad de unidades del mas caro de los jabones es: " + cantidadUnidadesMasCaroJabones + ", y el fabricante es: " + fabricanteMasCaroJabones + "<br>");
	}
	else
	{
		document.write("No se ingresaron jabones <br>");
	}
	//b) Del tipo de producto con más unidades en total de la compra, el promedio por compra.

	if(acumuladorBarbijo>acumuladorJabon && acumuladorBarbijo>acumuladorAlcohol)
	{
		promedioBarbijo=acumuladorBarbijo/contadorBarbijo;
		document.write("El promedio por compra de barbijos es: " + promedioBarbijo + "<br>");
	}
	else
	{
		if(acumuladorJabon>acumuladorAlcohol)
		{
			promedioJabon=acumuladorJabon/contadorJabon;
			document.write("El promedio por compra de jabones es: " + promedioJabon + "<br>");
		}
		else
		{
			promedioAlcohol=acumuladorAlcohol/contadorAlcohol;
			document.write("El promedio por compra de alcoholes es: " + promedioAlcohol + "<br>");
		}
	}

	if(contadorBarbijo!=0)
	{
		document.write("Se compraron " + acumuladorBarbijo + " unidades de barbijos <br>");
	}
	else
	{
		document.write("No se ingresaron barbijos <br>");
	}


}
