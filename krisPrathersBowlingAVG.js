/*
Feel free to run this in a compiler fi you want to test.
Change to your hearts content :)
*/

let totalScore = 0;
let avgForToday = 0;

function generateGames(numbOfGames){
  for(let games = 0 ; games < numbOfGames; games++){
  let score =  Math.floor(Math.random() * 300) + 1;
    console.log(`Game ${games + 1}: ${score}`);
    totalScore += score;  
    avgForToday = totalScore / numbOfGames;
  }
}

generateGames(3);

console.log(`Total Average: ${avgForToday}`);


function getAvg(avg){
  return function(totalAvg) {
    if(totalAvg > avg){
    console.log(`${proBowler.name} is a good bowler!`)
  } else {
    console.log(`${proBowler.name} bowled pretty bad today :(`)
  }
}
}

const isGoodBowler = getAvg(150);


let proBowler = {
  name: 'Kris Prather',
  average: '',
}

proBowler.average = avgForToday;

isGoodBowler(proBowler.average);
