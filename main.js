/* EJERCICOIO 8--.Programa que Ingrese por teclado:
a. el valor del lado de un cuadrado para mostrar por pantalla el
perímetro del mismo
b. la base y la altura de un rectángulo para mostrar el área del
mismo */
do {
    let option = Number(prompt(`Digite la opcion que deseas realizar\n1.Perimetro de un cuadrado\n2.Area del rectangulo`))

    if(option > 0 && option <= 2) {
        if(option === 1){
            let side_square = Number(prompt(`Digite un lado del cuadrado (cm)`))
            alert(`El perimetro del cuadrado es ${side_square * 4}cm`)
        } else{
            let base_rectangulo = Number(prompt(`Digite la base del rectangulo (cm)`));
            let heigth_rectangulo = Number(prompt(`Digite la altura del rectangulo (cm)`))
            alert(`El area del rectangulo es ${base_rectangulo * heigth_rectangulo}cm`)
        }
    }else{
        alert(`Error opcion incorrecta`)
    }
 } while (confirm("¿Desea ingresar otra opcion?"));
