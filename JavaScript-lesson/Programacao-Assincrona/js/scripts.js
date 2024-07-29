// Funcoes setTimeout

console.log('AINDA N EXECUTOU');

setTimeout(function(){ //Funcao anonima
    console.log('REQUISICOES ASSICRONAS');
}, 2000); // 2000 e a quantidade de tempo depois, deve ser executada essa funcao

console.log('AINDA N EXECUTOU 2');