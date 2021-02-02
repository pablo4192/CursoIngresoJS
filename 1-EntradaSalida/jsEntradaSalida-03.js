/*
Estanguet Pablo 1H
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombredelalumno;
    var edaddelalumno;
    
    nombredelalumno= document.getElementById('txtIdNombre').value;
	
	edaddelalumno=prompt("ingrese su edad")
	alert("usted se llama: "+nombredelalumno + " y tiene: "+edaddelalumno +" años");

}
/*cuarta vez que lo mando, pero funciono!!*/


