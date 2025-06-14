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

                {openModel === "budget" &&
                    <div className="radio-list flex">
                        <label>
                            <input
                                type="radio"
                                name="price"
                                value="under-50"
                                checked={filterBy.price === 'under-50'}
                                onChange={onChange}
                            />
                            Under 50₪
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="price"
                                value="mid"
                                checked={filterBy.price === 'mid'}
                                onChange={onChange}
                            />
                            50₪–105₪
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="price"
                                value="above-105"
                                checked={filterBy.price === 'above-105'}
                                onChange={onChange}
                            />
                            105₪ and above
                        </label>
                    </div>
                }

                {
                    openModel === "delivery-time" &&
                    <div className="radio-list flex">
                        <label>
                            <input
                                type="radio"
                                name="deliveryTime"
                                value="1"
                                checked={filterBy.deliveryTime === "1"}
                                onChange={onChange}
                            />
                            Express 24H
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="deliveryTime"
                                value="3"
                                checked={filterBy.deliveryTime === "3"}
                                onChange={onChange}
                            />
                            Up to 3 days
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="deliveryTime"
                                value="7"
                                checked={filterBy.deliveryTime === "7"}
                                onChange={onChange}
                            />
                            Up to 7 days
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="deliveryTime"
                                value=""
                                checked={!filterBy.deliveryTime}
                                onChange={onChange}
                            />
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



