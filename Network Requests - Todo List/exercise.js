let url="https://jsonplaceholder.typicode.com/todos";

async function llamada(url){
    const response = await fetch(url);
    const data =await response.json();
    console.log(data);
    return data;
}
llamada(url);