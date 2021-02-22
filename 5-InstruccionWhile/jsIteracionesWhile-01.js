/*Estanguet Pablo 1H while ej.01
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var contadorIteraciones;

	contadorIteraciones = 0;

	while(contadorIteraciones <10)
	{
		contadorIteraciones = contadorIteraciones + 1;
		console.log(contadorIteraciones);
	}

}//FIN DE LA FUNCIÓN
	

	/*var i;//variable de control (i,j,k)

	i = 0;
	//i=0; la primera es, hasta el 9 son 10 valores (recomendada)
	//i=1; se inicializa. en este caso = (i<11) o (i<=10)

	while(i<10)// valor menor al cual quiero llegar
	{
		console.log((i+1) + "-");//recomendada ("-")= para separar los numeros o br salto de linea para document.write
		
		i = i + 1;//contador
		
		//console.log(i + "-"); otra forma
	}*/

	/*while(condicion)//mientras. (se evalua una condicion)
	{
		//sentencias que quiero repetir...
		//sentencia que hace que la condicion en algun momento resulte falsa.
	}*/

/*Determinada
Indeterminada*/
/*
var contador;
var respuesta;

contador=0;//iniciar

while(contador<5)//comparar
{
	console.log("hola");
	contador=contador+1;//cambio de variable de control//determinada
}

respuesta="si";
while(respuesta=="si")
{
	respuesta=prompt("desea continuar?");//indeterminada
}

//Para sumar cantidades crear var acumulador e inicializarlo
//acumulador va dentro del while// acumulador=acumulador+numeroIngresado;
//promedio=acumulador/contador; va fuera del while.

*/