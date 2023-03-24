// Crie um array vazio chamado sacolao, e siga os passos abaixo:

const sacolao = []

// a) Fora do array, crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades:

const fruta1 = {
    nome: "abacaxi",
    preço: 3.5,
    disponibilidade: true
}
const fruta2 = {
    nome: "maçã",
    preço: 2.3,
    disponibilidade: true
}
const fruta3 = {
    nome: "melancia",
    preço: 5.0,
    disponibilidade: false
}

// nome: string;
// preco: number;
// disponibilidade: boolean;
// b) Adicione os objetos ao array sacolao utilizando o método push().

sacolao.push(fruta1, fruta2, fruta3)

// c) Imprima o array sacolao, e certifique-se de que agora ele seja um array com três objetos.

console.log(sacolao)