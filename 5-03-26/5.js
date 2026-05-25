//Write a program to count how many times each element appears in an array.
let a = [1,2,3,3,4,5]

for(let i=0;i<a.length;i++){
    let count = 1
    let visited = false

    for(let k=0;k<i;k++){
        if(a[i] == a[k]){
            visited = true
            break
        }
    }

    if(visited) continue

    for(let j=i+1;j<a.length;j++){
        if(a[i] == a[j]){
            count++
        }
    }

    console.log(a[i] + " " + count)
}