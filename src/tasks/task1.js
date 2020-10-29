/* TODO: #1. Функция принимает массив пользователей. Возвращает объект, состоящий из двух полей: women и men. Данные
поля являются массивами, в которых содержаться пользователи, подходящие по категории gender соответственно.
Также, вместо двух полей first_name и last_name у каждого из объектов должнобыть поле fullName в котором будут объеденины убранные поля
(first_name и last_name). Количество пользователей может быть не ограничено. */

const users = [
	{
		id: 1,
		first_name: 'Jeanette',
		last_name: 'Penddreth',
		email: 'jpenddreth0@census.gov',
		gender: 'Female',
		ip_address: '26.58.193.2',
	},
	{
		id: 2,
		first_name: 'Petr',
		last_name: 'Jackson',
		email: 'gfrediani1@senate.gov',
		gender: 'Male',
		ip_address: '229.179.4.212',
	},
];


const sortByGender = (usersArray) => {
	if (!Array.isArray(usersArray)) return;
	const result = {};
	result['women'] = [];
	result['men'] = [];
	usersArray.forEach((user, index) => {
		const copyUser = { ...user };
		if (copyUser.hasOwnProperty('first_name') && copyUser.hasOwnProperty('last_name')) {
			copyUser['fullName'] = `${copyUser.first_name} ${copyUser.last_name}`;
			delete copyUser.first_name;
			delete copyUser.last_name;
		}
		if (copyUser.hasOwnProperty('gender') && copyUser.gender === "Female") {
			result['women'].push(copyUser);
		} else {
			result['men'].push(copyUser);
		}
	})

	return result;
}


console.log(sortByGender(users));
