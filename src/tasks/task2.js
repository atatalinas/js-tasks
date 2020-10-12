const findMinNumber = (firstNumber, secondNumber) => {
    if (typeof firstNumber === "number" && typeof secondNumber === "number") {
        if (firstNumber > secondNumber)
        {
            return `Меньшее из чисел (${firstNumber}, ${secondNumber}): ${secondNumber}`;
        } else if (firstNumber === secondNumber) {
            return `Числа ${firstNumber}, ${secondNumber} равны `;
        } else {
            return `Меньшее из чисел (${firstNumber}, ${secondNumber}): ${firstNumber}`;
        }
    } else {
        return "Исходные данные должны быть числами";
    }
}

function findMinNumberVers2(firstNumber, secondNumber) {
    if (typeof firstNumber === "number" && typeof secondNumber === "number") {
        if (firstNumber > secondNumber)
        {
            return `Меньшее из чисел (${firstNumber}, ${secondNumber}): ${secondNumber}`;
        } else if (firstNumber === secondNumber) {
            return `Числа ${firstNumber}, ${secondNumber} равны `;
        } else {
            return `Меньшее из чисел (${firstNumber}, ${secondNumber}): ${firstNumber}`;
        }
    } else {
        return "Исходные данные должны быть числами";
    }
}

console.log(findMinNumber(9, -4));
console.log(findMinNumber(5, 5));
console.log(findMinNumber(-16, 28));
console.log(findMinNumber("abc", 28));

console.log(findMinNumberVers2(9, -4));
console.log(findMinNumberVers2(5, 5));
console.log(findMinNumberVers2(-16, 28));
console.log(findMinNumberVers2("abc", 28));