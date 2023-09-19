import { stringParaFloat } from "./helpers.js";

let multiplicadorCarne = 0.2;
let multiplicadorFrango = 0.1;
let multiplicadorSuina = 0.1;

function calcularComida(informacoesDeEntrada) {
    let quantidadesComida = quantidade(informacoesDeEntrada);
    let valorComida = valor(quantidadesComida, informacoesDeEntrada);

    return {
        quantidades: {
            ...quantidadesComida,
        },
        valores: {
            ...valorComida,
        },
        totais: {
            ...total(quantidadesComida, valorComida),
        },
    };
}

// Calculo verificadores
function calcularMultiplicador(informacoesDeEntrada) {
    let valorFrango = informacoesDeEntrada.frango.value;
    let valorSuina = informacoesDeEntrada.suina.value;

    if (valorFrango === "" && valorSuina === "") {
        multiplicadorCarne = 0.4;
        multiplicadorFrango = 0;
        multiplicadorSuina = 0;
        return;
    }

    if (valorFrango === "") {
        multiplicadorCarne = 0.25;
        multiplicadorFrango = 0;
        multiplicadorSuina = 0.15;
        return;
    }

    if (valorSuina === "") {
        multiplicadorCarne = 0.25;
        multiplicadorFrango = 0.15;
        multiplicadorSuina = 0;
        return;
    }
}

// Calculo quantidade
function quantidade(informacoesDeEntrada) {
    calcularMultiplicador(informacoesDeEntrada)
    let carne, frango, suina;

    // Quantidade de convidados
    let quantidadeConvidados = informacoesDeEntrada.convidados.value;

    carne = quantidadeConvidados * multiplicadorCarne;
    frango = quantidadeConvidados * multiplicadorFrango;
    suina = quantidadeConvidados * multiplicadorSuina;

    return { carne, frango, suina };
}

// Calculo Valores / recebe a quantidade da função já processada
function valor(quantidades, informacoesDeEntrada) {
    let carne, frango, suina;

    // Calculo carne
    carne = quantidades.carne * stringParaFloat(informacoesDeEntrada.bovina.value);

    // Calculo Frango
    frango = quantidades.frango * stringParaFloat(informacoesDeEntrada.frango.value);

    //calculo Suina
    suina = quantidades.suina * stringParaFloat(informacoesDeEntrada.suina.value);

    return { carne, frango, suina };
}

// Somando Totais quantidade/preço
function total(quantidade, informacoesDeEntrada) {
    // Valor Total
    let valor = informacoesDeEntrada.carne + informacoesDeEntrada.frango + informacoesDeEntrada.suina;

    // Quantidade Total
    let quantidadeTotal =
        quantidade.carne +
        quantidade.frango +
        quantidade.suina;

    return {
        valor,
        quantidadeTotal,
    };
}

// Apresentando valores

export { calcularComida };
