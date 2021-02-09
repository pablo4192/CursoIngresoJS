//Estanguet Pablo 1H = ej 07
function mostrar()
{
	var edad;
	var estadocivil;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	estadocivil = estadoCivil.value;

	if(edad < 18 && estadocivil != "soltero")
	{
		alert("Usted es muy pequeño para no ser soltero");
	}
	


}//FIN DE LA FUNCIÓN