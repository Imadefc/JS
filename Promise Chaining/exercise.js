const isLogged = true;

function funcionUno(aux){
    return new Promise((result, err)=>{
        if(aux===true){
            result(Math.random());
        }else{
            err("No es valido el login");
        }
    })
}

function funcionDos(aux){
    return new Promise((result,err)=>{
        if(aux>0.5){
            result('{name: "John", age: 24}');
        }else{
            err("Error Obteniendo el usuario");
        }
    })
}

funcionUno(isLogged)
    .then((ok)=>{
        funcionDos(ok)
        .then((ok2)=>{console.log(ok2)})
        .catch((str)=>{console.log(str);})
    })
    .catch((str)=>console.log(str));