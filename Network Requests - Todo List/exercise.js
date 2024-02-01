let url="https://jsonplaceholder.typicode.com/todos";

fetch(url)
.then((str)=>str.json())
.then((st)=>{
    for (const el of st) {
        let msg="";
        msg += el.title+" : ";
        msg+=el.completed==true?"✔":"❌";
        console.log(msg);
    }
})
.catch((err)=>console.log("Algo a salido mal: "+err))
