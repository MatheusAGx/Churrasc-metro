// Carne - 400 gr por pessoa + 6 horas - 650
// Cerveja - 1200 ml por pessoa + 6 horas - 2000ml
// Refrigerante/Agua - 1000ml por pessoa + 5 horas 1500ml

// crianças valem por 0.5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");


let resultado = document.getElementById("resultado")

function calcular() {
    console.log("Calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qntTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qntTotalCerveja = cervejaPP(duracao) * adultos;
    let qntTotalBebida = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qntTotalCarne/1000}kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qntTotalCerveja/335)} latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qntTotalBebida/2000)} garrafas de Refrigerante/Água</p>`
    
}

function carnePP(duracao) {
    if(duracao >= 6){
        return 650; }
    else {
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000
    } else {
        return 1200
    }
}

function bebidasPP(duracao){
    if(duracao >= 5) {
        return 1500
    } else {
        return 1000
    }
}

