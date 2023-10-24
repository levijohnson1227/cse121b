
// const playerId = '237';

// const url = `https://www.balldontlie.io/api/v1/players/${playerId}`;


// const GetStats = async () => 
// {
//     const response = await fetch(`https://www.balldontlie.io/api/v1/players`);
//     statsList = await response.json();
//     displayStats(statsListList);
// }
fetch('https://www.balldontlie.io/api/v1/players')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));