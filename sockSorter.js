/*
Came across a question like this on hackerrank.
A great exercise to map code to a real life concept (sorting your socks!)
*/

const sockPairs = [1,3,2,2,1,1,1];

/*
I have a sockpile here with the colors represented as numbers 
*/

let pairs = 0; //pair counter

let sortedSocks = sockPairs.sort((a,b) => a-b);

//sort the socks. in this case by number in ascending order

console.log(sortedSocks);

function removeSocks(sockPile){
  sockPile.shift();
  sockPile.shift();
}

/*
function that removes the first two socks from the pile.
because they are sorted, we know we have a match!
*/

for(let firstSock = 0; firstSock < sortedSocks.length; firstSock++){
  for(let secondSock = firstSock += 1; secondSock < sortedSocks.length; secondSock++){
    if(sortedSocks[firstSock] === sortedSocks[secondSock]){ //if socks match
      removeSocks(sortedSocks); //remove the first two socks checked
      firstSock = 0; //reset first sock index
      secondSock = firstSock + 1; //reset second sock index
      pairs += 1; //increment pairs
    }
  }
}
 console.log(`There are currently ${pairs} pairs of socks in the pile!`);
