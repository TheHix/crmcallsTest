import https from "https";
import http from "http";

const get = (url) => {
	return new Promise((resolve, reject) => {
		const httpModule = url.startsWith("https") ? https : http;

		httpModule
			.get(url, (res) => {
				let body = "";
				res.on("data", (chunk) => (body += chunk));
				res.on("end", () => resolve(body));
			})
			.on("error", (e) => reject(e));
	});
};

const getParsedUrl = async (url) => {
	const response = await get(url);
	return JSON.parse(response);
};

//1
export const getDataByUrlsConsistently = async (urls) => {
	try {
		const results = [];

		for (const url of urls) {
			const response = await getParsedUrl(url);
			results.push(response);
		}

		return results;
	} catch (error) {
		throw new Error(error);
	}
};

//2
export const getDataByUrlsParallel = async (urls) => {
	try {
		const promises = urls.map(getParsedUrl);
		const results = await Promise.all(promises); // ??? Promise.allSettled, если нужен ответ в случаи rejected части промисов

		return results;
	} catch (error) {
		throw new Error(error);
	}
};
