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


// Get single song by id



// api/songs (Insert song)



// /api/songs/:id (Update song)



// /api/songs/:id (Delete song)



app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));

