// ARRAYS: 

const lista = [1,2,3,4,5];

console.log(lista);

// OBJECT: 

const a = {
    nome: "MATONDO",
};

const b = a;


console.log(a);
console.log(b);
console.log(a === b);

// ESTRUTURA DE REPETICAO EM ARRAYS: 

const users = ['Humberto','Carlos','Pinto','Miguel','Ricardo'];

console.log('Listando usuarios:');

for(let i = 0; i < users.length; i++){
    console.log(`Usuario: ${users[i]}`);
};

// ARRAYS: Pop and Push 

users.push('Kiluanje');
console.log(users);

users.pop();
console.log(users);

// ARRAYS: shift and unshift 

const letters = ['d','e','f','g','h'];
const letter = letters.shift();

console.log(letters);
console.log(letter);

letters.unshift('a','b','c');
console.log(letters);

// ARRAYS: IndexOf and lastIndex

const frutas = ['Melancia','Pera','Ananas','Pera', 'Manga'];

console.log(`Index : ${frutas.indexOf('Ananas')}`);
console.log(`Elemento do index: ${frutas[frutas.indexOf('Ananas')]}`);

console.log(`Indice/Possicao do ultimo repetido: ${frutas.lastIndexOf('Pera')}`);

// ARRAYS: slice

const subarray = frutas.slice(1,3); //N vai mostrar o PERA, para mostrar Indice + 1(4)
console.log(subarray);


const subarray2 = frutas.slice(1,4); //N vai mostrar o PERA, para mostrar Indice + 1(4)
console.log(subarray2);


const subarray3 = frutas.slice(1); // vai pegar de 1 ate ao final 
console.log(subarray3);

// ARRAYS: forEach

const nums = [7,8,9,10,11];

nums.forEach((numero) => { //O numero e o proprio elemento 
    console.log(`O numero: ${numero}`); 
});

const posts = [
    { title: 'Primeiro Post', category: 'NADA'},
    { title: 'Segundo Post', category: 'OLA'},
    { title: 'Terceiro Post', category: 'OI'},
];

posts.forEach((post) => {
    console.log(`Post: ${post.title} da Catedoria: ${post.category}`);
});

// ARRAYS: INCLUDES
const brands = ['Nike','Adidias','BMW'];
console.log(brands.includes('Nike'));
console.log(brands.includes('Mercedes'));

// ARRAYS: Reverse

console.log(nums);

nums.reverse();
console.log(nums);

// Metodos de STRING: trim

const trimTeste = "Ola Mundo 3";

console.log(trimTeste);
console.log(trimTeste.trim());
console.log(trimTeste.length);
console.log(trimTeste.trim().length);

// Metodos de STRING: Padstart 

const testPadstart = '1';

const newNumber = testPadstart.padStart(4,'0'); // 4 digitos no maximo preenchidos com 0s

console.log(testPadstart);
console.log(newNumber);

// Metodos de STRING: split 

const frase = 'O rato roeu a roupa do rei da roma'; 
const arrayfrase = frase.split(' ');

console.log(arrayfrase);

// Metodos de STRING: join 

const fraseNova = arrayfrase.join(' ');
console.log(fraseNova);

const itensAcomprar = ['Mouse','Tela','Colunas'];
const fraseDeCompras = `Preciso comprar ${itensAcomprar.join(', ')}.`;

console.log(fraseDeCompras);

// Metodos de STRING: Repeat

const palavra = 'Testando';
console.log(palavra.repeat(7)); //Vai repetir 7 vezes

// Rest Operator/ Rest Parameter

const somaInfinita = (...args) => {
    let total = 0;

    for (let i = 0; i< args.length; i++) {
        total += args[i];
    }

    return total;
};

console.log(somaInfinita(1,2,3));

// Estrutura de repeticao For...OF 

const somaInfinita2 = (...args) => {
    let total = 0;

    for( num of args ) { 
        total += num;
    };

    return total;
};

console.log(somaInfinita2(10,22,323));


// Destructuring em objetos 

const userDetails = {
    nome: 'Humberto Fuas',
    job: 'Dev Full-Stack',
};

const {nome, job} = userDetails; //Estrutuda do Destructuring 
console.log(nome, job);

const {nome: nomeCompleto} = userDetails; // Cria a variavel nomeCompleto e add o valor que se encontra no NOME dentro do OBJECT
console.log(nomeCompleto, job);

