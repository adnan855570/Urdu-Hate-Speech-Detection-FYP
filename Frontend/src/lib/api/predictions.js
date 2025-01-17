import axios from "axios";

export const fetch_bert = async (input) => {
	const API_URL = "http://127.0.0.1:5000";

	const payload = {
		texts: [input],
	};

	const response = await axios.post(`${API_URL}/predict`, payload);

	return response.data?.predictions[0];
};

export const fetch_gpt = async (input) => {
<<<<<<< HEAD
	const modelId = "";
	const apikey = "";
	const response = await axios.post(
		"",
=======
	const modelId = "ft:gpt-3.5-turbo-0125:comsats:hate-speech:9njGZpq7";
	const apikey = "sk-proj-ypF4fLsmNlvCHjHd7sEYT3BlbkFJeNggsqJC1xgqYiUJaFXo";
	const response = await axios.post(
		"https://api.openai.com/v1/chat/completions",
>>>>>>> 07b73f7 (new)
		{
			model: modelId,
			messages: [
				{role: "system", content: "Classify the sentiment of this tweet."},
				{role: "user", content: input},
			],
		},
		{
			headers: {
				Authorization: `Bearer ${apikey}`,
				"Content-Type": "application/json",
			},
		},
	);
	return response.data?.choices[0]?.message.content;
};

export const fetch_roberta = async (input) => {
<<<<<<< HEAD
	const API_URL = "http://127.0.0.1:5001";

	const payload = {
		texts: [input],
	};

	const response = await axios.post(`${API_URL}/predict`, payload);

	return response.data?.predictions[0];
=======
	const API_URL = "http://127.0.0.1:5000";

	const payload = {
		text : input,
	};

	const response = await axios.post(`${API_URL}/predict`, payload);
	return response.data?.predicted_class?.toString()
};

export const fetch_llama = async (tweet) => {
	const apiUrl = "";
	const apiKey = "";

	const data = {
		model: "llama-3.3-70b-versatile", // Groq model name
		messages: [
			{
				role: "user",
				content: `Classify the following tweet into hate or not hate. Reply with only O if its not hate, reply 1 if its hate. Reply only in number 1 or 0.\n\nTweet: "${tweet}"`,
			},
		],
		max_tokens: 10,
	};

	const response = await axios.post(apiUrl, data, {
		headers: {
			Authorization: `Bearer ${apiKey}`,
			"Content-Type": "application/json",
		},
	});

	// Extract response
	console.log(response)
	const result = response.data.choices[0]?.message?.content || "No classification";
	return result
>>>>>>> 07b73f7 (new)
};
