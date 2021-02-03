/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

    //txtIdNumeroUno
    //txtIdNumeroDos
}

