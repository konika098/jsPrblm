// Write a function that returns true if two rooks can attack each other, and false otherwise.
function canCapture([rook1, rook2]) {
   
    const [col1, row1] = rook1;
    const [col2, row2] = rook2;
    return col1 === col2 || row1 === row2;
  }
  
  console.log(canCapture(["A8", "E8"])); 
  console.log(canCapture(["A1", "B2"])); 
  console.log(canCapture(["H4", "H3"])); 
  console.log(canCapture(["F5", "C8"])); 
  