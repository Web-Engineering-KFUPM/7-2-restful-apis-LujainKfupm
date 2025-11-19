import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
await connectDB(process.env.MONGO_URL);

import { connectDB } from "./db.js";
import { Song } from "./models/song.model.js";

const app = express();
const PORT = process.env.PORT || 5174;

app.use(cors());              
app.use(express.json());

await connectDB(process.env.MONGO_URL);

// api/songs (Read all songs)
app.get("/api/songs", async (_req, res) => {
    try {
        const rows = await Song.find().sort({ createdAt: -1 });
        res.json(rows);
    } catch (err) {
        res.status(500).json({ message: err.message || "Fetch failed" });
    }
});

// Get single song by id
app.get("/api/songs/:id", async (req, res) => {
    try {
        const s = await Song.findById(req.params.id);
        if (!s) return res.status(404).json({ message: "Song not found" });
        res.json(s);
    } catch (err) {
        res.status(400).json({ message: err.message || "Invalid id" });
    }
});

// Get single song by id



// api/songs (Insert song)



// /api/songs/:id (Update song)



// /api/songs/:id (Delete song)



app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));

