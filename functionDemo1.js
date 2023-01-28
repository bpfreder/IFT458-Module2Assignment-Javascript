var age = 10; // int
var salary = 15.00; // double (or float)

const displayGreetings = function (name, year) {
    console.log(`Happy new year ${year} ${name}`)
}


const displayGreetingsWithEmoji = function(name, year){
    console.log (`😊  😄 Happy new year ${year} ${name} 😁 😛`)
}

const greet = function(name, year, func) {
    func(name, year);
}

greet("Sam", 2022, displayGreetingsWithEmoji);
greet("Jim", 2022, displayGreetings);