//Estanguet Pablo 1H Parcial 2020 ej.02
function mostrar()
{
  var tipoProducto;
  var cantidad;
  var precioPorBolsa;

  var porcentajeDescuento;
  
  var importeBruto;

  var respuesta;

  var descuento;
  var porcentajeDescuento;
  var importeTotalConDescuento;

  var acumuladorCantidadTotal;
  var acumuladorImporteTotal;

  var acumuladorCantidadArena;
  var acumuladorCantidadCal;
  var acumuladorCantidadCemento;

  var contadorCantidadArena;
  var contadorCantidadCal;
  var contadorCantidadCemento;

  var precioMaximoArena;
  var precioMaximoCal;
  var precioMaximoCemento;

  contadorCantidadArena=0;
  contadorCantidadCal=0;
  contadorCantidadCemento=0;

  acumuladorCantidadTotal=0;
  acumuladorImporteTotal=0;

  acumuladorCantidadArena=0;
  acumuladorCantidadCal=0;
  acumuladorCantidadCemento=0;

  respuesta="si";

  while(respuesta=="si")
  {
    tipoProducto=prompt("Ingrese un producto (arena;cal;cemento): ");
    while(isNaN(tipoProducto)==false || tipoProducto!="arena" && tipoProducto!="cal" && tipoProducto!="cemento")
    {
        tipoProducto=prompt("ERROR, Ingrese un producto (arena;cal;cemento): ");
    }

    cantidad=prompt("Ingrese cantidad: ");
    cantidad=parseInt(cantidad);
    while(isNaN(cantidad)==true)
    {
        cantidad=prompt("ERROR, Ingrese cantidad: ");
        cantidad=parseInt(cantidad);
    }

    precioPorBolsa=prompt("Ingrese precio (más de cero): ");
    precioPorBolsa=parseFloat(precioPorBolsa);
    while(isNaN(precioPorBolsa)==true || precioPorBolsa<0)
    {
        precioPorBolsa=prompt("ERROR, Ingrese precio (más de cero): ");
        precioPorBolsa=parseFloat(precioPorBolsa);
    }

    switch(tipoProducto)
    {
      case "arena":
      contadorCantidadArena++;
      acumuladorCantidadArena=acumuladorCantidadArena+cantidad;
      if(contadorCantidadArena==1 || precioPorBolsa>precioMaximoArena)
      {
        precioMaximoArena=precioPorBolsa;
      }
      
      break;
      case "cal":
      contadorCantidadCal++;
      acumuladorCantidadCal=acumuladorCantidadCal+cantidad;
      if(contadorCantidadCal==1 || precioPorBolsa>precioMaximoCal)
      {
        precioMaximoCal=precioPorBolsa;
      }
      
      break;
      case "cemento":
      contadorCantidadCemento++;
      acumuladorCantidadCemento=acumuladorCantidadCemento+cantidad;
      if(contadorCantidadCemento==1 || precioPorBolsa>precioMaximoCemento)
      {
        precioMaximoCemento=precioPorBolsa;
      }
      
      break;
    }

    importeBruto=precioPorBolsa*cantidad;
    
    acumuladorImporteTotal=acumuladorImporteTotal+importeBruto;
    acumuladorCantidadTotal=acumuladorCantidadTotal+cantidad;
   
    respuesta=prompt("Desea ingresar otro producto?: ");
  }
 
  

  if(acumuladorCantidadTotal<11)
  {
    console.log("El importe bruto es: " + acumuladorImporteTotal);

  }
  else
  {
    if(acumuladorCantidadTotal>10 && acumuladorCantidadTotal <31)
    {
      porcentajeDescuento=15;
      descuento=(porcentajeDescuento/100)*acumuladorImporteTotal;//si lo pongo afuera no me hace la cuenta, si lo pongo antes del if no me toma el descuento.
      importeTotalConDescuento=acumuladorImporteTotal-descuento;
      console.log("El importe bruto es: $" + acumuladorImporteTotal + ", con el descuento del 15% usted paga: $" + importeTotalConDescuento);
    }
    else
    {
      porcentajeDescuento=30;
      descuento=(porcentajeDescuento/100)*acumuladorImporteTotal;
      importeTotalConDescuento=acumuladorImporteTotal-descuento;
      console.log("El importe bruto es: $" + acumuladorImporteTotal + ", con el descuento del 30% usted paga: $" + importeTotalConDescuento);
    }
  }

  if(acumuladorCantidadArena>acumuladorCantidadCal && acumuladorCantidadArena>acumuladorCantidadCemento)
  {
    document.write("Arena es el producto con mas cantidad: " + acumuladorCantidadArena + " bolsas" + "<br>");
  }
  else
  {
    if(acumuladorCantidadCal>acumuladorCantidadCemento)
    {
       document.write("Cal es el producto con mas cantidad: " + acumuladorCantidadCal + " bolsas" + "<br>");
    }
    else
    {
      document.write("Cemento es el producto con mas cantidad: " + acumuladorCantidadCemento + " bolsas" + "<br>");
    }
  }

  if(precioMaximoArena>precioMaximoCal && precioMaximoArena>precioMaximoCemento || contadorCantidadCal==0 && contadorCantidadCemento==0)
  {
   document.write("El producto de tipo Arena es el mas caro, su valor es: " + precioMaximoArena + "<br>");
  }
  else
  {
    if(precioMaximoCal>precioMaximoCemento || contadorCantidadArena==0 && contadorCantidadCemento==0)
    {
      document.write("El producto de tipo Cal es el mas caro, su valor es: " + precioMaximoCal + "<br>");
    }
    else
    {
      document.write("El producto de tipo Cemento es el mas caro, su valor es: " + precioMaximoCemento + "<br>");
    }
  }
}
 
/*Estanguet Pablo 1H parcial 2020 ej.02

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento") 
Cantidad de bolsas, 
Precio por bolsa (más de cero ), 

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/