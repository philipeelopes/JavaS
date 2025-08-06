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

    arryDeTarefas.forEach((tarefa, index) => {
        novaLista  +=`
            <li class="item-tarefa">
                 <input type="checkbox" id="check-${index}" ${tarefa.concluida ? "checked" : ""} onchange="toggleConcluida(${index})" />
                <label for="check-${index}" class="nome-tarefa ${tarefa.concluida ? "tarefa-concluida" : ""}">${tarefa.texto}</label>
                <button class="botao-delete" onclick="removerTarefa(${index})">
                <i class="fa fa-trash"></i>
                </button>

            </li>

        `;
    
    
}); 
   listaDeTarefas.innerHTML = novaLista;
}

function toggleConcluida(index) {
    arryDeTarefas[index].concluida = !arryDeTarefas[index].concluida;
    mostrarTarefas(); 
    
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

window.toggleConcluida = toggleConcluida;

