
function obtenerGenerosUnicos(peliculas) {
    const generos = new Set();
    peliculas.forEach(pelicula => {
        pelicula.genres.forEach(genero => {
            generos.add(genero);
        });
    });
    return Array.from(generos);
}

function llenarSelectGenero(peliculas) {
    const generos = obtenerGenerosUnicos(peliculas);
    const selectGenero = document.getElementById("selectGenero");

    selectGenero.innerHTML = "";
    
    const optionDefault = document.createElement("option");
    optionDefault.value = "";
    optionDefault.textContent = "All Genres";
    selectGenero.appendChild(optionDefault);

    generos.forEach(genero => {
        const option = document.createElement("option");
        option.value = genero;
        option.textContent = genero;
        selectGenero.appendChild(option);
    });
}

const main = document.getElementById("contenedor-main");
const $input = document.getElementById("inputBusqueda");
const selectGenero = document.getElementById("selectGenero");

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

function imprimirTarjetas(listaPeliculas) {
    let template = "";
    if (listaPeliculas.length === 0) {
        template = "<h2 class='font-semibold text-white text-2xl'>No movies found.</h2>";
    } else {
        for (const pelicula of listaPeliculas) {
            template += crearTarjeta(pelicula);
        }
    }
    main.innerHTML = template;
}

function filtrarPeliculasPorNombre(listaPeliculas, nombre) {
    return listaPeliculas.filter(pelicula =>
        pelicula.title.toLowerCase().includes(nombre.toLowerCase())
    );
}

function filtrarPeliculasPorGenero(listaPeliculas, genero) {
    return listaPeliculas.filter(pelicula =>
        pelicula.genres.some(g => g.toLowerCase() === genero.toLowerCase())
    );
}

function actualizarFiltro() {
    const textoBusqueda = $input.value;
    const generoSeleccionado = selectGenero.value;
    let peliculasFiltradas = peliculas;

    if (textoBusqueda) {
        peliculasFiltradas = filtrarPeliculasPorNombre(peliculasFiltradas, textoBusqueda);
    }

    if (generoSeleccionado) {
        peliculasFiltradas = filtrarPeliculasPorGenero(peliculasFiltradas, generoSeleccionado);
    }

    imprimirTarjetas(peliculasFiltradas);
}

$input.addEventListener("input", actualizarFiltro);
selectGenero.addEventListener("change", actualizarFiltro);

llenarSelectGenero(peliculas);
imprimirTarjetas(peliculas);