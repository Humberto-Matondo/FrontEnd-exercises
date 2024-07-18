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

const frutas = ['Melancia','Pera','Ananas','Pera'];

console.log(`Index : ${frutas.indexOf('Ananas')}`);
console.log(`Elemento do index: ${frutas[frutas.indexOf('Ananas')]}`);

console.log(`Indice/Possicao do ultimo repetido: ${frutas.lastIndexOf('Pera')}`);

// ARRAYS: slice

