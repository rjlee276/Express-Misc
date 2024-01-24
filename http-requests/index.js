import express from "express"
const app = express();

const port = 3000; 

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>ABBB</h1>")
});

app.post("/about", (req, res) => {
    res.sendStatus(201)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
