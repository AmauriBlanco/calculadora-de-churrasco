import { stringToFloat } from "./helpers.js";

function calcularComida(convidados, valores) {
    let multiplicador = verificarMultiplicador(valores);
    let quantidadesComida = quantidade(convidados, multiplicador);
    let valorComida = valor(quantidadesComida, valores);

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
function verificarMultiplicador(valores) {
    let multiplicadorCarne = 0.2;
    let multiplicadorFrango = 0.1;
    let multiplicadorSuina = 0.1;

    if (!valores.frango && !valores.suina) {
        multiplicadorCarne = 0.4;
        multiplicadorFrango = 0;
        multiplicadorSuina = 0;

        console.log("os dois vazios");
        return { multiplicadorCarne, multiplicadorFrango, multiplicadorSuina };
    }

    if (!valor.frango) {
        multiplicadorCarne = 0.25;
        multiplicadorSuina = 0.15;
        multiplicadorFrango = 0;
        console.log("frango vazios");
        return { multiplicadorCarne, multiplicadorFrango, multiplicadorSuina };
    }

    if (!valores.suina) {
        multiplicadorCarne = 0.25;
        multiplicadorFrango = 0.15;
        multiplicadorSuina = 0;
        console.log("suina vazios");
        return { multiplicadorCarne, multiplicadorFrango, multiplicadorSuina };
    }
}

// Calculo quantidade
function quantidade(convidados, multiplicador) {
    let carne, frango, suina;

    carne = convidados * multiplicador.multiplicadorCarne;
    frango = convidados * multiplicador.multiplicadorFrango;
    suina = convidados * multiplicador.multiplicadorSuina;

    return { carne, frango, suina };
}

// Calculo Valores / recebe a quantidade da função já processada
function valor(quantidades, valores) {
    let carne, frango, suina;

    // Calculo carne
    carne = quantidades.carne * stringToFloat(valores.bovina);

    // Calculo Frango
    frango = quantidades.frango * stringToFloat(valores.frango);

    //calculo Suina
    suina = quantidades.suina * stringToFloat(valores.suina);

    return { carne, frango, suina };
}

// Somando Totais quantidade/preço
function total(quantidades, valores) {
    // Valor Total
    let valor = valores.carne + valores.frango + valores.suina;

    // Quantidade Total
    let quantidade = quantidades.carne + quantidades.frango + quantidades.suina;

    return {
        valor,
        quantidade,
    };
}

// Apresentando valores

export { calcularComida };
