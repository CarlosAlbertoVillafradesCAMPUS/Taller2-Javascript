/* EJERCICOIO 9--.N atletas han pasado a finales en salto triple en los juegos
olímpicos femenino de 2022. Diseñe un programa que pida por
teclado los nombres de cada atleta finalista y a su vez, sus
marcas del salto en metros. Informar el nombre de la atleta
campeona que se quede con la medalla de oro y si rompió
récord, reportar el pago que será de 500 millones. El récord
esta en 15,50 metros. */
do {
    data_athletes = {
        name:[],
        marca:[]
    };
    let record = 15.50;

    let cant_athletes = Number(prompt(`Digite cuantos atletas pasaron a la final`));
    save_athletes(cant_athletes);
    alert(`La campeona, medalla de oro de los juegos olimpicos en la modalidad salto triple es ${calculate_winner(data_athletes)}`)

    function save_athletes(cantidad) {
        for (let i = 1; i <= cantidad; i++) {
            let name_athlete = prompt(`Digite el nombre del atleta ${i}`);
            let marca_athletes = Number(prompt(`Digite la marca del salto (m)`));

            data_athletes.name.push(name_athlete.toUpperCase());
            data_athletes.marca.push(marca_athletes); 

            if(marca_athletes > record){
                alert(`Felicitaciones!!! ${name_athlete} acabas de romper el record anterior de ${record}m, te acaba de ganas 500 millones`);
                record = marca_athletes
            }          
        }
    }
    function calculate_winner(data) {
        let marca_winner = Math.max(...data.marca);
        let position_winner = data.marca.indexOf(marca_winner);
        
        return `${data.name[position_winner]} con una marca de ${marca_winner}m`
    }
 } while (confirm("¿Desea ingresar otra opcion?"));
