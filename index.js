
// при помощи вычислительных выражений найти наибольшую сумму чисел а В с
function expressionMatter(a, b, c) {
    return Math.max(
        a + b + c,
        a * b * c,
        a * (b + c),
        (a + b) * c,
    );
}

// аргумент функции положительное число , которое должно вернуть нужную фразу от 1 до 6 и так по кругу
function howMuchILoveYou(nbPetals) {
    let phrase = {
        0: "not at all",
        1: "I love you",
        2: "a little",
        3: "a lot",
        4: "passionately",
        5: "madly"
    }
    return phrase[nbPetals%6]
}

const  maxProduct = (numbers, size) =>   numbers.sort((a, b) => b - a).slice(0, size).reduce((a, b) => a * b)


console.log(maxProduct([13,12,-27,-302,25,37,133,155,-14], 5));