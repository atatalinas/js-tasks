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
		last_name: 'Stepanov',
		email: 'gfrediani1@senate.gov',
		gender: 'Male',
		ip_address: '229.179.4.212',
	},
	{
		id: 3,
		first_name: 'Michael',
		last_name: 'Jackson',
		email: 'gfrediani1@senate.gov',
		gender: 'Male',
		ip_address: '229.179.4.212',
	},
];



const sortByGender = (usersArray) => {
	if (!Array.isArray(usersArray)) return;
	const copiedArray = [...usersArray];
	return copiedArray.reduce((result, user) => {
		if (user.first_name && user.last_name && user.gender) {
			user = {
				id: user.id,
				full_name: user.first_name + user.last_name,
				email: user.email,
				gender: user.gender,
				ip_address: user.ip_address,
			}

			if (user.gender.toLowerCase() === 'female') {
				result.women.push(user);

			} else {
				result.men.push(user);
			}

			return result;
		}
		return;
	}, { 'women': [], 'men': [] });
}


console.log(sortByGender(users));
