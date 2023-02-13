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


// // Well of Ideas - Easy Version
// function well(x) {
//     let goodCount = 0;
//     for(let idea of x) {
//         if((goodCount += idea === "good") > 2) {
//             break;
//         }
//     }
//     return goodCount ? goodCount === 3 ? "I smell a series!" : "Publish!" : "Fail!";
// }
// console.log(well(["bad","bad","good","bad","good","bad","bad","good","good","good","bad","bad"]));


// //Sum of Minimums!
//
// function sumOfMinimums(arr) {
// let a = 0;
//     arr.map( el => {
//       a += el.sort( (a,b)=> a - b  ).shift()
//     } )
// return a
// }
// console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]));

// //Descending Order
// function descendingOrder(n){
// let a = 0
//     a = n.toString().split('').sort( (a,b)=> b - a ).join('')
//  return Number(a)
// }
// console.log(descendingOrder(123456789));


// //Get the Middle Character
// function getMiddle(s) {
// let x = '';
//     s.split('').find( el => {
//        let a = s.length % 2 === 1 ?
//          x = s.slice(Math.floor(s.length / 2), Math.floor(s.length/2 + 1))
//            : x = s.slice(Math.floor(s.length / 2) - 1, Math.floor(s.length / 2) + 1)
//     } )
//     return x
// }
//
// console.log(getMiddle("testin"));


//===================================================================================================================
// let bb = [];
// function accum(s) {
//
//     s = s.toLowerCase()
//     let x = [];
//     s.split('').map((el, index) => {
//         x += el.repeat(index + 1) + "-";
//     })
//      bb =  x.split('-').map( el => { el[0].toUpperCase() + el.unshift() })
//   return bb
// }
//
// console.log(accum("HbideVbxncC"));//, "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc")
//===================================================================================================================

// //List Filtering
// function filter_list(l) {
//     let a = []
//     l.map( el => typeof el === 'number' ? a.push(el) : '' )
//     return a
// }
//
// console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));
// console.log( typeof 10)