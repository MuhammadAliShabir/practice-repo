import { Router } from "express";

const router = Router();

router.get("/hello", (req, res) => {
  res.json({ message: "Hello from the backend 🎉" });
});

router.post("/echo", (req, res) => {
  res.json({
    received: req.body,
  });
});

export default router;
