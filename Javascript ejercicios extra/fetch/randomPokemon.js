/*
La API de Pokemon tiene acceso a los datos de todos los pokemon existentes!

Crea una funcion que devuelva el nombe de un pokemon aleatorio de la pokeapi.
Este puede ser un numero entre 1 y 1025 (inclusive).

API: https://pokeapi.co/api/v2/pokemon/{id}/
*/

async function getRandomPokemon() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/"+Math.floor(Math.random()*1025)+"/");
  const resJson = await res.json();

  return resJson.forms[0].name;
}

getRandomPokemon().then((data) => console.log(data));
