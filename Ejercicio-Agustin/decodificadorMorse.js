function decodeMorse(morseCode){
    morseCode = morseCode.split( "   ");
    let resultado="";
    console.log(morseCode);
    morseCode = morseCode.filter(codigo => codigo!="");
    morseCode.forEach((element, index) => {
        element.trim().split(" ").forEach(element => {
            //SacarMorseDEAPI
            resultado+="letra";
        });
        if(index<morseCode.length-1){
            resultado+=" ";
        }
        
    });
    console.log(resultado);
}

decodeMorse('.... . -.--   .--- ..- -.. .');
decodeMorse('   .... . -.--   ');
decodeMorse(' . ');