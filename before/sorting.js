function sorting(arr){
    let n = arr.length;

    for(let i = 0 ; i < n ; i++){
        for(let j = 0; j < n - 1 ; j++){
            if(arr[j] > arr[j+1]){
                let temp =arr[j];
                arr[j]=arr[j+1];
                arr[j+1] =temp;
            }

        }
        
    }
    return arr;
}

const array =[5 , 8 , 3 ,1 ,9 ,4]
console.log(sorting(array));
