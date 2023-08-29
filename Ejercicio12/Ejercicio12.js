function sumar(num1,num2){
  return num1+num2;
}
function restar(num1,num2){
  return num1-num2;
}
function multiplicar(num1,num2){
  return num1*num2;
}
function dividir(num1,num2){
  return (num1/num2).toFixed(2);
}

function calcularOperacion(){

  let num1=Number(prompt("Ingrese un número"));
  let num2=Number(prompt("Ingrese otro número"));
  let operacion=prompt("Ingrese una operación. suma/resta/multiplicación/división.")

  switch (operacion) {
    case "suma":
      alert("La suma de "+num1+" + "+num2+" es: "+sumar(num1,num2));
      break;
    case "resta":
      alert("La resta de "+num1+" - "+num2+" es: "+restar(num1,num2));
      break;
      case "multiplicación":
      alert("La multiplicación de "+num1+" * "+num2+" es: "+multiplicar(num1,num2));
      break;
      case "división":
        if(num2!==0){
         alert("La división de "+num1+" / "+num2+" es: "+dividir(num1,num2));
        }else{
          alert("ERROR - no se puede dividir por cero.")
        }
      break;
    default:
      alert("No selecciono una operación de forma correcta.")
      break;
  }

}

calcularOperacion();