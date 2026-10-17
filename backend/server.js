const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/api/health", (req, res) => {
    res.json({
        status: "UP",
        message: "Backend is running successfully"
    });
});

app.get("/api/students", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Sourabh",
            course: "DevOps"
        }
    ]);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Backend running on port ${PORT}`);
});
