// Funcoes setTimeout

console.log('AINDA N EXECUTOU');

setTimeout(function(){ //Funcao anonima
    console.log('REQUISICOES ASSICRONAS');
}, 2000); // 2000ms e a quantidade de tempo depois, deve ser executada essa funcao

console.log('AINDA N EXECUTOU 2');

// Funcoes setInterval
console.log('\n\n')

console.log('AINDA N EXECUTOU setInterval');

//setInterval(function(){
//    console.log('Intervado Assincrono.');
//}, 3000); //vai ficar executando de 3000ms em 3000ms, um loop infinito. 

console.log('AINDA N EXECUTOU setInterval');

// Promises
console.log('\n\n')

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
console.log('\n\n')

Promise.resolve(4*'abc')
.then((n) => {
    if(Number.isNaN(n)){ // Se o valor do (n) n for um numero
        throw new Error('VALOR INVALIDO')
    }
})
.catch((err) => console.log(`Ocorreu Um Erro: ${err}`));