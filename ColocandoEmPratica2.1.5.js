// CRIANDO REPOSITÓRIO

SolicitarInformaçõesDoUsuário();

function SolicitarInformaçõesDoUsuário (){
    let nome = prompt(`Digite o seu nome`)
    let senha = parseInt(prompt(`Digite a sua senha`))


    ValidarLogin(nome, senha)
}

function ValidarLogin (nomeParametro, senhaParametro){
    let novoNome = prompt(`Digite o seu nome`)
    let novaSenha = parseInt(prompt(`Digite o seu nome`))

    if(novoNome === nomeParametro && novaSenha === senhaParametro){
        console.log(`true`)
    }
    else{
        console.log(`false`)
    }

}