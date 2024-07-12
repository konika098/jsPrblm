function removeDuplicates(arr) {
    const uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }

    return uniqueArr;
}

const duplicateArr = [1, 2, 2, 3, 4, 4, 5, 5, 6, 6];
const arr = removeDuplicates(duplicateArr);
console.log(arr); 