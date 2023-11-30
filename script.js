/*const apiKey = "5cfd58ff1d1e4ebc89e499abece4c5d7";
const gameName = "Apex Legends";

const url = `https://api.rawg.io/api/games?key=${apiKey}&search=${gameName}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const gameList = document.getElementById('gameList');
    data.results.forEach(game => {
      const listItem = document.createElement('li');
      const purchaseLink = document.createElement('a');
      purchaseLink.textContent = `Buy ${game.name}`;
      purchaseLink.href = game.stores[0].url; // Assuming the first store is the primary link
      listItem.appendChild(purchaseLink);
      gameList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });*/

document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "711ef540047c48b89b3e6cec301bb5a6";

  const fetchGames = async (searchTerm) => {
    const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&search=${searchTerm}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data && data.results) {
        displayGames(data.results);
      } else {
        console.error("Error fetching data from RAWG API");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const displayGames = (games) => {
    const gameListContainer = document.getElementById("gameList");
    gameListContainer.innerHTML = "";

    games.forEach((game) => {
      console.log(game);
      const listItem = document.createElement("li");
      listItem.innerHTML = `
          <h3>${game.name}</h3>
          <img src="${game.background_image}" alt="${game.name} Image" width="100">
          <p><strong>Released Date:</strong> ${game.released || "Not specified"}</p>
          <p><strong>Rating:</strong> ${game.rating || "Not rated"}</p>
          <p><strong>User Ratings:</strong> ${game.ratings_count || "No user ratings available"}</p>
          <p><strong>User Reviews:</strong> ${game.reviews_count || "No user reviews available"}</p>
          <p><strong>Genres:</strong> ${game.genres.map(genre => genre.name).join(", ") || "Not specified"}</p>
          <p><strong>Stores:</strong> ${game.stores.map(store => store.store.name).join(", ") || "Not specified"}</p>
          <p><strong>Platforms:</strong> ${game.platforms.map(platform => platform.platform.name)}</p>
          <button onclick="redirectToGame('${game.slug}')">View Details</button>
      `;

      gameListContainer.appendChild(listItem);
    });
  };

  window.searchGames = () => {
    const searchTerm = document.getElementById("gameSearch").value;
    fetchGames(searchTerm);
  };

  window.redirectToGame = (slug) => {
    window.location.href = `https://rawg.io/games/${slug}`;
  };
});




/*document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "711ef540047c48b89b3e6cec301bb5a6"

  const fetchGames = async (searchTerm) => {
    const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&search=${searchTerm}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data && data.results) {
        displayGames(data.results);
      } else {
        console.error("Error fetching data from RAWG API");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const displayGames = (games) => {
    const gameListContainer = document.getElementById("gameList");
    gameListContainer.innerHTML = "";

    games.forEach((game) => {
      console.log(game);
      const listItem = document.createElement("li");
      listItem.innerHTML = `
          <h3>${game.name}</h3>
          <img src="${game.background_image}" alt="${game.name} Image" width="100">
          <p><strong>Released Date:</strong> ${game.released || "Not specified"}</p>
          <p><strong>Rating:</strong> ${game.rating || "Not rated"}</p>
          <p><strong>Genres:</strong> ${game.genres.map(genre => genre.name).join(", ") || "Not specified"}</p>
          <p><strong>Stores:</strong> ${game.stores.map(store => store.store.name).join(", ") || "Not specified"}</p>
      `;

      gameListContainer.appendChild(listItem);
    });
  };

  window.searchGames = () => {
    const searchTerm = document.getElementById("gameSearch").value;
    fetchGames(searchTerm);
  };
});*/







