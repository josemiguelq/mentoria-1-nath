// Quantos milisegundos faltam
// Math.abs -> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
let milisegundosRestantes = Math.abs(new Date(2022,11,10 ) - new Date());

// Milisegundos em dias
// 1000ms -> 1seg
// 1 min -> 60seg
// 1 hora -> 60 min
// 1 dia -> 24 horas
let diasRestantes = milisegundosRestantes /(1000 * 60 * 60 * 24)

// Vai retornar um numero quebrado, por agora quero so os dias entao uso: Math.ceil
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
let diasInteirosRestantes = Math.ceil(diasRestantes)

// simbolo + usado em textos serve para grudar
const message = 'Faltam ' + diasInteirosRestantes + " dias"

// Atualiza o texto
document.querySelector('#header').innerHTML = message

// Log to console
console.log(message)
