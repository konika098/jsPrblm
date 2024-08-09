function prime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return (false, `${num} is not a prime number`)
        }
        else {
            return (true, `${num} is a prime number`);
        }

    }
    return num;
}
const number = 9;
console.log(prime(number));