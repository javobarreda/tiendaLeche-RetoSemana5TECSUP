function clickear(){

    let L = +prompt("¿Cuántos Litros de leche ha vendido?")
    let PG = +prompt("¿Cuál es el precio x Galón?")
    let TG = L/3.785
    let GA = PG*TG
    
    swal(`Resultados`,`Cantidad de Litros que se producen (L):            ${L} Litros
    Precio por galón (PG):                     S/. ${PG} Nuevos Soles
    Cantidad de galones que se producen (TG):          ${TG} Galones
    Ganancia por venta de leche (GA):      S/. ${GA}.00 Nuevos Soles
    ¿Es conforme?`,{
        dangerMode: true,
        buttons: true,
    })
    .then((value) => {
        swal(`¡Gracias! Continuemos`);
      });
    }