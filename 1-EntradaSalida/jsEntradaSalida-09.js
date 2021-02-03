/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var resultado;
    var aumento;

    sueldo = txtIdSueldo.value;
    sueldo = parseInt(sueldo);
    
  //resultado = sueldo + (sueldo * 0.1);

    aumento = sueldo * 10/100;
  //aumento = sueldo * 0.1; 
    
    resultado = sueldo + aumento;
    //resultado = sueldo * 1.1;
    txtIdResultado.value = resultado;  

	
}
//txtIdSueldo
//txtIdResultado