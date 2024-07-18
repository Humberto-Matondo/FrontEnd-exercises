const lista = [1,2,3,4,5];

console.log(lista);

const a = {
    nome: "MATONDO",
};

const b = a;


console.log(a);
console.log(b);
console.log(a === b);

const users = ['Humberto','Carlos','Pinto','Miguel','Ricardo'];

console.log('Listando usuarios:');

for(let i = 0; i < users.length; i++){
    console.log(`Usuario: ${users[i]}`);
};

users.push('Kiluanje');
console.log(users);

users.pop();
console.log(users);

const letters = ['d','e','f','g','h'];
const letter = letters.shift();

console.log(letters);
console.log(letter);

letters.unshift('a','b','c');
console.log(letters);

