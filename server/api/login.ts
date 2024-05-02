import { LoginRequest } from "~/types/LoginRequest";
import { LoginResponse } from "~/types/LoginResponse";

export default defineEventHandler(async (event) => {
	const loginRequest = await readBody<LoginRequest>(event);

	if (loginRequest.name === "admin" && loginRequest.password === "admin") {
		return {
			status: 200,
			name: "admin",
		} as LoginResponse;
	} else if (
		loginRequest.name === "kacper" &&
		loginRequest.password === "password123"
	) {
		return {
			status: 200,
			name: "kacper",
		} as LoginResponse;
	} else {
		return {
			status: 401,
		} as LoginResponse;
	}
});
