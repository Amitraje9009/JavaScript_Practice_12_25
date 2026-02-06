let Prom1 = Promise.reject("pass");

let prom2 = Promise.resolve("second pass");

let prom3 = Promise.reject("Error");

Promise.any([Prom1,prom2,prom3])
.then((v)=>{
    console.log(v);
    console.log("***");
}).catch((e)=>{
    console.log(e);
    console.log("%%%");
})