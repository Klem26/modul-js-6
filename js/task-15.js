const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];


const evenNumbers = numbers.filter(num => num % 2 === 0);
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(evenNumbers)
console.log( oddNumbers)