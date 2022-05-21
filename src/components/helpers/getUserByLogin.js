import history from "./history";

export const getUserByLogin = async (userLogin) => {
	if (userLogin === "iseijasunow") {
		history.push("/");
		return;
	}
	const userUrl = `https://api.github.com/users/${userLogin}`;
	const resp = await fetch(userUrl);
	const data = await resp.json();

	const { id, login, avatar_url: avatar, html_url: profile } = data;

	const reposUrl = `https://api.github.com/users/${userLogin}/subscriptions`;
	const response = await fetch(reposUrl);
	const subs = await response.json();

	const repos = subs.map(({ name, description, html_url: url }) => {
		return {
			name,
			description,
			url,
		};
	});

	return {
		id,
		login,
		avatar,
		profile,
		repos,
	};
};
