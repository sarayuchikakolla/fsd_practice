function items(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(100);
            console.log("items added");
        },1000);
    })
}
function total(am){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
           console.log(am+" received successfully")

        },500)

    })
}

items().then(total).then(()=>
{
    console.log("exited sucessfully");
}).catch(()=>
    console.log("error caught")
)