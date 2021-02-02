/*
Pablo Estanguet 1H
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var apellido;
	var edad;

	nombre = document.getElementById('txtIdNombre').value;
    //apellido = document.getElementsByTagName('txtIdNombre').value;
	edad = document.getElementById('txtIdEdad').value;
	apellido = prompt("ingrese su apellido");
	alert("usted se llama "+nombre + apellido + " y tiene " + edad + " años");
}

//me sale nombre y apellido todo junto
//reinicie la compu y pude enviar! saludos