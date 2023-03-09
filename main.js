/* EJERCICOIO 1--Construir el algoritmo para un programa que ingrese tres
notas de un alumno, si el promedio es menor o igual a 3.9
mostrar un mensaje "Estudie“, de lo contrario un mensaje que
diga "becado" */
do{
let nota1 = Number(prompt("Ingrese la primera nota (1.0 - 5.0)"));
let nota2 = Number(prompt("Ingrese la segunda nota (1.0 - 5.0)"));
let nota3 = Number(prompt("Ingrese la tercera nota (1.0 - 5.0)"));

let promedio = (nota1 + nota2 + nota3)/3;

if(promedio <= 3.9){
    alert(`Promedio: ${promedio.toFixed(2)}\nPailas mi ñero, vaya y estudie mas bien`);
}else{
    alert(`Promedio: ${promedio.toFixed(2)}\nFirme parcero acabas de quedar becado en CAMPUSLAND`)
}
}while(confirm("¿Desea calcular otro promedio?"))


