/* EJERCICOIO 10--.Desarrolle un programa cíclico que capture un dato
numérico cada vez, y los vaya acumulando. El programa se
detiene cuando el usuario digita un cero. El programa debe
mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
VALOR Y MENOR VALOR.*/
do {
    let data_numbers = [];
    do{
        data_numbers.push(Number(prompt(`Digite un numero`)));
        let sum_nums = 0;
        let promedio;

        data_numbers.forEach(element => {
            sum_nums += element
            promedio = sum_nums / data_numbers.length
        });

        alert(`
        \t${data_numbers}
        Sumatoria: ${sum_nums}
        Promedio: ${promedio}
        Cantidad Valores: ${data_numbers.length}
        Valor Mayor: ${Math.max(...data_numbers)}
        Valor Menor: ${Math.min(...data_numbers)}`)

    }while(confirm("¿Agregar otro numero?"))
 } while (confirm("Programa terminado. ¿Deseas volver a correr el programa?"));
