import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import { Link } from 'react-router-dom'

const url = 'https://restcountries.com/v3.1/all'

const Countries = () => {
    const [countries, setCountries] = useState([])

    const fetchCountryData = async() => {
        const response = await fetch(url)
        const countries = await response.json()
        setCountries(countries)
        console.log(countries);
    }

    useEffect(() => {
       fetchCountryData()
    }, [])


  return (
    <>
    <Filter/>
     <section className='grid'>
     {countries.map((country) => {
        const { 
          ccn3, 
          name, 
          flags, 
          population, 
          capital, 
          region 
        } = country 
      
        return (
        
        <article key={ccn3}>
           <Link to={`/name/${name.common}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div>
                <img src={flags.svg} alt={name} />
                  <div className='details'>
                  <h3>{name.common}</h3>
                    <h4>Population: <span> {population}</span></h4>
                    <h4>Region: <span> {region}</span></h4>
                    <h4>Capital: <span> {capital}</span></h4>
                  </div>
                </div>
              </Link>
            </article>

            )
       })}
     </section>
    </>
  
    )
}

export default Countries