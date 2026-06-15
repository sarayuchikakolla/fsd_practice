const fs=require('fs')

fs.readFile("./15-06-26/text.txt","utf-8",(err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
})

const read=fs.readFileSync("./15-06-26/text.txt","utf-8")
console.log(read)

fs.writeFileSync("./15-06-26/text.txt","hello")

fs.writeFile("./15-06-26/text.txt","hello",(err) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
})

fs.appendFile("./15-06-26/text.txt","\nhello hiiiii",(err) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
})

fs.appendFileSync("./15-06-26/text.txt","\nhello hiiiii",(err) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
})

fs.unlink("./15-06-26/text.txt",(err)=>{
  console.log(err)
})

fs.unlinkSync("./15-06-26/text.txt");