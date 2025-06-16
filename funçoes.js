function saudacao(nome) {
  return "Olá, " + nome + "!";
}

console.log(saudacao("Maria")); // Olá, Maria!

// Função anônima
const quadrado = function(x) {
  return x * x;
};

// Arrow function (ES6+)
const cubo = x => x * x * x;