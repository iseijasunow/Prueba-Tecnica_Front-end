export const getTenUsers = async () => {
	const url = "https://api.github.com/users";
	const resp = await fetch(url);
	const data = await resp.json();

	const result = [];

	data
		.filter((_, i) => i <= 9)
		.map(async ({ login }) => {
			const url = `https://api.github.com/users/${login}/followers`;
			const resp = await fetch(url);
			const followers = await resp.json();

			result.push([login, followers.length]);
		});

	return result;
};
