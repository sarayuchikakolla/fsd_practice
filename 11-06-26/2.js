function exam(a,b,...c)
{
    let s=0;
    for(let i in c)
    {
        s+=c[i];
    }
    console.log(s);
}
exam("mnr",'a',1,2,3,4,5,6)