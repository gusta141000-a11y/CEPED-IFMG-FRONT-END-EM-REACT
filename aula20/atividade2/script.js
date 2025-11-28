class NaNError extends Error{
    constructor(){
        super(`Não é um numero.`)
        this.name = "NaNError"
    }
}

function ErroNaN(valor){
    if (valor = isNaN){
        throw new NaNError()
    }
    return Math.sqrt(valor)
}
try {
    console.log(calcularRaiz(a))
} catch (erro){
    console.log(`Erro Nome: ${erro.nome}`)
    console.log(`Erro capturado: ${erro.message}`)
}