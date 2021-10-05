function apresentar(nome) {
  return `Meu nome é ${nome}`;
}

const showArrow = (nome) => `Meu nome é ${nome}`;
const soma = (num1,num2) => num1 + num2

//ARROW FUNCTION COM MAIS DE UMA LINHA DE CÓDIGO

const somaNum = (numer1,numer2) => {
    if (numer1 || numer2 > 10){
        return "somente numeros de 0 a 9"
    }else{
        numer1 + numer2
    }
}