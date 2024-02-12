var edaddeAsegurado=0; // Variebles globales que 
var recargoEsposa=0;          // serviran para los datos
var recargoHijos=0;     // que no se tienen
var recargos=0;
var recargo_esposo=0;
const precioBase = 2000;
var edad_conyuge=0;
var totalPagar = [precioBase + recargo_esposo + recargoHijos + recargoEsposa];

// Asegurado Principal
var nombreCompleto = prompt("Por favor ingrese el nombre completo:", "Nombres y apellidos");
var diaNacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
var mesNacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
var anioNacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");
edaddeAsegurado= 2024-anioNacimiento;
alert("su edad es: " + edaddeAsegurado);
var conyuge = prompt("¿Tiene cónyuge?", "si/no"); //Recargo por el conyuge
if(conyuge == "si"){
var anioNacimientoConyuge = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");
edad_conyuge=2024-anioNacimientoConyuge;
alert(" La edad de su conyuge es: "  + edad_conyuge);
}
if (edad_conyuge<=24){
	recargoEsposa=precioBase * 0.1;
    alert(" Su recargo por tener conyuge es: "  + recargoEsposa);
}if (edad_conyuge >=25 && edad_conyuge <=49){
	recargoEsposa = precioBase * 0.2;
    alert(" Su recargo por tener conyuge es: "  + recargoEsposa);
}if(edad_conyuge >=50 && edad_conyuge <=100){
	recargoEsposa = precioBase * 0.3;
    alert(" Su recargo por tener conyuge es: "  + recargoEsposa);
}  

//Recargo por los hijos
var hijos = prompt("¿Tiene hijos?", "si/no");
if(hijos =="si"){
    var cantidadHijos = prompt("Ingrese la cantidad de hijos", "Por favor ingrese únicamente números");	
}if(hijos == "no"){
	cantidadHijos= 0;
} 
var recargoHijos= precioBase * cantidadHijos * 0.2;
alert(" Su recargo por tener hijos es: " + recargoHijos); 


//Calculo del recaego por la edad del asegurado
if (edaddeAsegurado>=18 && edaddeAsegurado< 24 ){
	var recargo_esposo=precioBase * 0.1;
    alert(" Su recargo por tener Esa Edad es: "  + recargo_esposo);
}if (edaddeAsegurado >=25 && edaddeAsegurado <49){
	var recargo_esposo= precioBase * 0.2;
    alert(" Su recargo por tener Esa edad es: "  + recargo_esposo);
}{
}{
}if(edaddeAsegurado >=50 && edaddeAsegurado <100){
	var recargo_esposo= precioBase * 0.3;
    alert(" Su recargo por Esa edad es: "  + recargo_esposo);

  } 
  //Total de la cotizacion
var totalPagar = precioBase + recargo_esposo + recargoHijos + recargoEsposa;
alert(" Estimado cliente "  + nombreCompleto  +  " su total a pagar es: "  + totalPagar);