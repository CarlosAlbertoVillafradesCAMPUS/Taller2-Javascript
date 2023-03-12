/* EJERCICOIO 6--.Construir el algoritmo en Javascript para un programa
para cualquier cantidad de estudiantes que lea el nombre,
el sexo y la nota definitiva y halle al estudiante con la mayor
nota y al estudiante con la menor nota y cuantos eran
hombres y cuantos mujeres. */
do {
  let data_students = {
    name: [],
    sexo: [],
    note: [],
  };
  let cant_men = 0;
  let cant_women = 0;

  let cant_students = Number(prompt(`Digite la cantidad de estudiantes que va a ingresar`));
  save_students(cant_students);
  alert(`El estudiantes con la MAYOR nota definitva es ${MaxNote_MinNote(data_students)}\n
De los ${cant_students} estudiantes\n${cant_men} son hombres.\n${cant_women} son mujeres`);
  
  function save_students(estudiantes) {
    for (let i = 1; i <= estudiantes; i++) {
      name_student = prompt(`Digite el nombre del estudinate ${i}`);
      sexo_student = Number(prompt(`Digite el sexo del estudiante ${i}\n1.Hombre\n2.Mujer`));
      note_student = Number(prompt(`Digite la nota final del estudiante ${i}`));

      data_students.name.push(name_student);
      data_students.note.push(note_student);

      (sexo_student === 1) ? (cant_men += 1) :(cant_women += 1)
    }
  }

  function MaxNote_MinNote(data) {
    let max_note = Math.max(...data.note);
    let min_note = Math.min(...data.note);
    let position_max_note = data.note.indexOf(max_note);
    let position_min_note = data.note.indexOf(min_note);

    return `${data.name[position_max_note]} con ${data.note[position_max_note]}\nEl estudiantes con la MENOR nota definitva es ${data.name[position_min_note]} con ${data.note[position_min_note]}`;
  }
} while (confirm("¿Desea ingresar otros estudiantes?"));
