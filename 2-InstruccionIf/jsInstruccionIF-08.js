//Estanguet Pablo 1H = ej 08
function mostrar()
{
	var edad;
	var estadocivil;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	estadocivil = estadoCivil.value;

	if(edad > 17 && estadocivil == "Soltero")
	{
		alert("Es soltero y no es menor");
	}	

}