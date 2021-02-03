/*
Estanguet Pablo 1H
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	
    var unNumero;
	var otroNumero;
	var suma;
    
    //entradas
    unNumero = txtIdNumeroUno.value;
    otroNumero = txtIdNumeroDos.value; 
	
    //conversiones (parseo)
    unNumero = parseInt(unNumero); //parsefloat (n con,)
    otroNumero = parseInt(otroNumero);

    suma = unNumero + otroNumero; //operadores aritmeticos +,-,*,/,%
	
	alert("la suma es " + suma);

}

function restar()
{
    var unNumero;
	var otroNumero;
	var resta;
    
    //entradas
    unNumero = txtIdNumeroUno.value;
    otroNumero = txtIdNumeroDos.value; 
	
    //conversiones (parseo)
    unNumero = parseInt(unNumero); //parsefloat (n con,)
    otroNumero = parseInt(otroNumero);

    resta = unNumero - otroNumero; //operadores aritmeticos +,-,*,/,%
	
	alert("la resta es " + resta);
	
}

function multiplicar()
{ 
    var unNumero;
	var otroNumero;
	var multiplicacion;
    
    //entradas
    unNumero = txtIdNumeroUno.value;
    otroNumero = txtIdNumeroDos.value; 
	
    //conversiones (parseo)
    unNumero = parseInt(unNumero); //parsefloat (n con,)
    otroNumero = parseInt(otroNumero);

    multiplicacion = unNumero * otroNumero; //operadores aritmeticos +,-,*,/,%
	
	alert("el resultado de la multiplicacion es " + multiplicacion);
	
}

function dividir()
{
	
	var unNumero;
	var otroNumero;
	var division;
    
    //entradas
    unNumero = txtIdNumeroUno.value;
    otroNumero = txtIdNumeroDos.value; 
	
    //conversiones (parseo)
    unNumero = parseInt(unNumero); //parsefloat (n con,)
    otroNumero = parseInt(otroNumero);

    division = unNumero / otroNumero; //operadores aritmeticos +,-,*,/,%
	
	//resultado.tofixed(numero de decimales que se muestran)
	alert("el resultado de la division es " + division);
}

