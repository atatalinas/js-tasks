/* TODO: #3. Функция принимает массив объектов пользователей первым парметром, вторым - массив строк (id).
Функция должна удалить всех пользователей, чьи id будут найдены в массиве id,
которые передаются нашей функции вторым параметром и вернуть массив с оставшимися пользователями */

const users = [
    {
        name: 'Maria',
        id: 1,
    },
    {
        name: 'Alex',
        id: 2,
    },
    {
        name: 'Oleg',
        id: 3,
    },
];


const removeUsers = (usersArray, idArray) => {
    if (!Array.isArray(usersArray)) return;
    const copiedArray = [...usersArray];

    idArray.forEach(id => {
        copiedArray.forEach((user, index, copiedArray) => {
            if (user.id === id) copiedArray.splice(index, 1);
        });
    });

    return copiedArray;
}

console.log(removeUsers(users, [1]));
console.log(removeUsers(users, [2, 3]));