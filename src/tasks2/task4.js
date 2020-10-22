// TODO: 4. Написать функцию, которая принимает массив чисел. Результатом функции является сумма всех чисел данного массива. 
// Написать двумя способами: с использованием метода .reduce() и с использованием метода .forEach()

const sumArrayElements = (numericArray) => {
    if (Array.isArray(numericArray)) {
        if (numericArray.every(elem => typeof elem === "number")) {
            return numericArray.reduce((result, currentElement) => {
                return  result + currentElement;
            })
        } 
    }
    return "Error";
}

numberArray = [10, 20, 30, 40, 50, 60, 70];
numberArray2 = [-3, 0, 'sad'];
numberArray3 = [1, 2, 5, 56, 78];

console.log(sumArrayElements(numberArray));
console.log(sumArrayElements(numberArray2));

const sumArrayElements2 = (numericArray) => {
    if (Array.isArray(numericArray)) {
        if (numericArray.every(elem => typeof elem === "number")) {
            let sum = 0;
            numericArray.forEach(element => sum += element);
            return sum;
        } 
    }
    return "Error";
}

console.log(sumArrayElements2(numberArray3));
console.log(sumArrayElements2(numberArray2));