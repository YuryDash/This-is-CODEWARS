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

