const reverseOdd = "konika kon";
let words = reverseOdd.split(" ");

let output = words.map((word) => {
  let start = 0;
  let end = word.length - 1;

  if (word.length % 2 == 1) {
    
    let reversedWord = '';
   for(;end >= 0;) {
      reversedWord += word[end];
      end--;
    }
    return reversedWord;
  } else {
  
    return word;
  }
});
let o =output.join(" ")
console.log(typeof(o));

