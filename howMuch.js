let arr = [true, false, false, true, false,true];
let num = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) { 
        num++; 
    }
}
console.log(num); 
