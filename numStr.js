const arr = ["abc", "ab91c", "a10bc", "bcd"]

// const result = arr.filter((num) => {
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] >= '0' && num[i] <= '9') {
//             return true;
//         }
//     }
//     return false;
// });

// console.log(result); 

const result = arr.filter((num) =>num >= '0' && num <= '9')
console.log(result); 