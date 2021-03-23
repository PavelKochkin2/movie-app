import { useRouter } from 'next/router'
import { getMovieById } from '../../actions/index'

const Movie = (props) => {

    const router = useRouter()
    const { movie } = props

    const { id } = router.query
    return (
        <div className="container">

            <h1>Movie with id: {id} </h1>

            <div className="jumbotron">
                <h1 className="display-4">{movie.name}</h1>
                <p className="lead">{movie.description}</p>
                <hr className="my-4" />
                <p>Genre: {movie.genre}</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
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