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
        comida();
        bebida();
        apresentarResposta();
        zerarCampos(comidaBebidaForm);
    }
    console.log(validacoes(pessoasBebem, convidados, valorCerveja, valorCarne))
});

function comida() {
    let quantidaDePessoas = quantidadeDePessoas();
    let valoresComidaInput = obterValoresComida();
    let valoresComidaCalculado = calcularComida(
        quantidaDePessoas,
        valoresComidaInput
    );
    mostrarValoresComida(valoresComidaCalculado);
}

function bebida() {
    let quantidaDePessoas = quantidadeDePessoas();
    let quantidadeDePessoasBebem = quantidadeDePessoaBebem();
    let valoresBebidaInput = obterValoresBebida();
    let valoresBebidaCalculado = calcularBebida(
        quantidaDePessoas,
        valoresBebidaInput,
        quantidadeDePessoasBebem
    );
    mostrarValoresBebida(valoresBebidaCalculado);
}
