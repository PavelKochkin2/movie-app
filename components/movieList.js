import React from 'react'


class MovieList extends React.Component {

    shortStr = (str, maxLenth) => {
        if (str.length > maxLenth) {
            return str.substr(0, maxLenth) + '...'
        }

        return str
    }

    renderMovies(movies) {

        const movieElements = movies.map((movie) => (
            <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="#"><img className="card-img-top" src={movie.image} alt="" /></a>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a href="#">{movie.name}</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">{this.shortStr(movie.description, 200)}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{movie.rating}</small>
                    </div>
                </div>
            </div>
        ))

        return movieElements
    }
    render() {
        const { movies } = this.props
        return (
            <React.Fragment>
                { this.renderMovies(movies)}
            </React.Fragment>
        )
    }
}

export default MovieList