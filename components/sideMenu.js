
import Modal from './modal'
import CreateMovieForm from './createMovieForm'
import { createMovie } from '../actions/index'

const SideMenu = (props) => {

    const { categories } = props

    const handleCreateMovie = (movie) => {
        debugger
        createMovie(movie).then((movies) => {
            //close modal after creating
            console.log(JSON.stringify(movies))
        })
    }

    return (
        <div>
            {/* Containment */}
            <Modal hasSubmitBtn={false}>
                <CreateMovieForm handleFormSubmit={handleCreateMovie} />
            </Modal>
            <h1 className="my-4">{props.shopName}</h1>
            <div className="list-group">
                {categories.map((category, index) => (
                    <a key={index}
                        href="#"
                        className="list-group-item">{category.name}</a>
                ))}

            </div>
        </div >
    )
}
export default SideMenu