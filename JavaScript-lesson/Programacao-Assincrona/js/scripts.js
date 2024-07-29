// Funcoes setTimeout

console.log('AINDA N EXECUTOU');

setTimeout(function(){ //Funcao anonima
    console.log('REQUISICOES ASSICRONAS');
}, 2000); // 2000ms e a quantidade de tempo depois, deve ser executada essa funcao

console.log('AINDA N EXECUTOU 2');

// Funcoes setInterval
console.log('\n\n')

console.log('AINDA N EXECUTOU setInterval');

setInterval(function(){
    console.log('Intervado Assincrono.');
}, 3000); //vai ficar executando de 3000ms em 3000ms, um loop infinito. 

console.log('AINDA N EXECUTOU setInterval');
