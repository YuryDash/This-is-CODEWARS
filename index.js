//
// // при помощи вычислительных выражений найти наибольшую сумму чисел а В с
// function expressionMatter(a, b, c) {
//     return Math.max(
//         a + b + c,
//         a * b * c,
//         a * (b + c),
//         (a + b) * c,
//     );
// }
//
// // аргумент функции положительное число , которое должно вернуть нужную фразу от 1 до 6 и так по кругу
// function howMuchILoveYou(nbPetals) {
//     let phrase = {
//         0: "not at all",
//         1: "I love you",
//         2: "a little",
//         3: "a lot",
//         4: "passionately",
//         5: "madly"
//     }
//     return phrase[nbPetals%6]
// }
// const  maxProduct = (numbers, size) =>   numbers.sort((a, b) => b - a).slice(0, size).reduce((a, b) => a * b)
// console.log(maxProduct([13,12,-27,-302,25,37,133,155,-14], 5));


//  function solution(roman) {
//  let res = 0;
//  const romanMap = {M:1000, D:500, C:100, L:50, X:10, V:5, I:1};
//  const others = ["CD", "CM", "XL", "XC", "IV", "IX"];
//  for(let i=0; i < roman.length; i++){
//   others.indexOf(roman[i]+ roman[i+1]) === -1 ? res += romanMap[roman[i]] : res -= romanMap[roman[i]];
//  }
//  return res;
// }
//
// console.log(solution("MMIIV"));


//
// let a
// let b
//
// function highAndLow(numbers){
//  a = numbers.split(' ').sort( (a,b)=> a - b )[0].toString()
//  b = numbers.split(' ').sort( (a,b)=> a - b ).pop().toString()
//  return (b +" "+ a)
// }
//
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));