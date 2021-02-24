/*Estanguet Pablo 1H Parcial 2020 ej.01
Debemos realizar la carga de 5(cinco) productos de prevención de contagio, OK
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") , OK
el precio (validar entre 100 y 300), OK
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), OK
la Marca y el fabricante. OK
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	
	var contadorProductos;
	var tipoProducto;
	var precioProducto;
	var cantidad;
	var marca;
	var fabricante;

	contadorProductos = 0;

	while(contadorProductos <5)
	{
		tipoProducto = prompt("Ingrese un producto (barbijo, jabon, alcohol): ");
		while(isNaN(tipoProducto) == false || tipoProducto !="barbijo" && tipoProducto !="jabon" && tipoProducto !="alcohol")
		{
			tipoProducto = prompt("Error, Ingrese un producto valido (barbijo, jabon, alcohol): ");
		}
		
		precioProducto = prompt("Ingrese precio del producto (100 a 300): ");
		while(isNaN(precioProducto) == true || precioProducto <100 || precioProducto >300)
		{
			precioProducto = prompt("Error, Ingrese un precio valido (100 a 300):");
		}

		cantidad = prompt("Ingrese cantidad del producto (0 a 1000): ");
		while(isNaN(cantidad) == true || cantidad <0 || cantidad >1000)
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

		contadorProductos = contadorProductos + 1;
	}//LISTO VALIDACION...


}
