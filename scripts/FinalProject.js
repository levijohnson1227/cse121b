
// const playerId = '237';

// const url = `https://www.balldontlie.io/api/v1/players/${playerId}`;


// const GetStats = async () => 
// {
//     const response = await fetch(`https://www.balldontlie.io/api/v1/players`);
//     statsList = await response.json();
//     displayStats(statsListList);
// }
fetch('https://www.balldontlie.io/api/v1/players')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Work with JSON data here
    console.log(data);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });