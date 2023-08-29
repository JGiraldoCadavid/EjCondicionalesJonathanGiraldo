function validarSignificadoColor() {
  const color = prompt(
    "Ingrese un color. Blanco/Negro/Verde/Azul/Amarillo/Rojo/Marrón u otro color no descrito"
  );

  switch (color) {
    case "Blanco":
      alert(color + ": Falta de color");
      break;
    case "Negro":
      alert(color + ": Falta de color");
      break;
    case "Verde":
      alert(color + ": El color de la naturaleza");
      break;
    case "Azul":
      alert(color + ": El color del agua");
      break;
    case "Amarillo":
      alert(color + ": El color del sol");
      break;
    case "Rojo":
      alert(color + ": El color del fuego");
      break;
    case "Marrón":
      alert(color + ": El color de la tierra");
      break;
    default:
      alert("Excelente elección, no lo teníamos pensado.");
      break;
  }
}

validarSignificadoColor();
