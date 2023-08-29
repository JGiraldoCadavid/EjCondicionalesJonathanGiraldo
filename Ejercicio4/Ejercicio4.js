function menorNumero(num1,num2,num3){
    if(num1<num2&&num1<num3){
        alert(num1+" Es el número mas chico entre("+num1+", "+num2+", "+num3+")");
    }else{
        if(num2<num1&&num2<num3){
            alert(num2+" Es el número mas chico entre("+num1+", "+num2+", "+num3+")");
        }else{
            alert(num3+" Es el número mas chico entre("+num1+", "+num2+", "+num3+")");
        }
    }
}

menorNumero(1,2,3);
menorNumero(4,3,9);
menorNumero(4,6,2);
menorNumero(50,34,10)