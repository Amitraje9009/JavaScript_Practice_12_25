function one(a=10,b=2,c=10)
{
    return a*b*c;
}


function  two(v)
{
    return v()+10;
}
console.log(one());

console.log(one(10,2,3));


console.log(two(one));