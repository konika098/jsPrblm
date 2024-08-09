function findVowels(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (!(str[i] === "b" || str[i] === "c" || str[i] === "d" || str[i] === "f" || str[i] === "g" || str[i] === "h" || str[i] === "k" || str[i] === "l" || str[i] === "m" || str[i] === "n" || str[i] === "p" || str[i] === "q" || str[i] === "r" || str[i] === "s" || str[i] === "t" || str[i] === "u" || str[i] === "v" || str[i] === "j" || str[i] === "x" || str[i] === "x" || str[i] === "y" || str[i] === "z")) {
            res += str[i]
        }
    }

    return {
        vowel: res,
        length: res.length
    };
}

const item = "Opediatechnnologis";
const final = findVowels(item)
console.log(final);
