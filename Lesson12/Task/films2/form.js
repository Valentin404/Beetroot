<form className="ui form" onSubmit={???}>
    <div className="ui  grid">
        <div className="twelve wide column">
            <div className="field">
                <label>Film title</label>
                <input type="text"  name="title"  id="title" placeholder="film title"
                       value={???}
                       onChange={???}
                />
            </div>
            <div className="field">
                <label>Film description</label>
                <textarea name="description" id="description" placeholder="film description"
                          onChange={???}
                          value={???}
                />
            </div>
        </div>

        <div className="twelve wide column field">
            <label>Image</label>
            <input type="text" name="img" id="img"  placeholder="img"
                   onChange={???}
                   value={???}
            />
        </div>

        <div className="six wide column field">
            <div className="field">
                <label>Director</label>
                <input   type="text"  name="director"  id="director"  placeholder="film director"
                         onChange={???}
                         value={???}
                />
            </div>
        </div>

        <div className="six wide column field">
            <div className="field">
                <label>Duration</label>
                <input type="number"  name="duration" id="duration"  placeholder="Duration"
                       value={???}
                       onChange={???}
                />
            </div>
        </div>

        <div className="six wide column field">
            <div className="field">
                <label>Price</label>
                <input type="number" name="price"  id="price"  placeholder="price"
                       value={???}
                       onChange={???}
                />
            </div>
        </div>

        <div className="six wide column inline field">
            <label htmlFor="featured">Featured</label>
            <input  type="checkbox" name="featured"  id="featured"
                    value={???}
                    onChange={???}
            />
        </div>
    </div>

    <div className="ui fluid buttons">
        <button className="ui button primary" type="submit">Save</button>
        <div className="or" />
        <span className="ui button">Hide form</span>
    </div>
</form>
