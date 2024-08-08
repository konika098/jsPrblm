function combination(arr) {
    let res = 1;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        res = res * arr[i];
      }
    }
    return res;
  }
  let result = combination([1, 2, 3])
  console.log(result);