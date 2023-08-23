let arr = [1,2,6,7,3,5];
let sum = 10;
let pairs = [];

for(i=0; i<arr.length; i++){
    for(j=i+1; j<arr.length; j++){
        if(arr[i]+arr[j] === sum){
            pairs.push(arr[i], arr[j]);
        
        }
    }
}

console.log(pairs);