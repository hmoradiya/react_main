import React from 'react';
import './SearchBox.css'

function SearchBox({search, searchInput}) {
  return (
    <div>
          <input type='text' name='name' id='name' className='search-box' placeholder='Search Monster...' value={search} onChange={searchInput} />
    </div>
  )
}

export default SearchBox