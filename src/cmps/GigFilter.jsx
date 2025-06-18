import { useState, useEffect, useRef } from 'react'
import { ArrowDownIcon, ClearFilter } from '../svg'
import { FilterModal } from './FilterModal'
import { p } from 'framer-motion/client'

export function GigFilter({ filterBy, onSetFilterBy }) {
  const [filterToEdit, setFilterToEdit] = useState(structuredClone(filterBy))
  const [isFilterModel, setIsFilterModel] = useState(null)
  const [isSticky, setIsSticky] = useState(false)
  const ref = useRef(null)

  // useEffect(() => {
  //   onSetFilterBy(filterToEdit)
  // }, [filterToEdit])

  useEffect(() => {
    function onScroll() {
      if (!ref.current) return
      const top = ref.current.getBoundingClientRect().top
      setIsSticky(top <= 0)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  function clearSellerLevel() {
    setFilterToEdit({ ...filterToEdit, level: '' })
  }

  function applyFilter() {
    setIsFilterModel(null)
    onSetFilterBy(filterToEdit)
  }

  function renderActiveFilters(filterBy) {
    const activeFilters = [
      { label: 'level', value: filterBy.level },
      { label: 'price', value: filterBy.price },
      { label: 'deliveryTime', value: filterBy.deliveryTime }
    ].filter(item => item.value)

    return (
      <div className="tab-title-filter flex">
        {activeFilters.map(item => {
          const showLevelLabel = item.label === 'level' && ['1', '2'].includes(item.value)

          return (
            <button key={item.label} onClick={() => clearAll()}>
              {showLevelLabel ? `Level ${item.value}` : item.value}
              <ClearFilter />
            </button>
          )
        })}
      </div>
    )
  }


  function clearAll() {
    const emptyFilter = getEmptyFilter()

    setFilterToEdit(emptyFilter)
    onSetFilterBy(emptyFilter)
    setIsFilterModel(null)
  }

  function getEmptyFilter() {
    return {
      txt: '',
      category: '',
      level: '',
      price: '',
      deliveryTime: ''
    }
  }

  return (
    <search>

      <section
        ref={ref}
        className={`gig-filter flex sticki ${isSticky ? 'sticky-active' : ''}`}
        style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: '#fff' }}
      >
        <div className="flex filter-btn">
          <button> Service options</button>
          {isFilterModel && (
            <FilterModal
              openModel={isFilterModel}
              onChange={handleChange}
              filterBy={filterToEdit}
              onApply={applyFilter}
              onClear={clearAll}
            />
          )}
          <ArrowDownIcon />
        </div>
        <div className={`flex filter-btn ${filterBy.level !== '' ? 'selcted' : ''}`} onClick={() => setIsFilterModel('seller-details')}>
          <button onClick={() => setIsFilterModel('seller-details')}>Seller details</button>
          <ArrowDownIcon />
        </div>
        <div className={`flex filter-btn ${filterBy.price !== '' ? 'selcted' : ''}`} onClick={() => setIsFilterModel('budget')}>
          <button>Budget</button>
          <ArrowDownIcon />
        </div>
        <div className={`flex filter-btn ${filterBy.deliveryTime !== '' ? 'selcted' : ''}`} onClick={() => setIsFilterModel('delivery-time')}>
          <button>Delivery time</button>
          <ArrowDownIcon />
        </div>
      </section>
      {
        renderActiveFilters(filterBy)
      }
    </search>
  )
}
