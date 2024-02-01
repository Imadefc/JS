const isLogged =true;

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

funcionUno(isLogged).then((num)=>funcionDos(num)).then((res)=>console.log(res)).catch((err)=>console.log(err));
