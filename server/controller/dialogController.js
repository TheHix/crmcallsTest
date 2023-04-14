import { getDataByUrlsParallel } from "../api/getDataByUrls.js";

class DialogController {
	async getAll(req, res) {
		try {
			const { urls } = req.body;
			const data = await getDataByUrlsParallel(urls);

			res.status(200).json({ data });
		} catch (error) {
			res.status(400).json({ error: error.message });
		}
	}
}

export const dialogController = new DialogController();
