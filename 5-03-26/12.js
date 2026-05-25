//Write a program to extract only the names from an array of objects. 
let user=[
    { name:"alex",age:20},
    { name:"bla",age:25},
    { name:"aa",age:30}
]
let res=[]
for(let i=0;i<user.length;i++){
    res.push(user[i].name)
}
console.log(res)
