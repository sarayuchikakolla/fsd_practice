// Given an array of user objects, write a program to find users whose age is greater than 
//25.
let user=[
    { name:"alex",age:20},
    { name:"bla",age:25},
    { name:"aa",age:30}
]

let res=[]

for(let i=0;i<user.length;i++){
    if(user[i].age>25){
        res.push(user[i])
    }
}

console.log(res)