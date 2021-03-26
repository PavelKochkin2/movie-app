const next = require('next')
const express = require('express');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()



const fs = require('fs')
const path = require('path')
const filePath = './movies.json'
const movies = require(filePath)



app
    .prepare()
    .then(() => {

        const server = express();

        server.use(express.json())

        server.get('/api/v1/movies', (req, res) => {
            return res.json(movies)
        })

        server.get('/api/v1/movies/:id', (req, res) => {
            const { id } = req.params

            const movie = movies.find(m => m.id == id)

            return res.json(movie)
        })

        server.post('/api/v1/movies', (req, res) => {
            const movie = req.body
            console.log(`MOVIE: ${movie}`)
            movies.push(movie)

            const pathToFile = path.join(__dirname, filePath)
            const stringifiedData = JSON.stringify(movies, null, 2)

            fs.writeFile(pathToFile, stringifiedData, (err) => {
                if (err) {
                    return res.status(422).send(err)
                }

                return res.json('Movie has been succesfuly added!')
            })
        })

        server.patch('/api/v1/movies/:id', (req, res) => {
            const { id } = req.params

            const movieIndex = movies.findIndex(m => m.id == id)
            const movie = movies[movieIndex]

            return res.json(movie)
        })

        server.delete('/api/v1/movies/:id', (req, res) => {
            const { id } = req.params
            const movieIndex = movies.findIndex(m => m.id == id)

            movies.splice(movieIndex, 1)

            const pathToFile = path.join(__dirname, filePath)
            const stringifiedData = JSON.stringify(movies, null, 2)

            fs.writeFile(pathToFile, stringifiedData, (err) => {
                if (err) {
                    return res.status(422).send(err)
                }

                return res.json('Movie has been succesfuly added!')
            })
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