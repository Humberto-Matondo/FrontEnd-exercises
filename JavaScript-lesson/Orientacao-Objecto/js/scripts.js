// Metodos

const animal = {
    nome:'Bob',
    latir: function(){
        console.log('Latindo...');
    }
};

console.log(animal.nome);
animal.latir();

// Aprofundando em Metodos
console.log('\n\n');

const pessoa = {
    nome: 'Matondo',

    getNome: function(){
        return this.nome; // vai retornar o nome Matondo.
    },

    setNome: function(novoNome){
        this.nome = novoNome; // Vai mudar o nome Matondo para um novo nome.
    },


};

console.log(pessoa.nome);
console.log(pessoa.getNome());

pessoa.setNome('Humberto');

console.log(pessoa.nome);
console.log(pessoa.getNome());

// Prototype: Fallback
console.log('\n\n');

const text = 'Ola Mundo';
console.log(Object.getPrototypeOf(text)); // Vamos saber os ancestrais de um texto, ou seja a classe String, pq o texto e uma string que herda da classe String.

const boolean = false
console.log(Object.getPrototypeOf(boolean)); // Vamos saber os ancestrais de um boolea.

const arr = [];
console.log(Object.getPrototypeOf(arr)); // Vamos saber os ancestrais de um array.
 