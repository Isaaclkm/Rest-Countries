import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'



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

        <Link to={`http://localhost:3000`}><h4 className='button'> Back</h4></Link>
        {country ? (
          <>
          <div className='box'>
                <div className='image-container'>
                  {country.flags && <img src={country.flags.svg} alt={country.name.common} />}
                </div>

                <div className='text-container'>
                  <h1>{country.name.common}</h1>

                  <div className='data'>
                    <div className='first-data'>
                      <p>Native name: <span>{country.name.nativeName && Object.values(country.name.nativeName)[0].official}</span></p>
                      <p>Population: <span>{country.population}</span></p>
                      <p>Region: <span>{country.region}</span></p>
                      <p>Sub Region: <span>{country.region}</span></p>
                      <p>Capital: <span>{country.capital}</span></p>
                    </div>
                    <div className='second-data'>
                      <p>Top Level Domain: <span> {country.tld}</span></p>
                      <p>Currencies: <span>{country.currencies && Object.values(country.currencies)[0].name}</span></p>
                      <p>Languages: <span>{country.languages && Object.values(country.languages).join(', ')}</span></p>
                    </div>
                  </div>
                   {country.borders ? ( <h4>Border Countries: {country.borders.map(curr => <span>{curr}</span>)}</h4> ): ( <p></p>)}
                </div>
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