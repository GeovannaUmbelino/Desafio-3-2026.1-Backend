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

let currentPokemon = 1;

function updatePokedex() {
  let pokemonUrl = "https://pokeapi.co/api/v2/pokemon/" + currentPokemon;


  fetch(pokemonUrl)
    .then(response => response.json())
    .then(function(pokemonData) {
      changeText("name", pokemonData.name.toUpperCase());

      const imageUrl = pokemonData.sprites.front_default || "../assets/missingno.png";
      changeImage("img_sprite_front_default", imageUrl);
    })

    .catch(function(error) {
      console.log("Error fetching Pokémon:", error);
    });
}

// Função para o botão "anterior"
function previousPokemon() {
  currentPokemon--;
  if (currentPokemon < 1) {
    currentPokemon = 1025; 
  }
  updatePokedex();
}

// Função para o botão "próximo"
function nextPokemon() {
  currentPokemon++;
  if (currentPokemon > 1025) {
    currentPokemon = 1; 
  }
  updatePokedex();
}
updatePokedex();