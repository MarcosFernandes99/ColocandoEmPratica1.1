let salario = 1400

ConferirPercentual(salario);


function ConferirPercentual(salario){
    let percentual = 0
    let salarioAtualizado = 0
    
    switch (salario) {
        case salario < 1500:
            percentual = (20/100) * 100
            salarioAtualizado = salario + percentual
            console.log(`Seu aumento será de ${percentual}% totalizando ${salarioAtualizado}`)
            break;

        case salario < 2000:
            percentual = (15/100) * 100
            salarioAtualizado = salario + percentual
            console.log(`Seu aumento será de ${percentual}% totalizando ${salarioAtualizado}`)
            break;

        case salario < 3000:
            percentual = (10/100) * 100
            salarioAtualizado = salario + percentual
            console.log(`Seu aumento será de ${percentual}% totalizando ${salarioAtualizado}`)
            break; 

        default:
            percentual = (5/100) * 100
            salarioAtualizado = salario + percentual
            console.log(`Seu aumento será de ${percentual}% totalizando ${salarioAtualizado}`)
            break;
}
}
