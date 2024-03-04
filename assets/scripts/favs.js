import { imprimirTarjetas, cargarFavoritos } from "./functions.js";

let movies = [];
let main;

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

        imprimirTarjetas(movies, main);
        cargarFavoritos(); 
    })
    .catch(error => {
        console.error("Loading the movies:", error);
    });
