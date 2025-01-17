// const baseURL = 'http://localhost:2000/api'
const baseURL = 'https://client-2-server.vercel.app/api'

import axios from "axios";

export const apiClient = axios.create({
	baseURL: baseURL,
	headers: {"Content-Type": "application/json"},
});

