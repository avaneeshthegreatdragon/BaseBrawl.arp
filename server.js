import express from "express";
import cors from "cors";
import { signup, login } from "./auth.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Base Brawl Online Server is running!");
});

app.post("/api/signup", signup);
app.post("/api/login", login);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
