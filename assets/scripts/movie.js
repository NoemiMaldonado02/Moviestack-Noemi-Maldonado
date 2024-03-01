import { imprimirTarjetas, obtenerGenerosUnicos, actualizarFiltro } from "./functions.js";
let movies = [];
let main;
let $input;
let selectGenero;

const url = "https://moviestack.onrender.com/api/movies";
const init = {
    method: "GET",
    headers: {
        "x-api-key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
};
fetch(url, init)
    .then(response => response.json())
    .then(data => {
        movies = data.movies;
        main = document.getElementById("contenedor-main");
        $input = document.getElementById("inputBusqueda");
        selectGenero = document.getElementById("selectGenero");

        $input.addEventListener("input", () => actualizarFiltro(movies, main, $input, selectGenero));
        selectGenero.addEventListener("change", () => actualizarFiltro(movies, main, $input, selectGenero));

        const generosUnicos = obtenerGenerosUnicos(movies);
        for (const genero of generosUnicos) {
            const option = document.createElement("option");
            option.value = genero;
            option.textContent = genero;
            selectGenero.appendChild(option);
        }

        imprimirTarjetas(movies, main);
    })
    .catch(error => {
        console.error("There was an error loading the movies:", error);
    });