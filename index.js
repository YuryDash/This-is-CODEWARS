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


// //Super Duper Easy
// const solution = (str, ending) => str.endsWith(ending)


// //What's the real floor?
// function getRealFloor(n) {
//     return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
// }


//Exes and Ohs
// function XO(str) {
//     debugger
//     let xx = []
//     let oo = []
// str.split('').map( el => el.toLowerCase() == 'x' ? xx.push(el) : el.toLowerCase() == 'o' ? oo.push(el) : console.log(el) )
//     return xx.length === oo.length
// }


// //Find the stray number
// function stray(numbers) {
//     const a = numbers.sort();
//     if (a[0] === a[1]) {
//         return a[a.length - 1]
//     } else {
//         return a[0]
//     }
// }
//
//
// console.log(stray([1, 1, 2]));
// console.log(stray([1, 2, 2]));
// console.log(stray([1, 2, 1]));
// console.log(stray([2, 2, 1]));



// function disemvowel(str) {
//     let arr = ['a', 'A', 'o', 'O', 'e', 'E', 'u', 'U', 'i', 'I']
//     str = str.split('').filter( el => el !== arr[0] )
//         .filter( el => el !== arr[1] )
//         .filter( el => el !== arr[2] )
//         .filter( el => el !== arr[3] )
//         .filter( el => el !== arr[4] )
//         .filter( el => el !== arr[5] )
//         .filter( el => el !== arr[6] )
//         .filter( el => el !== arr[7] )
//         .filter( el => el !== arr[8] )
//         .filter( el => el !== arr[9] )
//     return str.join(' ')
// }
//
// console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"));


// function findShort(s){
//     return s.split(' ').map( el => el.length).sort( (a,b)=> a - b )[0]
//
// // return s
// }
//
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));


// Regex validate PIN code
// function validatePIN(pin) {
//     const preparedPin = pin.replace(/\D/g, '');
//
//     return preparedPin === pin && (pin.length === 4 || pin.length === 6);
//
// }


// // Make a function that does arithmetic!
//
// const arithmetic = (a, b, operator) => ({
//     'add': a + b,
//     'subtract': a - b,
//     'multiply': a * b,
//     'divide': a / b,
// }[operator])

//Friend or Foe?
// function friend(friends){
//
//     let a = []
//     for( let i = 0; i < friends.length; i++){
//         friends[i].length === 4 ? a.push(friends[i]) : ''
//     }
//     return a
//
// }

// //Categorize New Member
// function openOrSenior(data){
//     let a = []
// data.map( el => el[0] > 55 && el[1] > 0 ? a.push('Senior') : a.push('Open'))
//     return a
// }
// console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]));
// console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [53, 23]]));    //,['Open', 'Open', 'Open', 'Open']).log
// console.log(openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]]));  //,['Senior', 'Open', 'Open', 'Open']).log



// const shortestWord = (str) => {
// return    str.split(' ').map( el => {
//
// } )
// }
// console.log(shortestWord('Lorem ipsum dolor sit amet.')); // sit
// console.log(shortestWord('consectetur adipisicing elit. rem')); // rem



// // Sum a list but ignore any duplicates
// function sumNoDuplicates(numList) {
// const a = numList.filter( (num, i)=> numList.indexOf(num) === i && numList.lastIndexOf(num)===i )
//     return a.reduce( (a,b)=> a + b )
// }
//
// console.log(sumNoDuplicates([2,2,2,0,9,8,2]));


// //Reverse words
// const reverseWords = (str) => str.split('').reverse().join('').split(' ').reverse().join(' ')
//
//
// console.log(reverseWords('double  spaced  words'));

// const  basicOp = (operation, value1, value2) => {
//   return eval(value1 + operation + value2)
// }
//
// console.log(basicOp('+', 4, 7));
// console.log(basicOp('-', 15, 18));
// console.log(basicOp('*', 5, 5));
// console.log(basicOp('/', 49, 7));