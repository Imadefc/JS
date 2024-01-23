function repeatHello(callback){
    setInterval(callback,1000);
}
//se pone una arrow funcion porque la funcion repeatHello espera otra funcion. Es una manera de introducir el parametro 
//Se podria tb declarando otra funcion e invocarla dentro del repeatHello
repeatHello(()=>console.log("Hello"));
