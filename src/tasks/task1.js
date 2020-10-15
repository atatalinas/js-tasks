/* 
    Функкция возвращает приветствие для пользователя 
*/
const sayHello = (name) => {
    if (typeof name === "string") {
        name = name.charAt(0).toUpperCase() + name.slice(1);
        if (name === "Mark") return `Hi, ${name}!`;
        return `Hello, ${name}!`;
    }
    return "Параметр не строка";    
}

console.log(sayHello("Oleg"));
console.log(sayHello("Viktor"));
console.log(sayHello("mark"));

function sayHelloVers2(name){
    if (typeof name === "string") {
        name = name.charAt(0).toUpperCase() + name.slice(1);
        if (name === "Mark") return `Hi, ${name}!`;
        return `Hello, ${name}!`;
    }
    return "Параметр не строка";       
}

console.log(sayHelloVers2("Oleg"));
console.log(sayHelloVers2("Viktor"));
console.log(sayHelloVers2("mark"));