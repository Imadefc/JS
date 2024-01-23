function printAsyncName(callback,str){
    setInterval(callback,1000);
    setTimeout(()=>console.log("Imad"),2000);
}

printAsyncName((()=>console.log("Hello")),"Imad");
