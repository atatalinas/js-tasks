/* 
    Функкция находит минимальное из двух чисел 
*/

const findMinNumber = (firstNumber, secondNumber) => {
    if (typeof firstNumber === "number" && typeof secondNumber === "number") return (firstNumber < secondNumber) ? firstNumber : secondNumber;
    return "Исходные данные должны быть числами";
}

console.log(findMinNumber(9, -4));
console.log(findMinNumber(5, 5));
console.log(findMinNumber(-16, 28));
console.log(findMinNumber("abc", 28));

function findMinNumberVers2(firstNumber, secondNumber) {
    if (typeof firstNumber === "number" && typeof secondNumber === "number") return (firstNumber < secondNumber) ? firstNumber : secondNumber;
    return "Исходные данные должны быть числами";
}

console.log(findMinNumberVers2(9, -4));
console.log(findMinNumberVers2(5, 5));
console.log(findMinNumberVers2(-16, 28));
console.log(findMinNumberVers2("abc", 28));