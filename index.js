async function obtenerPokemon(nombre) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);

    if (!response.ok) {
      throw new Error("Error en la petición");
    }

    const data = await response.json();

    const tipos = data.types.map(t => t.type.name);


    return {
      nombre: data.name,
      imagen: data.sprites.front_default,
      tipos: tipos,
      peso: data.weight,
      altura: data.height
    };

  } catch (error) {
    console.error(error);
  }
}

function mostrarPokemon(datos) {

  const contenedor = document.getElementById("pokemon");

  if (!datos) {
    contenedor.textContent = "No se encontró el Pokémon";
    return;
  }

  contenedor.innerHTML = `
    <h2>${datos.nombre}</h2>
    <img src="${datos.imagen}" alt="${datos.nombre}">
    <p>Tipos: ${datos.tipos.join(", ")}</p>
    <p>Peso: ${datos.peso} kg</p>
    <p>Altura: ${datos.altura} m</p>
  `;
}

const form = document.getElementById("pokemonForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); 

  const nombre = document.getElementById("nombrePokemon").value;

    mostrarLoading();

  const datos = await obtenerPokemon(nombre);

    ocultarLoading();

  mostrarPokemon(datos);
});


function mostrarLoading() {
  document.getElementById("loading").style.display = "block";
}

function ocultarLoading() {
  document.getElementById("loading").style.display = "none";
}