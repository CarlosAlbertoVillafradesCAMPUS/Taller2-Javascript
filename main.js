/* EJERCICOIO 6--.Programa que pida el ingreso del nombre y precio de un artículo y la
cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
en su factura. */
do {
  let name_article = prompt(`Digite el nombre del articulo`);
  let price_article = Number(prompt(`Digite el precio del articulo (${name_article})`));
  let cant_article = Number(prompt(`Digite la cantidad de ${name_article} que va a llevar`))

  alert(`Nombre del articulo: ${name_article}\nPrecio Articulo: ${price_article}\nCantidad a Llevar: ${cant_article}\n\nTotal a Pagar: ${price_article*cant_article}`)
} while (confirm("¿Desea ingresar otro Articulo?"));
