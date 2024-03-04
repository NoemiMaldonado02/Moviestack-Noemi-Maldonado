const imagenUrlBase = "https://moviestack.onrender.com/static/";

export function crearTarjeta(movie) {
    const imagenUrlCompleta = imagenUrlBase + movie.image;
    return `
    <article id="${movie.id}" class="text-center p-10 relative flex flex-col gap-3 w-10/12 md:w-5/12 xl:w-3/12 rounded bg-indigo-700 rounded-full hover:bg-indigo-500 transition duration-300 ease-in-out rounded-3xl p-5">
    <button data-name="fav-button" data-id="${movie.id}" class="absolute top-6 right-6 bg-violet-700 hover:bg-indigo-500 text-xl font-semibold bg-opacity-70 rounded-full " type="button" style="transform: translate(50%, -50%);">🤍</button>
    <img class="w-full" src="${imagenUrlCompleta}" alt="Imagen de ${movie.title}">
    <h2>${movie.title}</h2>
    <h3>${movie.genres.join(", ")}</h3>
    <p>${movie.overview}</p> 
    <a class="px-6 py-3 bg-violet-500 font-bold rounded-full hover:bg-violet-800 transition duration-300 ease-in-out" href="./details.html?id=${movie.id}&nombre=${movie.title}">DETAILS</a>
</article>
    `;
}

export function imprimirTarjetas(listaMovies, main) {
    let template = "";
    if (listaMovies.length === 0) {
        template = "<h2 class='font-semibold text-white text-2xl'>No se encontraron películas.</h2>";
    } else {
        for (const movie of listaMovies) {
            template += crearTarjeta(movie);
        }
    }
    main.innerHTML = template;
}

export function filtrarMoviesPorNombre(listaMovies, nombre) {
    return listaMovies.filter(movie =>
        movie.title.toLowerCase().includes(nombre.toLowerCase())
    );
}

export function filtrarMoviesPorGenero(listaMovies, genero) {
    return listaMovies.filter(movie =>
        movie.genres.some(g => g.toLowerCase() === genero.toLowerCase())
    );
}

export function obtenerGenerosUnicos(listaMovies) {
    const generos = new Set();
    listaMovies.forEach(movie => {
        movie.genres.forEach(genero => {
            generos.add(genero.toLowerCase());
        });
    });
    return Array.from(generos);
}

export function actualizarFiltro(movies, main, $input, selectGenero) {
    const textoBusqueda = $input.value;
    const generoSeleccionado = selectGenero.value;
    let moviesFiltradas = movies;

    if (textoBusqueda) {
        moviesFiltradas = filtrarMoviesPorNombre(moviesFiltradas, textoBusqueda);
    }

    if (generoSeleccionado) {
        moviesFiltradas = filtrarMoviesPorGenero(moviesFiltradas, generoSeleccionado);
    }

    imprimirTarjetas(moviesFiltradas, main);
}

