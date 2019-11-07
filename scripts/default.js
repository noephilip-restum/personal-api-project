const def = (function() {
  var setmodal = "";
  var setcards = "";
  fetch("https://api.pokemontcg.io/v1/cards?subtype=Legend")
    .then(result => result.json())
    .then(details => {
      details.cards.map(r => {
        if (typeof r.attacks === "undefined") {
          return r.attacks;
        }
        setcards += `<div class="card-list"><button class="modal-trigger" onclick="document.getElementById('${r.id}').style.display='block'"><img class="poke-card" src=${r.imageUrlHiRes} alt=""/></button></div>`;
        setmodal += `
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
                <p>RETREAT COST</p>
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
      setcards += setmodal;
      cardResult.innerHTML = setcards;
    });
})();
