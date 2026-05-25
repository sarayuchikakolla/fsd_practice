// Write a program to count how many users belong to each department.
let user=[
    { name:"alex",age:20,dept:"cse"},
    { name:"bla",age:25,dept:"eee"},
    { name:"aa",age:30,dept:"it"}
]

let res={}

for(let i=0;i<user.length;i++){

    let dept=user[i].dept

    if(res[dept]){
        res[dept]++
    }
    else{
        res[dept]=1
    }
}

console.log(res)