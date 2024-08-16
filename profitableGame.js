// Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.
function profitableGame(prob,prize,pay){
    let total = (prob * prize) 
    if (total >pay){
        return true;
    }
    else{
        return false;
    }
}
console.log(profitableGame(0.9, 3, 2));