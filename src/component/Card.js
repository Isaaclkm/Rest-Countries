import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const Card = () => {
 
  const id = useParams();

  const url = `https://restcountries.com/v3.1/name/${id.id}`;

  const [country, setCountry] = useState(null)

    const fetchCountryData = async() => {
      try {
        const response = await fetch(url)
        const country = await response.json()
        setCountry(country[0])
        console.log(country);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
       
    }

    useEffect(() => {
       fetchCountryData()
    }, [id])




  return (
     <section className='information'>
        {country ? (
          <>
            <div className='image-container'>
              {country.flags && <img src={country.flags.svg} alt={country.name.common} />}
            </div>

            <div className='text-container'>
              <h1>{country.name.common}</h1>
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Sub Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
              <p>Top Level Domain: {country.tld}</p>
              <p>Currencies: </p>
              <p>Languages: {country.languages && Object.values(country.languages).join(', ')}</p>

              <h3>Border Countries: {country.borders && country.borders.join(', ')}</h3>
            </div>
        
            {/* Add more elements to display other properties */}
          </>
        ) : (
          <div>Loading...</div>
        )}
      </section>
      )
}

export default Card