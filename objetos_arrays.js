let carro = {
  marca: "Ford",
  modelo: "Mustang",
  ano: 1969,
  ligar: function() {
    return "Vrum vrum!";
  }
};

// Acessando propriedades
console.log(carro.marca); // Ford
console.log(carro["modelo"]); // Mustang

// Adicionando propriedades
carro.cor = "vermelho";

// Classes (ES6+)
class Animal {
  constructor(nome) {
    this.nome = nome;
  }
  
  falar() {
    return `${this.nome} faz um barulho.`;
  }
}

class Cachorro extends Animal {
  falar() {
    return `${this.nome} late!`;
  }
}

let rex = new Cachorro("Rex");
console.log(rex.falar()); // Rex late!