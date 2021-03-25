const next = require('next')
const express = require('express');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const movies = require('./movies')

app
    .prepare()
    .then(() => {

        const server = express();

        server.get('/api/v1/movies', (req, res) => {
            return res.json(movies)
        })

        server.get('/api/v1/movies/:id', (req, res) => {
            const { id } = req.params

            const movieIndex = movies.findIndex(m => m.id == id)
            const movie = movies[movieIndex]

            return res.json(movie)
        })

        server.post('/api/v1/movies', (req, res) => {
            const movie = req.body
            return res.json({ ...movie, createdTime: 'today', author: 'Filip' })
        })

        server.patch('/api/v1/movies/:id', (req, res) => {
            const { id } = req.params

            const movieIndex = movies.findIndex(m => m.id == id)
            const movie = movies[movieIndex]

            return res.json(movie)
        })

        server.delete('/api/v1/movies/:id', (req, res) => {
            const { id } = req.params
            return res.json({ message: `Deleting post of id: ${id}` })
        })

        //we are handling all requests coming to the server
        server.get('*', (req, res) => {
            return handle(req, res)
        })

        const PORT = process.env.PORT || 3000;

        server
            .use(handle)
            .listen(PORT, (err) => {
                if (err) throw err
                console.log('> Ready on port ' + PORT)
            })
    })