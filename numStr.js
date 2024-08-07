const arr = ["a34bc", "ab91c", "a10bc", "bcd"]

const result = arr.filter((num) =>{
    const hasNum =/[0-9]/.test(num)
    return hasNum;
})
console.log(result); 