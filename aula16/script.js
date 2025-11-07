class Pessoa {
    constructor(nome,idade){
        this.nome = nome,
        this.idade = idade
    }
    apresentar()
        {console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
    apresentarIdade(){
        console.log(this.idade)
    }
}
let p1 = new Pessoa("Cristiane",45);
let p2 = new Pessoa("Gustavo",18)

p1.apresentar()
p2.apresentar()

p2.apresentarIdade()