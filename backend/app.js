import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();
export const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// --- Import and use routers here ---
// import authRoutes from "./src/routes/auth.js";
// import courseRoutes from "./src/routes/course.js";
// import adminRoutes from "./src/routes/admin.js";
// import instructorRoutes from "./src/routes/instructor.js";

// app.use("/api/auth", authRoutes);
// app.use("/api/courses", courseRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/instructor", instructorRoutes);

app.get("/", (req, res) => {
  res.send("Ziya LMS API is running");
});

export default app;
