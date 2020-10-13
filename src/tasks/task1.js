/* 
    Функкция возвращает приветствие для пользователя 
*/
const sayHello = (name) => {
    return `Hello, ${name}!`;
}

console.log(sayHello("Oleg"));
console.log(sayHello("Viktor"));
console.log(sayHello("Mark"));

function sayHelloVers2(name){
    return `Hello, ${name}!`;
}

console.log(sayHelloVers2("Oleg"));
console.log(sayHelloVers2("Viktor"));
console.log(sayHelloVers2("Mark"));