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