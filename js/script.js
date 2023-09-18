import { calcularComida } from "./comida.js";
import { calcularBebida } from "./bebidas.js";
import {
    mostrarComida,
    mostrarBebida,
    zerarCampos,
    apresentarResposta,
    obterFormulario,
} from "./dom.js";
import {
    validacoes,
    validacoesCampos,
} from "./validacoes.js";
import { formatarMoeda } from "./mascara.js";

const informacoesDeEntrada = obterFormulario();

// Máscara
formatarMoeda(informacoesDeEntrada);

//Validações de eventListener
validacoesCampos(informacoesDeEntrada)

// Execução Calculo Comida
function comida(convidados) {
    let valoresComidaCalculado = calcularComida(convidados, informacoesDeEntrada);
    mostrarComida(valoresComidaCalculado);
}

// Execução Cálculo Bebidas
function bebida(quantidadeConvidados, quantidadeDePessoasBebem) {
    let valoresBebidaCalculado = calcularBebida(
        quantidadeConvidados,
        informacoesDeEntrada,
        quantidadeDePessoasBebem
    );
    mostrarBebida(valoresBebidaCalculado);
}

// Envio dos campos
informacoesDeEntrada.addEventListener("submit", (event) => {
    event.preventDefault();
    // Verificação alert
    if (
        validacoes(
            informacoesDeEntrada.quantidadePessoasBebemAlcool,
            informacoesDeEntrada.cerveja,
            informacoesDeEntrada
        )
    ) {
        comida(informacoesDeEntrada.convidados);
        bebida(
            informacoesDeEntrada.convidados,
            informacoesDeEntrada.quantidadePessoasBebemAlcool
        );
        apresentarResposta();
        zerarCampos(informacoesDeEntrada);
    }
});
