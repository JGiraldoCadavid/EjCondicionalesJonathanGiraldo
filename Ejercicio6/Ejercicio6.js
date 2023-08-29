function conducir(){
    let nombre=prompt("Ingrese su nombre: ");
    let edad=prompt("Ingrese su edad: ");
    let altura=prompt("Ingrese su altura: ");
    let vision=prompt("Ingrese su valor de visión: ");

    if(edad>=18 && altura>150 && vision>=8){
        console.log(nombre+ " puede conducir.");
    }else{
        console.log(nombre+" no puede conducir.")
    }
}
conducir();