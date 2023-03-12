/* EJERCICOIO 4--. Construir el algoritmo que solicite el nombre y edad de 3
personas y determine el nombre de la persona con mayor edad. */
do{
    let persons = {
        name:[],
        age: []
    }

    let cant_persons = Number(prompt("Cuantas va personas va a ingresar"));
    save_person(cant_persons);
    alert(`La persona mayor es ${result()}`)

    function save_person(cantidad) {
        for (let i = 1; i <= cantidad; i++) {
            let name_person = prompt(`Digite el Nombre de la persona ${i}`)
            let age_person = Number(prompt(`Digite la Edad de la persona ${i}`))
            
            persons.name.push(name_person);
            persons.age.push(age_person)
        }
    }

    function result(){
        let age_max = Math.max(...persons.age);
        let position = persons.age.indexOf(age_max)
        
        return `${persons.name[position]} con una edad de ${persons.age[position]} años`
    }

}while(confirm("¿Desea volver a ingresar mas personas?"))


