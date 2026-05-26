//função de mudar imagem pelo id e pela url
function changeImage(id, url) {
  document.getElementById(id).src = url;
}
//função de mudar texto pelo id e pelo texto
function changeText(id, text) {
  document.getElementById(id).innerText = text;
}

// Daqui para baixo voce ira escrever
// o código para resolver o desafio
let pokemonList = [];
let currentIndex = 0;

async function loadPokemonList() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1292");
  const data = await response.json();
  pokemonList = data.results; 
  
  updateUI(); 
}

async function fetchPokemon(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();
  return data;
}

async function updateUI(id) {
  if (pokemonList.length === 0) return;
  
  const currentPokemonName = pokemonList[currentIndex].name;
  const pokemon = await fetchPokemon(currentPokemonName);
  
  changeText("name", pokemon.name.toUpperCase());
  changeImage("img_sprite_front_default", pokemon.sprites.front_default);  
}

function previousPokemon() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = pokemonList.length - 1;
  }
  updateUI();
}

function nextPokemon() {
  currentIndex++;
  if (currentIndex >= pokemonList.length) {
    currentIndex = 0;
  }

  updateUI();
}
loadPokemonList();