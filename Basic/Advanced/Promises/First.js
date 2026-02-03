

const Prom = new Promise((Reslove,Reject)=>{
    let v = 10;
    setTimeout(()=>{
        if(v>50){
            return Reslove("Promise resloved : " + v)
        }
        else{
            return Reject("small value")
        }
    },5000)
})

Prom.then((v)=>{
    console.log(v);
    
}).catch((e)=>{
    console.log(e);
    
})

console.log(Prom);



setTimeout(()=>{
    console.log(Prom);
    
},8000)