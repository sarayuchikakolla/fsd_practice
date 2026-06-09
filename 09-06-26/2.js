function st1(callback){

    setTimeout(()=>{
        console.log("step1 completed");
         callback();
    }
   
),1000};
function st2(callback){
    setTimeout(()=>{
        console.log("step2 completed");
        callback();
    },500)
};
function st3(callback)
{
    setTimeout(()=>{
console.log("step3 completed");
    },800)
};
st1(()=>
{
    st2(()=>{
        st3(()=>{
            console.log("Exited ")
        })
    })
})
