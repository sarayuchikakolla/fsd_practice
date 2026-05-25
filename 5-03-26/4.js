//remove duplicates
let arr=[1,2,3,4,5,2]
let res=[]
for(let i=0;i<=arr.length-1;i++){
    if(res.indexOf(arr[i])===-1){
        res.push(arr[i])
    }
}
console.log(res)