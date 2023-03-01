import autores from "../models/Autor.js";

class AutoresController {
  static index = (req, res) => {
    autores.find((err, autores) => {
      res.status(200).json(autores);
    });
  };

  static show = (req, res) => {
    const id = req.params.id;

    autores.findById(id, (err, autores) => {
      if (err) {
        res.status(400).json({
          message: "Autor não encontrado",
          error: err.message,
        });
      } else {
        res.status(200).json(autores);
      }
    });
  };

  static store = (req, res) => {
    let autor = new autores(req.body);

    autor.save((err) => {
      if (err) {
        res.status(500).json({
          message: "Falha ao cadastrar autor",
          error: err.message,
        });
      } else {
        res.status(201).json(autor.toJSON());
      }
    });
  };

  static update = (req, res) => {
    const id = req.params.id;

    autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res.status(500).json({
          message: "Falha ao atualizar autor",
          error: err.message,
        });
      } else {
        res.status(200).json({ message: "Autor atualizado com sucesso!" });
      }
    });
  };

  static destroy = (req, res) => {
    const id = req.params.id;

    autores.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(500).json({
          message: "Falha ao remover autor",
          error: err.message,
        });
      } else {
        res.status(200).json({ message: "Autor removido com sucesso!" });
      }
    });
  };
}

export default AutoresController;
