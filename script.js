let listaTarefas = document.getElementById('lista-tarefas');

let tarefaASeFazer = document.getElementById('input-tarefa');

let enviar = document.getElementById('submit');


document.getElementById('submit').addEventListener('click', function () {
    if (tarefaASeFazer != "") {
        listaTarefas.innerHTML += `<li> ${tarefaASeFazer} </li>`
    } else {
        console.log('Não podemos adicionar uma tarefa vazia, por favor digite alguma tarefa.')
    }
})