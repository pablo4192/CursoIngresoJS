//Estanguet Pablo 1H
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var numerouno;
	var numerodos;
	var numerotres;
    var suma;

    //entradas
    numerouno = txtIdPrecioUno.value;
    numerodos = txtIdPrecioDos.value; 
    numerotres = txtIdPrecioTres.value;

    //conversion (parseo)
    numerouno = parseFloat(numerouno);
    numerodos = parseFloat(numerodos);
    numerotres = parseFloat(numerotres);

    //salida
    suma = numerouno + numerodos + numerotres;

    alert("La suma de los precios es " + suma);

    //txtIdPrecioUno
    //txtIdPrecioDos
    //txtIdPrecioTres
}

function Promedio () 
{
    var numerouno;
    var numerodos;
    var numerotres;	
    var promedio;

    numerouno = txtIdPrecioUno.value;
    numerodos = txtIdPrecioDos.value;
    numerotres = txtIdPrecioTres.value;

    numerouno = parseFloat(numerouno);
    numerodos = parseFloat(numerodos);
    numerotres = parseFloat(numerotres);

    promedio = (numerouno + numerodos + numerotres) / 3; 

    alert("el promedio es " + promedio);

}

function PrecioFinal () 
{
	var numerouno;
	var numerodos;
	var numerotres;
	var preciofinal;

	numerouno = txtIdPrecioUno.value;
    numerodos = txtIdPrecioDos.value;
    numerotres = txtIdPrecioTres.value;    

    numerouno = parseFloat(numerouno);
    numerodos = parseFloat(numerodos);
    numerotres = parseFloat(numerotres);

    preciofinal = (numerouno + numerodos + numerotres) *1.21;

    alert("El precio final es " + preciofinal + ", incluye IVA 21%.");

}









