let prom = Promise.reject("value not fullfilled");

prom.catch((e)=>{
    console.log(e);
})