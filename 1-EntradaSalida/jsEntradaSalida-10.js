/*
Estanguet Pablo 1H
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    var resultado;
    var descuento;

    importe = txtIdImporte.value;
    importe = parseInt(importe);
   
    //resultado = importe - (importe *0.25);
    //descuento = importe * 25/100; -  va con linea 21
    //resultado = importe * 0.75;
    descuento = importe * 0.25;

    resultado = importe - descuento;	
    //resultado= importe - descuento; - va con linea 16
	
	txtIdResultado.value = resultado;
}
