console.log("ЗАДАНИЕ 2");
let place = prompt("Ск человек хотят зойти")
const club = 10

if (place <= 2) {
    let name = prompt("Ваше имя")
    if (name[0] == 'A' || name[0] == 'a') {
        let age = prompt("ваш возраст")
        if (age >= 20 || age < 40) {
            let money = prompt("Сколько у вас денег")
            if (money >= 100) {
                console.log("Добро пожаловать ");
            }
            else
                console.log("денег мало");
        }
        else
            console.log("возраст не тот");
    }
    else
        console.log("допус не получан");
}
else {
    console.log("много людей");
    let repeat = prompt("попробуйте еще")

    if (repeat) {
        console.log("добро");
    }

}

