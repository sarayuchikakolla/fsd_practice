//Write a program to sort an array in ascending order without using the built-in sort() 
//method. 
let a=[1,2,3,5,6,79,0]
let temp;
for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]>=a[j]){
            temp=a[i]
            a[i]=a[j]
            a[j]=temp
        }
    }
}
console.log(a)