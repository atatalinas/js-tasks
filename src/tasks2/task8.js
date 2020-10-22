//TODO: 8. Написать функцию, которая принимает первым параметром строку, вторым - допустимое количество символов.
// Если пришедшая строка превышает допустимое колшичество символов, функция должна вернуть максимум символов из 
// этой строки, которые попадают до ограничения, а вместо отсечённых символов вставить три точки.


const trimString = (initString, amountOfSymbols) => {
    if (typeof initString !== "string") return "Error";
    return initString.length <= amountOfSymbols ? initString : initString.substr(0, amountOfSymbols).concat("...");
}

str = "I love Javascript";

console.log(trimString(str, 5));
console.log(trimString(str, 17));
console.log(trimString(5, 5));
