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

        server.post('/api/v1/movies', (req, res) => {
            const movie = req.body
            console.log(JSON.stringify(movie))
            return res.json({ ...movie, createdTime: 'today', author: 'Filip' })
        })

        server.patch('/api/v1/movies/:id', (req, res) => {
            const { id } = req.params
            return res.json({ message: `Updating post of id: ${id}` })
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