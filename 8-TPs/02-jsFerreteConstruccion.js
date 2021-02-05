//Estanguet Pablo 1H
/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
   var largo;
   var ancho;
   //var radio;
   var perimetro;
   var rectangulodealambre;

   largo = txtIdLargo.value;
   ancho = txtIdAncho.value;
   //radio = txtIdRadio.value;

   largo = parseFloat(largo);
   ancho = parseFloat(ancho);
   //radio = parseFloat(radio);

   perimetro = 2 * largo + 2 * ancho;

   rectangulodealambre = perimetro * 3;

   alert("Se deberan comprar " + rectangulodealambre + " metros de alambre"); 

}

function Circulo () 
{
	var radio;
	var perimetro; 
	var circuloDeAlambre;

	radio = txtIdRadio.value;

	radio = parseFloat(radio);

	perimetro = (2 * Math.PI * radio);

	circuloDeAlambre = perimetro * 3;

    alert("Se deben comprar " + circuloDeAlambre + " metros de alambre");

}

function Materiales () 
{
	var largo;
	var ancho;
    var area;
    var materialesContrapisoCemento;
    var materialesContrapisoCal;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    area = largo * ancho;

    materialesContrapisoCemento = area * 2;
    materialesContrapisoCal = area * 3; 

    alert("Se necesitan " + materialesContrapisoCemento + " bolsas de cemento");
    alert("Se necesitan " + materialesContrapisoCal + " bolsas de cal");

}