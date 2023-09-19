import { stringParaFloat } from "./helpers.js";

let multiplicadorBovina = 0.2;
let multiplicadorFrango = 0.1;
let multiplicadorSuina = 0.1;

function calcularComida(valoresEntrada) {
  let quantidadesComida = quantidade(valoresEntrada);
  let valoresComida = valor(quantidadesComida, valoresEntrada);

  return {
    quantidades: {
      ...quantidadesComida,
    },
    valores: {
      ...valoresComida,
    },
    totais: {
      ...total(quantidadesComida, valoresComida),
    },
  };
}

// Calculo quantidade
function quantidade(valoresEntrada) {
  calcularMultiplicador(valoresEntrada);
  let bovina, frango, suina;

  // Quantidade de convidados
  let quantidadeConvidados = valoresEntrada.quantidadeConvidados;

  bovina = quantidadeConvidados * multiplicadorBovina;
  frango = quantidadeConvidados * multiplicadorFrango;
  suina = quantidadeConvidados * multiplicadorSuina;

  return { bovina, frango, suina };
}

// Calculo verificadores
function calcularMultiplicador(valoresEntrada) {
  let valorFrango = valoresEntrada.valorFrango;
  let valorSuina = valoresEntrada.valorSuina;

  if (valorFrango === "" && valorSuina === "") {
    multiplicadorBovina = 0.4;
    multiplicadorFrango = 0;
    multiplicadorSuina = 0;
    return;
  }

  if (valorFrango === "") {
    multiplicadorBovina = 0.25;
    multiplicadorFrango = 0;
    multiplicadorSuina = 0.15;
    return;
  }

  if (valorSuina === "") {
    multiplicadorBovina = 0.25;
    multiplicadorFrango = 0.15;
    multiplicadorSuina = 0;
    return;
  }
}

// Calculo Valores / recebe a quantidade da função já processada
function valor(quantidadesComida, valoresEntrada) {
  let bovina, frango, suina;

  // Calculo bovina
  bovina =
    quantidadesComida.bovina * stringParaFloat(valoresEntrada.valorBovina);

  // Calculo Frango
  frango =
    quantidadesComida.frango * stringParaFloat(valoresEntrada.valorFrango);

  //calculo Suina
  suina = quantidadesComida.suina * stringParaFloat(valoresEntrada.valorSuina);

  return { bovina, frango, suina };
}

// Somando Totais quantidade/preço
function total(quantidadesComida, valoresComida) {
  // Valor Total
  let valor = valoresComida.bovina + valoresComida.frango + valoresComida.suina;

  // Quantidade Total
  let quantidadeTotal =
    quantidadesComida.bovina +
    quantidadesComida.frango +
    quantidadesComida.suina;

  return {
    valor,
    quantidadeTotal,
  };
}

// Apresentando valores

export { calcularComida };
