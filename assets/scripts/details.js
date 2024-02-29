const $main = document.getElementById(`main`)
const urlParams = new URLSearchParams( location.search )
const id = urlParams.get( `id` ) 

const peliculasFind = peliculas.find( pelicula => pelicula.id == id )

$main.innerHTML = `
<div class="flex flex-col justify-center items-center">
    <article class="flex flex-row justify-center w-full items-start p-24 pb-10">
        <img class="rounded-md rounded mr-8" src="${peliculasFind.image}" alt="imagen de ${peliculasFind.title}"/>
        <div class="flex flex-col justify-start">
            <h2 class="text-white text-xl mb-4 p-5">${peliculasFind.title}</h2>
            <h2 class="text-white text-xl mb-4 p-5">${peliculasFind.tagline}</h2>
            <h2 class="text-white text-lg p-5">${peliculasFind.overview}</h2>
        </div>
    </article>

    <!-- Contenedor para las tablas -->
    <div class="flex flex-row gap-20 pt-0 pb-10">
        <table class="border border-solid text-white w-80 h-15 bg-indigo-900 bg-opacity-50">
            <tbody>
                <tr>
                    <td class="p-2 text-white border border-solid text-lg">Original Language</td>
                    <td class="p-2 text-white border border-solid text-lg">${peliculasFind.original_language}</td>
                </tr>
                <tr>
                    <td class="p-2 text-white border border-solid text-lg">Release Date</td>
                    <td class="p-2 text-white border border-solid text-lg">${peliculasFind.release_date}</td>
                </tr>
                <tr>
                    <td class="p-2 text-white border border-solid text-lg">Runtime</td>
                    <td class="p-2 text-white border border-solid text-lg">${peliculasFind.runtime}</td>
                </tr>
                <tr>
                    <td class="p-2 text-white border border-solid text-lg">Status</td>
                    <td class="p-2 text-white border border-solid text-lg">${peliculasFind.status}</td>
                </tr>
            </tbody>
        </table>

        <table class="border border-solid text-white w-80 h-15 bg-indigo-900 bg-opacity-50">
            <tbody>
                <tr>
                    <td class="p-2 text-white border border-solid text-lg">Vote Average</td>
                    <td class="p-2 text-white border border-solid text-lg">${peliculasFind.vote_average}</td>
                </tr>
                <tr>
                    <td class="p-2 text-white border border-solid text-lg">Budget</td>
                    <td class="p-2 text-white border border-solid text-lg">${peliculasFind.budget}</td>
                </tr>
                <tr>
                    <td class="p-2 text-white border border-solid text-lg">Revenue</td>
                    <td class="p-2 text-white border border-solid text-lg">${peliculasFind.revenue}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
        `

    