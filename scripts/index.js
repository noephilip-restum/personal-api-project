const searchButton = document.querySelector(".searchButton");
const searchInput = document.querySelector(".searchInput");
const cardResult = document.querySelector(".cards");
const pokeDetails = document.querySelector(".pokeattack");
const header = document.querySelector(".header-content");
const subsets = document.querySelector(".subsets");
const sets = document.querySelector(".sets");
const home = document.querySelector(".home");
const subsetsResult = document.querySelector(".subsets-sub");
const setsResult = document.querySelector(".sets-sub");
const mainCard = document.querySelector(".main-cards");
const mainSubset = document.querySelector(".main-subsets");
const mainSet = document.querySelector(".main-sets");

//DEFAULT CONFIG
mainSubset.style.display = "none";
mainSet.style.display = "none";

//FUNCTIONS
function setPokemon(code) {
  mainSubset.style.display = "none";
  mainCard.style.display = "";
  pokemon.setPokemonResult(code);
}

function subtypePokemon(code) {
  mainSet.style.display = "none";
  mainCard.style.display = "";
  pokemon.subtypePokemonResult(code);
}

//EVENT LISTENERS
home.addEventListener("click", function(event) {
  mainSubset.style.display = "none";
  mainSet.style.display = "none";
  header.style.display = "";
  mainCard.style.display = "";
  header.setAttribute("style", "height: 650px");
  header.style.backgroundColor = "";
  header.style.height = "650px";
  pokemon.subtypePokemonResult("Legend");
});

subsets.addEventListener("click", function(event) {
  getData.getSetUrl();
  mainSubset.style.display = "";
  header.style.display = "none";
  mainCard.style.display = "none";
  mainSet.style.display = "none";
});

sets.addEventListener("click", function(event) {
  getData.getSubtypesUrl();
  mainSet.style.display = "";
  mainSubset.style.display = "none";
  header.style.display = "none";
  mainCard.style.display = "none";
});

searchInput.addEventListener("input", function(event) {
  var pokemon = searchInput.value.toLowerCase().trim();
  var url = "https://api.pokemontcg.io/v1/cards?name=" + pokemon;
  getData.searchPokemon(url);

  header.setAttribute("style", "height: 100px");
  header.style.backgroundColor = "black";
  header.style.height = "100px";
  searchInput.style.width = "500px";
});
