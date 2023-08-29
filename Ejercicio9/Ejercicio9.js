function validarEtapaDeVida() {
  let edad = prompt("Ingrese su edad: ");

  if (edad >= 0 && edad <= 12) {
    alert("Eres un infante!");
  } else {
    if (edad > 12 && edad < 19) {
      alert("Eres un adolescente!");
    } else {
      if (edad >= 19 && edad <= 45) {
        alert("Eres un mayor joven!");
      } else {
        if (edad > 100) {
          alert("¿En realidad tienes " + edad + " años?");
        } else {
          if (edad>45) {
            alert("Eres un anciano!");
          }
        }
      }
    }
  }
}
validarEtapaDeVida();
