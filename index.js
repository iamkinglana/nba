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
      .then(({data}) => {
        data.forEach(playerStats => {
          const statsContainer = document.createElement('div') 
          statsContainer.className = 'playerstatscontainer'
          statsContainer.innerHTML=`
          
      <div class="playerstatscard">
      <h5>Name: <span >${playerStats.player.first_name} ${playerStats.player.last_name}</span></h5>
      <h5>Height: <span >${playerStats.player.height_feet}</span> feet</h5>
      <h5>Weight: <span >${playerStats.player.weight_pounds}</span> lbs</h5>
      <h5>Position: <span >${playerStats.player.position}</span></h5>
      <h5>Team: <span >${playerStats.team.name}</span></h5>
      <h5>Conference: <span >${playerStats.team.conference}</span></h5>

    </div>
    <br>

  
    

  <div class="gamestats">
  
  <table>
    <h5>Date: <span >${playerStats.game.date}</span></h5>
      <tr><h5>Home Team Score <span >${playerStats.game.home_team_score}</span></h5></tr>
      <tr> <h5>Away team score: <span >${playerStats.game.visitor_team_score}</span></h5></tr>
      <tr><h5>home team id: <span >${playerStats.game.home_team_id}</span></h5></tr>
      <h5>away team id <span >${playerStats.game.visitor_team_id}</span></h5>
      <h5>Status <span >${playerStats.game.status}</span></h5>
    </table>
  </div>

  <div class="playerstats">
  <figure class="card">
        
    
    <table>
    <h5>AST: <span >${playerStats.ast}</span></h5>
      <h5>BLK: <span >${playerStats.blk}</span></h5>
      <h5>DREB: <span >4</span>${playerStats.dreb}</h5>
      <h5>FG3 PCT: <span >${playerStats.fg3_pct}</span></h5>
      <h5>FG PCT: <span >${playerStats.fg_pct}</span></h5>
      <h5>FTM: <span >${playerStats.ftm}</span></h5>
      <h5> PTS: <span >${playerStats.pts}</span></h5> 
      <h5> REB: <span >${playerStats.reb}</span></h5> 
      <h5> STL: <span >${playerStats.stl}</span></h5>
    </table>
    </figure>
  </div>
  <br>     
          `

          cardContainer.append(statsContainer)
        console.log(playerStats); 
        })
//         console.log(data);
//         cardContainer.innerHTML=`
        
//         <div class="stats-card">

//         <table style="width:100%">
//   <tr>
//     <th style="width:70%">NAME</th>
    
     
//     <th>AST</th>
//     <th>BLK</th>
//     <th>DREB</th>
//     <th>FG3A</th>
//     <th>FTPCT</th>

//   </tr>
//   <tr>
//   <td><span >${data.team}</span></td>
  
//     <td><span >${data.ast}</span></td>
//     <td><span >${data.blk}</span></td>
//     <td><span >${data.dreb}</span></td>
//     <td><span >${data.fg3a}</span></td>
//     <td><span >${data.ftpct}</span></td>
//   </tr>
  
// </table>`

// `
//         <div class="statsplayer-card">
        
//         <h5>Height: <span >${data.height_feet}</span> feet</h5>
//         <h5>Weight: <span > ${data.game.home_team_id} </span> lbs</h5>
//         <h5>Position: <span >${data.game.home_team_score} </span></h5>
//         <h5>Team: <span >${data.game.visitor_team_id}</span></h5>
//         <h5>Conference: <span>${data.game.visitor_team_score}</span></h5>

//       </div>`


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

        cardContainer.innerHTML=`
        <div class="games-card">
        <div class="games-card2">
 
        <table style="width:100%">
        <h5>Date: <span >${data.date}</span></h5>
  <tr>
    <th><span >${data.home_team_score}</span></th>
    <th></th> 
    <th><span >${data.visitor_team_score}</span></th>
  </tr>
  <tr style="height:200px">
    <td><span>${data.home_team.full_name}</span ></td>
    <td>-----VS-----</td>
    <td><span>${data.visitor_team.full_name}</span ></td>
  </tr>
  <tr>
    <td>${data.home_team.division}</td>
    <td></td>
    <td>${data.visitor_team.division}</td>
  </tr>
  </div>
  <div>`


        console.log(data.data)
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
        <h5>Team: <span >${data.team.city}</span></h5>
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

        cardContainer.innerHTML=`
       <div class="player-card">
        <h5>Team Name: <span >${data.full_name}</span></h5>
        <h5>Common: <span >${data.name}</span></h5>
        <h5>conference: <span > ${data.conference} </span></h5>
        <h5>Division: <span >${data.division} </span></h5>
        <h5>Abbreviation: <span >${data.abbreviation}</span></h5>`


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
var post= document.getElementById("post");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
 
});

