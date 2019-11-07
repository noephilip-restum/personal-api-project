const getData = (function() {
  function searchPokemon(url) {
    fetch(url)
      .then(result => result.json())
      .then(cardDetails => {
        searchResult(cardDetails.cards);
      });
  }

  function searchResult(result) {
    let modal = "";
    let cards = "";
    result.map(r => {
      if (typeof r.attacks === "undefined") {
        return r.attacks;
      }
      cards += `<div class="card-list"><button class="modal-trigger" onclick="document.getElementById('${r.id}').style.display='block'"><img class="poke-card" src=${r.imageUrlHiRes} alt=""/></button></div>`;
      modal += `
      <div id=${r.id} class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <div class="modal-header">
          <p class="modal-title">Card Details</p>
          <span class="close" onclick="document.getElementById('${
            r.id
          }').style.display='none'">&times;</span>
        </div>
        <div class="main-modal">
          <div class="poke-avatar">
            <img
              class="poke-card"
              src=${r.imageUrlHiRes}
              alt=""
            />
          </div>
          <div class="poke-details">
            <p class="poke-title">${r.name} Pokémon - <span class="gray">${
        r.subtype
      }</span></p>
            <hr />
            ${r.attacks
              .map(
                poke =>
                  `<p class="poke-title">${poke.name} | <span class="gray">${poke.damage}</span></p>
                <p class="attack-text gray">${poke.text}</p>`
              )
              .join("")}
            <div class="stats">
              <div class="stats-details">
                <p>WEAKNESS</p>
                <span class="gray">N/A</span>
              </div>
              <div class="stats-details">
                <p>RESISTANCES</p>
                <span class="gray">N/A</span>
              </div>
              <div class="stats-details">
                <p>WEAKNESS</p>
                <span class="gray">N/A</span>
              </div>
            </div class="stats-details">
            <div class="stats">
            <div class="stats-details">
            <p>ARTIST</p>
            <span class="gray">${r.artist}</span>
          </div>
          <div class="stats-details">
            <p>RARITY</p>
            <span class="gray">${r.rarity}</span>
          </div>
          <div class="stats-details">
            <p>SET</p>
            <span class="gray">${r.set}</span>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      `;
    });
    cards += modal;
    cardResult.innerHTML = cards;
  }

  function getSetUrl() {
    var set_url = "https://api.pokemontcg.io/v1/sets";
    fetch(set_url)
      .then(result => result.json())
      .then(setDetails => {
        setResult(setDetails);
      });
  }

  function setResult(result) {
    var tempSet = "";
    result.sets.reverse();
    result.sets.map(r => {
      tempSet += `
      <div class="subsets-list" onclick="setPokemon('${r.code}')">
      <div class="subsets-logo">
        <img
          class="logo-style"
          src="${r.logoUrl}"
          alt=""
        />
      </div>
      <div class="subsets-style">
        <div class="subsets-symbol">
          <img
            class="symbol-style"
            src="${r.symbolUrl}"
            alt=""
          />
        </div>
        <div class="subsets-text">
          <p class="poke-title">
            ${r.name}<br />
            <p class="subtext">Released ${r.releaseDate}</p>
          </p>
        </div>
      </div>
    </div>
      `;
    });
    subsetsResult.innerHTML = tempSet;
  }

  function getSubtypesUrl() {
    var set_url = "https://api.pokemontcg.io/v1/subtypes";
    fetch(set_url)
      .then(result => result.json())
      .then(setDetails => {
        subtypeResult(setDetails);
      });
  }

  function subtypeResult(result) {
    var tempSet = "";
    result.subtypes.map(r => {
      tempSet += `
      <div class="sets-list" onclick='subtypePokemon("${r}")'>
      <p class="set-title">${r}</p>
      </div>
      `;
    });
    setsResult.innerHTML = tempSet;
  }

  return {
    searchPokemon,
    searchResult,
    getSetUrl,
    setResult,
    getSubtypesUrl,
    subtypeResult
  };
})();
