/*Estanguet Pablo 1H /switch ej01
Enunciado:
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."*/
function mostrar()
{
	//tomo el mes
	/*var mesDelAño =txtIdMes.value;
	
	alert(mesDelAño);*/
	//if(==) comparacion, no pueden haber operadores logicos ni asignaciones.
	//se pueden meter if adentro (crear variable), prompt
	var mesDelAño;
	mesDelAño = txtIdMes.value;

	switch (mesDelAño) 
	{
		case "Enero":
			alert("Que comiences bien el año");
			break;
		case "Marzo":
			alert("a clases!!!.");
			break;
		case "Julio":
			alert("se vienen las vacaciones!!!.");
			break;
		case "Diciembre":
			alert("Felices fiesta!!!.");
			break;
		///default:
			//alert("No hay nada informado para este mes");
			//break;
	}



}//FIN DE LA FUNCIÓN