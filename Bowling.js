
function BowlingGame (rolls) {
    //loping through the array adding each frame togther
    let score = 0;
    for (let i = 0; i < rolls.length; i++) {
      score+=rolls[i];
      if (rolls[i]===10) {
        score+= rolls[i+1]+rolls[i+2];
      }else if(rolls[i]+rolls[i+1] === 10 && rolls[i] !== rolls[rolls.length-3]){
        score += (rolls[i+2])
      }
      
    }
    return score;
  }
  
 
   
 module.exports= BowlingGame;