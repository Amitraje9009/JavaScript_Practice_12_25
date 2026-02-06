let num = "3434343434";

const prom = new Promise((Res,Rej)=>{
    setTimeout(()=>{
        if(num.length===10){
            return Res("valid number")
        }
        else{
            return Rej("invalid number")
        }
    },5000)
})


function print(v){
    console.log(v);
}

prom.then(print).catch(print);

setTimeout(()=>{
    console.log(prom);
},7000)