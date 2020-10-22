// TODO: 1. Написать функцию, которая принимает массив чисел. Функция должна вернуть массив, в котором все элементы
// принятого массива умножены на 3;


const multiplyArrayElements = (numericArray) => {
    if (Array.isArray(numericArray)) {
        if (numericArray.every(elem => typeof elem === "number")) {
            numericArray.forEach(((element, index) => numericArray[index] = 3 * element));
            return numericArray;
        } 
    }
    return "Error";
}

numberArray = [10, 20, 30, 40, 50, 60, 70];
numberArray2 = [-3, 0, 'sad'];

console.log(multiplyArrayElements(numberArray));
console.log(multiplyArrayElements(numberArray2));