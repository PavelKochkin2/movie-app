
import { useState } from 'react'

const CreateMoviehtmlForm = () => {

    const [form, setForm] = useState({
        name: 'Movie name',
        description: 'lala'
    })

    const handleChange = (event) => {
        const target = event.target
        const name = target.name
        debugger
        //setForm({ [event.target.name]: event.target.value })

        setForm({
            ...form,
            [name]: target.value
        })
    }

    const handleGenreChange = (event) => {
        debugger
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
        <htmlForm>
            {JSON.stringify(form)}
            <div className="htmlForm-group">
                <label htmlFor="name">Name</label>
                <input
                    onChange={handleChange}
                    value={form.name}
                    name="name"
                    type="text"
                    className="htmlForm-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Lord of the Rings" />
            </div>

            <div className="htmlForm-group">
                <label htmlFor="description">Description</label>
                <input
                    onChange={handleChange}
                    value={form.description}
                    name="description"
                    type="text"
                    className="htmlForm-control"
                    id="description"
                    placeholder="Somewhere in Middle-earth..." />
            </div>

            <div className="htmlForm-group">
                <label htmlFor="description">Rating</label>
                <input
                    onChange={handleChange}
                    value={form.rating}
                    name="rating"
                    type="number"
                    max="5" min="0"
                    className="htmlForm-control"
                    id="rating"
                    placeholder="3" />
                <small id="emailHelp" className="htmlForm-text text-muted">Max: 5, Min: 0 </small>
            </div>

            <div className="htmlForm-group">
                <label htmlFor="image">Image</label>
                <input
                    onChange={handleChange}
                    value={form.image}
                    name="image"
                    type="text"
                    className="htmlForm-control"
                    id="image"
                    placeholder="http://....." />
            </div>

            <div className="htmlForm-group">
                <label htmlFor="longDesc">Long Description</label>
                <textarea
                    onChange={handleChange}
                    value={form.fullDescr}
                    name="longDesc"
                    className="htmlForm-control"
                    id="longDesc"
                    rows="3"></textarea>
            </div>

            <div className="htmlForm-group">
                <label htmlFor="genre">Genre</label>
                <select
                    onChange={handleGenreChange}
                    multiple className="htmlForm-control" id="genre">
                    <option>drama</option>
                    <option>music</option>
                    <option>adventure</option>
                    <option>historical</option>
                    <option>action</option>
                </select>
            </div>
        </htmlForm>
    )
}

export default CreateMoviehtmlForm