import { LoginRequest } from "~/types/LoginRequest";
import { LoginResponse } from "~/types/LoginResponse";

export default defineEventHandler(async (event) => {
	const loginRequest = await readBody<LoginRequest>(event);

	if (loginRequest.name === "admin" && loginRequest.password === "bsi123!@#") {
		return {
			name: "admin",
		} as LoginResponse;
	} else if (
		loginRequest.name === "kacper" &&
		loginRequest.password === "password123"
	) {
		return {
			name: "kacper",
		} as LoginResponse;
	} else {
		setResponseStatus(event, 401);
		return {} as LoginResponse;
	}
});
