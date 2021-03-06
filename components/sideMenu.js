
import Modal from './modal'
import CreateMovieForm from './createMovieForm'
import { createMovie } from '../actions/index'
import { useRouter } from 'next/router'

const SideMenu = (props) => {

    const { categories } = props
    const router = useRouter()
    let modal = null

    const handleCreateMovie = (movie) => {
        createMovie(movie).then((movies) => {
            modal.closeModal()
            router.push('/')
        })
    }

    return (
        <div>
            {/* Containment */}
            <Modal ref={element => modal = element} hasSubmitBtn={false}>
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