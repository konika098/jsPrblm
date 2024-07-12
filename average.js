function average(num){
    let sum = 0 ;
    for (let i = 0 ; i< num.length ; i++){
        sum += num[i]
    }
    return sum / num.length;
}
const arr = [ 2, 3, 4, 5, 6]
const final = average(arr)
console.log(final);