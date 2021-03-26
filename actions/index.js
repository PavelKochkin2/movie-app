import axios from 'axios'

const MOVIE_DATA = []
const BASE_URL = "http://localhost:3000"
const CATEGORY_DATA = [
    { 'id': '1', 'name': 'drama' },
    { 'id': '2', 'name': 'action' },
    { 'id': '3', 'name': 'adventure' },
    { 'id': '4', 'name': 'historical' },
    { 'id': '5', 'name': 'horror' },
    { 'id': '6', 'name': 'АНИМЕ' },
]


export const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(CATEGORY_DATA)
            reject("Cannot fetch categories!")
        })
    })
}

export const getMovies = async () => {
    const res = await axios.get(`${BASE_URL}/api/v1/movies`)
    return res.data
}

export const getMovieById = async (id) => {
    const res = await axios.get(`${BASE_URL}/api/v1/movies/${id}`)
    return res.data
}

export const createMovie = (movie) => {
    movie.id = Math.random().toString(36).substr(2, 5)
    return axios.post(`${BASE_URL}/api/v1/movies`, movie).then(res => res.data)
}

export const deleteMovie = async (id) => {
    const res = await axios.delete(`${BASE_URL}/api/v1/movies/${id}`)
    return res.data
}

