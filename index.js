import express from "express";
import cors from "cors";
import postsRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import multer from "multer";
const app = express();

dotenv.config();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Storeage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/users", usersRoutes);

app.listen(process.env.PORT, () => {
  console.log("Backend server is listening on port " + process.env.PORT);
});
