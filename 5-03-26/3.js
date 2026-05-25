//find min
let arr=[1,2,3,4,5]
let min=arr[0]
for(let i=1;i<=arr.length+1;i++){
    if(arr[i]<min){
        min=arr[i]
    }
}
console.log(min)