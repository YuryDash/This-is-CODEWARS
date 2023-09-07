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


// function arithmeticSequenceElements(a, d, n) {
//     let ans = [];
//     for(let i = 0; i < n; i++){
//         ans.push(a+i*d)
//     };
//     return ans.join(', ')
// }
// console.log( arithmeticSequenceElements(100, -10, 10))//, "100, 90, 80, 70, 60, 50, 40, 30, 20, 10")


//Keep the Order
//
// const  keepOrder = (ary, val) => [...ary, val].sort( (a,b) => a - b  ).indexOf( val )
// console.log(keepOrder([1, 2, 3, 4, 7], 5));//, 4);
// console.log(keepOrder([1, 2, 3, 4, 7], 0));//, 0);
// console.log(keepOrder([1, 1, 2, 2, 2], 2));//, 2)


//Sort array by string length
// const  sortByLength = (array) => array.sort( (a,b) => a.length - b.length )
//
// console.log(sortByLength(["", "Moderately", "Brains", "Pizza"])); //,["", "Pizza", "Brains", "Moderately"]);
// console.log(sortByLength(["Longer", "Longest", "Short"]));//,["Short", "Longer", "Longest"]);


//
// function gimme (triplet) {
//     let a = [...triplet]
//     a.sort((a, b) => a - b)
//     return triplet.indexOf(a[1])
// }
//
// gimme([-2, -3, -1])//, 0);
// gimme([-5, -10, -14])//, 1);
// gimme([-2, -3.2, 1])//, 0);
// gimme([-5.2, -10.6, 14])//, 0)

// function countSheeps(arrayOfSheep) {
//     let lol = 0
//     arrayOfSheep.map(el => {
//         el === true ? lol += 1 : ''
//     })
//     return lol
// }
//
// console.log(countSheeps([true, true, true, false,
//     true, true, true, true,
//     true, false, true, false,
//     true, false, false, true,
//     true, true, true, true,
//     false, false, true, true]));


//Sum of two lowest positive integers
//const sumTwoSmallestNumbers = (numbers) => numbers.sort( (a,b)=> a-b )[0] + numbers[1]


// Beginner Series #3 Sum of Numbers
//
// const getSum = (a, b) => {
//     let x = 0
//     let y = 0
//     let z = 0
//     if (a > b){
//         x = a
//         y = b
//     } else {
//         x = b
//         y = a
//     }
//
//     for(let i = y; i <= x; i++){
//         z += i
//     }
//     return z
// }

//Sorted? yes? no? how?
// function isSortedAndHow(array) {
//     let a = [...array]
//     a.sort((a,b)=> a - b )
//     console.log(a)
//     console.log(array)
//
//     if(array[0] === a[0] && array[array.length -1] === a[a.length -1]){
//         return "yes, ascending"
//     } else if (array[array.length -1] === a[0] && array[0] === a[a.length -1]){
//         return "yes, descending"
//     } else {
//         return "no"
//     }
// }
//
// console.log(isSortedAndHow([15, 7, 3, -8]));//, 'yes, descending')
// console.log(isSortedAndHow([4, 2, 30]));//, no)


// // Remove All The Marked Elements of a List
//  const lol=(integer_list, values_list)=>integer_list.filter(v => !values_list.includes(v))
// console.log(lol([1, 2, 3, 4, 5, 6, 7], [1,3,4,2]));

// const outer = document.querySelector('#outer');
// const inner = document.querySelector('#inner');
//
// outer.addEventListener( 'click', (event)=> {
//     console.log(event.target); // <button id="inner">Click me</button>
//     // console.log(event.currentTarget); // <button id="inner">Click me</button>
// } )
//
// inner.addEventListener('click', (event) => {
//     console.log(event.target); // <button id="inner">Click me</button>
//     // console.log(event.currentTarget); // <button id="inner">Click me</button>
// });


// function likeOrDislike(buttons) {
//     let Nothing = 'Nothing'
//     for ( let i = 0; i < buttons.length; i++ ){
//         buttons[i] === Nothing ? Nothing = "Nothing" : Nothing = buttons[i]
//     }
// return Nothing
// }
//
// console.log(likeOrDislike(['Dislike', 'Dislike']));//, Nothing
// console.log(likeOrDislike(['Like', 'Like', 'Like']));//, Like
// console.log(likeOrDislike(['Like', 'Dislike']));//, Dislike
// console.log(likeOrDislike(['Dislike', 'Like', 'Dislike']));//, Dislike
// console.log(likeOrDislike(['Like', 'Like', 'Dislike', 'Like', 'Like', 'Like', 'Like', 'Dislike']));//, Dislike
// console.log(likeOrDislike([]));//, Nothing );


// function nbDig(n, d) {
//     const myFavouriteArr = []
//     let a = 0
// for(let i = 0; i <= n; i++){
//     myFavouriteArr.push(i**2)
//     }
//  myFavouriteArr.join('').split('').map(el => Number(el) === d ? a += 1 : '')
// return a
// }
//
// console.log(nbDig(5750, 0));//,  4700, "n = 5750, d = 0");
// console.log(nbDig(11011, 2));//,  9481, "n = 11011, d = 2");
// console.log(nbDig(12224, 8));//,  7733, "n = 12224, d = 8");
// console.log(nbDig(11549, 1));//, 11905


// function calc_ms(n) {
//     let yo = 0
//     if(n === 0) return 1
// for (let i = 0; i < n; i++){
//     i === 0 ? yo +=20 : yo *= 20
// }
// return yo
// }
//
// console.log(calc_ms(0));//
// console.log(calc_ms(1));//20
// console.log(calc_ms(2));//400
// console.log(calc_ms(3));//8000
// console.log(calc_ms(4));//160000
// console.log(calc_ms(5));//3200000

// function shorterestTime(n, m, speeds) {
//   if(n===0) return 0;
//   let walk = (n)*speeds[3]
//   let lift;
//   let debilTvoujMother;
//   if(n>m){
//   let floors = n-m
//    lift = speeds[0]*floors+speeds[1]+speeds[2] + (n)*speeds[0] +speeds[1];
//   debilTvoujMother = speeds[3]*floors+speeds[1]+speeds[2] + (m)*speeds[0] +speeds[1];
//  }
//    else if(m>n){
//     let floors = m-n
//     lift = speeds[0]*floors+speeds[1]+speeds[2] + (n)*speeds[0] +speeds[1]
//     debilTvoujMother = speeds[3]*floors+speeds[1]+speeds[2] + (m)*speeds[0] +speeds[1];
// }
//   else {
//         lift = speeds[1]+speeds[2] + (n)*speeds[0] +speeds[1]
//         debilTvoujMother = lift;
// }
// console.log(lift,walk,debilTvoujMother)
// return Math.min(walk,lift,debilTvoujMother)
// }
//
// console.log(shorterestTime(4, 5, [1, 2, 3, 10]));//,12);
// console.log(shorterestTime(0, 5, [1, 2, 3, 10]))//,0);
// console.log(shorterestTime(4, 4, [1, 2, 3, 10]))//,11);
// console.log(shorterestTime(1, 1, [1, 2, 3, 10]))//,8);
// console.log(shorterestTime(1, 1, [2, 3, 4, 10]))//,10);
// console.log(shorterestTime(4, 3, [1, 2, 3, 10]))//,12);
// console.log(shorterestTime(4, 3, [2, 3, 4, 5]))//,20);
// console.log(shorterestTime(7, 6, [3, 1, 1, 4]))//,25);

// function makeLatinSquare(n) {
//     let result = [];
//     for (let i = 0; i < n; i++) {
//         result[i] = [];
//         for (let j = 0; j < n; j++) {
//             result[i][j] = (i + j) % n + 1;
//         }
//     }
//     return result;
// }
//
//
// console.log(makeLatinSquare(15));


//Running out of space
// function spacey(array) {
// let lolStr = ''
//     let newArr = []
//     for(let i = 0; i < array.length; i++) {
//         lolStr += array[i]
//         newArr.push(lolStr)
//     }
// return newArr
// }
//
// console.log(spacey(['kevin', 'has', 'no', 'space']));//, [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']);
// console.log(spacey(['this', 'cheese', 'has', 'no', 'holes']));//, ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']

//primer
// function printNumbersWith5(n) {
//     console.log('lalalalla')
//     for (let i = 1; i <= 15; i++) {
//         if (String(i).includes(i.toString()) && i >= 1 && i <= 15) {
//             console.log(i);
//         }
//     }
// }
//
// printNumbersWith5(5);

// function reverseInBase(n, b) {
//     let result = 0;
//     let power = 1;
//     while (n > 0) {
//         result = result * b + (n % b);
//         n = Math.floor(n / b);
//         power *= 10;
//         console.log('132123')
//     }
//     return result;
// }
// console.log(reverseInBase(12, 2)); // 3
// console.log(reverseInBase(10, 5)); // 2
// console.log(reverseInBase(45, 30)); // 451
// console.log(reverseInBase(3, 4)); // 3
// console.log(reverseInBase(5, 1)); // 5


// function alternate(n, firstValue, secondValue){
//     let arr = []
//     for (let i = 0; i < n; i++){
//         i%2 ? arr.push(secondValue): arr.push(firstValue)
//     }
//     return arr
// }
//
// console.log(alternate(10, 'lol', 'kek'));
// console.log(alternate(12, 'lola', 'keka'));
// console.log(alternate(5, 'lolo', 'keko'));
// console.log(alternate(6, false, true));


// function height(n) {
//     let res = [2000000]
//     for (let i = 0; i < n; i++) {
//         res.push(res[i] / 2.5)
//     }
//     return res.reduce((a, b) => a + b)
// }

// function height(n) {
//     let a = 2000000
//     let b = 2000000
//     for (let i = 0; i < n; i++) {
//         b = b / 2.5
//         a += b
//     }
//     return a.toFixed(3)
// }
//
// console.log(height(7));


// Find the middle element 7q
// function gimme (triplet) {
//   let a = [...triplet]
//   a.sort( (a,b)=> a - b )
//   return triplet.indexOf(a[1])
// }
// площадь круга
// const circleArea = function(radius) {
//   if (typeof radius !== 'number' || isNaN(radius)) {
//     return false;
//   } else {
//     return +(radius ** 2 * Math.PI).toFixed(2);
//   }
// };

// Descending Order 7kyu
// const descendingOrder = (n) => +(Array.from(String(n)).sort((a,b)=>b-a).join(''))

//Highest and Lowest 7kyu
// const highAndLow  = (numbers) => {
//   let a = numbers.split(' ').sort((a,b)=>b-a)
//   return `${a[0]} ${a[a.length -1]}`
// }

// summ of odd number
// function rowSumOddNumbers(n) {
//   return n ** 3
//   }