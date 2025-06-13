export function FilterModal({ openModel, onChange, filterBy, onApply }) {
    function getFilterName(name) {
        switch (name) {
            case 'seller-details':
                return 'Seller details'
            case 'budget':
                return ''
            case 'delivery-time':
                return ''
            default:
                return 'Filter'
        }
    }
    return (
        <div className={`menu-content ${openModel}`}>
            <div className="menu-data">
                <h1>{getFilterName(openModel)}</h1>
                {openModel === "seller-details" &&
                    <div className="radio-list flex">
                        <label>
                            <input
                                type="radio"
                                name="level"
                                value="Top Rated Seller"
                                checked={filterBy.level === "Top Rated Seller"}
                                onChange={onChange}
                            />
                            Top Rated Seller
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="level"
                                value="1"
                                checked={filterBy.level === "1"}
                                onChange={onChange}
                            />
                            Level 1
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="level"
                                value="2"
                                checked={filterBy.level === "2"}
                                onChange={onChange}
                            />
                            Level 2
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="level"
                                value="New Seller"
                                checked={filterBy.level === "New Seller"}
                                onChange={onChange}
                            />
                            New Seller
                        </label>
                    </div>
                }

                {
                    openModel === "budget" &&
                    <div className="radio-list flex">
                        <label>
                            <input type="radio" name="budget" />
                            Value
                            <span> Under 50$</span>
                        </label>

                        <label>
                            <input type="radio" name="budget" />
                            Mid-range
                            <span> 50$-105$</span>

                        </label>

                        <label>
                            <input type="radio" name="budget" />
                            High-end
                            <span> 105$ & Above</span>

                        </label>

                    </div>

                }
                {
                    openModel === "delivery-time" &&
                    <div className="radio-list flex">
                        <label>
                            <input type="radio" name="delivery-time" />
                            Express 24H
                        </label>

                        <label>
                            <input type="radio" name="delivery-time" />
                            Up to 3 days
                        </label>

                        <label>
                            <input type="radio" name="delivery-time" />
                            Up to 7 days

                        </label>

                        <label>
                            <input type="radio" name="delivery-time" />
                            Anytime

                        </label>

                    </div>

                }
            </div>
            <div className="content-btn flex">
                <button>Clear all</button>
                <button
                    className="aplay-btn"
                    onClick={() => {
                        onApply()
                    }}
                >
                    Apply
                </button>
            </div>

        </div >
    )

}



