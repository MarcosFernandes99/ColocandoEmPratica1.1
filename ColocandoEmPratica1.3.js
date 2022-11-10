// DESAFIO: UTILIZE ESTRUTURAS CONDICIONAIS VISTAS EM AULA PARA RESOLVER AS TAREFAS:


// 1) SEM UTILIZAR A ESTRUTURA CONDICIONAL IF.ELSE, VERIFIQUE SE O VALOR ARMAZENADO EM UMA
// VARIÁVEL É UM NÚMERO PRIMO, OU SEJA, SÓ É DIVISÍVEL POR 1 E ELE MESMO.


var numero = 7
var primo = false

numero % 1 === 0 && numero % numero === 0 ? primo = true : console.log(primo)
    
console.log(primo)


// 2) 

var hora = 1
var minutos = 0

hora > 0 ? minutos = hora * 60 : minutos = 60

console.log(minutos)