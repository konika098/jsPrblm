function strReverse(str) {
    let newStr = []
    if (str.length === 0) {
        console.log("nothing");
    }
    else if (str.length === 1) {
        newStr.push(str[0])
    }
    else {
        for (let i = str.length -1; i>= 0 ; i --)
            newStr.push(str[i])
  }
  return newStr ;
}

const arr ="konika"
const finalStr =strReverse(arr)
console.log(finalStr);