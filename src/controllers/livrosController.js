import livros from "../models/Livro.js";

class LivroController {
  static index = (req, res) => {
    livros
      .find()
      .populate("autor")
      .exec((err, livros) => {
        res.status(200).json(livros);
      });
  };

  static show = (req, res) => {
    const id = req.params.id;

    livros
      .findById(id)
      .populate("autor", "nome")
      .exec((err, livros) => {
        if (err) {
          res.status(400).json({
            message: "Livro não encontrado",
            error: err.message,
          });
        } else {
          res.status(200).json(livros);
        }
      });
  };

  static store = (req, res) => {
    let livro = new livros(req.body);

    livro.save((err) => {
      if (err) {
        res.status(500).json({
          message: "Falha ao cadastrar livro",
          error: err.message,
        });
      } else {
        res.status(201).json(livro.toJSON());
      }
    });
  };

  static update = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res.status(500).json({
          message: "Falha ao atualizar livro",
          error: err.message,
        });
      } else {
        res.status(200).json({ message: "Livro atualizado com sucesso!" });
      }
    });
  };

  static destroy = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(500).json({
          message: "Falha ao remover livro",
          error: err.message,
        });
      } else {
        res.status(200).json({ message: "Livro removido com sucesso!" });
      }
    });
  };

  static getByEditora = (req, res) => {
    const editora = req.query.editora;

    livros.find({ editora: editora }, {}, (err, livros) => {
      if (err) {
        res.status(400).json({
          message: "Livros não encontrados",
          error: err.message,
        });
      } else {
        res.status(200).json(livros);
      }
    });
  };
}

export default LivroController;
