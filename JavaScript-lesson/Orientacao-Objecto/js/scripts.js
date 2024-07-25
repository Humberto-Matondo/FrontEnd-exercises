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
