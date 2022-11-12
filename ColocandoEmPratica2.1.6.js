/// CRIANDO REPOSITÓRIO
//EXERCICIO 1
// function confirmarDados(nome) {
//     var nomeComleto = nome + ` da Silva`;    
//     function getAnoNascimento (){
//         var idade = 20;
//         var ano = 2022 - idade;
//         console.log("ano", ano)
//         console.log("idade", idade)     
//     }
//     console.log(`nome completo`, nomeComleto);
//     getAnoNascimento()
// }
// confirmarDados(`Marcos`);

//EXERCICIO 2
// function confirmarDados(nome) {
//     const nomeComleto = nome + ` da Silva`;
//     let geracao = `millenium`  

//     function getAnoNascimento (){
//         const idade = 40;
//         const ano = 2022 - idade;
//         return ano;    
//     }

//     const anoDeNascimento = getAnoNascimento();   

//     console.log(`nome completo`, nomeComleto)
//     console.log(`ano de nascimento`, anoDeNascimento)
    
//     if(anoDeNascimento <= 1995){
//         let geracao = "geração x"
//         console.log(geracao)
//     }
// }
// confirmarDados(`Marcos`);

//EXERCICIO 3
// try {
//     function confirmarDados(nome) {
//         var nomeComleto = nome + ` da Silva`;
//         function getAnoNascimento() {
//             var idade = 20;
//             var ano = 2022 - idade;
//             return ano
//         }
//         console.log(`nome completo`, nomeComleto);
//         console.log(`ano de nascimento`, getAnoNascimento())

//         throw new Error("um erro foi encontrado e não foi possível concluir a operação")

//         console.log(`idade`, idade)     
            
//     }
//     confirmarDados(`Marcos`);
// } catch (error) {
//     console.log(`entrou no catch`)
//     console.log(typeof error)
//     console.log(error.message)
// }

// EXERCICIO 4

function confirmarDados(nome) {
        var nomeComleto = nome + ` da Silva`;
        var geracao = `millenium`  
    
        function getAnoNascimento (){
            var ano = 2022 - idade
            return ano   
        }
    
        var anoDeNascimento = getAnoNascimento()

        if(anoDeNascimento <= 1995){
            var geracao = "geracao X"
        }

        console.log(`nome completo`, nomeComleto)
        console.log(`ano de nascimento`, anoDeNascimento)
        console.log(`geração`, geracao)
    }
    confirmarDados(`Marcos`, 40);