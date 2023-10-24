const toTitleCase = (phrase) => {
  return phrase
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const getPlayers = async () =>
{
  const response = await fetch('https://www.balldontlie.io/api/v1/players?per_page=100');
  const data = await response.json();
  data.data.forEach(player => 
    {
      displayPlayer(player);
    });
  
}

const displayPlayer = (player) => 
{
  {
    const playerList = document.getElementById('playerList');
    const playerFrame = document.createElement('div');
    playerFrame.classList.add('player');

    const playerName = document.createElement('p');
    playerName.textContent = `${player.first_name} ${player.last_name}`;
    playerFrame.appendChild(playerName);

    const playerPosition = document.createElement('p');
    playerPosition.textContent = `Position: ${player.position}`;
    playerFrame.appendChild(playerPosition);
    
    const playerTeam = document.createElement('p');
    playerTeam.textContent = `Team: ${player.team.full_name}`;
    playerFrame.appendChild(playerTeam);
    playerList.appendChild(playerFrame);
  }
}


const teams = ["Atlanta Hawks","Boston Celtics","Brooklyn Nets","Charlotte Hornets","Chicago Bulls","Cleveland Cavaliers","Dallas Mavericks","Denver Nuggets","Detroit Pistons","Golden State Warriors","Houston Rockets","Indiana Pacers","LA Clippers","Los Angeles Lakers","Memphis Grizzlies","Miami Heat","Milwaukee Bucks","Minnesota Timberwolves","New Orleans Pelicans","New York Knicks","Oklahoma City Thunder","Orlando Magic","Philadelphia 76ers","Phoenix Suns","Portland Trail Blazers","Sacramento Kings","San Antonio Spurs","Toronto Raptors","Utah Jazz","Washington Wizards"];
  
const select = document.getElementById('sortBy');
  teams.forEach(team => {
    const option = document.createElement('option');
    option.value = team;
    option.textContent = team;
    select.appendChild(option);
  });


select.addEventListener('change', (event) => 
{
  const selectedTeam = event.target.value.toLowerCase();
  const playerContainers = document.querySelectorAll('.player');
  playerContainers.forEach(container => 
    {
    const teamName = container.querySelector('p:nth-child(3)').textContent.split(': ')[1].toLowerCase();
    if (selectedTeam === teamName)
    {
      container.style.display = 'block';
    } 
    else 
    {
      container.style.display = 'none';
    }
    });
});

getPlayers();