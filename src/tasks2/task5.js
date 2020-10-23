// TODO: 5. Написать функцию, которая принимает массив, состоящий их разных типов данных. 
// Фукнция возвращает массив, в котором все числа принятого массива умножаются на 2 и становятся строками,
// все символы в строковых элементах исходного массива становятся
// в верхнем регистре, все элементы, которые не являются ни строкой, ни числом отсеиваются.


const modifyArray = (mixedArray) => {
    if (Array.isArray(mixedArray)) {
        copiedArray = [...mixedArray];
        copiedArray = copiedArray.filter(element => typeof element === 'number' || typeof element === 'string');
        return copiedArray.map(element => {
            if (typeof element === "number") return 2 * element;
            return element.toUpperCase();
        });
    }
    return "Error";
}


exampleArray = [2, 4, null, undefined, "hello", "World", -8, 0];

console.log(modifyArray(exampleArray));