let listaTarefas = document.getElementById('lista-tarefas');

let tarefaASeFazer = document.getElementById('input-tarefa');

let enviar = document.getElementById('submit');

let completar = document.getElementById('done');


document.getElementById('submit').addEventListener('click', function () {
    if (tarefaASeFazer.value == "") {
        window.alert('Não podemos adicionar uma tarefa vazia, por favor digite alguma tarefa.')
    } else {
        listaTarefas.innerHTML += `<li> ${tarefaASeFazer.value} </li>`
    }
})