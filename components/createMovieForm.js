
import { useState } from 'react'

const CreateMoviehtmlForm = () => {

    const [form, setForm] = useState({
        name: 'Some Movie',
        description: 'lala'
    })

    const handleChanges = (event) => {
        const target = event.target
        const name = target.name
        debugger
        //setForm({ [event.target.name]: event.target.value })

        setForm({
            ...form,
            [name]: target.value
        })
    }

    return (
        <htmlForm>
            {JSON.stringify(form)}
            <div className="htmlForm-group">
                <label htmlFor="name">Name</label>
                <input
                    onChange={handleChanges}
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
                    onChange={handleChanges}
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
                    onChange={handleChanges}
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
                    onChange={handleChanges}
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
                    onChange={handleChanges}
                    value={form.genre}
                    name="longDesc"
                    className="htmlForm-control"
                    id="longDesc"
                    rows="3"></textarea>
            </div>

            <div className="htmlForm-group">
                <label htmlFor="genre">Genre</label>
                <select multiple className="htmlForm-control" id="genre">
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