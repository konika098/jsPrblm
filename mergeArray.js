// function mergeArray(arr1, arr2) {
//     const result = [];

//     for (let i = 0; i < arr1.length; i++) {
//         let isDuplicate = false;
//         for (let j = 0; j < result.length; j++) {
//             if (arr1[i] === result[j]) {
//                 isDuplicate = true;
//                 return;
//             }
//         }
//         if (!isDuplicate) {
//             result.push(arr1[i]);
//         }
//     }

//     for (let i = 0; i < arr2.length; i++) {
//         let isDuplicate = false;
//         for (let j = 0; j < result.length; j++) {
//             if (arr2[i] === result[j]) {
//                 isDuplicate = true;
               
//             }
//             else if (!isDuplicate) {
//                 result.push(arr2[i]);
//             }
//         }
       
//     }

//     return result;
// }
// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];
// console.log(mergeArray(array1, array2)); 

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const result = [];

for (let i = 0; i < array1.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
        if (array1[i] === result[j]) {
            isDuplicate = true;
            break;
        }
    }
    if (!isDuplicate) {
        result.push(array1[i]);
    }
}

console.log(result);