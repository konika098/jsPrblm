const reverseWordsInString = (str) => {
    return str
      .split(' ')
      .reduce((acc, word) => {
        acc.push(word.split('').reverse().join(''));
        return acc;
      }, [])
      .join(' ');
  };
  
  const inputString = "dLROW YM sI HsEt";
  const result = reverseWordsInString(inputString);
  console.log(result);