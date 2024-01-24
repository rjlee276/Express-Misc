import express from "express"
import morgan from "morgan"
import {logger} from "./example_middleware.js"

const app = express()
const port = 3000

app.use(logger)

app.use(morgan("tiny"))

app.get("/", (req, res) => {
    res.send("H");
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
});