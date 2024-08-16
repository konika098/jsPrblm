// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan(num1 ,num2){
    let sum = num1 + num2
    if(sum <= 100){
        return true
    }
    else{
       return false
    }
}
console.log(lessThan(3, 77));