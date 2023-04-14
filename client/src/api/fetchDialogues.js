const PORT = 5000;
const baseURL = `http://localhost:${PORT}`;

export const fetchDialogues = async (urls) => {
	try {
		const response = await fetch(`${baseURL}/dialogues`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ urls }),
		});

		const data = await response.json();

		if (!response.ok) {
			throw new Error(data.error);
		}

		return data;
	} catch (error) {
		throw new Error(error.message);
	}
};
