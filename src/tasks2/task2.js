// TODO: 2. Написать функцию, которая принимает массив чисел. Функция должна вернуть массив, 
// в котором первый и последний элемент принятого массива возведен в квадрат, остальные элементы получают +1


const transformArray = (numericArray) => {
    if (Array.isArray(numericArray)) {
        if (numericArray.every(elem => typeof elem === "number")) {
            numericArray.forEach(((element, index) => {
                if (index === 0 || index === numericArray.length - 1) numericArray[index] = Math.pow(element, 2)
                else numericArray[index] = ++element;
            }));
            return numericArray;
        } 
    }
    return "Error";
}

numberArray = [10, 20, 30, 40, 50, 60, 70];
numberArray2 = [-3, 0, 'sad'];

console.log(transformArray(numberArray));
console.log(transformArray(numberArray2));