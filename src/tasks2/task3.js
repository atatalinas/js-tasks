// TODO: 3. Написать функцию фильтрации, которая принимает массив строк и возвращает массив строк, 
// в котором находятся строки, длина которых больше 3 символов.

const transformStringArray = (stringArray) => {
    if (Array.isArray(stringArray)) return stringArray.filter(element => element.length > 3);
    return "Error";
}

stringArray = ["hello", "world", "lol", "kek", "i love javascript"];

console.log(transformStringArray(stringArray));