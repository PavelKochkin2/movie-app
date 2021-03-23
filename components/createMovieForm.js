
const CreateMoviehtmlForm = () => {
    return (
        <htmlForm>
            <div className="htmlForm-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="htmlForm-control" id="name" aria-describedby="emailHelp" placeholder="Lord of the Rings" />
            </div>
            <div className="htmlForm-group">
                <label htmlFor="description">Description</label>
                <input type="text" className="htmlForm-control" id="description" placeholder="Somewhere in Middle-earth..." />
            </div>
            <div className="htmlForm-group">
                <label htmlFor="description">Rating</label>
                <input type="number" max="5" min="0" className="htmlForm-control" id="rating" placeholder="3" />
                <small id="emailHelp" className="htmlForm-text text-muted">Max: 5, Min: 0 </small>
            </div>
            <div className="htmlForm-group">
                <label htmlFor="image">Image</label>
                <input type="text" className="htmlForm-control" id="image" placeholder="http://....." />
            </div>
            <div className="htmlForm-group">
                <label htmlFor="cover">Cover</label>
                <input type="text" className="htmlForm-control" id="cover" placeholder="http://......" />
            </div>
            <div className="htmlForm-group">
                <label htmlFor="longDesc">Long Description</label>
                <textarea className="htmlForm-control" id="longDesc" rows="3"></textarea>
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