/* 
    Функкция определяет четное ли число 
*/

const isEven = (n) => {
    if (typeof n === "number") return n % 2 == 0;
    return "Параметр не число";
}

console.log(isEven(5));
console.log(isEven(-4));
console.log(isEven("abc"));

function isEvenVers2(n) {
    if (typeof n === "number") return n % 2 == 0;
    return "Параметр не число";
}

console.log(isEvenVers2(5));
console.log(isEvenVers2(-4));
console.log(isEvenVers2("abc"));

