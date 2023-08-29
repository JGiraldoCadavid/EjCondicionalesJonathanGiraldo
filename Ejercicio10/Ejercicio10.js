function piedraPapelTijera(){
    let opjugador1=prompt("Eres el jugador 1. Ingrese piedra, papel o tijera").toUpperCase();
    let opjugador2=prompt("Eres el jugador 2. Ingrese piedra, papel o tijera").toUpperCase();

    if(opjugador1===opjugador2){
        alert("Han empatado");
    }else{
        if((opjugador1==="TIJERAS"&&opjugador2==="PIEDRA")||(opjugador1==="PAPEL"&&opjugador2==="TIJERAS")||(opjugador1==="PIEDRA"&&opjugador2==="PAPEL")){
            alert("El jugador 2 ha ganado.");
        }else{
            if((opjugador2==="TIJERAS"&&opjugador1==="PIEDRA")||(opjugador2==="PAPEL"&&opjugador1==="TIJERAS")||(opjugador2==="PIEDRA"&&opjugador1==="PAPEL")){
                alert("El jugador 1 ha ganado.");
            }else{
                alert("Uno de los jugadores ha hecho trampa")
            }
            
        }
    }

}
piedraPapelTijera();