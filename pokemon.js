document.getElementById("generate-btn").addEventListener("click", fetchRandomPokemon);

async function fetchRandomPokemon() {
    const randomId = Math.floor(Math.random() * 1010) + 1; // Random Pokémon ID
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

    try {
        const response = await fetch(apiUrl);
        const pokemon = await response.json();
        displayPokemonCard(pokemon);
    } catch (error) {
        console.error("Error fetching Pokémon data:", error);
    }
}

function displayPokemonCard(pokemon) {
    const card = document.getElementById("pokemon-card");
    card.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <h3>${pokemon.name.toUpperCase()}</h3>
        <div class="types">
            ${pokemon.types.map(type => `<span>${type.type.name}</span>`).join("")}
        </div>r5
        <p><strong>Height:</strong> ${pokemon.height}</p>
        <p><strong>Weight:</strong> ${pokemon.weight}</p>
        <div class="stats">
            ${pokemon.stats.map(stat => `
                <p><strong>${stat.stat.name.toUpperCase()}:</strong> ${stat.base_stat}</p>
            `).join("")}
        </div>
    `;
}
