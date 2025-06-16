// for
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

// for...of (para arrays)
let frutas = ["maçã", "banana", "laranja"];
for (let fruta of frutas) {
  console.log(fruta);
}

// for...in (para objetos)
let pessoa = {nome: "João", idade: 30};
for (let chave in pessoa) {
  console.log(chave + ": " + pessoa[chave]);
}

for(let i = 0; i <100; i++) {
  console.log(` você tem que fazer isso varias vezes${i}`);
}