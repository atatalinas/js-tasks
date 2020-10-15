/* 
    Функкция возвращает приветствие для пользователя 
*/
const sayHello = (name) => {
    if (typeof name !== "string") return "Параметр не строка";

    const dearFriend = "Mark";
    const isDearFriend = name.toLowerCase() === dearFriend.toLowerCase();

    return `${isDearFriend ? "Hi" : "Hello"}, ${name[0].toUpperCase()}${name.slice(1)}!`;  
}

console.log(sayHello("Oleg"));
console.log(sayHello("Viktor"));
console.log(sayHello("mark"));

function sayHelloVers2(name){
    if (typeof name !== "string") return "Параметр не строка";

    const dearFriend = "Mark";
    const isDearFriend = name.toLowerCase() === dearFriend.toLowerCase();

    return `${isDearFriend ? "Hi" : "Hello"}, ${name[0].toUpperCase()}${name.slice(1)}!`;         
}

console.log(sayHelloVers2("Oleg"));
console.log(sayHelloVers2("Viktor"));
console.log(sayHelloVers2("mark"));