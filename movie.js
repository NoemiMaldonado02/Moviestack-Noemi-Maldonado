
const main = document.getElementById("contenedor-main");
const $input = document.getElementById("inputBusqueda");

function crearTarjeta(pelicula) {
  return `
    <article class="text-center flex flex-col gap-3 w-10/12 md:w-5/12 xl:w-3/12 rounded bg-indigo-700 rounded-full hover:bg-indigo-500 transition duration-300 ease-in-out rounded-3xl p-5">
        <img class="w-full" src="${pelicula.image}" alt="Imagen de ${pelicula.title}">
        <h2>${pelicula.title}</h2>
        <h3>${pelicula.genres}</h3>
        <p>${pelicula.overview}</p> 
        <a class="px-6 py-3 bg-violet-500 font-bold rounded-full hover:bg-violet-800 transition duration-300 ease-in-out" href="./details.html?id=${pelicula.id}&nombre=${pelicula.title}">DETAILS</a>
    </article>
    `;
}
imprimirTarjetas( peliculas, main )
function imprimirTarjetas(listaPeliculas, elemento) {
    let template = "";
    if (listaPeliculas.length === 0) {
        template = "<h2 class='font-semibold text-white text-2xl'>No movies found.</h2>";
    } else {
        for (const pelicula of listaPeliculas) {
            template += crearTarjeta(pelicula);
        }
    }
    elemento.innerHTML = template;
}

function filtrarPeliculasPorNombre(listaPeliculas, nombre) {
    return listaPeliculas.filter(pelicula =>
        pelicula.title.toLowerCase().includes(nombre.toLowerCase())
    );
}

function filtrarPeliculasPorGenero(listaPeliculas, genero) {
    return listaPeliculas.filter(pelicula =>
        pelicula.genres.toLowerCase().includes(genero.toLowerCase())
    );
}

function verifiqueChecked() {
    const checkboxes = document.querySelectorAll('[type="checkbox"]');
    const values = [];
    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            values.push(checkbox.value);
        }
    }
    return values;
}

$input.addEventListener("input", () => {
    const peliculasFiltradasPorNombre = filtrarPeliculasPorNombre(
        peliculas,
        $input.value
    );
    const valuesChecked = verifiqueChecked();
    let peliculasFiltradas = peliculasFiltradasPorNombre;
    if (valuesChecked.length > 0) {
        peliculasFiltradas = peliculasFiltradas.filter(pelicula =>
            valuesChecked.includes(pelicula.genres.toLowerCase())
        );
    }
    imprimirTarjetas(peliculasFiltradas, main);
});
