const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const userRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT || 5000;

require("dotenv").config();

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Your backend is running 🍀");
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
