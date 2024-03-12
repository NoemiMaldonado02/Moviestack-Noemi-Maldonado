let movies = [];
let $main;
let urlParams;
let id;
let moviesFind;
let imagenUrlBase;
let imagenUrlCompleta;

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
        $main = document.getElementById(`main`);
        urlParams = new URLSearchParams(location.search);
        id = urlParams.get(`id`);
        moviesFind = movies.find(movie => movie.id == id);
        imagenUrlBase = "https://moviestack.onrender.com/static/";
        imagenUrlCompleta = imagenUrlBase + moviesFind.image;

        $main.innerHTML = `
            <div class="flex flex-col justify-center items-center">
                <article class="flex flex-row justify-center w-full items-start p-24 pb-10">
                    <img class="rounded-md rounded mr-8" src="${imagenUrlCompleta}" alt="imagen de ${moviesFind.title}"/>
                    <div class="flex flex-col justify-start">
                        <h2 class="text-white text-xl mb-4 p-5">${moviesFind.title}</h2>
                        <h2 class="text-white text-xl mb-4 p-5">${moviesFind.tagline}</h2>
                        <h2 class="text-white text-lg p-5">${moviesFind.overview}</h2>
                    </div>
                </article>

                <!-- Contenedor para las tablas -->
                <div class="flex flex-row gap-20 pt-0 pb-10">
                    <table class="border border-solid text-white w-80 h-15 bg-indigo-900 bg-opacity-50">
                        <tbody>
                            <tr>
                                <td class="p-2 text-white border border-solid text-lg">Original Language</td>
                                <td class="p-2 text-white border border-solid text-lg">${moviesFind.original_language}</td>
                            </tr>
                            <tr>
                                <td class="p-2 text-white border border-solid text-lg">Release Date</td>
                                <td class="p-2 text-white border border-solid text-lg">${moviesFind.release_date}</td>
                            </tr>
                            <tr>
                                <td class="p-2 text-white border border-solid text-lg">Runtime</td>
                                <td class="p-2 text-white border border-solid text-lg">${moviesFind.runtime}</td>
                            </tr>
                            <tr>
                                <td class="p-2 text-white border border-solid text-lg">Status</td>
                                <td class="p-2 text-white border border-solid text-lg">${moviesFind.status}</td>
                            </tr>
                        </tbody>
                    </table>

                    <table class="border border-solid text-white w-80 h-15 bg-indigo-900 bg-opacity-50">
                        <tbody>
                            <tr>
                                <td class="p-2 text-white border border-solid text-lg">Vote Average</td>
                                <td class="p-2 text-white border border-solid text-lg">${moviesFind.vote_average}</td>
                            </tr>
                            <tr>
                                <td class="p-2 text-white border border-solid text-lg">Budget</td>
                                <td class="p-2 text-white border border-solid text-lg">${moviesFind.budget}</td>
                            </tr>
                            <tr>
                                <td class="p-2 text-white border border-solid text-lg">Revenue</td>
                                <td class="p-2 text-white border border-solid text-lg">${moviesFind.revenue}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    })
    .catch(error => {
        console.error("There was an error loading the movies:", error);
        const main = document.getElementById("contenedor-main");
        main.innerHTML = "<h2 class='font-semibold text-white text-2xl'pb-24>Loading the movies... </h2>";
    });