// Create a function that takes voltage and current and returns the calculated power.
function power(voltage ,current){
    let sum = voltage * current
    return sum;
}
const num =power(480, 20)
console.log(num);