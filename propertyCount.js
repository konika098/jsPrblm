function sumArray(arr){
    let sum = 0;
    for(let i = 0 ; i < arr.length ; i++){
        sum += arr[i]
    }
       return sum
}
const array = "konika";
const totalArray =sumArray(array);
console.log(totalArray);