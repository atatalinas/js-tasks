// TODO: 6. Написать функцию, которая принимает первм параметром массив строк (имён), вторым - строковое значение (имя), 
// которое предстоит найти в массив. В случае, если имя найдено, функция должна вернуть строку 
// "Пользователь с именем <найденное имя> найден, его позиция - <позиция найденного пользователя в массиве>". 
//Если пользователь не найден, результатом функции будет строка, которая будет сообщать о том, что заданного пользователя найти не удалось.

const findName = (nameArray, userName) => {
    if (Array.isArray(nameArray)) {
        if (nameArray.every(element => typeof element === "string")) {
            const index = nameArray.findIndex(element => element === userName);
            if (index === -1) return `Пользователь с именем ${userName} не найден`;
            return `Пользователь с именем ${userName} найден, его позиция - ${index}`;
        } 
    }
    return "Error";
}



nameArray1 = ['Misha', "Dima", "Masha", "Lyosha", "Natasha"];
nameArray2 = [2, 3, "Galya", undefined, "Syaroga"];

console.log(findName(nameArray1, 'Lyosha'));
console.log(findName(nameArray1, 'Petr'));
console.log(findName(nameArray2, 'Galya'));