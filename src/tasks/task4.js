/* 
    Функкция удаляет первый и последний символы строки 
*/

const deleteChars = (str) => {
    if (typeof str === "string") {
        return str.substr(1, str.length - 2);
    } else 
        return "Параметр не строка";
}

console.log(deleteChars("Hello"));
console.log(deleteChars("A"));
console.log(deleteChars(2));

function deleteCharsVers2(str) {
    if (typeof str === "string") {
        return str.substr(1, str.length - 2);
    } else 
        return "Параметр не строка";
}

console.log(deleteCharsVers2("Hello"));
console.log(deleteCharsVers2("A"));
console.log(deleteCharsVers2(2));
