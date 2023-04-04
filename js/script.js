// #1
let numbers = [2, 4, 1, 4, 7, 3, 2, 7, 9, 3, 2, 34, 54, 47, 79, 37, 69, 13456]
let ch = numbers.filter(num => num % 2 === 0)
let nch =numbers.filter(num => num %2!==0)
 let even = [] // четные  
 let odd = [] // не четные
 even.push(ch)
 odd.push(nch)
console.log(even, odd)

// #2

let arr = ['morgen', 'nikolay', 'alexander', 'yulduz', 'timati', 'alice', 'bob', 'charlie', 'david', 'emily'];
let longestName = arr.reduce((a, b) => a.length > b.length ? a : b);


console.log(`Самое длинное имя: ${longestName}`);






// let names = ['morgen', 'nikolay', 'alexander', 'yulduz', 'timati'];

// let longestName = "";
// for (let i = 0; i < names.length; i++) {
//   if (names[i].length > longestName.length) {
//     longestName = names[i];
//   }
// }

// console.log("Самое длинное имя в массиве:", longestName);