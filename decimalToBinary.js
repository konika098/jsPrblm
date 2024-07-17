// function decimalToBinary(){
//     let binary = "";
//     for(let decimal = 0 ; decimal >0; decimal % 2){
//         binary = (decimal % 2) + binary;
//     }
//     return binary;
// }

// const decimal = 10;
// const binary = (decimal % 2)
// console.log(binary);

// let decimalNumber = 10;
// let binaryNumber = decimalToBinary(decimalNumber);
// console.log(binaryNumber); 

// function decimalToBinary(str){
//     for(let i =str ; i> 0 ; i % 2){

//     }
// console.log(decimalToBinary(10));
// function decimalToBinary(decimal){
//     let binary = '';
//     while ( decimal != 0){
//         binary = (decimal % 2) + binary;
//         decimal = (decimal - (decimal % 2)) / 2
//     }
//     return binary;
// }


function decimalToBinary(decimal) {
    if (decimal === 0) {
        return "0";
    }

    let binary = "";
    for (; decimal > 0; decimal = (decimal - (decimal % 2)) / 2) {
        binary = (decimal % 2) + binary;
    }

    return binary;
}
console.log(decimalToBinary(37));