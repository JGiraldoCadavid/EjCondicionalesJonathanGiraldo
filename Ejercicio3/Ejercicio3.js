function compararNumeros(num1,num2){
    if(num1>num2){
        console.log("El primer número "+num1+" es mayor que el segundo número"+num2);
    }else{
        if(num2>num1){
            console.log("El segundo número "+num2+" es mayor que el primer número "+num1);
        }else{
            console.log("Los números son iguales: "+num1);
        }
    }
}

compararNumeros(3,5);
compararNumeros(9,3);
compararNumeros(8,8);