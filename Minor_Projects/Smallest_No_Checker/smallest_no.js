let arr=[20,30,40,50];
function smallest(arr){
    let smallest = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }
    return smallest;
}

console.log(`Smallest number is : ${smallest(arr)}`);

