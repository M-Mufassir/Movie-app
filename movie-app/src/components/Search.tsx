import React from 'react'

interface searchProps{
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Search = () => {
  return (
    <div className='text-white text-3xl'>search</div>
  )
}

export default Search