async function obtenerPokemon(nombre) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    const pais = data[0];
    console.log(` 
    Nombre del Pais: ${pais.name.common} 
    Capital: ${pais.capital}
    Region: ${pais.region}
    Capital: ${pais.population}
    
    `);
    return data;

  } catch (error) {
    console.error('Error al consumir la API:', error);
  }
}

obtenerDatos("Argentina");