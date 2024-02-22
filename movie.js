
const main = document.getElementById("contenedor-main");
function crearTarjeta( peliculas ) {
  return `
    <article class=" text-center flex flex-col gap-3 w-10/12 md:w-5/12 xl:w-3/12 rounded bg-indigo-700
    rounded-full hover:bg-indigo-500 transition duration-300 ease-in-out rounded-3xl p-5 ">
        <img class="w-full" src="${peliculas.image}" alt="Imagen de ${peliculas.title}">
        <h2>${peliculas.title}</h2>
        <h3>${peliculas.genres}</h3>
        <p>${peliculas.overview}</p>
    </article>
    `;
}

function imprimirTarjetas( listaPeliculas, elemento ){
    let template = ""
    for (const peliculaIterado of listaPeliculas) {
        template += crearTarjeta( peliculaIterado )
    }
    elemento.innerHTML = template
}
imprimirTarjetas( peliculas, main )