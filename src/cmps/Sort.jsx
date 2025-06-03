export function Sort({ count }) {
    
    return (
        <section className="sort-bar flex">
            <div>
                <span>{count}</span>+ results
            </div>
            <div>
                Sort by:
                <label>
                    <select id="category" name="category">
                        <div className="options">
                        <option value="recommended">Recommended</option>
                        <option value="best selling">Best selling</option>
                        <option value="newest arrivals">Newest arrivals</option>

                        </div>
                        </select>
                </label>
            </div>
        </section>
    )
}