//Write a program to separate even and odd numbers from an array. 
let a=[1,2,3,4]
let even=[]
let odd=[]
for(let i=0;i<a.length;i++){
    if(a[i]%2==0){
        even.push(a[i])
    }
    else{
        odd.push(a[i])
    }
}
console.log("even is "+even+"   "+"odd is "+odd)