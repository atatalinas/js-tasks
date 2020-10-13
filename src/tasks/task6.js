/* 
    Функкция удаляет deleteCount элементов из массива, начиная с индеса startIndex, 
    и вставляет на место удаленных элементов значение valueToInsert
*/

const splicer = (arr, startIndex, deleteCount, valueToInsert) => {
    if (Array.isArray(arr)) {
        arr.splice(startIndex, deleteCount, valueToInsert);
        return arr;
    } else {
        return "Первый парметр должен быть массивом";
    }
}

numericArray = [10, 20, 30, 40, 50, 60, 70];
mixedArray = ["Hello", "Vasya", 3, "Hi", 67, 100];

console.log(splicer(numericArray, 1, 3, 4));
console.log(splicer("Hello", 1, 3, 4));
console.log(splicer(mixedArray, 0, 2, "Mark"));

function splicerVers2(arr, startIndex, deleteCount, valueToInsert) {
    if (Array.isArray(arr)) {
        arr.splice(startIndex, deleteCount, valueToInsert);
        return arr;
    } else {
        return "Первый парметр должен быть массивом";
    }
}

console.log(splicerVers2(numericArray, 1, 3, 4));
console.log(splicerVers2("Hello", 1, 3, 4));
console.log(splicerVers2(mixedArray, 0, 2, "Mark"));