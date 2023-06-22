export function match(value) {
	return /^[0-9a-zA-Z]{4,20}$/.test(value);
}