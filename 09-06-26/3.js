let a=[1,2,3,4,5];
a.push(9,10,20)
console.log(a);
a.unshift(90,91,92);

console.log(a);
let b=a.filter((x)=>x%2==0)

console.log(b);
let c=a.map(x=>x*2)

console.log(c);
let m=a.reduce(((s,a)=>s+a),0);

console.log(m);
let p=[2,4,6,8,10]
// a.push(p);
// console.log(a)
let ss=[...a,...p];
console.log(ss)