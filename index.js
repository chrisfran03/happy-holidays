import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/joke", async (req, res) => {
    try {
        const response = await axios.get("https://christmascountdown.live/api/joke");
        const result = response.data;
        res.render("joke.ejs", {
            joke: result
        });
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("joke.ejs", {
            error: "Sorry the elves could not fetch you a joke.",
        });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}`);
})