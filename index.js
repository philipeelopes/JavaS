let input = document.getElementById("input-principal");
let botaoAdicionar = document.getElementById("botao-adicionar");
let botaoLimparTodas = document.getElementById("removerTodasTarefas");
let botaoRemoverMarcadas = document.getElementById("RemoverTarefasMarcadas");
let listaDeTarefas = document.getElementById("tarefas");

let arrayDeTarefas = [];

function cliqueBotao() {
    if (input.value.trim() === "") return;
    arrayDeTarefas.push({
        texto: input.value,
        concluida: false
    });
    input.value = "";
    mostrarTarefas();
}

function mostrarTarefas() {
    listaDeTarefas.innerHTML = "";

    arrayDeTarefas.forEach((tarefa, index) => {
        let li = document.createElement("li");
        li.classList.add("item-tarefa");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarefa.concluida;
        checkbox.addEventListener("change", () => toggleConcluida(index));

        let label = document.createElement("label");
        label.textContent = tarefa.texto;
        label.classList.add("nome-tarefa");
        if (tarefa.concluida) {
            label.classList.add("tarefa-concluida");
        }

        let botaoDelete = document.createElement("button");
        botaoDelete.classList.add("botao-delete");
        botaoDelete.innerHTML = `<i class="fa fa-trash"></i>`;
        botaoDelete.addEventListener("click", () => removerTarefa(index));

        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(botaoDelete);

        listaDeTarefas.appendChild(li);
    });
}

function toggleConcluida(index) {
    arrayDeTarefas[index].concluida = !arrayDeTarefas[index].concluida;
    mostrarTarefas();
}


function removerUltimaTarefa() {
    arrayDeTarefas.pop();
    mostrarTarefas();
}

function removerTodasTarefas() {
    arrayDeTarefas = [];
    mostrarTarefas();
}

function RemoverTarefasMarcadas(){
    arrayDeTarefas = arrayDeTarefas.filter(tarefa => !tarefa.concluida);
    mostrarTarefas();
}

botaoAdicionar.addEventListener("click", cliqueBotao);
botaoLimparTodas.addEventListener("click", removerTodasTarefas);
botaoRemoverMarcadas.addEventListener("click", RemoverTarefasMarcadas);
