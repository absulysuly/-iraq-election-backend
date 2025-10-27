const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { PrismaClient } = require("@prisma/client");

// Initialize Express and Prisma
const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || "https://iraq-election.vercel.app",
}));
app.use(express.json());

// ✅ Health check route
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Iraqi Election Platform API is running",
    timestamp: new Date().toISOString(),
  });
});

// ✅ Root route
app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to Iraqi Election Platform API",
    version: "1.0.1",
    endpoints: {
      health: "/api/health",
      candidates: "/api/candidates",
    },
  });
});


// 🧠 Candidate Endpoints
// -------------------------------------------

// 🔹 Get all candidates
app.get("/api/candidates", async (req, res) => {
  try {
    const candidates = await prisma.candidate.findMany();
    res.json(candidates);
  } catch (error) {
    console.error("Error fetching candidates:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 🔹 Get a single candidate by ID
app.get("/api/candidates/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const candidate = await prisma.candidate.findUnique({ where: { id } });
    if (!candidate) {
      return res.status(404).json({ error: "Candidate not found" });
    }
    res.json(candidate);
  } catch (error) {
    console.error("Error fetching candidate:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 🔹 Create a new candidate
app.post("/api/candidates", async (req, res) => {
  try {
    const { name, party, governorate } = req.body;
    const newCandidate = await prisma.candidate.create({
      data: { name, party, governorate },
    });
    res.status(201).json(newCandidate);
  } catch (error) {
    console.error("Error creating candidate:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 🔹 Update a candidate
app.put("/api/candidates/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, party, governorate } = req.body;
    const updated = await prisma.candidate.update({
      where: { id },
      data: { name, party, governorate },
    });
    res.json(updated);
  } catch (error) {
    console.error("Error updating candidate:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 🔹 Delete a candidate
app.delete("/api/candidates/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.candidate.delete({ where: { id } });
    res.json({ message: "Candidate deleted successfully" });
  } catch (error) {
    console.error("Error deleting candidate:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// -------------------------------------------

// Start server
app.listen(PORT, () => {
  console.log("🚀 Iraqi Election Backend running on port", PORT);
  console.log("🌐 Environment:", process.env.NODE_ENV || "development");
  console.log("🔗 CORS Origin:", process.env.CORS_ORIGIN || "https://iraq-election.vercel.app");
});

module.exports = app;
