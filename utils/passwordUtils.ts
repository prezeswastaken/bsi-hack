export function getNumbersPasswordsFromBasic(password: string): string[] {
	const pass1 = password + "1";
	const pass2 = password + "12";
	const pass3 = password + "123";
	return [pass1, pass2, pass3];
}

export function getNumbersAndSymbolsPasswordsFromBasic(
	password: string,
): string[] {
	let newPasswords = getNumbersPasswordsFromBasic(password);
	newPasswords[0] = newPasswords[0] + "!";
	newPasswords[1] = newPasswords[1] + "@";
	newPasswords[1] = newPasswords[1] + "!@";
	return newPasswords;
}
