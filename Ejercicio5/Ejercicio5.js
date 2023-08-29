function compararAltura(persona1,persona2){
    if(persona1.altura>persona2.altura){
        alert(persona1.nombre+" es la persona mas alta "+persona1.altura);
    }else{
       if(persona1.altura<persona2.altura){
        alert(persona2.nombre+"es la persona mas alta "+persona2.altura);
       }else{
        alert("Las dos personas son de la misma altura "+persona1.altura)
       }
    }
}

function compararEdad(persona1,persona2){
    if(persona1.edad>persona2.edad){
        alert(persona1.nombre+" es la persona que tiene mayor edad "+persona1.edad);
    }
    else{
        if(persona1.edad<persona2.edad){
            alert(persona2.nombre+" es la persona que tiene mayor edad "+persona2.edad);
        }else{
            alert("Las dos personas tienen la misma edad "+persona1.edad)
        }
    }
}

let persona1={
    nombre: "Jon",
    edad: 20,
    altura: 180
}

let persona2={
    nombre: "Ana",
    edad: 28,
    altura: 120
}

compararAltura(persona1,persona2);
compararEdad(persona1,persona2)