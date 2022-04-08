console.log("Задание 2")

let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

let str = []
let number = []

str = arr.filter(item => typeof item === 'string')
number = arr.filter(item => typeof item === "number")

console.log(
    number, str
);

console.log("Задание 3")

let arrr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]
// Если массив включает в себя больше 5ти элемента типа number то показать в консоли гуд
let numberr = []
let sum_number = 0
numberr = arrr.filter(item => typeof item === "number");

if (numberr.length >= 5) {
    console.log("good");
}
else
    console.log("error");

