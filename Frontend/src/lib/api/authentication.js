import { apiClient } from "../axiosConfig";

export const signup = (payload) => {
	const response = apiClient.post("/signup", payload);
	return response;
};

export const signin = (payload) => {
	const response = apiClient.post("/signin", payload);
	return response;
};
<<<<<<< HEAD
=======

export const updatePassword = (payload) => {
	const response = apiClient.post("/update_password", payload);
	return response;
};

export const triggerUpdatePassword = (payload) => {
	const response = apiClient.post("/trigger_update_password", payload);
	return response;
};
>>>>>>> 07b73f7 (new)
