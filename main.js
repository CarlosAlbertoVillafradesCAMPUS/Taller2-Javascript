/* EJERCICOIO 3--. Construir el algoritmo para determinar el voltaje de un
circuito a partir de la resistencia y la intensidad de corriente. */
do{
let resistencia = Number(prompt("Ingrese la resistencia (Ohmios)"));
let intencidad = Number(prompt("Ingrese la intencidad (Amperios)"));
let voltaje = resistencia * intencidad

alert(`El voltaje del circuito con una resistencia de ${resistencia}(Ω) y una intencidad de ${intencidad}(A) es: ${voltaje}(V)`)
}while(confirm("¿Desea ingresar otro numero?"))


