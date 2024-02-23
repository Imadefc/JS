function isPangram(string){
    string=string.toLowerCase().split(" ").join("");
    let arrLetras=[];
    for(let i=0; i<string.length; i++){
        if(!arrLetras.includes(string[i])){
            arrLetras.push(string[i]);
        }
    }
    return arrLetras.length>=26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));