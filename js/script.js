import { calcularComida } from "./comida.js";
import { calcularBebida } from "./bebidas.js";
import {
    obterValoresComida,
    obterValorCerveja,
    mostrarValoresComida,
    obterQuantidadeConvidados,
    obterValoresBebida,
    mostrarValoresBebida,
    obterQuantidadeDePessoaBebem,
    zerarCampos,
    apresentarResposta,
    obterTodosOsCampos,
} from "./dom.js";
import {
    validacoes,
    verificarValoresCampos,
    verificarQuantidadeConvidados,
    verificarQuantidadeBebidaAlcoolica,
} from "./validacoes.js";
import { formatarMoeda } from "./mascara.js";

const comidaBebidaForm = obterTodosOsCampos();
const quantidadeConvidados = obterQuantidadeConvidados();
const pessoasBebem = obterQuantidadeDePessoaBebem();
const valorCerveja = obterValorCerveja();

// Máscara
formatarMoeda(comidaBebidaForm);

// Verificação EventListener
verificarValoresCampos(comidaBebidaForm);
verificarQuantidadeConvidados(convidados);
verificarQuantidadeBebidaAlcoolica(pessoasBebem, convidados);

// Execução Calculo Comida
function comida(quantidadeConvidados) {
    let valoresComidaInput = obterValoresComida();
    let valoresComidaCalculado = calcularComida(
        quantidadeConvidados,
        valoresComidaInput
    );
    mostrarValoresComida(valoresComidaCalculado);
}

// Execução Cálculo Bebidas
function bebida(quantidadeConvidados, quantidadeDePessoasBebem) {
    let valoresBebidaInput = obterValoresBebida();
    let valoresBebidaCalculado = calcularBebida(
        quantidadeConvidados,
        valoresBebidaInput,
        quantidadeDePessoasBebem
    );
    mostrarValoresBebida(valoresBebidaCalculado);
}

// Envio dos campos
comidaBebidaForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Verificação alert
    if (validacoes(pessoasBebem, valorCerveja)) {
        comida(quantidadeConvidados);
        bebida(quantidadeConvidados, pessoasBebem);
        apresentarResposta();
        zerarCampos(comidaBebidaForm);
    }
});
