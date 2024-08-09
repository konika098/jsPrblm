
// // const convertTostring = input.toString()
// let n =input.length;
// let decimal = 0;

// // console.log(typeof(convertTostring));
// for(let i = n - 1; i >= 0 ; i--  | c++){
//       let value =number(input[i]);
//       let power = value * Math.pow(2,8);
//       decimal += power ;
// }
// console.log(decimal);
function binaryToDecimal(binary) {
    const binaryStr = binary.toString();

    let n = binaryStr.length;
    let decimal = 0;
    let c = 0;
    for (let i = n - 1; i >= 0; i-- ) {
        let value =+ binaryStr[i];
        let powerValue = value * Math.pow(2, c);
        decimal += powerValue;
        c++;
    }

    return decimal;
}
 const input = 1100;
console.log(binaryToDecimal(input));



// function decimalToBinary(decimal) {
//     if (decimal === 0) {
//         return "0";
//     }

//     let binary = "";
//     for (; decimal > 0; decimal = (decimal - (decimal % 2)) / 2) {
//         binary = (decimal % 2) + binary;
//     }

//     return binary;
// }