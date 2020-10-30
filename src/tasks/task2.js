/* TODO: #2. Функция принимает массив объектов. Исходные данные представлены ниже. Возвращает массив пользователей,
отсортированных по полю username в алфавитном порядке и возраст которых начинается от 21 года. Количество пользователей
может быть не ограничено. */

const initialData = [
    {
        username: 'Maria',
        age: 25,
    },
    {
        username: 'Alex',
        age: 21,
    },
    {
        username: 'Oleg',
        age: 14,
    },
    {
        username: 'Dmitriy',
        age: 35,
    },
    {
        username: 'Oksana',
        age: 72,
    },
];

const sortUsersByAge = (usersArray) => {
    if (!Array.isArray(usersArray)) return;
    return usersArray.filter(user => user.age >= 21).
        sort((currentUser, nextUser) => currentUser.username > nextUser.username ? 1 : -1);
}

console.log(sortUsersByAge(initialData));