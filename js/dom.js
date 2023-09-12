import { getElementId, insertValues, insertQuatities } from "./helpers.js";

function obterValoresComida() {
    const bovina = getElementId("bovina").value;
    const frango = getElementId("frango").value;
    const suina = getElementId("suina").value;

    return { bovina, frango, suina };
}

function obterValorCerveja() {
    return getElementId("cerveja");
}

function obterQuantidadeConvidados() {
    return getElementId("convidados");
}

function obterQuantidadeDePessoaBebem() {
    return getElementId("qtdPessoasAlcool");
}

function obterTodosOsCampos() {
    return document.forms[0];
}

function obterValoresBebida() {
    const refri = getElementId("refri").value;
    const cerveja = getElementId("cerveja").value;
    const pessoasBebem = getElementId("qtdPessoasAlcool").value;

    return { refri, cerveja, pessoasBebem };
}

function mostrarValoresComida(comida) {
    // Apresentação de Valores
    insertValues("valor-carne", comida.valores.carne);
    insertValues("valor-frango", comida.valores.frango);
    insertValues("valor-suina", comida.valores.suina);
    insertValues("valor-total-comida", comida.totais.valor);

    // Apresentação de Quantidades
    insertQuatities("qtd-carne", comida.quantidades.carne.toFixed(3), "Kg");
    insertQuatities("qtd-frango", comida.quantidades.frango.toFixed(3), "Kg");
    insertQuatities("qtd-suina", comida.quantidades.suina.toFixed(3), "Kg");
    insertQuatities(
        "qtd-total-comida",
        comida.totais.quantidade.toFixed(3),
        "Kg"
    );
}

function mostrarValoresBebida(bebida) {
    // Apresentação Valores

    insertValues("valor-refri", bebida.valores.refri);
    insertValues("valor-cerveja", bebida.valores.cerveja);
    insertValues("valor-total-bebida", bebida.total.valor);

    // Apresentação quantidades
    insertQuatities("qtd-refri", bebida.quantidades.refri.toFixed(0), "Litros");
    insertQuatities(
        "qtd-cerveja",
        bebida.quantidades.cerveja.toFixed(0),
        "Latas(355ml)"
    );
}

function apresentarResposta() {
    const resposta = getElementId("resultado");
    resposta.style.height = "auto";
}

function zerarCampos(inputs) {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}

export {
    mostrarValoresComida,
    obterValoresComida,
    obterQuantidadeConvidados,
    obterValoresBebida,
    mostrarValoresBebida,
    obterQuantidadeDePessoaBebem,
    zerarCampos,
    apresentarResposta,
    obterValorCerveja,
    obterTodosOsCampos,
};
