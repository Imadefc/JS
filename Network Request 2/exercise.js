async function ejercicio(){
    const mensageEvent = await fetch("https://jsonplaceholder.typicode.com/todos/4");
    const finalEventJson = await mensageEvent.json();
    const $elementH2 = document.createElement("h2");
    $elementH2.innerText=finalEventJson.title;
    const $elementInput = document.createElement("input");
    $elementInput.type="checkbox";
    $elementInput.checked=finalEventJson.completed;
    const $elementDiv = document.getElementById("container");
    $elementDiv.append($elementH2, $elementInput);

    console.log(finalEventJson);
}

ejercicio();