//find max
let arr=[1,2,3,4,5]
let max=arr[0]
for(let i=1;i<=arr.length+1;i++){
    if(arr[i]>max){
        max=arr[i]
    }
}
console.log(max)