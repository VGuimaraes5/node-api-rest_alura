import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
  .get("/livros", LivroController.index)
  .get("/livros/search", LivroController.getByEditora)
  .get("/livros/:id", LivroController.show)
  .post("/livros", LivroController.store)
  .put("/livros/:id", LivroController.update)
  .delete("/livros/:id", LivroController.destroy);

export default router;
