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
let o = "a".repeat(139)//, "#A" + "a".repeat(138)//, "Should work")
let p = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"//, false, "Too long")
function generateHashtag(str) {
    if (str.trim() === '') return false;

    const strCamel = str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');

    const strHash = `#${strCamel.trim()}`;

    return strHash.length > 140 ? false : strHash;
}

console.log(generateHashtag(o) + '  o');
console.log(generateHashtag(p) + ' p');