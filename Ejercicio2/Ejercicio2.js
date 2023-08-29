function validarIgualdad(num1,num2){
    if(num1===num2){
        return "Son iguales";
    }else{
        return "No son igules";
    }
}

console.log(validarIgualdad(3,"3"));
console.log(validarIgualdad("3","3"));
console.log(validarIgualdad("3",3));
console.log(validarIgualdad(3,3));