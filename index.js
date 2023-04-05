const cardContainer = document.getElementById('card-container')


// Set RapidAPI headers
const options = {
    method: 'GET',
    headers: {
      "x-rapidapi-key": "96c3540fd4mshd4f7cddde3a865bp183496jsnf78eb2795009",
      "x-rapidapi-host": "free-nba.p.rapidapi.com",
    },
  };
  
  // Function to search for stats by ID
  function searchStats(query) {
    const endpoint = `https://free-nba.p.rapidapi.com/stats/${query}`;
    fetch(endpoint, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  // Function to search for games by ID
  function searchGames(query) {
    const endpoint = `https://free-nba.p.rapidapi.com/games/${query}`;
    fetch(endpoint, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        data.data.forEach(game => {
          const homeScore = document.createElement('span')
          homeScore.textContent = game.home_team_score
          cardContainer.append(homeScore)
          
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  // Function to search for players by ID
  function searchPlayers(query) {
    const endpoint = `https://free-nba.p.rapidapi.com/players/${query}`;
    fetch(endpoint, options)
      .then((response) => response.json())
      .then((data) => {
       cardContainer.innerHTML=`
       <div class="player-card">
        <h5>Name: <span >${data.first_name} ${data.last_name}</span></h5>
        <h5>Height: <span >${data.height_feet}</span> feet</h5>
        <h5>Weight: <span > ${data.weight_pounds} </span> lbs</h5>
        <h5>Position: <span >${data.position} </span></h5>
        <h5>Team: <span >${data.team.city}(Thunder)</span></h5>
        <h5>Conference: <span>${data.team.conference}</span></h5>

      </div>`
        console.log(data)
      
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
  
  // Function to search for teams by ID
  function searchTeams(query) {
    const endpoint = `https://free-nba.p.rapidapi.com/teams/${query}`;
    fetch(endpoint, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  // Add event listener to search form
  const searchForm = document.getElementById("search-form");
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission behavior
  
    // Get search query value
    const query = document.getElementById("search-query").value;
  
    // Determine which radio button is selected
    const searchType = document.querySelector(
      'input[name="search-type"]:checked'
    ).value;
  
    // Call appropriate function based on selected radio button
    switch (searchType) {
      case "stats":
        searchStats(query);
        break;
      case "games":
        searchGames(query);
        break;
      case "players":
        searchPlayers(query);
        break;
      case "teams":
        searchTeams(query);
        break;
      default:
        break;
    }
  });

//   function updateDisplay(data) {
//     const display = document.getElementById("data-display");
//     display.innerHTML = ""; // clear previous data
    
//     // Check if data is an array or object
//     if (Array.isArray(data)) {
//       // If array, loop through and create list items
//       const list = document.createElement("ul");
//       data.forEach((item) => {
//         const li = document.createElement("li");
//         li.textContent = JSON.stringify(item);
//         list.appendChild(li);
//       });
//       display.appendChild(list);
//     } else if (typeof data === "object") {
//       // If object, create a table
//       const table = document.createElement("table");
//       const headers = Object.keys(data);
//       const headerRow = document.createElement("tr");
//       headers.forEach((header) => {
//         const th = document.createElement("th");
//         th.textContent = header;
//         headerRow.appendChild(th);
//       });
//       table.appendChild(headerRow);
      
//       const dataRow = document.createElement("tr");
//       headers.forEach((header) => {
//         const td = document.createElement("td");
//         td.textContent = JSON.stringify(data[header]);
//         dataRow.appendChild(td);
//       });
//       table.appendChild(dataRow);
//       display.appendChild(table);
//     } else {
//       // If data is a string or number, just display it
//       const p = document.createElement("p");
//       p.textContent = data;
//       display.appendChild(p);
//     }
//   }
  
// });


