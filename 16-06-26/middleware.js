const express=require('express')
const app=express()
const users=require('./users.json')
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use((req, res, next) => {
    req.uname = "cvr";
    console.log("middleware 1");
    next();
});

app.use((req, res, next) => {
    console.log("middleware 2", req.uname);
    next();
});

app.get("/",(req,res)=>{
    //res.send("welcome")
    res.sendFile(__dirname+'/index.html')
    // res.status(200).json({msg:"hello"})
})

app.get("/users",(req,res)=>{
     const html = `
    <ul>
        ${users.map(user => `<li>${user.name}</li>`).join('')}
    </ul>`;
    res.send(html)
})

app.get("/api/users",(req,res)=>{
    res.status(200).json(users)
})

app.get("/api/users/:id",(req,res)=>{
    const id=Number(req.params.id)
    const user=users.find(user=>user.id===id)
    if(!user){
        return res.status(404).json({msg:"not found"})
    }
    return res.status(200).json(user)
})

app.post("/api/users/:id",(req,res)=>{
   const newuser={
    id:users.length+1,
    name:req.body.name,
    role:req.body.role
   }
   users.push(newuser)
   return res.status(200).json(newuser)

})
app.put("/api/users/:id",(req,res)=>{
    const id=Number(req.params.id)
    const user=users.find(user=>user.id===id)
    if(!user){
        return res.status(404).json({msg:"not found"})
    }
    user.name=req.body.name
    user.role=req.body.role  
    res.status(200).json(user) 
})
app.patch("/api/users/:id",(req,res)=>{
    const id=Number(req.params.id)
    const user=users.find(user=>user.id===id)
    if(!user){
        return res.status(404).json({msg:"not found"})
    }
    user.name=req.body.name
    user.role=req.body.role  
    res.status(200).json(user) 
})
app.delete("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);
    
    if (userIndex === -1) {
        return res.status(404).json({ msg: "not found" });
    }
    
    users.splice(userIndex, 1); 
    res.status(200).json({ msg: "deleted" });
});
app.listen(3000,()=>{
    console.log("running at 3000")
})
