// ЗАДАНИЕ 1
let str = 'aaa@bbb@ccc'

console.log(
    str.replace('@', '!').replace('@', '!')
);

// ЗАДАНИЕ 2

let a = 'HELLOWORLD'

console.log(
    a[0].toUpperCase() + a.toLowerCase().slice(1).split()

);

// ЗАДАНИЕ 3
let b = 'Hello, it is HTML'

console.log(
    b.slice(0,12) + ' not JS'
);

// ЗАДАНИЕ 4
let z = 'alex'
 console.log(
    z[0].toUpperCase() + z.slice(1)
 );

//Задание 5
let d = Math.random()

console.log(
    Math.trunc(d)
);

//Задание 6
let txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores optio, tempore repellat accusantium explicabo v necessitatibus nemo quo dolor, tenetur ipsum, at sint magni. Ea eligendi eos aperiam hic obcaecati?'

console.log(
        // txt.indexOf('v')
    txt.slice(29, 30) + txt.slice(1, 3) + txt.slice(4, 5) + txt.slice(9, 10) + txt.slice(2, 3) + txt.slice(1, 2) + txt.slice(12, 13) + ' ' + txt.slice(7, 8) + txt.slice(9, 10) + txt.slice(14, 15) + txt.slice(22, 23)+ txt.slice(20, 21) + txt.slice(1, 2)+ txt.slice(118, 119)
);