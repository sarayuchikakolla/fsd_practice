//Write a program to find the second largest number in an array. 
let arr=[1,2,3,4,5,6]
let max = -Infinity
let secondMax = -Infinity
for(let i=0;i<arr.length;i++){
    if(arr[i] > max){
        secondMax = max
        max = arr[i]
    }
    else if(arr[i] > secondMax && arr[i] != max){
        secondMax = arr[i]
    }
}
console.log(secondMax)