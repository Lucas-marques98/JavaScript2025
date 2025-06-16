let nome = prompt("Digite seu nome:");
let idade = prompt("Digite sua idade:");
let cidade = prompt("Digite sua cidade:");
let estado = prompt("Digite seu estado:");
let pais = prompt("Digite seu país:");
let profissao = prompt("Digite sua profissão:");
let hobby = prompt("Digite seu hobby:");
let corFavorita = prompt("Digite sua cor favorita:");
let comidaFavorita = prompt("Digite sua comida favorita:");

console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
console.log(`Cidade: ${cidade}`);
console.log(`Estado: ${estado}`);
console.log(`País: ${pais}`);
console.log(`Profissão: ${profissao}`);
console.log(`Hobby: ${hobby}`);
console.log(`Cor Favorita: ${corFavorita}`);
console.log(`Comida Favorita: ${comidaFavorita}`);
// Entrada de dados do usuário
// Exemplo de uso de variáveis
let saudacao = `Olá, ${nome}! Você tem ${idade} anos e mora em ${cidade}, ${estado}, ${pais}.`;
console.log(saudacao);
// Exemplo de cálculo de IMC
let peso = prompt("Digite seu peso (em kg):");
let altura = prompt("Digite sua altura (em metros):");
let imc = peso / (altura * altura);
console.log(`Seu IMC é: ${imc}`);
// Exemplo de verificação de idade
if (idade >= 18) {
    console.log("Você é maior de idade.");
}           
else {
    console.log("Você é menor de idade.");
}       
// Exemplo de verificação de profissão
if (profissao.toLowerCase() === "programador") {
    console.log("Você é um programador!");
}   
else {
    console.log("Você não é um programador.");
}       // Fim da verificação de profissão  

// Exemplo de verificação de hobby
if (hobby.toLowerCase() === "jogar") {
    console.log("Você gosta de jogar!");
}      
else {
    console.log("Você não gosta de jogar.");
}       // Fim da verificação de hobby
// Exemplo de verificação de cor favorita
if (corFavorita.toLowerCase() === "azul") {
    console.log("Sua cor favorita é azul!");
}   
else {
    console.log("Sua cor favorita não é azul.");
}       // Fim da verificação de cor favorita
// Exemplo de verificação de comida favorita

if (comidaFavorita.toLowerCase() === "pizza") {
    console.log("Sua comida favorita é pizza!");
}   
else {
    console.log("Sua comida favorita não é pizza.");
}       // Fim da verificação de comida favorita
// Exemplo de verificação de país

if (pais.toLowerCase() === "brasil") {
    console.log("Você é brasileiro!");
}   
else {
    console.log("Você não é brasileiro.");
}       // Fim da verificação de país
// Exemplo de verificação de estado
if (estado.toLowerCase() === "são paulo") {
    console.log("Você mora em São Paulo!");
}
else {
    console.log("Você não mora em São Paulo.");
}       // Fim da verificação de estado
// Exemplo de verificação de cidade
if (cidade.toLowerCase() === "são paulo") {
    console.log("Você mora em São Paulo!");
}
else {
    console.log("Você não mora em São Paulo.");
}       // Fim da verificação de cidade
// Exemplo de verificação de idade com mensagem personalizada
if (idade >= 18) {
    console.log(`Você é maior de idade, ${nome}.`);
}
else {
    console.log(`Você é menor de idade, ${nome}.`);
}
// Fim da verificação de idade com mensagem personalizada
// Exemplo de verificação de profissão com mensagem personalizada
if (profissao.toLowerCase() === "programador") {
    console.log(`Você é um programador, ${nome}!`);
}
else {
    console.log(`Você não é um programador, ${nome}.`);
}   
// Fim da verificação de profissão com mensagem personalizada
// Exemplo de verificação de hobby com mensagem personalizada   