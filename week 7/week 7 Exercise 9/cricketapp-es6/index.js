const players = [
  { name: 'Virat', score: 90 },
  { name: 'Rohit', score: 45 },
  { name: 'Dhoni', score: 75 },
  { name: 'KL Rahul', score: 67 },
  { name: 'Pant', score: 82 },
  { name: 'Jadeja', score: 34 },
  { name: 'Bumrah', score: 93 },
  { name: 'Shami', score: 50 },
  { name: 'Ashwin', score: 76 },
  { name: 'Iyer', score: 39 },
  { name: 'Samson', score: 81 },
];

// ES6 map and filter
console.log("All Players:");
players.map(player => console.log(`${player.name} - ${player.score}`));

console.log("\nPlayers with score below 70:");
const below70 = players.filter(player => player.score < 70);
below70.map(player => console.log(`${player.name} - ${player.score}`));

// Array merge and destructuring
const T20players = ['Virat', 'Rohit', 'Hardik', 'Surya', 'Arshdeep'];
const RanjiTrophyPlayers = ['Rahane', 'Pujara', 'Shaw', 'Karun', 'Saini'];

const allPlayers = [...T20players, ...RanjiTrophyPlayers];

const oddTeam = allPlayers.filter((_, index) => index % 2 !== 0);
const evenTeam = allPlayers.filter((_, index) => index % 2 === 0);

console.log("\nOdd Team Players:", oddTeam);
console.log("Even Team Players:", evenTeam);
