let input = document.getElementById("input-principal")
let button = document.getElementById("botão-adicionar")
let button2 = document.getElementById("botão-remover")
let button3 = document.getElementById("removerTodasTarefas")
let listaDeTarefas = document.getElementById("tarefas")

let arryDeTarefas = []








function cliqueBotao(){
    arryDeTarefas.push(input.value)
      input.value = ""
    mostrarTarefas()
}
function mostrarTarefas(){
    let novaLista = ""

    arryDeTarefas.forEach(tarefa => {
        novaLista = novaLista + `
            <li class="item-tarefa">
                <p class="nome-tarefa">${tarefa}</p>
                <button class="botao-delete" onclick="removerTarefa(${index})">
                <i class="fa fa-trash"></i>
                </button>

            </li>

        `;
        

    }); 
   listaDeTarefas.innerHTML = novaLista
    
}
function removerTarefa(index){
    arryDeTarefas.splice(index, 1);
    mostrarTarefas();
}


function removerUltimaTarefa(){
arryDeTarefas.pop();
mostrarTarefas();
}

function removerTodasTarefas(){
    arryDeTarefas = []
    mostrarTarefas();
}

button.addEventListener("click", cliqueBotao);

button2.addEventListener("click", removerUltimaTarefa);

button3.addEventListener("click", removerTodasTarefas);

window.removerTarefa = removerTarefa;


