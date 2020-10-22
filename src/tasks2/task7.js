// TODO: 7. Написать функцию, которая принимает первым параметром массив строк (имён), вторым - строковое значение (имя). 
// Если пользователь найден - удаляет его из массива и возвращает новый массив из оставшихся пользователей.


const findName = (nameArray, userName) => {
    if (Array.isArray(nameArray)) {
        if (nameArray.every(element => typeof element === "string")) {
            return nameArray.find(element => element === userName) === userName ? 
            nameArray.filter(element => element !== userName) : "Пользователь не найден";
        }
    }
    return "Error";
}

nameArray1 = ['Misha', "Dima", "Masha", "Lyosha", "Natasha"];
nameArray2 = [2, 3, "Galya", undefined, "Syaroga"];

console.log(findName(nameArray1, 'Lyosha'));
console.log(findName(nameArray1, 'Petr'));
console.log(findName(nameArray2, 'Galya'));