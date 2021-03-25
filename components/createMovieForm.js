
import { useState } from 'react'

const CreateMovieForm = (props) => {

    const [form, setForm] = useState({
        name: '',
        description: '',
        rating: '',
        image: '',
        fullDescr: ''
    })

    const handleChange = (event) => {
        const target = event.target
        const name = target.name
        //setForm({ [event.target.name]: event.target.value })
        setForm({
            ...form,
            [name]: target.value
        })
    }

    const submitForm = () => {
        props.handleFormSubmit({ ...form })
    }

    const handleGenreChange = (event) => {
        const { options } = event.target
        const optionsLength = options.length
        let selectedGenres = []

        for (let i = 0; i < optionsLength; i++) {
            if (options[i].selected) {
                selectedGenres.push(options[i].value)
            }
        }

        setForm({
            ...form,
            genre: selectedGenres.toString()
        })
    }

    return (
        <form>
            {JSON.stringify(form)}
            <div className="form-group">
                <label for="name">Name</label>
                <input
                    onChange={handleChange}
                    value={form.name}
                    name="name"
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Lord of the Rings" />
            </div>

            <div className="form-group">
                <label for="description">Description</label>
                <input
                    onChange={handleChange}
                    value={form.description}
                    name="description"
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="Somewhere in Middle-earth..." />
            </div>

            <div className="form-group">
                <label for="description">Rating</label>
                <input
                    onChange={handleChange}
                    value={form.rating}
                    name="rating"
                    type="number"
                    max="5" min="0"
                    className="form-control"
                    id="rating"
                    placeholder="3" />
                <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
            </div>

            <div className="form-group">
                <label for="image">Image</label>
                <input
                    onChange={handleChange}
                    value={form.image}
                    name="image"
                    type="text"
                    className="form-control"
                    id="image"
                    placeholder="http://....." />
            </div>

            <div className="form-group">
                <label for="longDesc">Long Description</label>
                <textarea
                    onChange={handleChange}
                    value={form.fullDescr}
                    name="fullDescr"
                    className="form-control"
                    id="fullDescr"
                    rows="3"></textarea>
            </div>

            <div className="form-group">
                <label for="genre">Genre</label>
                <select
                    onChange={handleGenreChange}
                    multiple className="form-control" id="genre">
                    <option>drama</option>
                    <option>music</option>
                    <option>adventure</option>
                    <option>historical</option>
                    <option>action</option>
                </select>
            </div>

            <button onClick={submitForm} type="button" className="btn btn-primary">Create</button>
        </form>
    )
}

export default CreateMovieForm