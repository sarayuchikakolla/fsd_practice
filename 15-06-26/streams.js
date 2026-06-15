const fs=require('fs');

let rs=fs.createReadStream("./15-06-26/abc.txt","utf-8")
// rs.on("data",(chunk)=>{
//     console.log(chunk)
// })
// rs.on("error",(err)=>{
//     console.log(err);
// })

let ws=fs.createWriteStream("./15-06-26/abcd.txt")
// ws.write("welcome")

rs.pipe(ws)
