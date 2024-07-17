function numReverse(num) {
    let number = 0;
    for (; num > 0;) {
        let rev = num % 10;
        number = (number * 10) + rev;
        num = (num - rev) / 10;
    }
    return number;
}

let input = 123456;
console.log(numReverse(input)); 
 