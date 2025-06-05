export function Sort({ count }) {

    return (
        <section className="sort-bar flex">
            <div>
                <span>{count}</span>+ results
            </div>
            <div>
                Sort by:
                <label htmlFor="category">
                    <select id="category" name="category">
                        <option value="recommended">Recommended</option>
                        <option value="best selling">Best selling</option>
                        <option value="newest arrivals">Newest arrivals</option>
                    </select>
                </label>
            </div>
        </section>
    );

}