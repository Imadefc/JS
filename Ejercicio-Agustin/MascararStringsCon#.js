
function maskify(cc) {
    let longitud = cc.length;
    if(longitud>4){
        cc= cc.slice(cc.length-4, cc.length);
        for(let i=0; i<longitud-4;i++){
            cc="#"+ cc;
        }
    }
    

    return cc;
}  


console.log(maskify('4556364607935616'));                
console.log(maskify('1'));
console.log(maskify('11111'));

