/*
If you need a pickmeup :) <3
here I was just playing with the concept
of the keyword 'this' and its relation
to arrow functions
*/

const charmingGuy = {
  pickups: ['Woah, you look good :)', 'Did you lose weight?','you look like a snack!','you\'re the only ten I see ;)'],
  start(){
   this.timerId = setInterval(() => 
  {const lines = this.pickups;
  let pick = Math.floor(Math.random() * lines.length);
  console.log(lines[pick]);
    }, 2500);
  },

  stop(){
    clearInterval(this.timerId);
    console.log('Okay, Have a good day :)')
  }
}

 charmingGuy.start(); //start the function
charmingGuy.stop(); //stop the function
