/**
 * Ahora realizaremos una petición a la PokeAPI, queremos mostrar al entrar en la página la imagen de un Pokemon, 
 * la magia estará en que cada vez que recargues la página, será un nuevo Pokemon dentro de la primera generación de Pokemon, 
 * es decir, del 1 al 151.
 * 
 * Los Pokemon no solo tienen una imagen, si no que tendrán muchas, hay que hallar la manera de encontrar la que más os guste.
 *  API: https://pokeapi.co/api/v2/pokemon/1
 * 
 * Tened en cuenta que esta URL se refiere al pokemon número 1, que es bulbasaur, debemos hallar la manera de con una url similar ir consiguiendo
 * pokemons aleatorios dentro de unos límites
 */
const pokemonId = Math.floor(Math.random() * 151);
const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

// Luego puedes hacer la petición a la API con la URL generada
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Aquí puedes obtener la imagen del Pokémon y mostrarla en la página
    const pokemonImage = data.sprites.other.dream_world.front_default;
    document.getElementsByClassName('random-image')[0].src = pokemonImage;
    // ...
  });
  