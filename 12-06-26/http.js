const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url=="/home"){
        res.write("Home Page");
        res.end();
    }
    else if(req.url=="/about"){
        res.write("About Page");
        res.end();
    }
    else{
        res.write("DashBoard");
        res.end();
    }
})
server.listen(3000,()=>{
    console.log("server running at 3000");
})