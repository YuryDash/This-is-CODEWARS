
function foo () {
    const a =() => {
        console.log(this)
    }
    a()
}
foo();// object window
// у обекта нету своего ЛО
//стрелочная fn берет this в момент создания из ближайшего лексического окружения ( слева от точки )
// обычная fn при вызове берет ЛО ( смотря где вызвана )


let car1 = {
    maxSpeed: 200,
    showMaxSpeed() {
        console.log(this.maxSpeed)
    }
}
let car2 = {
    maxSpeed: 260
}


// Эти методы call apply bind не работают со стрелочными fn
car1.maxSpeed()
console.log(car1.maxSpeed().bind(car2))
console.log(car1.maxSpeed().apply([car2]))
console.log(car1.maxSpeed().call(car2))
