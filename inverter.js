function invert(s) {
  let str = s.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      str[i] = str[i].toUpperCase();
    } else {
      str[i] = str[i].toLowerCase();
    }
  }
  let start = 0;
  let end = str.length - 1;
  
 for (;start < end;) {
    let temp = str[start];
    str[start] = str[end];
    str[end] = temp;
    start++;
    end--;
  }
  
  return str.join(""); 
}

console.log(invert("dLROW YM sI HsEt")); 


 

