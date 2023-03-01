import express from "express";
import AutoresController from "../controllers/autoresController.js";

const router = express.Router();

router
  .get("/autores", AutoresController.index)
  .get("/autores/:id", AutoresController.show)
  .post("/autores", AutoresController.store)
  .put("/autores/:id", AutoresController.update)
  .delete("/autores/:id", AutoresController.destroy);

export default router;
