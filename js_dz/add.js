console.log("ЗАДАНИЕ 1");

let name = 'Alex'
let money = 10000
let account = 7777
let z = 0

let user = prompt("как вас зовут").trim()

if( user === name)
{
    let schet = prompt("Номер счета")
    if ( schet == account)
    {
        if (z = prompt("Сколько обналичить") )
        {
            if (money >= z){
                console.log("все отлично" + " " +
                "снял " + z + " " +
                "осталось " + (money - z)
                );
            }
 else
            console.log("не достаточно средсв");
            }

        }
    else

        console.log('пользователь не найден');
}
else

console.log('пользователь не найден');
