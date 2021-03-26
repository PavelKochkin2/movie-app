import React from 'react'
import CreateMovieForm from '../../../components/createMovieForm'
import { getMovieById } from '../../../actions'


class EditMovie extends React.Component {

    static getInitialProps({ query }) {

        console.log({ query })
        return { query }
    }

    state = {
        movie: {}
    }

    componentDidMount() {
        const { id } = this.props.query
        getMovieById(id).then(movie => {
            this.setState({ movie })
        })
    }

    render() {
        const { movie } = this.state
        return (
            <div className="container">
                <h1>Edit the movie</h1>
                <CreateMovieForm initialData={movie} />
            </div>
        )
    }
}

export default EditMovie