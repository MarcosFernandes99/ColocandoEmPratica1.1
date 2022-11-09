// DESAFIO: UTILIZE OS OPERADORES LÓGICO VISTOS EM AULA PARA TRADUZIR AS EXPRESSÕES LÓGICAS CONFORME EXEMPLO.
// EXEMPLO: "SE BEBO AGUA E SUCO, MINHA SEDE TERMINA"


// 1) "SE CAMINHO 5KM E CORRO 2KM, PASSO O DIA BEM"

var caminhar = 5
var correr = 2

if(caminhar >= 5 && correr >=2){
    console.log("passo o dia bem")
}

// 2) "SE LEVANTO CEDO OU ANTES DAS 8H, SAIO TRANQUILO"

var levantar = `cedo`

if(levantar == "cedo" || levantar == 8){
    console.log(`saio tranquilo`)
}

// 3) "SE NÃO TERMINO O TRABALHO OU NÃO TENHO COMPROMISSO, SAIO TARDE"

var terminarTrabalho
var tenhoCompromisso

if(!terminarTrabalho || !tenhoCompromisso){
    console.log(`saio tarde`)
}