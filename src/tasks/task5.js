const sumOfDigits = (number) => {
    if (typeof number === "number") {
        while (number.toString().length !== 1) {
            number = number.toString().split('').reduce((previousResult, currentDigit) => { 
                return  +previousResult + +currentDigit; 
            });
        } 
        return number;
    } else {
        return "Параметр должен быть числом";
    }
}

function sumOfDigitsVers2(number) {
    if (typeof number === "number") {
        while (number.toString().length !== 1) {
            number = number.toString().split('').reduce((previousResult, currentDigit) => { 
                return  +previousResult + +currentDigit; 
            });
        } 
        return number;
    } else {
        return "Параметр должен быть числом";
    }
}

console.log(sumOfDigits(156));
console.log(sumOfDigits("sad"));
console.log(sumOfDigits(123));

console.log(sumOfDigitsVers2(156));
console.log(sumOfDigitsVers2("sad"));
console.log(sumOfDigitsVers2(123));
