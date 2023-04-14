export const clearUrls = (urls) => {
	return urls
		.split(",")
		.filter(Boolean)
		.map((url) => url.trim());
};
