import { useState, useEffect } from 'react'
import { ArrowDownIcon } from '../svg'
import { FilterModal } from './FilterModal'

export function GigFilter({ filterBy, onSetFilterBy }) {
    const [filterToEdit, setFilterToEdit] = useState(structuredClone(filterBy))
    const [isFilterModel, setIsFilterModel] = useState(null)

    useEffect(() => {
        onSetFilterBy(filterToEdit)
    }, [filterToEdit])

    function handleChange(ev) {
        const type = ev.target.type
        const field = ev.target.name
        let value

        switch (type) {
            case 'text':
            case 'radio':
                value = field === 'sortDir' ? +ev.target.value : ev.target.value
                if (!filterToEdit.sortDir) filterToEdit.sortDir = 1
                break
            case 'number':
            case 'range':
                value = +ev.target.value
                break
        }
        setFilterToEdit({ ...filterToEdit, [field]: value })
    }

    function clearFilter() {
        setFilterToEdit({ ...filterToEdit, txt: '', minSpeed: '', maxPrice: '' })
    }

    function clearSort() {
        setFilterToEdit({ ...filterToEdit, sortField: '', sortDir: '' })
    }

    return <section className="gig-filter flex">
        {isFilterModel &&
            
            <FilterModal openModel={isFilterModel}/>
            }
        <div className="flex filter-btn">
            <button> Service options</button>
            <ArrowDownIcon />
        </div>
        <div className="flex filter-btn" onClick={()=>setIsFilterModel('seller-details')}>
            <button onClick={()=>setIsFilterModel('seller-details')}>Seller details</button>
            <ArrowDownIcon />
        </div>
        <div className="flex filter-btn" onClick={()=>setIsFilterModel('budget')}>
            <button >Budget</button>
            <ArrowDownIcon />
        </div>
        <div className="flex filter-btn" onClick={()=>setIsFilterModel('delivery-time')}>
            <button>Delivery time</button>
            <ArrowDownIcon />
        </div>
    </section>
}