const allowedDomains = "http://127.0.0.1:5173";

export const allowCORS = (_, res, next) => {
	res.header("Access-Control-Allow-Origin", allowedDomains);
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
};
