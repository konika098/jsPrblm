function rockPaperScissors(p1, p2) {

    const rules = {
        "Rock": "Scissors",
        "Scissors": "Paper",
        "Paper": "Rock"
    };
    
    if (p1 === p2) {
        return "It's a draw";
    } else if (rules[p1] === p2) {
        return "The winner is p1";
    } else {
        return "The winner is p2";
    }
}

console.log(rockPaperScissors("Rock", "Scissors")); 
console.log(rockPaperScissors("Paper", "Rock"));     
console.log(rockPaperScissors("Scissors", "Rock")); 
console.log(rockPaperScissors("Rock", "Rock"));      
