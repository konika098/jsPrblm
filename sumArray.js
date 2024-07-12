function sumArray(arr){
    let sum = 0;
    for(let i = 0 ; i < arr.length ; i++){
        sum += arr[i]
    }
       return sum
}
const array = [2,3,5,7,8,9];
const totalArray =sumArray(array);
console.log(totalArray);