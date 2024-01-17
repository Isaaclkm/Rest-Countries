import React from 'react'

const Filter = () => {
  return (
    <section className='filter'>
        <form className='form-control'>
            <input type='search' name='search' id='search' placeholder='Search for a country'/>
        </form>

        <div className='region-filter'>
            <select name="select" id="select" className='select'>
                <option value="Filter by region">Filter by region</option>
                <option value="Filter by region">Africa</option>
                <option value="Filter by region">America</option>
                <option value="Filter by region">Asia</option>
                <option value="Filter by region">Europe</option>
                <option value="Filter by region">Oceania</option>
            </select>
        </div>
    </section>
  )
}

export default Filter