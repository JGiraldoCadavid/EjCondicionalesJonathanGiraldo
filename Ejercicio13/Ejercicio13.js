function validarDatosCedula(){
  let nuip=prompt("Ingrese su NUIP: ");
  let apellidos=prompt("Ingrese sus apellidos");
  let nombres=prompt("Ingrese sus nombres");
  let nacionalidad=prompt("Ingrese su nacionalidad");
  let estatura=prompt("Ingrese su estatura");
  let sexo=prompt("Ingrese su sexo");
  let fechanacimiento=prompt("Ingrese su fecha de nacimiento");
  let gruposanguineo=prompt("Ingrese su grupo sanguineo");
  let lugarnacimiento=prompt("Ingrese su lugar de nacimiento");
  let fechaylugarexpedicion=prompt("Ingrese la fecha y lugar de expedicion del documento");
  let fechaexpiracion=prompt("Ingrese la fecha de expiracion");

  let datoscorrectos= prompt
       ("NUIP: "+nuip+"\n"+
        "Apellidos: "+apellidos+"\n"+
        "Nombres: "+nombres+"\n"+
        "Nacionalidad: "+nacionalidad+"\n"+
        "Estatura: "+estatura+"\n"+
        "Sexo: "+sexo+"\n"+
        "Fecha Nacimiento: "+fechanacimiento+"\n"+
        "Grupo Sanguineo: "+gruposanguineo+"\n"+
        "Lugar Nacimiento: "+lugarnacimiento+"\n"+
        "Fecha y lugar de expiración: "+fechaylugarexpedicion+"\n"+
        "Fecha Expiración: "+fechaexpiracion+"\n"+
        "¿Estos datos son correctos? si/no"       
        )

  if(datoscorrectos==="si"){
    dni={
      Nuip: nuip,
      Apellidos: apellidos,
      Nombres: nombres,
      Nacionalidad: nacionalidad,
      Estatura: estatura,
      Sexo: sexo,
      FechaNacimiento: fechanacimiento,
      GrupoSanguineo: gruposanguineo,
      LugarNacimiento: lugarnacimiento,
      FechaYLugarExpedicion: fechaylugarexpedicion,
      FechaExpiracion: fechaexpiracion
    }
    console.table(dni);
  }else{
    alert("Vuelva a intentarlo en 1 mes");
  }

}

validarDatosCedula()