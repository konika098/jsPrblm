// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

// wins get 3 points
// draws get 1 point
// losses get 0 points
 function footballPoint(wins,draws,losses){
    let winsPoint = 3
    let drawsPoint = 1
    let lossesPoint =0
   let totalPoint = (winsPoint * wins) +(drawsPoint * draws) + (lossesPoint * losses)
   return totalPoint;
 }
 console.log(footballPoint(5, 0, 2));