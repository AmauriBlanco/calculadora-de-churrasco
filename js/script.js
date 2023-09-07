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
} from "./dom.js";
import { validacoes, verificarValoresCampos } from "./validacoes.js";

const comidaBebidaForm = document.forms[0];

verificarValoresCampos(comidaBebidaForm);

comidaBebidaForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let quantidadeConvidados = obterQuantidadeConvidados();
    let pessoasBebem = obterQuantidadeDePessoaBebem();
    let valorCerveja = obterValorCerveja();
    if (validacoes(pessoasBebem, quantidadeConvidados, valorCerveja)) {
        comida(quantidadeConvidados);
        bebida(quantidadeConvidados, pessoasBebem);
        apresentarResposta();
        zerarCampos(comidaBebidaForm);
    }
});

function comida(quantidadeConvidados) {
    let valoresComidaInput = obterValoresComida();
    let valoresComidaCalculado = calcularComida(
        quantidadeConvidados,
        valoresComidaInput
    );
    mostrarValoresComida(valoresComidaCalculado);
}

function bebida(quantidadeConvidados, quantidadeDePessoasBebem) {
    let valoresBebidaInput = obterValoresBebida();
    let valoresBebidaCalculado = calcularBebida(
        quantidadeConvidados,
        valoresBebidaInput,
        quantidadeDePessoasBebem
    );
    mostrarValoresBebida(valoresBebidaCalculado);
}
