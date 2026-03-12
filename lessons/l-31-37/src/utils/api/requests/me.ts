export async function getMe() {
	const user = localStorage.getItem('user') ?? undefined;
	console.log('user', user)
	if (user) {
		return JSON.parse(user);
	}
	return undefined;
}