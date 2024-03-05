//Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse? 5kyu
// function isLanguageDiverse(list) {
//     let obj = {
//         'JavaScript': 0,
//         'Python': 0,
//         'Ruby': 0,
//     }
//     list.forEach((user) => {
//         obj[user.language] += 1
//     })
//     let newArr = Object.values(obj).sort((a, b) => {
//         return a - b
//     })
//     console.log(newArr[0], newArr[2])
//     return newArr[2] / newArr[0] >= 0 && newArr[2] / newArr[0] <= 2
//
// }

//The Hashtag Generator kyu5
// function generateHashtag(str) {
//     if (str.trim() === '') return false;
//
//     const strCamel = str
//         .split(' ')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join('');
//
//     const strHash = `#${strCamel.trim()}`;
//
//     return strHash.length > 140 ? false : strHash;
// }
//
// console.log(generateHashtag(o) + '  o');
// console.log(generateHashtag(p) + ' p');
//============================================================================================

// Next bigger number with the same digits
// function nextBigger(n){
//     let digits = n.toString().split('');
//     let len = digits.length;
//     for(let i = len-1; i > 0; i--){
//         if(digits[i] > digits[i-1]){
//             let max = digits[i];
//             let idx = i;
//             for(let j = i; j < len; j++){
//                 if(digits[j] > digits[i-1] && digits[j] <= max){
//                     max = digits[j];
//                     idx = j;
//                 }
//             }
//             [digits[i-1], digits[idx]] = [digits[idx], digits[i-1]];
//             let sortedRightPart = digits.slice(i).sort((a, b) => a - b);
//             let result = parseInt(digits.slice(0, i).concat(sortedRightPart).join(''));
//             return result;
//         }
//     }
//     return -1;
// }
//============================================================================================
//5 kyu
// Extract the domain name from a URL
//DONE WITHOUT REGEX!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! :3
// function domainName(url){
// const urlInArray = url.split('http://').join('').split('www.').join('').split('https://').join('')
//     const domainName = [];
//     (function filteredFn(array)  {
//        for (let a = 0; a <=array.length; a++) {
//            if (array[a] !== '.'){
//                domainName.push(array[a])
//            } else {
//                return
//            }
//        }
//     })(urlInArray)
//     return domainName.join('')
// }

// function latestClock(a, b, c, d) {
//     let nums = [a, b, c, d];
//     nums.sort((a, b) => b - a); //1
//     for (let i = 23; i >= 0; i--) { //2
//         for (let j = 59; j >= 0; j--) { //3
//             let hours = i < 10 ? '0' + i : i.toString();
//             let minutes = j < 10 ? '0' + j : j.toString();
//             let time = hours + minutes;
//             if (nums.every(num => time.includes(num.toString()) && (time.match(new RegExp(num.toString(), 'g')) //4
//                 || []).length === (nums.join('').match(new RegExp(num.toString(), 'g')) || []).length)) {
//                 return hours + ':' + minutes;
//             }
//         }
//     }
//     return 'Невозможно составить время';
// }
// 1 сортировка, 2 первый цикл начинается с 23 и идет на уменьшение, 3 делает тожесамое но на каждый час.
// 4 проверяет строка minutes num так же создается проверка regex если всё верно выводит время в формате 'hh':'mm'

// function pickPeaks(arr) {
//     let result = { pos: [], peaks: [] };
//     if (arr.length > 2) {
//         let pos = -1;
//         for (let i = 1; i < arr.length; i++) {
//             if (arr[i] > arr[i-1]) {
//                 pos = i;
//             } else if (arr[i] < arr[i-1] && pos != -1) {
//                 result.pos.push(pos);
//                 result.peaks.push(arr[pos]);
//                 pos = -1;
//             }
//         }
//     }
//     return result;
// }
//[3,2,3,6,4,1,2,3,2,1,2,2,2,1]), {pos:[3,7,10], peaks:[6,3,2]})

// function stripUrlParams(url, paramsToStrip = []) {
//     let [base, query] = url.split('?');
//     if (!query) return url;
//
//     let params = query.split('&').reduce((acc, param) => {
//         let [key, value] = param.split('=');
//         if (!acc.has(key) && !paramsToStrip.includes(key)) {
//             acc.set(key, value);
//         }
//         return acc;
//     }, new Map());
// if(!params.size) return base
//     return base + '?' + Array.from(params, param => param.join('=')).join('&')
// }


// function isValidWalk(walk) {
//
//     if(walk.length !== 10) return false
//
//     const all = {
//         w: [],
//         e: [],
//         s: [],
//         n: [],
//     };
//     const res = {}
//
//     walk.forEach(el => {
//         all[el].push(1);
//     });
//
//     for (let myArr in all) {
//         if (all.hasOwnProperty(myArr)) {
//             res[myArr] = all[myArr].reduce((acc, val) => acc + val, 0);
//         }
//     }
//
//     return res.w - res.e === 0 && res.n - res.s === 0;
// }
//
// console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));//, 'should return true');
// console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']));//, 'should return false');
// console.log(isValidWalk(['w']));//, 'should return false');
// console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));//, 'should return false');

// Two Sum - 6 kata
// function twoSum(numbers, target) {
//     let res;
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = 1; j <= numbers.length; j++) {
//             if (numbers[i] + numbers[j] === target && i !== j) {
//                 res = [i, j]
//             }
//         }
//     }
//     return res
// }

