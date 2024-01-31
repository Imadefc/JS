const number = 15;

let result = new Promise((res, err)=>{
    if(number>10){
        res("Es mayor")
    }else{
        err("Error");
    }
})

result
.then((res)=>{console.log(res);})
.catch((err)=>{console.log(err);})