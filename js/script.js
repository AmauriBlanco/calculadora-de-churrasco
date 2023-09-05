import { calcularComida } from "./comida.js";
import { calcularBebida } from "./bebidas.js";
import {
    obterValoresComida,
    obterValorCerveja,
    mostrarValoresComida,
    quantidadeDePessoas,
    obterValoresBebida,
    mostrarValoresBebida,
    quantidadeDePessoaBebem,
    zerarCampos,
    apresentarResposta,
    obterValorCarne,
} from "./dom.js";
import { validacoes, verificarValoresCampos } from "./validacoes.js";

const comidaBebidaForm = document.forms[0];

verificarValoresCampos(comidaBebidaForm);

comidaBebidaForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let convidados = quantidadeDePessoas();
    let pessoasBebem = quantidadeDePessoaBebem();
    let valorCerveja = obterValorCerveja();
    let valorCarne = obterValorCarne();
    if (validacoes(pessoasBebem, convidados, valorCerveja, valorCarne)) {
        comida(convidados);
        bebida(convidados, pessoasBebem);
        apresentarResposta();
        zerarCampos(comidaBebidaForm);
    }
});

function comida(quantidadeDePessoas) {
    let valoresComidaInput = obterValoresComida();
    let valoresComidaCalculado = calcularComida(
        quantidadeDePessoas,
        valoresComidaInput
    );
    mostrarValoresComida(valoresComidaCalculado);
}

function bebida(quantidaDePessoas, quantidadeDePessoasBebem) {
    let valoresBebidaInput = obterValoresBebida();
    let valoresBebidaCalculado = calcularBebida(
        quantidaDePessoas,
        valoresBebidaInput,
        quantidadeDePessoasBebem
    );
    mostrarValoresBebida(valoresBebidaCalculado);
}
