// Funcoes setTimeout

console.log('AINDA N EXECUTOU');

setTimeout(function(){ //Funcao anonima
    console.log('REQUISICOES ASSICRONAS');
}, 2000); // 2000ms e a quantidade de tempo depois, deve ser executada essa funcao

console.log('AINDA N EXECUTOU 2');

// Funcoes setInterval
console.log('\n\n');

console.log('AINDA N EXECUTOU setInterval');

//setInterval(function(){
//    console.log('Intervado Assincrono.');
//}, 3000); //vai ficar executando de 3000ms em 3000ms, um loop infinito. 

console.log('AINDA N EXECUTOU setInterval');

// Promises
console.log('\n\n');

const promises = Promise.resolve(20+6); //Prometeu resolver esse problema 

console.log('Um codigo');

promises.then(value => {    
    console.log(`A soma e ${value}`); //Mostrou o resultado do problema prometido, no final de tudo.
    return value; //Se quiseres voltar a usar o resultado na promise, precisas retornar o valor. 
}) //Essa parte a baixo e tudo opcional, caso queiraas voltar a usar o resultado
.then((value) => value - 6)
.then((value) => console.log(`Agora essa e a soma: ${value}`));

console.log('Outro codigo');

// Falha na Promise
console.log('\n\n');

Promise.resolve(4*'abc')
.then((n) => {
    if(Number.isNaN(n)){ // Se o valor do (n) n for um numero
        throw new Error('VALOR INVALIDO')
    }
})
.catch((err) => console.log(`Ocorreu Um Erro: ${err}`));

// Rejeição na Promise
console.log('\n\n');

function checkNumber(n){
    return new Promise((resolve, reject) =>{

        if(n > 10){
            resolve('Numero e maior que 10');
        }else{
            reject(new Error('Numero e muito baixo'));
        }
    }); 
}

const a = checkNumber(20);
const b = checkNumber(10);

console.log(a, b);

a.then((v) => console.log(`O resultado ${v}`)).catch((err) => console.log(`Um erro ocorreu ${err}`));
b.then((v) => console.log`O resultado ${v}`).catch((err) => console.log(`Um erro ocorreu ${err}`));

// Resolvemos varias Promises
console.log('\n\n');

const p1 = new Promise((resolve, reject) =>{
    setTimeout(function(){
        resolve(10);
        }, 1000);
});

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) =>{
    if (30 > 10){
        resolve(30);
    } else {
        reject('Error!');
    }
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));  

// Async functions
console.log('\n\n');

async function somarComDalay(a,b){
    return a + b
}

somarComDalay(2, 4).then((value) => {
    console.log(`O valor da soma: ${value}`);
});

console.log('TESTAR ASYNC');

//  Instrucao await ou async await
console.log('\n\n');

function resolveComDelay(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resolveu a Promise');
        }, 2000);
    });
}

async function chamadaAsyncAwait(){
    console.log('CHAMANDO A PROMISE, E ESPERANDO O RESULTADO');
    const result = await resolveComDelay();
    console.log(`O resultado chegou: ${result}`);
}

chamadaAsyncAwait();