/*Estanguet Pablo 1H SWITCH ej 04
Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/
function mostrar()
{
	//tomo el mes
	var mesDelAño 
	mesDelAño = txtIdMes.value;

	switch(mesDelAño)
		{
			case "Febrero":
				alert("tiene 28 días.");
				break;
			case "Enero":
			case "Julio":
			case "Octubre":
				alert("tiene 31 días");
				break;
			default:
				alert("tiene 30 días");
				break;
		}
}//FIN DE LA FUNCIÓN