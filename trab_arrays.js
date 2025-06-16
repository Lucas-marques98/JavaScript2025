let numeros = [1, 2, 3, 4, 5];

// Métodos importantes
numeros.push(6); // adiciona no final
numeros.pop(); // remove do final
numeros.shift(); // remove do início
numeros.unshift(0); // adiciona no início

// Métodos de iteração
numeros.forEach(num => console.log(num));
let dobrados = numeros.map(num => num * 2);
let pares = numeros.filter(num => num % 2 === 0);
let soma = numeros.reduce((total, num) => total + num, 0);

// Spread operator
let maisNumeros = [...numeros, 6, 7, 8];