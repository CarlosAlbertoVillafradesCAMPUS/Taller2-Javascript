/* EJERCICOIO 5--.Construir el algoritmo que lea por teclado dos números,
si el primero es mayor al segundo informar su suma y
diferencia, en caso contrario, informar el producto y la
división del primero respecto al segundo. */
do{
   let num1 = Number(prompt(`Digite el primer numero`));
   let num2 = Number(prompt(`Digite el segundo numero`));

   if(num1 === num2){
    alert(`Error ${num1} y ${num2} son numero iguales`)
   }else{
    (num1 > num2) 
   ? alert(`el primer numero(${num1}) es mayor al segundo(${num2}), entonces su suma es ${num1 + num2}, con una diferencia de ${num1-num2}`)
   : alert(`el segundo numero(${num2}) es mayor al primero(${num1}), entonces su producto es ${num2 * num1}, y la divicion de ${num2}/${num1} es de ${num2/num1}`)

   }
}while(confirm("¿Desea ingresar otros numeros?"))


