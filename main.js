/* EJERCICOIO 2--Dado un número indicar si es par o impar y si es mayor de 10. */
do{
let numero = Number(prompt("Ingrese un numero entero"));

if(numero % 2 === 0){
    if(numero > 10){
        alert(`El numero ${numero} es PAR y es MAYOR que 10`);
    }else{
        alert(`El numero ${numero} es PAR y es MENOR que 10`)
    }  
}else{
    if(numero > 10){
        alert(`El numero ${numero} es IMPAR y es MAYOR que 10`);
    }else{
        alert(`El numero ${numero} es IMPAR y es MENOR que 10`)
    }  
}
}while(confirm("¿Desea ingresar otro numero?"))


