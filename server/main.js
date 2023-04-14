import express from "express";
import { allowCORS } from "./middlewares/allowCORS.js";
import { dialogRouter } from "./routes/dialogRouter.js";

const PORT = 5000;

const app = express();

app.use(express.json());
app.use(allowCORS);
app.use("/", dialogRouter);

const start = () => {
	try {
		app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
	} catch (error) {
		console.log(error);
	}
};

start();
