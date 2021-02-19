/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var i;//variable de control (i,j,k)

	i = 0;
	//i=0; la primera es, hasta el 9 son 10 valores (recomendada)
	//i=1; se inicializa. en este caso = (i<11) o (i<=10)

	while(i<10)// valor menor al cual quiero llegar
	{
		console.log((i+1) + "-");//recomendada ("-")= para separar los numeros o br salto de linea para document.write
		
		i = i + 1;//contador
		
		//console.log(i + "-"); otra forma
	}

	/*while(condicion)//mientras. (se evalua una condicion)
	{
		//sentencias que quiero repetir...
		//sentencia que hace que la condicion en algun momento resulte falsa.
	}*/




}//FIN DE LA FUNCIÓN

/*Determinada
Indeterminada*/