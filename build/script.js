"use strict";
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");
let listaSalva = localStorage.getItem("@list_tarefas");
let tarefas = listaSalva ? JSON.parse(listaSalva) : [];
function listaTarefa() {
    listElement.innerHTML = "";
    tarefas.map((item) => {
        let todoElement = document.createElement("li");
        let tarefaText = document.createTextNode(item);
        let linkElement = document.createElement("a");
        let posicao = tarefas.indexOf(item);
        linkElement.setAttribute("onclick", `deleterTarefa(${posicao})`);
        linkElement.setAttribute("href", "#");
        let linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);
        linkElement.setAttribute("style", "margin-left: 10px");
        todoElement.appendChild(tarefaText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    });
}
listaTarefa();
function adicionarTarefa() {
    return (inputElement.value === "" ? false : tarefas.push(inputElement.value),
        (inputElement.value = ""),
        listaTarefa(),
        persistirDados());
}
buttonElement.onclick = adicionarTarefa;
function deleterTarefa(posicao) {
    console.log(`Item ${posicao} deletado com sucesso!`);
    tarefas.splice(posicao, 1);
    listaTarefa();
    persistirDados();
}
function persistirDados() {
    localStorage.setItem("@list_tarefas", JSON.stringify(tarefas));
}
