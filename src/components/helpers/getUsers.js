export const getUsers = async (login) => {
	if (login.length < 2) return [];

	const url = "https://api.github.com/users";
	const resp = await fetch(url);
	const data = await resp.json();

	const userLogin = login.toLocaleLowerCase();
	const users = data
		.filter((user) => user.login.toLocaleLowerCase().includes(userLogin))
		.map(({ id, login, avatar_url: avatar, html_url: profile }) => {
			return {
				id,
				login,
				avatar,
				profile,
			};
		});

	return users;
};
