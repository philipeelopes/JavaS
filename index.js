let input = document.getElementById("input-principal")
let button = document.getElementById("botão-adicionar")
let button2 = document.getElementById("botão-remover")
let listaDeTarefas = document.getElementById("tarefas")

let arryDeTarefas = []



function cliqueBotao(){
    arryDeTarefas.push(input.value)
    mostrarTarefas()
}
function mostrarTarefas(){
    let novaLista = ""

    arryDeTarefas.forEach(tarefa => {
        novaLista = novaLista + `
            <li class="item-tarefa">
                <p>${tarefa}</p>
            </li>

        `
        

    }) 
   listaDeTarefas.innerHTML = novaLista
    
}


button.addEventListener("click", cliqueBotao)
