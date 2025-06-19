let a=200;
let b=100;
let c=a+b;
let d=a-b;
console.log(a==b);
console.log(a!=b);
console.log(a>b);
console.log(a<b);
console.log(c);
console.log(d);
console.log(a,b,c,d);
console.log([a>b,b>a,d<c].join('\n'));
if(a<b && c<a){
    console.log(true);
}
else{
    console.log(false);
    
}