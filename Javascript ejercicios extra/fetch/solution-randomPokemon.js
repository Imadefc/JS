/*
La API de Pokemon tiene acceso a los datos de todos los pokemon existentes!

Crea una funcion que devuelva un pokemon aleatorio de la pokeapi.
Este puede ser un numero entre 1 y 1025 (inclusive).

API: ("https://pokeapi.co/api/v2/pokemon/{id}/")
*/

// async/await
async function getRandomPokemon() {
  let randomId = Math.floor(Math.random() * 1025);
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  const data = await res.json();
  return data.name;
}

getRandomPokemon().then((data) => console.log(data));

// Promise
function getRandomPokemon2() {
  let randomId = Math.floor(Math.random() * 1025);
  return fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
    .then((res) => res.json())
    .then((data) => data.name);
}

getRandomPokemon2().then((data) => console.log(data));

