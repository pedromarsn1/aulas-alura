//Parâmetros de função
function soma(a, b) {
  return a + b;
}

/*console.log(soma(2000, 12));
console.log(soma(-898, 25));
console.log(soma(65, 10));*/
//parametros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
  return `Meu nome é ${nome}  e minha idade é ${idade}`;
}

console.log(nomeIdade("Pedro", 15));

function multi(num1, num2) {
  return num1 * num2;
}
                       //9        //6
console.log(multi(soma(4,3)));
