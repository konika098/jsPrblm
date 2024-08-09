function largestNumber(num){
    // if (num.length === 0){
    //     return ("the number is null")
    // }
    let largest = num[0];
    for( let i = 1 ; i<num.length ;i++){
        if(num[i] > largest){
            largest =num[i]
        }
    }
    return largest;

}
const numbers = [ 5 ,6 , 7 ,9, 22];
console.log(largestNumber(numbers));