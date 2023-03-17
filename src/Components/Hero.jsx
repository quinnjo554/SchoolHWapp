import React, { useEffect, useRef, useState } from 'react'
import { getMajors } from '../api'
import { Link } from 'react-router-dom';

function Hero() {
  const [majorsList, setMajorsList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [showFiltered, setShowFiltered] = useState(false);

  const filteredMajors = searchTerm ? majorsList.filter((item) => item.major_name.toLowerCase().includes(searchTerm.toLowerCase())) : []

  useEffect(() => {
    async function setData() {
      const data = await getMajors()
      if (data) {
        console.log(data)
        setMajorsList(data)  
      }
    }
    setData()
  }, [])

  function handleInputValue(event) {
    const current = event.target.value
    setSearchTerm(current)
    setShowFiltered(current)
  }

  return (
    <div className='hero'>
    <div className='fixed top-1/2 left-[44%] w-max h-9'>
      <label className='text-white text-xl relative left-[25%]' htmlFor='search'>
        Search For Your Major
      </label>
      <input
        onChange={handleInputValue} className='mt-3 search-input w-[100%] text-xl h-10 rounded-full indent-3' type='search'
        name='search-input'
        id='search-input'
      />
      <div id='filtered' className={`overflow-y-scroll pl-3 pr-3 rounded-xl text-center hw-full bg-white ${showFiltered ? 'full' : ''}`}>
        <ul className=''>
          {filteredMajors.map((value) => (
            <Link key={value.major_name} to={`/majors/${value.major_name}`}>
              <li>{value.major_name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Hero
