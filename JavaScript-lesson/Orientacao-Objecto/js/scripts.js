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
 

// Classes Basicas
console.log('\n\n');

const cachorro = { // Essa e a classe cachorro
    raca: null,
    patas: 4,
};

const pastroAlemao = Object.create(cachorro); // FORMA DE ESTANSIAR A CLASSE (Criar um objeto, que herda o Obj cachorro)
pastroAlemao.raca = 'Pastor Alemao'; // A raca desse Obj mudara sera  'Pastor Alemao'.

console.log(pastroAlemao); 
console.log(pastroAlemao.patas); 

const bulldog = Object.create(cachorro);
bulldog.raca = 'bulldog';
console.log(bulldog); 

// Classes Baseadas em Funcoes Construtoras. 
console.log('\n\n');

function criarCachorro(nome, raca){

    const cachorro = Object.create({});
    cachorro.nome = nome;
    cachorro.raca = raca;
    return cachorro;
}

const snow = criarCachorro('Snow', 'Caffeiro-Mistura');
console.log(snow);


const bob = criarCachorro('Bod', 'Pastor alemao');
console.log(bob);

// E bem mais rapito, limpo e pratico criar assim as funcoes. 

// Funcoes Construtoras(Classes baseadas em funcoes) 
console.log('\n\n');


// ESSA FORMA ABAIXO, E A MAIS SIMPLIFICADA DE CRIAR UM OBJ:

function Cachorro(nome, raca){ // Essa e a MELHOR E NOVA FORMA de se declarar a classe.
    this.nome = nome
    this.raca = raca
};

const pitbull = new Cachorro('Max','pittbull'); // Melhor forma e nova de se instanciar um OBJ.
console.log(pitbull);

// Metodos em Funcoes Contrutoras
console.log('\n\n');

Cachorro.prototype.uivar = function() { //Adicionou-se uma funcao nova(funcao Uivar) na classe Cachorro
    console.log('Uivando . . .');
};

pitbull.uivar();

// Classes ES6
console.log('\n\n');

class CachorroClasse { // E dessa forma que usa-se a classe aqui no JS.
    constructor(name, raca) {
        this.name = name
        this.raca = raca
    }
}

const jeff = new CachorroClasse('jeff','RAFEIRO');

console.log(jeff);
console.log(Object.getPrototypeOf(jeff));

// Mais sobre Classes: 
console.log('\n\n');

class Caminhao{
    constructor(eixos, cor){
        this.eixos = eixos
        this.cor = cor
    }

    descrevercaminhao(){
        console.log(`Este caminhao tem ${this.eixos} eixos  e tem a cor ${this.cor}`);
    }
}

const scania = new Caminhao(7,'Preto e Branco');
console.log(scania);
scania.descrevercaminhao();

Caminhao.prototype.motor = 4.0; // Unica forma para add novo metodo dentro da classe.
const c1 = new Caminhao(3,'Azul');


console.log(c1);
console.log(c1.motor);

// Override nas Propriedades via Prototype: 
console.log('\n\n');

class Humano{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }   
}

const humberto = new Humano('Humberto', 26);
console.log(humberto);

console.log(Humano.prototype.idade);

Humano.prototype.idade = 'N defenida';

console.log(humberto.idade);
console.log(Humano.prototype.idade);

