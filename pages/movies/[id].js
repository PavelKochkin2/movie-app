import { useRouter } from 'next/router'
import { getMovieById, deleteMovie } from '../../actions/index'

const Movie = (props) => {

    const router = useRouter()
    const { movie } = props

    const { id } = router.query

    const handleDeleteMovie = (id) => {
        deleteMovie(id).then(() => {
            router.push('/')
        })
    }

    return (
        <div className="container">

            <h1>Movie with id: {id} </h1>

            <div className="jumbotron">
                <h1 className="display-4">{movie.name}</h1>
                <p className="lead">{movie.description}</p>
                <hr className="my-4" />
                <p>Genre: {movie.genre}</p>
                <a className="btn btn-primary btn-lg mr-1" href="#" role="button">Learn more</a>
                <a onClick={() => handleDeleteMovie(id)} className="btn btn-danger btn-lg " href="#" role="button">Delete</a>
            </div>

            <p className="descr-text">
                {movie.fullDescr}
            </p>

            <style jsx>{`
            .descr-text {
                font-size: 25px
            }
            `}

            </style>

        </div>
    )
}

Movie.getInitialProps = async (ctx) => {
    const { id } = ctx.query
    const movie = await getMovieById(id)

    return { movie }
}


export default Movie