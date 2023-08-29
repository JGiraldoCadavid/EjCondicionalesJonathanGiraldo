function validarEntrada(){
    let nombre= prompt("Ingrese su nombre: ");
    let pase=prompt("Ingrese tipo de pase (vip/normal)");
    let entrada=prompt("Ingrese si tiene o no entrada (si/no)");

    if(nombre==="Jonathan"||pase==="vip"){
        alert("Bienvenid@ "+nombre);
    }
    if(entrada==="si"){
        let utilizarEntrada=prompt("Desea utilizar la entrada? si/no");
        if(utilizarEntrada==="si"){
            alert("Bienvenid@ "+nombre+" ya puede ingresar.");
        }
    }
    if(nombre!=="Jonathan" && pase==="normal" && entrada==="no"){
        let compra=prompt("¿Desea comprar? si/no");
        if(compra==="no"){
            alert("Hasta pronto!")
        }else{
            let dineroDisponible=prompt("¿Cual es la cantidad de dinero disponible?");
            if(dineroDisponible>=1000){
                alert("Venta exitosa!")
                alert("Bienvenid@ "+nombre);
            }else{
                alert("No se pudo realizar la venta. Fondos insuficientes.")
            }
        }
    }
}

validarEntrada();