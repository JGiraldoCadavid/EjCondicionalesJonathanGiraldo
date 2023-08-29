function adivinarNumero(numeroIncognita){
    
    let intento=1;
    if(intento>=1 && intento<=3){
        let numeroIngresado=prompt("Ingrese un número para del 1 a 10 para adivinar.");
        if(numeroIngresado===numeroIncognita){
            alert("Ganaste, has adivinado el número.");
        }else{
            if(numeroIngresado>numeroIncognita){
                alert("El numero ingresado es mayor, vuelve a intentarlo");
                intento=intento+1;
            }else{
                alert("El numero ingresado es menor, vuelve a intentarlo");
                intento=intento+1;
            }
        }
    }
    if(intento>=2 && intento<=3){
        let numeroIngresado=prompt("Ingrese un número para del 1 a 10 para adivinar.");
        if(numeroIngresado===numeroIncognita){
            alert("Ganaste, has adivinado el número.");
        }else{
            if(numeroIngresado>numeroIncognita){
                alert("El numero ingresado es mayor, vuelve a intentarlo");
                intento=intento+1;
            }else{
                alert("El numero ingresado es menor, vuelve a intentarlo");
                intento=intento+1;
            }
        }
    }
    if(intento===3){
        let numeroIngresado=prompt("Ingrese un número para del 1 a 10 para adivinar.");
        if(numeroIngresado===numeroIncognita){
            alert("Ganaste, has adivinado el número.");
        }else{
            if(numeroIngresado>numeroIncognita){
                alert("El numero ingresado es mayor, vuelve a intentarlo");
                intento=intento+1;
            }else{
                alert("El numero ingresado es menor, vuelve a intentarlo");
                intento=intento+1;
            }
        }
    }
    alert("El número era "+numeroIncognita)
}

let numeroIncognita=Math.random()*(10-1)+1;
adivinarNumero(numeroIncognita.toFixed(0))