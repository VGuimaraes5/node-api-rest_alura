import express  from "express"

const app = express()

const livros = [
    {id: 1, titulo: 'GOT'},
    {id: 2, titulo: 'LOTR'}
]

app.get('/', (req, res) => {
    res.status(200).send("Curso de node")
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})

export default app